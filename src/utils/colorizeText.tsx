import Text from 'quarks/Text';

const colorizeText = (heading: string, backgroundIsDark: boolean) => {
  if (!heading) {
    return;
  }

  const colorizedArray = heading.split(/\{%|%\}/).map((segment, index) => {
    if (index % 2 === 1) {
      return (
        <Text key={segment} gradient={backgroundIsDark ? 'lightRainbow' : 'darkRainbowText'}>
          {segment}
        </Text>
      );
    }

    return segment;
  });

  return colorizedArray;
};

export default colorizeText;
