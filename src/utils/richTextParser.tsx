import { CommonNode, documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, Document, INLINES, MARKS } from '@contentful/rich-text-types';

import checkMark from 'assets/svg/check.svg';

import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Image from 'quarks/Image';
import Link from 'quarks/Link';
import Paragraph from 'quarks/Paragraph';
import Text from 'quarks/Text';

import ComponentButton from 'components/Button/ComponentButton';
import ComponentInputField from 'components/InputField/ComponentInputField';
import ComponentAccoladesRichText from 'components/RichText/AccoladesRichText';
import ButtonWrapper from 'components/RichText/ButtonWrapper';
import ComponentTestimonialRichText from 'components/RichText/TestimonialRichText';

import wrapRichTextElements from 'utils/richTextWrapper';

import type {
  IAsset,
  IComponentAccolades,
  IComponentButton,
  IComponentInputField,
  IComponentTestimonialCard,
} from 'graphql/types';
import type { ReactElement, ReactNode } from 'react';

type RichTextComponents = IComponentButton | IComponentInputField | IComponentAccolades | IComponentTestimonialCard;

export interface RichText {
  json: Document;
  links: {
    assets: {
      block: IAsset[];
    };
    entries: {
      block: Array<RichTextComponents>;
    };
  };
}

/**
 * @param content Rich Text JSON ;
 * @param isDark if true, renders button as dark version
 * @returns Rich Text
 */
const richTextParser = (content: RichText, isDark?: boolean) => {
  const { json, links } = content;
  const options = {
    renderText: (text: ReactNode) => text,
    renderMark: {
      [MARKS.BOLD]: (text: ReactNode) => <Text fontWeight="bold">{text}</Text>,
      [MARKS.ITALIC]: (text: ReactNode) => <Text fontStyle="italic">{text}</Text>,
      [MARKS.UNDERLINE]: (text: ReactNode) => <Text textDecoration="underline">{text}</Text>,
      [MARKS.CODE]: (text: ReactNode) => <Text>{text}</Text>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: CommonNode, children: ReactNode) => {
        // eslint-disable-next-line react/destructuring-assignment
        if (Array.isArray(children) && children[0].length === 0) {
          return null;
        }

        return <Paragraph>{children}</Paragraph>;
      },
      [BLOCKS.HEADING_1]: (node: CommonNode, children: ReactNode) => <Heading as="h1">{children}</Heading>,
      [BLOCKS.HEADING_2]: (node: CommonNode, children: ReactNode) => <Heading as="h2">{children}</Heading>,
      [BLOCKS.HEADING_3]: (node: CommonNode, children: ReactNode) => <Heading as="h3">{children}</Heading>,
      [BLOCKS.HEADING_4]: (node: CommonNode, children: ReactNode) => <Heading as="h4">{children}</Heading>,
      [BLOCKS.HEADING_5]: (node: CommonNode, children: ReactNode) => <Heading as="h5">{children}</Heading>,
      [BLOCKS.HEADING_6]: (node: CommonNode, children: ReactNode) => <Heading as="h6">{children}</Heading>,
      [BLOCKS.UL_LIST]: (node: CommonNode, children: ReactNode) => (
        <Flex
          as="ul"
          flexDirection="column"
          gap="0.5rem"
          css={`
            list-style-image: url(${checkMark});
          `}
        >
          {children}
        </Flex>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node: CommonNode) => {
        const {
          data: { target },
        } = node;
        const { id } = target.sys;
        const assets = links.assets.block;
        const nestedAsset = assets?.filter(asset => asset?.sys.id === id);
        const [asset] = nestedAsset;

        if (asset?.url) {
          return (
            <Image src={asset.url} alt={asset.title || ''} width={asset?.width || 0} height={asset?.height || 0} />
          );
        }
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node: CommonNode) => {
        const {
          data: { target },
        } = node;
        const { id } = target.sys;
        const entries = links.entries.block;
        const nestedEntry = entries?.filter(entry => entry?.sys.id === id);
        const [entry] = nestedEntry;

        switch (entry?.__typename) {
          case 'ComponentButton':
            return <ComponentButton isDark={isDark} {...entry} />;
          case 'ComponentInputField':
            return <ComponentInputField {...entry} />;
          case 'ComponentAccolades':
            return <ComponentAccoladesRichText {...entry} />;
          case 'ComponentTestimonialCard':
            return <ComponentTestimonialRichText {...entry} />;
          default:
            return null;
        }
      },
      [INLINES.HYPERLINK]: (node: CommonNode, children: ReactNode) => {
        const { data } = node;

        return <Link href={data.url}>{children}</Link>;
      },
    },
  };

  const componentWrappers = [
    {
      title: 'ComponentButton',
      componentWrapper: ButtonWrapper,
    },
  ];

  return wrapRichTextElements(documentToReactComponents(json, options) as ReactElement[], componentWrappers);
};

export default richTextParser;
