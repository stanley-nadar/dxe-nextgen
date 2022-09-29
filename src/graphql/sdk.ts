import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';

export const ComponentButtonFragmentDoc = gql`
  fragment componentButton on ComponentButton {
    sys {
      id
    }
    __typename
    internalName
    label
    labelIcon
    link
    hierarchy
    size
    startIcon
    endIcon
    rainbowHover
  }
`;
export const AssetFragmentDoc = gql`
  fragment asset on Asset {
    sys {
      id
    }
    __typename
    contentType
    title
    description
    url
    width
    height
  }
`;
export const ComponentImageFragmentDoc = gql`
  fragment componentImage on ComponentImage {
    sys {
      id
    }
    __typename
    internalName
    title
    alternateText
    bynderImage
    image {
      ...asset
    }
  }
  ${AssetFragmentDoc}
`;
export const MenuItemFragmentDoc = gql`
  fragment menuItem on MenuItem {
    sys {
      id
    }
    __typename
    internalName
    label
    description
    link
    image {
      ...componentImage
    }
    button {
      ...componentButton
    }
    blogFormat
    menuCollection {
      items {
        sys {
          id
        }
        __typename
        internalName
        label
        description
        link
        image {
          ...componentImage
        }
        button {
          ...componentButton
        }
        blogFormat
        menuCollection {
          items {
            sys {
              id
            }
            __typename
            internalName
            label
            description
            link
            blogFormat
            image {
              ...componentImage
            }
            button {
              ...componentButton
            }
          }
        }
      }
    }
  }
  ${ComponentImageFragmentDoc}
  ${ComponentButtonFragmentDoc}
`;
export const ComponentHeaderFragmentDoc = gql`
  fragment componentHeader on ComponentHeader {
    sys {
      id
      spaceId
      environmentId
    }
    internalName
    __typename
    contentfulMetadata {
      __typename
      tags {
        id
        name
      }
    }
    callToAction {
      ...componentButton
    }
    freshworksProduct
    callToActionMobile {
      ...componentButton
    }
    navigationLinksCollection {
      items {
        ...menuItem
      }
    }
    navigationLinksMobileCollection {
      items {
        ...menuItem
      }
    }
  }
  ${ComponentButtonFragmentDoc}
  ${MenuItemFragmentDoc}
`;
export const MetaSeoFragmentDoc = gql`
  fragment metaSeo on MetaSeo {
    sys {
      id
    }
    __typename
    internalName
    pageTitle
    pageDescription
    openGraphImage {
      ...asset
    }
    noIndex
    noFollow
  }
  ${AssetFragmentDoc}
`;
export const TemplatePageMetaDataFragmentDoc = gql`
  fragment templatePageMetaData on TemplatePage {
    sys {
      id
    }
    __typename
    internalName
    slug
    footerStyle
    headerStyle
    productNavigation {
      ...componentHeader
    }
    seoMetadata {
      ...metaSeo
    }
  }
  ${ComponentHeaderFragmentDoc}
  ${MetaSeoFragmentDoc}
`;
export const ComponentListItemFragmentDoc = gql`
  fragment componentListItem on ComponentListItem {
    sys {
      id
    }
    __typename
    internalName
    symbol
    title
    body {
      json
    }
  }
`;
export const ComponentAccordionFragmentDoc = gql`
  fragment componentAccordion on ComponentAccordion {
    sys {
      id
    }
    __typename
    internalName
    eyebrow
    heading
    variant
    body {
      json
      links {
        entries {
          block {
            ...componentButton
          }
        }
      }
    }
    accordionItemsCollection {
      items {
        ...componentListItem
      }
    }
  }
  ${ComponentButtonFragmentDoc}
  ${ComponentListItemFragmentDoc}
`;
export const ComponentAccoladesFragmentDoc = gql`
  fragment componentAccolades on ComponentAccolades {
    sys {
      id
    }
    __typename
    internalName
    heading
    eyebrow
    body {
      json
      links {
        entries {
          block {
            ...componentButton
          }
        }
      }
    }
    accoladesImageCollection {
      items {
        ...componentImage
      }
    }
  }
  ${ComponentButtonFragmentDoc}
  ${ComponentImageFragmentDoc}
`;
export const ComponentHeroFragmentDoc = gql`
  fragment componentHero on ComponentHero {
    sys {
      id
    }
    __typename
    internalName
    background
    eyebrow
    heading
    reference {
      ...componentImage
    }
    body {
      json
      links {
        entries {
          block {
            sys {
              id
            }
            ...componentButton
            ...componentAccolades
          }
        }
      }
    }
  }
  ${ComponentImageFragmentDoc}
  ${ComponentButtonFragmentDoc}
  ${ComponentAccoladesFragmentDoc}
`;
export const FormInputFieldFragmentDoc = gql`
  fragment formInputField on FormInputField {
    sys {
      id
    }
    __typename
    internalName
    type
    label
    placeholder
    helperText
    startIcon
    endIcon
    toolTipTitle
    disabled
    toolTipDescription
    identification
    valueOfField
  }
`;
export const ComponentInputFieldFragmentDoc = gql`
  fragment componentInputField on ComponentInputField {
    sys {
      id
    }
    __typename
    internalName
    inputField {
      ...formInputField
    }
    submitButton {
      ...componentButton
    }
  }
  ${FormInputFieldFragmentDoc}
  ${ComponentButtonFragmentDoc}
`;
export const ComponentHeadingFragmentDoc = gql`
  fragment componentHeading on ComponentHeading {
    sys {
      id
    }
    __typename
    internalName
    eyebrow
    background
    heading
    body {
      json
      links {
        entries {
          block {
            sys {
              id
            }
            ...componentButton
            ...componentInputField
          }
        }
      }
    }
  }
  ${ComponentButtonFragmentDoc}
  ${ComponentInputFieldFragmentDoc}
`;
export const ComponentOffsetGridCardFragmentDoc = gql`
  fragment componentOffsetGridCard on ComponentOffsetGridCard {
    sys {
      id
    }
    __typename
    internalName
    heading
    subheading
    link
  }
`;
export const ComponentOffsetGridFragmentDoc = gql`
  fragment componentOffsetGrid on ComponentOffsetGrid {
    sys {
      id
    }
    __typename
    internalName
    eyebrow
    heading
    reference {
      ...componentImage
    }
    offsetGridCardsCollection {
      items {
        ...componentOffsetGridCard
      }
    }
  }
  ${ComponentImageFragmentDoc}
  ${ComponentOffsetGridCardFragmentDoc}
`;
export const ComponentConversionPanelFragmentDoc = gql`
  fragment componentConversionPanel on ComponentConversionPanel {
    sys {
      id
    }
    __typename
    internalName
    contained
    background
    rainbowLine
    containedBackground
    eyebrow
    heading
    reference {
      ...componentImage
    }
    body {
      json
      links {
        entries {
          block {
            sys {
              id
            }
            ...componentButton
            ...componentInputField
          }
        }
      }
    }
  }
  ${ComponentImageFragmentDoc}
  ${ComponentButtonFragmentDoc}
  ${ComponentInputFieldFragmentDoc}
`;
export const EntityCompanyFragmentDoc = gql`
  fragment entityCompany on EntityCompany {
    sys {
      id
    }
    name
    companyLogoLight {
      ...componentImage
    }
    companyLogoDark {
      ...componentImage
    }
  }
  ${ComponentImageFragmentDoc}
`;
export const ComponentTrustBarFragmentDoc = gql`
  fragment componentTrustBar on ComponentTrustBar {
    sys {
      id
    }
    __typename
    internalName
    background
    variant
    heading
    companyCollection {
      items {
        ...entityCompany
      }
    }
  }
  ${EntityCompanyFragmentDoc}
`;
export const ComponentSwitchbackFragmentDoc = gql`
  fragment componentSwitchback on ComponentSwitchback {
    sys {
      id
    }
    __typename
    internalName
    eyebrow
    heading
    assetSide
    reference {
      ...componentImage
    }
    body {
      json
      links {
        entries {
          block {
            ...componentButton
          }
        }
        assets {
          block {
            ...asset
          }
        }
      }
    }
  }
  ${ComponentImageFragmentDoc}
  ${ComponentButtonFragmentDoc}
  ${AssetFragmentDoc}
`;
export const ComponentFullWidthSwitchbackFragmentDoc = gql`
  fragment componentFullWidthSwitchback on ComponentFullWidthSwitchback {
    sys {
      id
    }
    __typename
    internalName
    eyebrow
    heading
    assetSide
    reference {
      ...componentImage
    }
    body {
      json
      links {
        entries {
          block {
            ...componentButton
          }
        }
        assets {
          block {
            ...asset
          }
        }
      }
    }
  }
  ${ComponentImageFragmentDoc}
  ${ComponentButtonFragmentDoc}
  ${AssetFragmentDoc}
`;
export const TemplatePageComponents1FragmentDoc = gql`
  fragment templatePageComponents1 on TemplatePageComponentsItem {
    ...componentAccordion
    ...componentHero
    ...componentHeading
    ...componentOffsetGrid
    ...componentConversionPanel
    ...componentTrustBar
    ...componentSwitchback
    ...componentFullWidthSwitchback
  }
  ${ComponentAccordionFragmentDoc}
  ${ComponentHeroFragmentDoc}
  ${ComponentHeadingFragmentDoc}
  ${ComponentOffsetGridFragmentDoc}
  ${ComponentConversionPanelFragmentDoc}
  ${ComponentTrustBarFragmentDoc}
  ${ComponentSwitchbackFragmentDoc}
  ${ComponentFullWidthSwitchbackFragmentDoc}
`;
export const ComponentFeaturesCardFragmentDoc = gql`
  fragment componentFeaturesCard on ComponentFeaturesCard {
    sys {
      id
    }
    __typename
    internalName
    icon
    heading
    subheading
  }
`;
export const ComponentFeaturesFragmentDoc = gql`
  fragment componentFeatures on ComponentFeatures {
    sys {
      id
    }
    __typename
    internalName
    background
    eyebrow
    heading
    body {
      json
      links {
        entries {
          block {
            sys {
              id
            }
            ...componentButton
          }
        }
      }
    }
    imageSide
    callToAction {
      ...componentButton
    }
    featuresImage {
      ...componentImage
    }
    featureCardsCollection {
      items {
        ...componentFeaturesCard
      }
    }
  }
  ${ComponentButtonFragmentDoc}
  ${ComponentImageFragmentDoc}
  ${ComponentFeaturesCardFragmentDoc}
`;
export const EntityPersonFragmentDoc = gql`
  fragment entityPerson on EntityPerson {
    sys {
      id
    }
    fullName
    role
    company {
      ...entityCompany
    }
  }
  ${EntityCompanyFragmentDoc}
`;
export const ComponentTestimonialCardFragmentDoc = gql`
  fragment componentTestimonialCard on ComponentTestimonialCard {
    sys {
      id
    }
    __typename
    internalName
    fullStoryUrl
    background
    quote {
      json
    }
    person {
      ...entityPerson
    }
    image {
      ...componentImage
    }
  }
  ${EntityPersonFragmentDoc}
  ${ComponentImageFragmentDoc}
`;
export const ComponentTestimonialsFragmentDoc = gql`
  fragment componentTestimonials on ComponentTestimonials {
    sys {
      id
    }
    __typename
    internalName
    contained
    background
    headingComponent {
      ...componentHeading
    }
    testimonialCardsCollection {
      items {
        ...componentTestimonialCard
      }
    }
  }
  ${ComponentHeadingFragmentDoc}
  ${ComponentTestimonialCardFragmentDoc}
`;
export const ComponentListFragmentDoc = gql`
  fragment componentList on ComponentList {
    sys {
      id
    }
    __typename
    internalName
    listItemsCollection {
      items {
        ...componentListItem
      }
    }
  }
  ${ComponentListItemFragmentDoc}
`;
export const ComponentSwitcherItemFragmentDoc = gql`
  fragment componentSwitcherItem on ComponentSwitcherItem {
    internalName
    __typename
    sys {
      id
    }
    switcherItemTitle
    heading
    subheading
    switcherItemList {
      ...componentList
    }
    primaryButton {
      ...componentButton
    }
    secondaryButton {
      ...componentButton
    }
    switcherItemImage {
      ...componentImage
    }
  }
  ${ComponentListFragmentDoc}
  ${ComponentButtonFragmentDoc}
  ${ComponentImageFragmentDoc}
`;
export const ComponentSwitcherFragmentDoc = gql`
  fragment componentSwitcher on ComponentSwitcher {
    sys {
      id
    }
    __typename
    internalName
    background
    headingComponent {
      ...componentHeading
    }
    switcherItemsCollection(limit: 5) {
      items {
        ...componentSwitcherItem
      }
    }
  }
  ${ComponentHeadingFragmentDoc}
  ${ComponentSwitcherItemFragmentDoc}
`;
export const ComponentCaseStudyCardFragmentDoc = gql`
  fragment componentCaseStudyCard on ComponentCaseStudyCard {
    sys {
      id
    }
    __typename
    internalName
    caseStudyLinkButton {
      ...componentButton
    }
    caseStudyImage {
      ...componentImage
    }
    caseStudyStats {
      json
    }
    quote {
      json
    }
    person {
      ...entityPerson
    }
  }
  ${ComponentButtonFragmentDoc}
  ${ComponentImageFragmentDoc}
  ${EntityPersonFragmentDoc}
`;
export const ComponentCaseStudiesFragmentDoc = gql`
  fragment componentCaseStudies on ComponentCaseStudies {
    sys {
      id
    }
    __typename
    internalName
    background
    headingComponent {
      ...componentHeading
    }
    caseStudyCardsCollection {
      items {
        ...componentCaseStudyCard
      }
    }
  }
  ${ComponentHeadingFragmentDoc}
  ${ComponentCaseStudyCardFragmentDoc}
`;
export const ComponentVideoFragmentDoc = gql`
  fragment componentVideo on ComponentVideo {
    sys {
      id
    }
    __typename
    internalName
    bynderVideoAsset
    videoLength
    heading
    subheading
    ctaButton {
      ...componentButton
    }
  }
  ${ComponentButtonFragmentDoc}
`;
export const ComponentBasicCardFragmentDoc = gql`
  fragment componentBasicCard on ComponentBasicCard {
    sys {
      id
    }
    __typename
    internalName
    size
    variant
    category
    categoryColor
    heading
    body
    link
    longHeading
    date
    media {
      ...asset
    }
    mediaReference {
      ...componentImage
      ...componentVideo
    }
  }
  ${AssetFragmentDoc}
  ${ComponentImageFragmentDoc}
  ${ComponentVideoFragmentDoc}
`;
export const ComponentCardDeckFragmentDoc = gql`
  fragment componentCardDeck on ComponentCardDeck {
    sys {
      id
    }
    __typename
    internalName
    headingComponent {
      ...componentHeading
    }
    headingDirection
    centerHeadingContent
    cardsCollection {
      items {
        ...componentBasicCard
      }
    }
  }
  ${ComponentHeadingFragmentDoc}
  ${ComponentBasicCardFragmentDoc}
`;
export const ComponentSignUpFormFragmentDoc = gql`
  fragment componentSignUpForm on ComponentSignUpForm {
    sys {
      id
    }
    __typename
    internalName
    heading
    termsOfService
    privacyNotice
    dataCenterList
    pageRedirection
    firstName {
      ...formInputField
    }
    lastName {
      ...formInputField
    }
    company {
      ...formInputField
    }
    phoneNumber {
      ...formInputField
    }
    email {
      ...formInputField
    }
    hiddenFormsCollection {
      items {
        ...formInputField
      }
    }
  }
  ${FormInputFieldFragmentDoc}
`;
export const ComponentHeroFormFragmentDoc = gql`
  fragment componentHeroForm on ComponentHeroForm {
    sys {
      id
    }
    __typename
    internalName
    contentBackground
    eyebrow
    heading
    subheading
    heroFeatureList {
      ...componentList
    }
    mediaReference {
      ...componentImage
      ...componentTestimonialCard
      ...componentAccolades
      ...componentVideo
    }
    form {
      ...componentSignUpForm
    }
    trustbar {
      ...componentTrustBar
    }
  }
  ${ComponentListFragmentDoc}
  ${ComponentImageFragmentDoc}
  ${ComponentTestimonialCardFragmentDoc}
  ${ComponentAccoladesFragmentDoc}
  ${ComponentVideoFragmentDoc}
  ${ComponentSignUpFormFragmentDoc}
  ${ComponentTrustBarFragmentDoc}
`;
export const TemplatePageComponents2FragmentDoc = gql`
  fragment templatePageComponents2 on TemplatePageComponentsItem {
    ...componentFeatures
    ...componentTestimonials
    ...componentAccolades
    ...componentSwitcher
    ...componentCaseStudies
    ...componentCardDeck
    ...componentHeroForm
  }
  ${ComponentFeaturesFragmentDoc}
  ${ComponentTestimonialsFragmentDoc}
  ${ComponentAccoladesFragmentDoc}
  ${ComponentSwitcherFragmentDoc}
  ${ComponentCaseStudiesFragmentDoc}
  ${ComponentCardDeckFragmentDoc}
  ${ComponentHeroFormFragmentDoc}
`;
export const ComponentFooterFragmentDoc = gql`
  fragment componentFooter on ComponentFooter {
    sys {
      id
    }
    __typename
    internalName
    contactNumber
    contactEmail
    googlePlayUrl
    appStoreUrl
    legalText
    announcementCard {
      ...menuItem
    }
    menuItemsCollection {
      items {
        ...menuItem
      }
    }
    privacyTermsMenuCollection {
      items {
        ...menuItem
      }
    }
    company {
      ...entityCompany
    }
  }
  ${MenuItemFragmentDoc}
  ${EntityCompanyFragmentDoc}
`;
export const FormDropdownFieldFragmentDoc = gql`
  fragment formDropdownField on FormDropdownField {
    sys {
      id
    }
    __typename
    internalName
    label
    placeholder
    options
  }
`;
export const ComponentGenericFormFragmentDoc = gql`
  fragment componentGenericForm on ComponentGenericForm {
    sys {
      id
    }
    __typename
    internalName
    heading
    subheading
    bodyTextLabel
    callToAction {
      ...componentButton
    }
    dataCenterList
    hiddenFormsCollection {
      items {
        ...formInputField
      }
    }
    formsCollection {
      items {
        ...formInputField
        ...formDropdownField
      }
    }
    termsOfServicePage
  }
  ${ComponentButtonFragmentDoc}
  ${FormInputFieldFragmentDoc}
  ${FormDropdownFieldFragmentDoc}
`;
export const TemplatePageAllSlugsDocument = gql`
  query TemplatePageAllSlugs {
    templatePageCollection {
      items {
        sys {
          id
        }
        slug
      }
    }
  }
`;
export const TemplatePage1Document = gql`
  query TemplatePage1($slug: String, $locale: String) {
    templatePageCollection(where: { slug: $slug }, locale: $locale, limit: 1) {
      items {
        ...templatePageMetaData
        componentsCollection {
          items {
            ...templatePageComponents1
          }
        }
      }
    }
    componentFooter(id: "1xrFKkB0Crq2SPtytBrgMA", locale: $locale) {
      ...componentFooter
    }
  }
  ${TemplatePageMetaDataFragmentDoc}
  ${TemplatePageComponents1FragmentDoc}
  ${ComponentFooterFragmentDoc}
`;
export const TemplatePage2Document = gql`
  query TemplatePage2($slug: String, $locale: String) {
    templatePageCollection(where: { slug: $slug }, locale: $locale, limit: 1) {
      items {
        componentsCollection {
          items {
            ...templatePageComponents2
          }
        }
      }
    }
  }
  ${TemplatePageComponents2FragmentDoc}
`;
export const ComponentHeaderDocument = gql`
  query ComponentHeader($locale: String) {
    componentHeader(id: "NaKBZ9lFiAkLZzL2jQm45", locale: $locale) {
      ...componentHeader
    }
  }
  ${ComponentHeaderFragmentDoc}
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export const getSdk = (client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) => ({
  TemplatePageAllSlugs: (
    variables?: TemplatePageAllSlugsQueryVariables,
    requestHeaders?: Dom.RequestInit['headers'],
  ): Promise<TemplatePageAllSlugsQuery> =>
    withWrapper(
      wrappedRequestHeaders =>
        client.request<TemplatePageAllSlugsQuery>(TemplatePageAllSlugsDocument, variables, {
          ...requestHeaders,
          ...wrappedRequestHeaders,
        }),
      'TemplatePageAllSlugs',
      'query',
    ),
  TemplatePage1: (
    variables?: TemplatePage1QueryVariables,
    requestHeaders?: Dom.RequestInit['headers'],
  ): Promise<TemplatePage1Query> =>
    withWrapper(
      wrappedRequestHeaders =>
        client.request<TemplatePage1Query>(TemplatePage1Document, variables, {
          ...requestHeaders,
          ...wrappedRequestHeaders,
        }),
      'TemplatePage1',
      'query',
    ),
  TemplatePage2: (
    variables?: TemplatePage2QueryVariables,
    requestHeaders?: Dom.RequestInit['headers'],
  ): Promise<TemplatePage2Query> =>
    withWrapper(
      wrappedRequestHeaders =>
        client.request<TemplatePage2Query>(TemplatePage2Document, variables, {
          ...requestHeaders,
          ...wrappedRequestHeaders,
        }),
      'TemplatePage2',
      'query',
    ),
  ComponentHeader: (
    variables?: ComponentHeaderQueryVariables,
    requestHeaders?: Dom.RequestInit['headers'],
  ): Promise<ComponentHeaderQuery> =>
    withWrapper(
      wrappedRequestHeaders =>
        client.request<ComponentHeaderQuery>(ComponentHeaderDocument, variables, {
          ...requestHeaders,
          ...wrappedRequestHeaders,
        }),
      'ComponentHeader',
      'query',
    ),
});
export type Sdk = ReturnType<typeof getSdk>;
