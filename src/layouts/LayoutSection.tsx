import { ITemplatePageComponentsItem } from 'graphql/types';

import Section from 'molecules/Section/Section';

import ComponentAccolades from 'components/Accolades/Accolades';
import ComponentAccordion from 'components/Accordion/Accordion';
import ComponentCardDeck from 'components/CardDeck/CardDeck';
import CaseStudies from 'components/CaseStudies/CaseStudies';
import ConversionPanel from 'components/ConversionPanel/ConversionPanel';
import ComponentFeatures from 'components/Features/Features';
import ComponentHeading from 'components/Heading/Heading';
import ComponentHero from 'components/Hero/Hero';
import ComponentHeroForm from 'components/Hero/HeroForm/HeroForm';
import ComponentOffsetGrid from 'components/OffsetGrid/OffsetGrid';
import ComponentFullWidthSwitchback from 'components/Switchback/FullWidthSwitchback';
import ComponentSwitchback from 'components/Switchback/Switchback';
import ComponentSwitcher from 'components/Switcher/Switcher';
import ComponentTestimonials from 'components/Testimonials/Testimonials';
import ComponentTrustBar from 'components/TrustBar/TrustBar';

import { getBackground } from 'utils/functions';

import type { FC } from 'react';

type LayoutSectionProps = ITemplatePageComponentsItem & {
  windowSize: {
    width: number;
    height: number;
  };
};

const LayoutSection: FC<LayoutSectionProps> = ({ windowSize, ...component }) => {
  const {
    __typename,
    sys: { id },
    internalName,
  } = component;

  const { background: backgroundName } = 'background' in component ? component : { background: 'White' };

  const { backgroundPath, backgroundGradient, backgroundIsDark, backgroundColor } = getBackground(
    __typename,
    backgroundName,
    windowSize.width,
  );

  const componentGenerator = (sectionComponent: ITemplatePageComponentsItem) => {
    switch (sectionComponent?.__typename) {
      case 'ComponentHero':
        return (
          <ComponentHero {...sectionComponent} backgroundIsDark={backgroundIsDark} key={sectionComponent?.sys.id} />
        );
      case 'ComponentConversionPanel':
        return (
          <ConversionPanel
            {...sectionComponent}
            windowSize={windowSize}
            backgroundIsDark={backgroundIsDark}
            key={sectionComponent?.sys.id}
          />
        );
      case 'ComponentHeading':
        return (
          <ComponentHeading {...sectionComponent} backgroundIsDark={backgroundIsDark} key={sectionComponent?.sys.id} />
        );
      case 'ComponentTrustBar':
        return (
          <ComponentTrustBar
            {...sectionComponent}
            backgroundIsDark={backgroundIsDark}
            key={sectionComponent?.sys.id}
            windowWidth={windowSize.width}
          />
        );
      case 'ComponentOffsetGrid':
        return <ComponentOffsetGrid {...sectionComponent} key={sectionComponent?.sys.id} />;
      case 'ComponentAccordion':
        return <ComponentAccordion {...sectionComponent} key={sectionComponent?.sys.id} />;
      case 'ComponentSwitchback':
        return <ComponentSwitchback {...sectionComponent} key={sectionComponent?.sys.id} />;
      case 'ComponentFullWidthSwitchback':
        return <ComponentFullWidthSwitchback {...sectionComponent} key={sectionComponent?.sys.id} />;
      case 'ComponentFeatures':
        return (
          <ComponentFeatures {...sectionComponent} backgroundIsDark={backgroundIsDark} key={sectionComponent?.sys.id} />
        );
      case 'ComponentCardDeck':
        return <ComponentCardDeck {...sectionComponent} key={sectionComponent?.sys.id} />;
      case 'ComponentCaseStudies':
        return <CaseStudies {...sectionComponent} backgroundColor={backgroundColor} key={sectionComponent?.sys.id} />;
      case 'ComponentSwitcher':
        return (
          <ComponentSwitcher {...sectionComponent} backgroundColor={backgroundColor} key={sectionComponent?.sys.id} />
        );
      case 'ComponentAccolades':
        return <ComponentAccolades {...sectionComponent} key={sectionComponent?.sys.id} />;
      case 'ComponentTestimonials':
        return (
          <ComponentTestimonials {...sectionComponent} key={sectionComponent?.sys.id} screenWidth={windowSize.width} />
        );
      case 'ComponentHeroForm':
        return (
          <ComponentHeroForm {...sectionComponent} key={sectionComponent?.sys.id} screenWidth={windowSize.width} />
        );
      default:
        console.warn(`${sectionComponent?.__typename} is incorrect or missing from componentGenerator`);

        return null;
    }
  };

  return (
    <Section
      id={id}
      internalName={internalName}
      backgroundPath={backgroundPath}
      backgroundGradient={backgroundGradient}
      backgroundPriority={__typename === 'ComponentHero'}
      backgroundSectionColor={backgroundColor}
    >
      {component && componentGenerator(component)}
    </Section>
  );
};

export default LayoutSection;
