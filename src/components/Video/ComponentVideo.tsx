import { FC, KeyboardEvent, useEffect, useRef, useState } from 'react';
import { Circle, Maximize, Minimize, Pause, Play, Volume2, VolumeX, X } from 'react-feather';

import color from 'atoms/colors/colors';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Image from 'quarks/Image';
import Text from 'quarks/Text';
import type { BasicProps } from 'quarks/interpolations/basic';

import Modal from 'molecules/Modal/Modal';

import ComponentButton from 'components/Button/ComponentButton';

import type { IComponentVideo } from 'graphql/types';

type ComponentVideoProps = BasicProps & Omit<IComponentVideo, 'sys' | 'contentfulMetadata'>;

const ComponentVideo: FC<ComponentVideoProps> = ({
  bynderVideoAsset,
  videoLength,
  heading,
  subheading,
  ctaButton,
  ...props
}) => {
  const [bynderVideo] = bynderVideoAsset;

  const videoRef = useRef<HTMLVideoElement>(bynderVideoAsset.url);
  const fullScreenPlayer = useRef<HTMLDivElement>(null);

  const [previewMode, setPreviewMode] = useState(true);
  const [isModalOpen, setModal] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [clickedTime, setClickedTime] = useState<number | null>(0);
  const [volumeLevel, setVolumeLevel] = useState(1);
  const [bufferState, setBufferState] = useState(0);
  const [isFullScreen, setFullScreen] = useState(false);

  const { current } = videoRef;
  const currentVideoPercentage = (currentTime / current?.duration) * 100;
  const currentBufferedPercentage = (bufferState / current?.duration) * 100;

  const iconProps = { stroke: 'white', fill: 'white', width: '18px', cursor: 'pointer', tabIndex: 0 };

  useEffect(() => {
    const videoDetails = videoRef.current;
    const videoBufferProgress = videoDetails?.buffered;

    setDuration(videoDetails?.duration);

    if (videoBufferProgress?.length > 0) {
      setBufferState(videoBufferProgress.end(0));
    }

    const checkIfClickedOutside = (e: Event): void => {
      if (fullScreenPlayer?.current && fullScreenPlayer?.current.contains(e.target as HTMLDivElement)) {
        playing ? videoDetails?.play() : videoDetails?.pause();
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    const setVideoTime = () => setCurrentTime(videoDetails.currentTime);
    const toggleFullScreenState = () => setFullScreen(!isFullScreen);
    videoDetails?.addEventListener('timeupdate', setVideoTime);
    fullScreenPlayer.current?.addEventListener('fullscreenchange', toggleFullScreenState);

    if (clickedTime && clickedTime !== currentTime) {
      videoDetails.currentTime = clickedTime;
      setClickedTime(null);
    }

    return () => {
      videoDetails?.removeEventListener('timeupdate', setVideoTime);
      fullScreenPlayer.current?.removeEventListener('fullscreenchange', toggleFullScreenState);
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [currentTime, isFullScreen, playing]);

  const convertToPlayTime = (number: number) => {
    let videoDurationLength = Math.floor(number / 60) + ':' + ('0' + Math.floor(number % 60)).slice(-2);
    videoDurationLength = videoDurationLength === 'NaN:aN' ? '0:00' : videoDurationLength;

    return videoDurationLength;
  };

  const handleVolume = () => {
    if (volumeLevel === 0) {
      current.volume = 1;

      return setVolumeLevel(1);
    }
    current.volume = 0;
    setVolumeLevel(0);
  };

  const handlePlayback = () => {
    if (previewMode) {
      setPlaying(true);
      setPreviewMode(false);
    } else if (playing) {
      current?.pause();
      setPlaying(false);
    } else if (!playing) {
      current?.play();
      setPlaying(true);
    }
  };

  const handleKeyDown = (functionCall: () => void, e: KeyboardEvent<SVGElement>) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      functionCall();
    }
  };

  const handleKeyboardTimelineControls = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      setClickedTime(currentTime - 5);
    }
    if (e.key === 'ArrowRight') {
      setClickedTime(currentTime + 5);
    }
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      handlePlayback();
    }
  };

  const handleFullScreen = () => {
    if (document.fullscreenElement === null) {
      fullScreenPlayer.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const calcClickedTime = (e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent> | MouseEvent) => {
    const progressBar = e.target as HTMLElement;
    const progressbarWidth = progressBar.offsetWidth;
    const clickPositionInBar = e.clientX - progressBar.getBoundingClientRect().x;
    const timePerPixel = duration / progressbarWidth;

    return timePerPixel * clickPositionInBar;
  };

  const handleTimelineClick = (e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    setClickedTime(calcClickedTime(e));
    setPlaying(true);
  };

  const closeModal = () => {
    setCurrentTime(0);
    setModal(false);
    setPlaying(false);
    setPreviewMode(true);
  };

  return (
    <Container>
      <Container
        height="220px"
        borderRadius="22px"
        cursor="pointer"
        position="relative"
        onClick={() => setModal(true)}
        xs={{ height: '290px' }}
        sm={{ height: '350px' }}
        md={{ height: '433px', borderRadius: '20px' }}
        lg={{ height: '400px' }}
        xxl={{ height: '810px' }}
        overflowY="hidden"
        {...props}
      >
        <Container zIndex={1}>
          <Image src={bynderVideo?.src} alt="test" layout="fill" objectFit="cover" />
        </Container>
        <Flex
          position="absolute"
          alignItems="center"
          borderRadius="70px"
          backgroundColor="common-white"
          gap="12px"
          paddingX={24}
          paddingY={12}
          top="8px"
          right="8px"
          lg={{ top: '16px', right: '16px' }}
          xl={{ top: '24px', right: '24px', paddingX: 32, paddingY: 16 }}
          xxl={{ top: '32px', right: '32px', paddingX: 40, paddingY: 20 }}
        >
          <Text fontSize={16} fontWeight="bold" md={{ fontSize: 20 }}>
            {videoLength}
          </Text>
          <Play fill="filled" width={22} />
        </Flex>
      </Container>
      <Modal open={isModalOpen} onClose={() => closeModal()}>
        <Flex marginX="auto" justifyContent="end" paddingBottom={12} maxWidth="90%" lg={{ maxWidth: '970px' }}>
          <X
            color={color.common.white}
            onClick={() => closeModal()}
            size={32}
            onKeyDown={e => handleKeyDown(closeModal, e)}
            {...iconProps}
          />
        </Flex>
        <Flex flexDirection="column" gap="24px" width="90%" lg={{ maxWidth: '970px' }} marginX="auto">
          <Flex
            position="relative"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            ref={fullScreenPlayer}
          >
            <Container
              width="100%"
              css={`
                video {
                  border-radius: 22px;
                  cursor: 'pointer';
                }
              `}
            >
              <video
                id="bynder-video"
                width="100%"
                ref={videoRef}
                src={bynderVideo.original}
                poster={bynderVideo.src}
                onClick={() => handlePlayback()}
                autoPlay={true}
                onPlaying={previewMode ? () => handlePlayback() : undefined}
              />
            </Container>
            <Flex
              position="absolute"
              zIndex={10}
              bottom={0}
              height="40px"
              width="100%"
              borderRadius={isFullScreen ? '0px' : '0px 0px 22px 22px'}
              css={`
                background-color: #2b394b;
              `}
              md={{ height: '48px' }}
            >
              <Flex
                paddingLeft={16}
                width="100%"
                justifyContent="space-around"
                alignSelf="center"
                alignItems="stretch"
                md={{ paddingLeft: 24 }}
              >
                {playing ? (
                  <Pause
                    onClick={() => handlePlayback()}
                    onKeyDown={e => handleKeyDown(handlePlayback, e)}
                    aria-label="Pause"
                    {...iconProps}
                  />
                ) : (
                  <Play
                    onClick={() => handlePlayback()}
                    onKeyDown={e => handleKeyDown(handlePlayback, e)}
                    aria-label="Play"
                    {...iconProps}
                  />
                )}
                <Flex paddingLeft={20} width="100%" gap="4px">
                  <Container alignSelf="center" fontSize={10} textColor="common-white" width="75px">
                    <Text>{convertToPlayTime(currentTime)}</Text>
                    <Text>/ {convertToPlayTime(duration)}</Text>
                  </Container>
                  <Flex
                    alignSelf="center"
                    onMouseDown={e => handleTimelineClick(e)}
                    position="relative"
                    css={`
                      background-color: #1a2431;
                    `}
                    borderRadius="5px"
                    height="4px"
                    width="inherit"
                    tabIndex={0}
                    cursor="pointer"
                    onKeyDown={e => handleKeyboardTimelineControls(e)}
                    after={{
                      content: '',
                      position: 'absolute',
                      height: '4px',
                      backgroundColor: 'gray-100',
                      width: `${currentBufferedPercentage}%`,
                    }}
                  >
                    <Container
                      css={`
                        background-color: #418fde;
                      `}
                      borderRadius="10px"
                      position="absolute"
                      height="4px"
                      zIndex={20}
                      width={`${currentVideoPercentage}%`}
                    >
                      <Container height="8px" position="absolute" right={0}>
                        <Circle
                          display="block"
                          width="8px"
                          height="8px"
                          stroke="white"
                          fill="white"
                          css={`
                            margin-top: -2px;
                            margin-left: -1px;
                          `}
                        />
                      </Container>
                    </Container>
                  </Flex>
                </Flex>
                <Flex alignItems="center" paddingX={20} gap="14px" md={{ gap: '17px' }}>
                  {volumeLevel === 0 ? (
                    <VolumeX
                      onClick={() => {
                        handleVolume();
                      }}
                      onKeyDown={e => handleKeyDown(handleVolume, e)}
                      aria-label="enable volume"
                      {...iconProps}
                    />
                  ) : (
                    <Volume2
                      onClick={() => {
                        handleVolume();
                      }}
                      onKeyDown={e => handleKeyDown(handleVolume, e)}
                      aria-label="mute"
                      {...iconProps}
                    />
                  )}
                  {isFullScreen ? (
                    <Minimize
                      onClick={() => handleFullScreen()}
                      onKeyDown={e => handleKeyDown(handleFullScreen, e)}
                      aria-label="minimize"
                      {...iconProps}
                    />
                  ) : (
                    <Maximize
                      onClick={() => handleFullScreen()}
                      onKeyDown={e => handleKeyDown(handleFullScreen, e)}
                      aria-label="fullscreen"
                      {...iconProps}
                    />
                  )}
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            flexDirection="column"
            paddingLeft={2}
            gap="24px"
            justifyContent="space-between"
            textColor="common-white"
            opacity={0}
            css={`
              animation: fadeIn 1s ease 0.2s forwards;
              @keyframes fadeIn {
                0% {
                  opacity: 0;
                }
                100% {
                  opacity: 1;
                }
              }
            `}
            md={{ flexDirection: 'row' }}
          >
            <Flex flexDirection="column" gap="8px" md={{ maxWidth: '70%' }}>
              {heading && (
                <Text textStyle="xl" fontSize={20} fontWeight="bold" md={{ fontSize: 24 }}>
                  {heading}
                </Text>
              )}
              {subheading && <Text>{subheading}</Text>}
            </Flex>
            {ctaButton && (
              <Container>
                <ComponentButton {...ctaButton} width="100%" md={{ width: 'auto' }} />
              </Container>
            )}
          </Flex>
        </Flex>
      </Modal>
    </Container>
  );
};

export default ComponentVideo;
