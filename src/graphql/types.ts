export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Dimension: any;
  HexColor: any;
  JSON: any;
  Quality: any;
}

export interface IAsset {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: IContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<IAssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: ISys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
}

export interface IAssetContentTypeArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IAssetDescriptionArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IAssetFileNameArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IAssetHeightArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IAssetLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IAssetSizeArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IAssetTitleArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IAssetUrlArgs {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<IImageTransformOptions>;
}

export interface IAssetWidthArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IAssetCollection {
  __typename?: 'AssetCollection';
  items: Array<Maybe<IAsset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IAssetFilter {
  AND?: InputMaybe<Array<InputMaybe<IAssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IAssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<ISysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
}

export interface IAssetLinkingCollections {
  __typename?: 'AssetLinkingCollections';
  componentBasicCardCollection?: Maybe<IComponentBasicCardCollection>;
  componentImageCollection?: Maybe<IComponentImageCollection>;
  componentOffsetGridCollection?: Maybe<IComponentOffsetGridCollection>;
  entityCompanyCollection?: Maybe<IEntityCompanyCollection>;
  entryCollection?: Maybe<IEntryCollection>;
  metaSeoCollection?: Maybe<IMetaSeoCollection>;
}

export interface IAssetLinkingCollectionsComponentBasicCardCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IAssetLinkingCollectionsComponentImageCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IAssetLinkingCollectionsComponentOffsetGridCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IAssetLinkingCollectionsEntityCompanyCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IAssetLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IAssetLinkingCollectionsMetaSeoCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export enum IAssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
}

export interface IComponentAccolades extends IEntry {
  __typename?: 'ComponentAccolades';
  accoladesImageCollection?: Maybe<IComponentAccoladesAccoladesImageCollection>;
  body?: Maybe<IComponentAccoladesBody>;
  contentfulMetadata: IContentfulMetadata;
  eyebrow?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<IComponentAccoladesLinkingCollections>;
  sys: ISys;
}

export interface IComponentAccoladesAccoladesImageCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentAccoladesBodyArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentAccoladesEyebrowArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentAccoladesHeadingArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentAccoladesInternalNameArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentAccoladesLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IComponentAccoladesAccoladesImageCollection {
  __typename?: 'ComponentAccoladesAccoladesImageCollection';
  items: Array<Maybe<IComponentImage>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IComponentAccoladesBody {
  __typename?: 'ComponentAccoladesBody';
  json: Scalars['JSON'];
  links: IComponentAccoladesBodyLinks;
}

export interface IComponentAccoladesBodyAssets {
  __typename?: 'ComponentAccoladesBodyAssets';
  block: Array<Maybe<IAsset>>;
  hyperlink: Array<Maybe<IAsset>>;
}

export interface IComponentAccoladesBodyEntries {
  __typename?: 'ComponentAccoladesBodyEntries';
  block: Array<Maybe<IEntry>>;
  hyperlink: Array<Maybe<IEntry>>;
  inline: Array<Maybe<IEntry>>;
}

export interface IComponentAccoladesBodyLinks {
  __typename?: 'ComponentAccoladesBodyLinks';
  assets: IComponentAccoladesBodyAssets;
  entries: IComponentAccoladesBodyEntries;
}

export interface IComponentAccoladesCollection {
  __typename?: 'ComponentAccoladesCollection';
  items: Array<Maybe<IComponentAccolades>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IComponentAccoladesFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentAccoladesFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentAccoladesFilter>>>;
  accoladesImageCollection_exists?: InputMaybe<Scalars['Boolean']>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  eyebrow?: InputMaybe<Scalars['String']>;
  eyebrow_contains?: InputMaybe<Scalars['String']>;
  eyebrow_exists?: InputMaybe<Scalars['Boolean']>;
  eyebrow_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  eyebrow_not?: InputMaybe<Scalars['String']>;
  eyebrow_not_contains?: InputMaybe<Scalars['String']>;
  eyebrow_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading?: InputMaybe<Scalars['String']>;
  heading_contains?: InputMaybe<Scalars['String']>;
  heading_exists?: InputMaybe<Scalars['Boolean']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading_not?: InputMaybe<Scalars['String']>;
  heading_not_contains?: InputMaybe<Scalars['String']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<ISysFilter>;
}

export interface IComponentAccoladesLinkingCollections {
  __typename?: 'ComponentAccoladesLinkingCollections';
  componentHeroFormCollection?: Maybe<IComponentHeroFormCollection>;
  entryCollection?: Maybe<IEntryCollection>;
  templatePageCollection?: Maybe<ITemplatePageCollection>;
}

export interface IComponentAccoladesLinkingCollectionsComponentHeroFormCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentAccoladesLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentAccoladesLinkingCollectionsTemplatePageCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export enum IComponentAccoladesOrder {
  EyebrowAsc = 'eyebrow_ASC',
  EyebrowDesc = 'eyebrow_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export interface IComponentAccordion extends IEntry {
  __typename?: 'ComponentAccordion';
  accordionItemsCollection?: Maybe<IComponentAccordionAccordionItemsCollection>;
  body?: Maybe<IComponentAccordionBody>;
  contentfulMetadata: IContentfulMetadata;
  eyebrow?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<IComponentAccordionLinkingCollections>;
  sys: ISys;
  variant?: Maybe<Scalars['String']>;
}

export interface IComponentAccordionAccordionItemsCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentAccordionBodyArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentAccordionEyebrowArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentAccordionHeadingArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentAccordionInternalNameArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentAccordionLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IComponentAccordionVariantArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentAccordionAccordionItemsCollection {
  __typename?: 'ComponentAccordionAccordionItemsCollection';
  items: Array<Maybe<IComponentListItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IComponentAccordionBody {
  __typename?: 'ComponentAccordionBody';
  json: Scalars['JSON'];
  links: IComponentAccordionBodyLinks;
}

export interface IComponentAccordionBodyAssets {
  __typename?: 'ComponentAccordionBodyAssets';
  block: Array<Maybe<IAsset>>;
  hyperlink: Array<Maybe<IAsset>>;
}

export interface IComponentAccordionBodyEntries {
  __typename?: 'ComponentAccordionBodyEntries';
  block: Array<Maybe<IEntry>>;
  hyperlink: Array<Maybe<IEntry>>;
  inline: Array<Maybe<IEntry>>;
}

export interface IComponentAccordionBodyLinks {
  __typename?: 'ComponentAccordionBodyLinks';
  assets: IComponentAccordionBodyAssets;
  entries: IComponentAccordionBodyEntries;
}

export interface IComponentAccordionCollection {
  __typename?: 'ComponentAccordionCollection';
  items: Array<Maybe<IComponentAccordion>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IComponentAccordionFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentAccordionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentAccordionFilter>>>;
  accordionItemsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  eyebrow?: InputMaybe<Scalars['String']>;
  eyebrow_contains?: InputMaybe<Scalars['String']>;
  eyebrow_exists?: InputMaybe<Scalars['Boolean']>;
  eyebrow_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  eyebrow_not?: InputMaybe<Scalars['String']>;
  eyebrow_not_contains?: InputMaybe<Scalars['String']>;
  eyebrow_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading?: InputMaybe<Scalars['String']>;
  heading_contains?: InputMaybe<Scalars['String']>;
  heading_exists?: InputMaybe<Scalars['Boolean']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading_not?: InputMaybe<Scalars['String']>;
  heading_not_contains?: InputMaybe<Scalars['String']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<ISysFilter>;
  variant?: InputMaybe<Scalars['String']>;
  variant_contains?: InputMaybe<Scalars['String']>;
  variant_exists?: InputMaybe<Scalars['Boolean']>;
  variant_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  variant_not?: InputMaybe<Scalars['String']>;
  variant_not_contains?: InputMaybe<Scalars['String']>;
  variant_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IComponentAccordionLinkingCollections {
  __typename?: 'ComponentAccordionLinkingCollections';
  entryCollection?: Maybe<IEntryCollection>;
  templatePageCollection?: Maybe<ITemplatePageCollection>;
}

export interface IComponentAccordionLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentAccordionLinkingCollectionsTemplatePageCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export enum IComponentAccordionOrder {
  EyebrowAsc = 'eyebrow_ASC',
  EyebrowDesc = 'eyebrow_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC',
}

export interface IComponentBasicCard extends IEntry {
  __typename?: 'ComponentBasicCard';
  body?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  categoryColor?: Maybe<Scalars['String']>;
  contentfulMetadata: IContentfulMetadata;
  date?: Maybe<Scalars['DateTime']>;
  heading?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<IComponentBasicCardLinkingCollections>;
  longHeading?: Maybe<Scalars['String']>;
  media?: Maybe<IAsset>;
  mediaReference?: Maybe<IComponentBasicCardMediaReference>;
  size?: Maybe<Scalars['String']>;
  sys: ISys;
  variant?: Maybe<Scalars['String']>;
}

export interface IComponentBasicCardBodyArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentBasicCardCategoryArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentBasicCardCategoryColorArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentBasicCardDateArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentBasicCardHeadingArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentBasicCardInternalNameArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentBasicCardLinkArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentBasicCardLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IComponentBasicCardLongHeadingArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentBasicCardMediaArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentBasicCardMediaReferenceArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentBasicCardSizeArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentBasicCardVariantArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentBasicCardCollection {
  __typename?: 'ComponentBasicCardCollection';
  items: Array<Maybe<IComponentBasicCard>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IComponentBasicCardFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentBasicCardFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentBasicCardFilter>>>;
  body?: InputMaybe<Scalars['String']>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  body_not?: InputMaybe<Scalars['String']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  body_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  category?: InputMaybe<Scalars['String']>;
  categoryColor?: InputMaybe<Scalars['String']>;
  categoryColor_contains?: InputMaybe<Scalars['String']>;
  categoryColor_exists?: InputMaybe<Scalars['Boolean']>;
  categoryColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categoryColor_not?: InputMaybe<Scalars['String']>;
  categoryColor_not_contains?: InputMaybe<Scalars['String']>;
  categoryColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  category_contains?: InputMaybe<Scalars['String']>;
  category_exists?: InputMaybe<Scalars['Boolean']>;
  category_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  category_not?: InputMaybe<Scalars['String']>;
  category_not_contains?: InputMaybe<Scalars['String']>;
  category_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  date?: InputMaybe<Scalars['DateTime']>;
  date_exists?: InputMaybe<Scalars['Boolean']>;
  date_gt?: InputMaybe<Scalars['DateTime']>;
  date_gte?: InputMaybe<Scalars['DateTime']>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  date_lt?: InputMaybe<Scalars['DateTime']>;
  date_lte?: InputMaybe<Scalars['DateTime']>;
  date_not?: InputMaybe<Scalars['DateTime']>;
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  heading?: InputMaybe<Scalars['String']>;
  heading_contains?: InputMaybe<Scalars['String']>;
  heading_exists?: InputMaybe<Scalars['Boolean']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading_not?: InputMaybe<Scalars['String']>;
  heading_not_contains?: InputMaybe<Scalars['String']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link?: InputMaybe<Scalars['String']>;
  link_contains?: InputMaybe<Scalars['String']>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link_not?: InputMaybe<Scalars['String']>;
  link_not_contains?: InputMaybe<Scalars['String']>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  longHeading?: InputMaybe<Scalars['String']>;
  longHeading_contains?: InputMaybe<Scalars['String']>;
  longHeading_exists?: InputMaybe<Scalars['Boolean']>;
  longHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  longHeading_not?: InputMaybe<Scalars['String']>;
  longHeading_not_contains?: InputMaybe<Scalars['String']>;
  longHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mediaReference_exists?: InputMaybe<Scalars['Boolean']>;
  media_exists?: InputMaybe<Scalars['Boolean']>;
  size?: InputMaybe<Scalars['String']>;
  size_contains?: InputMaybe<Scalars['String']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  size_not?: InputMaybe<Scalars['String']>;
  size_not_contains?: InputMaybe<Scalars['String']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<ISysFilter>;
  variant?: InputMaybe<Scalars['String']>;
  variant_contains?: InputMaybe<Scalars['String']>;
  variant_exists?: InputMaybe<Scalars['Boolean']>;
  variant_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  variant_not?: InputMaybe<Scalars['String']>;
  variant_not_contains?: InputMaybe<Scalars['String']>;
  variant_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IComponentBasicCardLinkingCollections {
  __typename?: 'ComponentBasicCardLinkingCollections';
  componentCardDeckCollection?: Maybe<IComponentCardDeckCollection>;
  entryCollection?: Maybe<IEntryCollection>;
}

export interface IComponentBasicCardLinkingCollectionsComponentCardDeckCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentBasicCardLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export type IComponentBasicCardMediaReference = IComponentImage | IComponentVideo;

export enum IComponentBasicCardOrder {
  BodyAsc = 'body_ASC',
  BodyDesc = 'body_DESC',
  CategoryColorAsc = 'categoryColor_ASC',
  CategoryColorDesc = 'categoryColor_DESC',
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  LongHeadingAsc = 'longHeading_ASC',
  LongHeadingDesc = 'longHeading_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC',
}

export interface IComponentButton extends IEntry {
  __typename?: 'ComponentButton';
  contentfulMetadata: IContentfulMetadata;
  endIcon?: Maybe<Scalars['String']>;
  hierarchy?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  labelIcon?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<IComponentButtonLinkingCollections>;
  rainbowHover?: Maybe<Scalars['Boolean']>;
  size?: Maybe<Scalars['String']>;
  startIcon?: Maybe<Scalars['String']>;
  sys: ISys;
}

export interface IComponentButtonEndIconArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentButtonHierarchyArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentButtonInternalNameArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentButtonLabelArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentButtonLabelIconArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentButtonLinkArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentButtonLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IComponentButtonRainbowHoverArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentButtonSizeArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentButtonStartIconArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentButtonCollection {
  __typename?: 'ComponentButtonCollection';
  items: Array<Maybe<IComponentButton>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IComponentButtonFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentButtonFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentButtonFilter>>>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  endIcon?: InputMaybe<Scalars['String']>;
  endIcon_contains?: InputMaybe<Scalars['String']>;
  endIcon_exists?: InputMaybe<Scalars['Boolean']>;
  endIcon_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  endIcon_not?: InputMaybe<Scalars['String']>;
  endIcon_not_contains?: InputMaybe<Scalars['String']>;
  endIcon_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hierarchy?: InputMaybe<Scalars['String']>;
  hierarchy_contains?: InputMaybe<Scalars['String']>;
  hierarchy_exists?: InputMaybe<Scalars['Boolean']>;
  hierarchy_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hierarchy_not?: InputMaybe<Scalars['String']>;
  hierarchy_not_contains?: InputMaybe<Scalars['String']>;
  hierarchy_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  label?: InputMaybe<Scalars['String']>;
  labelIcon?: InputMaybe<Scalars['String']>;
  labelIcon_contains?: InputMaybe<Scalars['String']>;
  labelIcon_exists?: InputMaybe<Scalars['Boolean']>;
  labelIcon_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  labelIcon_not?: InputMaybe<Scalars['String']>;
  labelIcon_not_contains?: InputMaybe<Scalars['String']>;
  labelIcon_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  label_contains?: InputMaybe<Scalars['String']>;
  label_exists?: InputMaybe<Scalars['Boolean']>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  label_not?: InputMaybe<Scalars['String']>;
  label_not_contains?: InputMaybe<Scalars['String']>;
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link?: InputMaybe<Scalars['String']>;
  link_contains?: InputMaybe<Scalars['String']>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link_not?: InputMaybe<Scalars['String']>;
  link_not_contains?: InputMaybe<Scalars['String']>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rainbowHover?: InputMaybe<Scalars['Boolean']>;
  rainbowHover_exists?: InputMaybe<Scalars['Boolean']>;
  rainbowHover_not?: InputMaybe<Scalars['Boolean']>;
  size?: InputMaybe<Scalars['String']>;
  size_contains?: InputMaybe<Scalars['String']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  size_not?: InputMaybe<Scalars['String']>;
  size_not_contains?: InputMaybe<Scalars['String']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startIcon?: InputMaybe<Scalars['String']>;
  startIcon_contains?: InputMaybe<Scalars['String']>;
  startIcon_exists?: InputMaybe<Scalars['Boolean']>;
  startIcon_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startIcon_not?: InputMaybe<Scalars['String']>;
  startIcon_not_contains?: InputMaybe<Scalars['String']>;
  startIcon_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<ISysFilter>;
}

export interface IComponentButtonLinkingCollections {
  __typename?: 'ComponentButtonLinkingCollections';
  componentCaseStudyCardCollection?: Maybe<IComponentCaseStudyCardCollection>;
  componentFeaturesCollection?: Maybe<IComponentFeaturesCollection>;
  componentGenericFormCollection?: Maybe<IComponentGenericFormCollection>;
  componentHeaderCollection?: Maybe<IComponentHeaderCollection>;
  componentInputFieldCollection?: Maybe<IComponentInputFieldCollection>;
  componentSwitcherItemCollection?: Maybe<IComponentSwitcherItemCollection>;
  componentVideoCollection?: Maybe<IComponentVideoCollection>;
  entryCollection?: Maybe<IEntryCollection>;
  menuItemCollection?: Maybe<IMenuItemCollection>;
}

export interface IComponentButtonLinkingCollectionsComponentCaseStudyCardCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentButtonLinkingCollectionsComponentFeaturesCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentButtonLinkingCollectionsComponentGenericFormCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentButtonLinkingCollectionsComponentHeaderCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentButtonLinkingCollectionsComponentInputFieldCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentButtonLinkingCollectionsComponentSwitcherItemCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentButtonLinkingCollectionsComponentVideoCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentButtonLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentButtonLinkingCollectionsMenuItemCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export enum IComponentButtonOrder {
  EndIconAsc = 'endIcon_ASC',
  EndIconDesc = 'endIcon_DESC',
  HierarchyAsc = 'hierarchy_ASC',
  HierarchyDesc = 'hierarchy_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LabelIconAsc = 'labelIcon_ASC',
  LabelIconDesc = 'labelIcon_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  RainbowHoverAsc = 'rainbowHover_ASC',
  RainbowHoverDesc = 'rainbowHover_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  StartIconAsc = 'startIcon_ASC',
  StartIconDesc = 'startIcon_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export interface IComponentBynder extends IEntry {
  __typename?: 'ComponentBynder';
  contentfulMetadata: IContentfulMetadata;
  linkedFrom?: Maybe<IComponentBynderLinkingCollections>;
  sys: ISys;
  video?: Maybe<Scalars['JSON']>;
}

export interface IComponentBynderLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IComponentBynderVideoArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentBynderCollection {
  __typename?: 'ComponentBynderCollection';
  items: Array<Maybe<IComponentBynder>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IComponentBynderFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentBynderFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentBynderFilter>>>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  sys?: InputMaybe<ISysFilter>;
  video_exists?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentBynderLinkingCollections {
  __typename?: 'ComponentBynderLinkingCollections';
  entryCollection?: Maybe<IEntryCollection>;
}

export interface IComponentBynderLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export enum IComponentBynderOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export interface IComponentCardDeck extends IEntry {
  __typename?: 'ComponentCardDeck';
  cardsCollection?: Maybe<IComponentCardDeckCardsCollection>;
  centerHeadingContent?: Maybe<Scalars['Boolean']>;
  contentfulMetadata: IContentfulMetadata;
  headingComponent?: Maybe<IComponentHeading>;
  headingDirection?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<IComponentCardDeckLinkingCollections>;
  sys: ISys;
}

export interface IComponentCardDeckCardsCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentCardDeckCenterHeadingContentArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentCardDeckHeadingComponentArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentCardDeckHeadingDirectionArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentCardDeckInternalNameArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentCardDeckLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IComponentCardDeckCardsCollection {
  __typename?: 'ComponentCardDeckCardsCollection';
  items: Array<Maybe<IComponentBasicCard>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IComponentCardDeckCollection {
  __typename?: 'ComponentCardDeckCollection';
  items: Array<Maybe<IComponentCardDeck>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IComponentCardDeckFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentCardDeckFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentCardDeckFilter>>>;
  cardsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  centerHeadingContent?: InputMaybe<Scalars['Boolean']>;
  centerHeadingContent_exists?: InputMaybe<Scalars['Boolean']>;
  centerHeadingContent_not?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  headingComponent?: InputMaybe<ICfComponentHeadingNestedFilter>;
  headingComponent_exists?: InputMaybe<Scalars['Boolean']>;
  headingDirection?: InputMaybe<Scalars['String']>;
  headingDirection_contains?: InputMaybe<Scalars['String']>;
  headingDirection_exists?: InputMaybe<Scalars['Boolean']>;
  headingDirection_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headingDirection_not?: InputMaybe<Scalars['String']>;
  headingDirection_not_contains?: InputMaybe<Scalars['String']>;
  headingDirection_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<ISysFilter>;
}

export interface IComponentCardDeckLinkingCollections {
  __typename?: 'ComponentCardDeckLinkingCollections';
  entryCollection?: Maybe<IEntryCollection>;
  templatePageCollection?: Maybe<ITemplatePageCollection>;
}

export interface IComponentCardDeckLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentCardDeckLinkingCollectionsTemplatePageCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export enum IComponentCardDeckOrder {
  CenterHeadingContentAsc = 'centerHeadingContent_ASC',
  CenterHeadingContentDesc = 'centerHeadingContent_DESC',
  HeadingDirectionAsc = 'headingDirection_ASC',
  HeadingDirectionDesc = 'headingDirection_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export interface IComponentCaseStudies extends IEntry {
  __typename?: 'ComponentCaseStudies';
  background?: Maybe<Scalars['String']>;
  caseStudyCardsCollection?: Maybe<IComponentCaseStudiesCaseStudyCardsCollection>;
  contentfulMetadata: IContentfulMetadata;
  headingComponent?: Maybe<IComponentHeading>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<IComponentCaseStudiesLinkingCollections>;
  sys: ISys;
}

export interface IComponentCaseStudiesBackgroundArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentCaseStudiesCaseStudyCardsCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentCaseStudiesHeadingComponentArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentCaseStudiesInternalNameArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentCaseStudiesLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IComponentCaseStudiesCaseStudyCardsCollection {
  __typename?: 'ComponentCaseStudiesCaseStudyCardsCollection';
  items: Array<Maybe<IComponentCaseStudyCard>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IComponentCaseStudiesCollection {
  __typename?: 'ComponentCaseStudiesCollection';
  items: Array<Maybe<IComponentCaseStudies>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IComponentCaseStudiesFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentCaseStudiesFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentCaseStudiesFilter>>>;
  background?: InputMaybe<Scalars['String']>;
  background_contains?: InputMaybe<Scalars['String']>;
  background_exists?: InputMaybe<Scalars['Boolean']>;
  background_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  background_not?: InputMaybe<Scalars['String']>;
  background_not_contains?: InputMaybe<Scalars['String']>;
  background_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  caseStudyCardsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  headingComponent?: InputMaybe<ICfComponentHeadingNestedFilter>;
  headingComponent_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<ISysFilter>;
}

export interface IComponentCaseStudiesLinkingCollections {
  __typename?: 'ComponentCaseStudiesLinkingCollections';
  entryCollection?: Maybe<IEntryCollection>;
  templatePageCollection?: Maybe<ITemplatePageCollection>;
}

export interface IComponentCaseStudiesLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentCaseStudiesLinkingCollectionsTemplatePageCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export enum IComponentCaseStudiesOrder {
  BackgroundAsc = 'background_ASC',
  BackgroundDesc = 'background_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export interface IComponentCaseStudyCard extends IEntry {
  __typename?: 'ComponentCaseStudyCard';
  caseStudyImage?: Maybe<IComponentImage>;
  caseStudyLinkButton?: Maybe<IComponentButton>;
  caseStudyStats?: Maybe<IComponentCaseStudyCardCaseStudyStats>;
  contentfulMetadata: IContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<IComponentCaseStudyCardLinkingCollections>;
  person?: Maybe<IEntityPerson>;
  quote?: Maybe<IComponentCaseStudyCardQuote>;
  sys: ISys;
}

export interface IComponentCaseStudyCardCaseStudyImageArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentCaseStudyCardCaseStudyLinkButtonArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentCaseStudyCardCaseStudyStatsArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentCaseStudyCardInternalNameArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentCaseStudyCardLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IComponentCaseStudyCardPersonArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentCaseStudyCardQuoteArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentCaseStudyCardCaseStudyStats {
  __typename?: 'ComponentCaseStudyCardCaseStudyStats';
  json: Scalars['JSON'];
  links: IComponentCaseStudyCardCaseStudyStatsLinks;
}

export interface IComponentCaseStudyCardCaseStudyStatsAssets {
  __typename?: 'ComponentCaseStudyCardCaseStudyStatsAssets';
  block: Array<Maybe<IAsset>>;
  hyperlink: Array<Maybe<IAsset>>;
}

export interface IComponentCaseStudyCardCaseStudyStatsEntries {
  __typename?: 'ComponentCaseStudyCardCaseStudyStatsEntries';
  block: Array<Maybe<IEntry>>;
  hyperlink: Array<Maybe<IEntry>>;
  inline: Array<Maybe<IEntry>>;
}

export interface IComponentCaseStudyCardCaseStudyStatsLinks {
  __typename?: 'ComponentCaseStudyCardCaseStudyStatsLinks';
  assets: IComponentCaseStudyCardCaseStudyStatsAssets;
  entries: IComponentCaseStudyCardCaseStudyStatsEntries;
}

export interface IComponentCaseStudyCardCollection {
  __typename?: 'ComponentCaseStudyCardCollection';
  items: Array<Maybe<IComponentCaseStudyCard>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IComponentCaseStudyCardFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentCaseStudyCardFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentCaseStudyCardFilter>>>;
  caseStudyImage?: InputMaybe<ICfComponentImageNestedFilter>;
  caseStudyImage_exists?: InputMaybe<Scalars['Boolean']>;
  caseStudyLinkButton?: InputMaybe<ICfComponentButtonNestedFilter>;
  caseStudyLinkButton_exists?: InputMaybe<Scalars['Boolean']>;
  caseStudyStats_contains?: InputMaybe<Scalars['String']>;
  caseStudyStats_exists?: InputMaybe<Scalars['Boolean']>;
  caseStudyStats_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  person?: InputMaybe<ICfEntityPersonNestedFilter>;
  person_exists?: InputMaybe<Scalars['Boolean']>;
  quote_contains?: InputMaybe<Scalars['String']>;
  quote_exists?: InputMaybe<Scalars['Boolean']>;
  quote_not_contains?: InputMaybe<Scalars['String']>;
  sys?: InputMaybe<ISysFilter>;
}

export interface IComponentCaseStudyCardLinkingCollections {
  __typename?: 'ComponentCaseStudyCardLinkingCollections';
  componentCaseStudiesCollection?: Maybe<IComponentCaseStudiesCollection>;
  entryCollection?: Maybe<IEntryCollection>;
}

export interface IComponentCaseStudyCardLinkingCollectionsComponentCaseStudiesCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentCaseStudyCardLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export enum IComponentCaseStudyCardOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export interface IComponentCaseStudyCardQuote {
  __typename?: 'ComponentCaseStudyCardQuote';
  json: Scalars['JSON'];
  links: IComponentCaseStudyCardQuoteLinks;
}

export interface IComponentCaseStudyCardQuoteAssets {
  __typename?: 'ComponentCaseStudyCardQuoteAssets';
  block: Array<Maybe<IAsset>>;
  hyperlink: Array<Maybe<IAsset>>;
}

export interface IComponentCaseStudyCardQuoteEntries {
  __typename?: 'ComponentCaseStudyCardQuoteEntries';
  block: Array<Maybe<IEntry>>;
  hyperlink: Array<Maybe<IEntry>>;
  inline: Array<Maybe<IEntry>>;
}

export interface IComponentCaseStudyCardQuoteLinks {
  __typename?: 'ComponentCaseStudyCardQuoteLinks';
  assets: IComponentCaseStudyCardQuoteAssets;
  entries: IComponentCaseStudyCardQuoteEntries;
}

export interface IComponentConversionPanel extends IEntry {
  __typename?: 'ComponentConversionPanel';
  background?: Maybe<Scalars['String']>;
  body?: Maybe<IComponentConversionPanelBody>;
  contained?: Maybe<Scalars['Boolean']>;
  containedBackground?: Maybe<Scalars['String']>;
  contentfulMetadata: IContentfulMetadata;
  eyebrow?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<IComponentConversionPanelLinkingCollections>;
  rainbowLine?: Maybe<Scalars['Boolean']>;
  reference?: Maybe<IComponentConversionPanelReference>;
  sys: ISys;
}

export interface IComponentConversionPanelBackgroundArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentConversionPanelBodyArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentConversionPanelContainedArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentConversionPanelContainedBackgroundArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentConversionPanelEyebrowArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentConversionPanelHeadingArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentConversionPanelInternalNameArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentConversionPanelLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IComponentConversionPanelRainbowLineArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentConversionPanelReferenceArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentConversionPanelBody {
  __typename?: 'ComponentConversionPanelBody';
  json: Scalars['JSON'];
  links: IComponentConversionPanelBodyLinks;
}

export interface IComponentConversionPanelBodyAssets {
  __typename?: 'ComponentConversionPanelBodyAssets';
  block: Array<Maybe<IAsset>>;
  hyperlink: Array<Maybe<IAsset>>;
}

export interface IComponentConversionPanelBodyEntries {
  __typename?: 'ComponentConversionPanelBodyEntries';
  block: Array<Maybe<IEntry>>;
  hyperlink: Array<Maybe<IEntry>>;
  inline: Array<Maybe<IEntry>>;
}

export interface IComponentConversionPanelBodyLinks {
  __typename?: 'ComponentConversionPanelBodyLinks';
  assets: IComponentConversionPanelBodyAssets;
  entries: IComponentConversionPanelBodyEntries;
}

export interface IComponentConversionPanelCollection {
  __typename?: 'ComponentConversionPanelCollection';
  items: Array<Maybe<IComponentConversionPanel>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IComponentConversionPanelFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentConversionPanelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentConversionPanelFilter>>>;
  background?: InputMaybe<Scalars['String']>;
  background_contains?: InputMaybe<Scalars['String']>;
  background_exists?: InputMaybe<Scalars['Boolean']>;
  background_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  background_not?: InputMaybe<Scalars['String']>;
  background_not_contains?: InputMaybe<Scalars['String']>;
  background_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  contained?: InputMaybe<Scalars['Boolean']>;
  containedBackground?: InputMaybe<Scalars['String']>;
  containedBackground_contains?: InputMaybe<Scalars['String']>;
  containedBackground_exists?: InputMaybe<Scalars['Boolean']>;
  containedBackground_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  containedBackground_not?: InputMaybe<Scalars['String']>;
  containedBackground_not_contains?: InputMaybe<Scalars['String']>;
  containedBackground_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contained_exists?: InputMaybe<Scalars['Boolean']>;
  contained_not?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  eyebrow?: InputMaybe<Scalars['String']>;
  eyebrow_contains?: InputMaybe<Scalars['String']>;
  eyebrow_exists?: InputMaybe<Scalars['Boolean']>;
  eyebrow_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  eyebrow_not?: InputMaybe<Scalars['String']>;
  eyebrow_not_contains?: InputMaybe<Scalars['String']>;
  eyebrow_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading?: InputMaybe<Scalars['String']>;
  heading_contains?: InputMaybe<Scalars['String']>;
  heading_exists?: InputMaybe<Scalars['Boolean']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading_not?: InputMaybe<Scalars['String']>;
  heading_not_contains?: InputMaybe<Scalars['String']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rainbowLine?: InputMaybe<Scalars['Boolean']>;
  rainbowLine_exists?: InputMaybe<Scalars['Boolean']>;
  rainbowLine_not?: InputMaybe<Scalars['Boolean']>;
  reference_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<ISysFilter>;
}

export interface IComponentConversionPanelLinkingCollections {
  __typename?: 'ComponentConversionPanelLinkingCollections';
  entryCollection?: Maybe<IEntryCollection>;
  templatePageCollection?: Maybe<ITemplatePageCollection>;
}

export interface IComponentConversionPanelLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentConversionPanelLinkingCollectionsTemplatePageCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export enum IComponentConversionPanelOrder {
  BackgroundAsc = 'background_ASC',
  BackgroundDesc = 'background_DESC',
  ContainedBackgroundAsc = 'containedBackground_ASC',
  ContainedBackgroundDesc = 'containedBackground_DESC',
  ContainedAsc = 'contained_ASC',
  ContainedDesc = 'contained_DESC',
  EyebrowAsc = 'eyebrow_ASC',
  EyebrowDesc = 'eyebrow_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  RainbowLineAsc = 'rainbowLine_ASC',
  RainbowLineDesc = 'rainbowLine_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type IComponentConversionPanelReference = IComponentGenericForm | IComponentImage;

export interface IComponentFeatures extends IEntry {
  __typename?: 'ComponentFeatures';
  background?: Maybe<Scalars['String']>;
  body?: Maybe<IComponentFeaturesBody>;
  callToAction?: Maybe<IComponentButton>;
  contentfulMetadata: IContentfulMetadata;
  eyebrow?: Maybe<Scalars['String']>;
  featureCardsCollection?: Maybe<IComponentFeaturesFeatureCardsCollection>;
  featuresImage?: Maybe<IComponentImage>;
  heading?: Maybe<Scalars['String']>;
  imageSide?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<IComponentFeaturesLinkingCollections>;
  sys: ISys;
}

export interface IComponentFeaturesBackgroundArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentFeaturesBodyArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentFeaturesCallToActionArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentFeaturesEyebrowArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentFeaturesFeatureCardsCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentFeaturesFeaturesImageArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentFeaturesHeadingArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentFeaturesImageSideArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentFeaturesInternalNameArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentFeaturesLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IComponentFeaturesBody {
  __typename?: 'ComponentFeaturesBody';
  json: Scalars['JSON'];
  links: IComponentFeaturesBodyLinks;
}

export interface IComponentFeaturesBodyAssets {
  __typename?: 'ComponentFeaturesBodyAssets';
  block: Array<Maybe<IAsset>>;
  hyperlink: Array<Maybe<IAsset>>;
}

export interface IComponentFeaturesBodyEntries {
  __typename?: 'ComponentFeaturesBodyEntries';
  block: Array<Maybe<IEntry>>;
  hyperlink: Array<Maybe<IEntry>>;
  inline: Array<Maybe<IEntry>>;
}

export interface IComponentFeaturesBodyLinks {
  __typename?: 'ComponentFeaturesBodyLinks';
  assets: IComponentFeaturesBodyAssets;
  entries: IComponentFeaturesBodyEntries;
}

export interface IComponentFeaturesCard extends IEntry {
  __typename?: 'ComponentFeaturesCard';
  contentfulMetadata: IContentfulMetadata;
  heading?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<IComponentFeaturesCardLinkingCollections>;
  subheading?: Maybe<Scalars['String']>;
  sys: ISys;
}

export interface IComponentFeaturesCardHeadingArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentFeaturesCardIconArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentFeaturesCardInternalNameArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentFeaturesCardLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IComponentFeaturesCardSubheadingArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentFeaturesCardCollection {
  __typename?: 'ComponentFeaturesCardCollection';
  items: Array<Maybe<IComponentFeaturesCard>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IComponentFeaturesCardFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentFeaturesCardFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentFeaturesCardFilter>>>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  heading?: InputMaybe<Scalars['String']>;
  heading_contains?: InputMaybe<Scalars['String']>;
  heading_exists?: InputMaybe<Scalars['Boolean']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading_not?: InputMaybe<Scalars['String']>;
  heading_not_contains?: InputMaybe<Scalars['String']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  icon?: InputMaybe<Scalars['String']>;
  icon_contains?: InputMaybe<Scalars['String']>;
  icon_exists?: InputMaybe<Scalars['Boolean']>;
  icon_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  icon_not?: InputMaybe<Scalars['String']>;
  icon_not_contains?: InputMaybe<Scalars['String']>;
  icon_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subheading?: InputMaybe<Scalars['String']>;
  subheading_contains?: InputMaybe<Scalars['String']>;
  subheading_exists?: InputMaybe<Scalars['Boolean']>;
  subheading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subheading_not?: InputMaybe<Scalars['String']>;
  subheading_not_contains?: InputMaybe<Scalars['String']>;
  subheading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<ISysFilter>;
}

export interface IComponentFeaturesCardLinkingCollections {
  __typename?: 'ComponentFeaturesCardLinkingCollections';
  componentFeaturesCollection?: Maybe<IComponentFeaturesCollection>;
  entryCollection?: Maybe<IEntryCollection>;
}

export interface IComponentFeaturesCardLinkingCollectionsComponentFeaturesCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentFeaturesCardLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export enum IComponentFeaturesCardOrder {
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export interface IComponentFeaturesCollection {
  __typename?: 'ComponentFeaturesCollection';
  items: Array<Maybe<IComponentFeatures>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IComponentFeaturesFeatureCardsCollection {
  __typename?: 'ComponentFeaturesFeatureCardsCollection';
  items: Array<Maybe<IComponentFeaturesCard>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IComponentFeaturesFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentFeaturesFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentFeaturesFilter>>>;
  background?: InputMaybe<Scalars['String']>;
  background_contains?: InputMaybe<Scalars['String']>;
  background_exists?: InputMaybe<Scalars['Boolean']>;
  background_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  background_not?: InputMaybe<Scalars['String']>;
  background_not_contains?: InputMaybe<Scalars['String']>;
  background_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  callToAction?: InputMaybe<ICfComponentButtonNestedFilter>;
  callToAction_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  eyebrow?: InputMaybe<Scalars['String']>;
  eyebrow_contains?: InputMaybe<Scalars['String']>;
  eyebrow_exists?: InputMaybe<Scalars['Boolean']>;
  eyebrow_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  eyebrow_not?: InputMaybe<Scalars['String']>;
  eyebrow_not_contains?: InputMaybe<Scalars['String']>;
  eyebrow_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  featureCardsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  featuresImage?: InputMaybe<ICfComponentImageNestedFilter>;
  featuresImage_exists?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Scalars['String']>;
  heading_contains?: InputMaybe<Scalars['String']>;
  heading_exists?: InputMaybe<Scalars['Boolean']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading_not?: InputMaybe<Scalars['String']>;
  heading_not_contains?: InputMaybe<Scalars['String']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  imageSide?: InputMaybe<Scalars['String']>;
  imageSide_contains?: InputMaybe<Scalars['String']>;
  imageSide_exists?: InputMaybe<Scalars['Boolean']>;
  imageSide_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  imageSide_not?: InputMaybe<Scalars['String']>;
  imageSide_not_contains?: InputMaybe<Scalars['String']>;
  imageSide_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<ISysFilter>;
}

export interface IComponentFeaturesLinkingCollections {
  __typename?: 'ComponentFeaturesLinkingCollections';
  entryCollection?: Maybe<IEntryCollection>;
  templatePageCollection?: Maybe<ITemplatePageCollection>;
}

export interface IComponentFeaturesLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentFeaturesLinkingCollectionsTemplatePageCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export enum IComponentFeaturesOrder {
  BackgroundAsc = 'background_ASC',
  BackgroundDesc = 'background_DESC',
  EyebrowAsc = 'eyebrow_ASC',
  EyebrowDesc = 'eyebrow_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  ImageSideAsc = 'imageSide_ASC',
  ImageSideDesc = 'imageSide_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export interface IComponentFooter extends IEntry {
  __typename?: 'ComponentFooter';
  announcementCard?: Maybe<IMenuItem>;
  appStoreUrl?: Maybe<Scalars['String']>;
  company?: Maybe<IEntityCompany>;
  contactEmail?: Maybe<Scalars['String']>;
  contactNumber?: Maybe<Scalars['String']>;
  contentfulMetadata: IContentfulMetadata;
  googlePlayUrl?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  legalText?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<IComponentFooterLinkingCollections>;
  menuItemsCollection?: Maybe<IComponentFooterMenuItemsCollection>;
  privacyTermsMenuCollection?: Maybe<IComponentFooterPrivacyTermsMenuCollection>;
  sys: ISys;
}

export interface IComponentFooterAnnouncementCardArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentFooterAppStoreUrlArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentFooterCompanyArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentFooterContactEmailArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentFooterContactNumberArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentFooterGooglePlayUrlArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentFooterInternalNameArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentFooterLegalTextArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentFooterLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IComponentFooterMenuItemsCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentFooterPrivacyTermsMenuCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentFooterCollection {
  __typename?: 'ComponentFooterCollection';
  items: Array<Maybe<IComponentFooter>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IComponentFooterFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentFooterFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentFooterFilter>>>;
  announcementCard?: InputMaybe<ICfMenuItemNestedFilter>;
  announcementCard_exists?: InputMaybe<Scalars['Boolean']>;
  appStoreUrl?: InputMaybe<Scalars['String']>;
  appStoreUrl_contains?: InputMaybe<Scalars['String']>;
  appStoreUrl_exists?: InputMaybe<Scalars['Boolean']>;
  appStoreUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  appStoreUrl_not?: InputMaybe<Scalars['String']>;
  appStoreUrl_not_contains?: InputMaybe<Scalars['String']>;
  appStoreUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  company?: InputMaybe<ICfEntityCompanyNestedFilter>;
  company_exists?: InputMaybe<Scalars['Boolean']>;
  contactEmail?: InputMaybe<Scalars['String']>;
  contactEmail_contains?: InputMaybe<Scalars['String']>;
  contactEmail_exists?: InputMaybe<Scalars['Boolean']>;
  contactEmail_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contactEmail_not?: InputMaybe<Scalars['String']>;
  contactEmail_not_contains?: InputMaybe<Scalars['String']>;
  contactEmail_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contactNumber?: InputMaybe<Scalars['String']>;
  contactNumber_contains?: InputMaybe<Scalars['String']>;
  contactNumber_exists?: InputMaybe<Scalars['Boolean']>;
  contactNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contactNumber_not?: InputMaybe<Scalars['String']>;
  contactNumber_not_contains?: InputMaybe<Scalars['String']>;
  contactNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  googlePlayUrl?: InputMaybe<Scalars['String']>;
  googlePlayUrl_contains?: InputMaybe<Scalars['String']>;
  googlePlayUrl_exists?: InputMaybe<Scalars['Boolean']>;
  googlePlayUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  googlePlayUrl_not?: InputMaybe<Scalars['String']>;
  googlePlayUrl_not_contains?: InputMaybe<Scalars['String']>;
  googlePlayUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  legalText?: InputMaybe<Scalars['String']>;
  legalText_contains?: InputMaybe<Scalars['String']>;
  legalText_exists?: InputMaybe<Scalars['Boolean']>;
  legalText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  legalText_not?: InputMaybe<Scalars['String']>;
  legalText_not_contains?: InputMaybe<Scalars['String']>;
  legalText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  menuItemsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  privacyTermsMenuCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<ISysFilter>;
}

export interface IComponentFooterLinkingCollections {
  __typename?: 'ComponentFooterLinkingCollections';
  entryCollection?: Maybe<IEntryCollection>;
}

export interface IComponentFooterLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentFooterMenuItemsCollection {
  __typename?: 'ComponentFooterMenuItemsCollection';
  items: Array<Maybe<IMenuItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export enum IComponentFooterOrder {
  AppStoreUrlAsc = 'appStoreUrl_ASC',
  AppStoreUrlDesc = 'appStoreUrl_DESC',
  ContactEmailAsc = 'contactEmail_ASC',
  ContactEmailDesc = 'contactEmail_DESC',
  ContactNumberAsc = 'contactNumber_ASC',
  ContactNumberDesc = 'contactNumber_DESC',
  GooglePlayUrlAsc = 'googlePlayUrl_ASC',
  GooglePlayUrlDesc = 'googlePlayUrl_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LegalTextAsc = 'legalText_ASC',
  LegalTextDesc = 'legalText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export interface IComponentFooterPrivacyTermsMenuCollection {
  __typename?: 'ComponentFooterPrivacyTermsMenuCollection';
  items: Array<Maybe<IMenuItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IComponentForm extends IEntry {
  __typename?: 'ComponentForm';
  contentfulMetadata: IContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<IComponentFormLinkingCollections>;
  sys: ISys;
}

export interface IComponentFormInternalNameArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentFormLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IComponentFormCollection {
  __typename?: 'ComponentFormCollection';
  items: Array<Maybe<IComponentForm>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IComponentFormFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentFormFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentFormFilter>>>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<ISysFilter>;
}

export interface IComponentFormLinkingCollections {
  __typename?: 'ComponentFormLinkingCollections';
  entryCollection?: Maybe<IEntryCollection>;
}

export interface IComponentFormLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export enum IComponentFormOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export interface IComponentFullWidthSwitchback extends IEntry {
  __typename?: 'ComponentFullWidthSwitchback';
  assetSide?: Maybe<Scalars['String']>;
  body?: Maybe<IComponentFullWidthSwitchbackBody>;
  contentfulMetadata: IContentfulMetadata;
  eyebrow?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<IComponentFullWidthSwitchbackLinkingCollections>;
  reference?: Maybe<IComponentImage>;
  sys: ISys;
}

export interface IComponentFullWidthSwitchbackAssetSideArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentFullWidthSwitchbackBodyArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentFullWidthSwitchbackEyebrowArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentFullWidthSwitchbackHeadingArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentFullWidthSwitchbackInternalNameArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentFullWidthSwitchbackLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IComponentFullWidthSwitchbackReferenceArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentFullWidthSwitchbackBody {
  __typename?: 'ComponentFullWidthSwitchbackBody';
  json: Scalars['JSON'];
  links: IComponentFullWidthSwitchbackBodyLinks;
}

export interface IComponentFullWidthSwitchbackBodyAssets {
  __typename?: 'ComponentFullWidthSwitchbackBodyAssets';
  block: Array<Maybe<IAsset>>;
  hyperlink: Array<Maybe<IAsset>>;
}

export interface IComponentFullWidthSwitchbackBodyEntries {
  __typename?: 'ComponentFullWidthSwitchbackBodyEntries';
  block: Array<Maybe<IEntry>>;
  hyperlink: Array<Maybe<IEntry>>;
  inline: Array<Maybe<IEntry>>;
}

export interface IComponentFullWidthSwitchbackBodyLinks {
  __typename?: 'ComponentFullWidthSwitchbackBodyLinks';
  assets: IComponentFullWidthSwitchbackBodyAssets;
  entries: IComponentFullWidthSwitchbackBodyEntries;
}

export interface IComponentFullWidthSwitchbackCollection {
  __typename?: 'ComponentFullWidthSwitchbackCollection';
  items: Array<Maybe<IComponentFullWidthSwitchback>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IComponentFullWidthSwitchbackFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentFullWidthSwitchbackFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentFullWidthSwitchbackFilter>>>;
  assetSide?: InputMaybe<Scalars['String']>;
  assetSide_contains?: InputMaybe<Scalars['String']>;
  assetSide_exists?: InputMaybe<Scalars['Boolean']>;
  assetSide_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  assetSide_not?: InputMaybe<Scalars['String']>;
  assetSide_not_contains?: InputMaybe<Scalars['String']>;
  assetSide_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  eyebrow?: InputMaybe<Scalars['String']>;
  eyebrow_contains?: InputMaybe<Scalars['String']>;
  eyebrow_exists?: InputMaybe<Scalars['Boolean']>;
  eyebrow_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  eyebrow_not?: InputMaybe<Scalars['String']>;
  eyebrow_not_contains?: InputMaybe<Scalars['String']>;
  eyebrow_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading?: InputMaybe<Scalars['String']>;
  heading_contains?: InputMaybe<Scalars['String']>;
  heading_exists?: InputMaybe<Scalars['Boolean']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading_not?: InputMaybe<Scalars['String']>;
  heading_not_contains?: InputMaybe<Scalars['String']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  reference?: InputMaybe<ICfComponentImageNestedFilter>;
  reference_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<ISysFilter>;
}

export interface IComponentFullWidthSwitchbackLinkingCollections {
  __typename?: 'ComponentFullWidthSwitchbackLinkingCollections';
  entryCollection?: Maybe<IEntryCollection>;
  templatePageCollection?: Maybe<ITemplatePageCollection>;
}

export interface IComponentFullWidthSwitchbackLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentFullWidthSwitchbackLinkingCollectionsTemplatePageCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export enum IComponentFullWidthSwitchbackOrder {
  AssetSideAsc = 'assetSide_ASC',
  AssetSideDesc = 'assetSide_DESC',
  EyebrowAsc = 'eyebrow_ASC',
  EyebrowDesc = 'eyebrow_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export interface IComponentGenericForm extends IEntry {
  __typename?: 'ComponentGenericForm';
  bodyTextLabel?: Maybe<Scalars['String']>;
  callToAction?: Maybe<IComponentButton>;
  contentfulMetadata: IContentfulMetadata;
  dataCenterList?: Maybe<Array<Maybe<Scalars['String']>>>;
  formsCollection?: Maybe<IComponentGenericFormFormsCollection>;
  heading?: Maybe<Scalars['String']>;
  hiddenFormsCollection?: Maybe<IComponentGenericFormHiddenFormsCollection>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<IComponentGenericFormLinkingCollections>;
  subheading?: Maybe<Scalars['String']>;
  sys: ISys;
  termsOfServicePage?: Maybe<Scalars['String']>;
}

export interface IComponentGenericFormBodyTextLabelArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentGenericFormCallToActionArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentGenericFormDataCenterListArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentGenericFormFormsCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentGenericFormHeadingArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentGenericFormHiddenFormsCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentGenericFormInternalNameArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentGenericFormLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IComponentGenericFormSubheadingArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentGenericFormTermsOfServicePageArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentGenericFormCollection {
  __typename?: 'ComponentGenericFormCollection';
  items: Array<Maybe<IComponentGenericForm>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IComponentGenericFormFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentGenericFormFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentGenericFormFilter>>>;
  bodyTextLabel?: InputMaybe<Scalars['String']>;
  bodyTextLabel_contains?: InputMaybe<Scalars['String']>;
  bodyTextLabel_exists?: InputMaybe<Scalars['Boolean']>;
  bodyTextLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  bodyTextLabel_not?: InputMaybe<Scalars['String']>;
  bodyTextLabel_not_contains?: InputMaybe<Scalars['String']>;
  bodyTextLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  callToAction?: InputMaybe<ICfComponentButtonNestedFilter>;
  callToAction_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  dataCenterList_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dataCenterList_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dataCenterList_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dataCenterList_exists?: InputMaybe<Scalars['Boolean']>;
  formsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Scalars['String']>;
  heading_contains?: InputMaybe<Scalars['String']>;
  heading_exists?: InputMaybe<Scalars['Boolean']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading_not?: InputMaybe<Scalars['String']>;
  heading_not_contains?: InputMaybe<Scalars['String']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hiddenFormsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subheading?: InputMaybe<Scalars['String']>;
  subheading_contains?: InputMaybe<Scalars['String']>;
  subheading_exists?: InputMaybe<Scalars['Boolean']>;
  subheading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subheading_not?: InputMaybe<Scalars['String']>;
  subheading_not_contains?: InputMaybe<Scalars['String']>;
  subheading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<ISysFilter>;
  termsOfServicePage?: InputMaybe<Scalars['String']>;
  termsOfServicePage_contains?: InputMaybe<Scalars['String']>;
  termsOfServicePage_exists?: InputMaybe<Scalars['Boolean']>;
  termsOfServicePage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  termsOfServicePage_not?: InputMaybe<Scalars['String']>;
  termsOfServicePage_not_contains?: InputMaybe<Scalars['String']>;
  termsOfServicePage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IComponentGenericFormFormsCollection {
  __typename?: 'ComponentGenericFormFormsCollection';
  items: Array<Maybe<IComponentGenericFormFormsItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export type IComponentGenericFormFormsItem = IFormDropdownField | IFormInputField;

export interface IComponentGenericFormHiddenFormsCollection {
  __typename?: 'ComponentGenericFormHiddenFormsCollection';
  items: Array<Maybe<IFormInputField>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IComponentGenericFormLinkingCollections {
  __typename?: 'ComponentGenericFormLinkingCollections';
  componentConversionPanelCollection?: Maybe<IComponentConversionPanelCollection>;
  entryCollection?: Maybe<IEntryCollection>;
}

export interface IComponentGenericFormLinkingCollectionsComponentConversionPanelCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentGenericFormLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export enum IComponentGenericFormOrder {
  BodyTextLabelAsc = 'bodyTextLabel_ASC',
  BodyTextLabelDesc = 'bodyTextLabel_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TermsOfServicePageAsc = 'termsOfServicePage_ASC',
  TermsOfServicePageDesc = 'termsOfServicePage_DESC',
}

export interface IComponentHeader extends IEntry {
  __typename?: 'ComponentHeader';
  callToAction?: Maybe<IComponentButton>;
  callToActionDark?: Maybe<IComponentButton>;
  callToActionMobile?: Maybe<IComponentButton>;
  contentfulMetadata: IContentfulMetadata;
  freshworksProduct?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<IComponentHeaderLinkingCollections>;
  navigationLinksCollection?: Maybe<IComponentHeaderNavigationLinksCollection>;
  navigationLinksMobileCollection?: Maybe<IComponentHeaderNavigationLinksMobileCollection>;
  sys: ISys;
}

export interface IComponentHeaderCallToActionArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentHeaderCallToActionDarkArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentHeaderCallToActionMobileArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentHeaderFreshworksProductArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentHeaderInternalNameArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentHeaderLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IComponentHeaderNavigationLinksCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentHeaderNavigationLinksMobileCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentHeaderCollection {
  __typename?: 'ComponentHeaderCollection';
  items: Array<Maybe<IComponentHeader>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IComponentHeaderFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentHeaderFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentHeaderFilter>>>;
  callToAction?: InputMaybe<ICfComponentButtonNestedFilter>;
  callToActionDark?: InputMaybe<ICfComponentButtonNestedFilter>;
  callToActionDark_exists?: InputMaybe<Scalars['Boolean']>;
  callToActionMobile?: InputMaybe<ICfComponentButtonNestedFilter>;
  callToActionMobile_exists?: InputMaybe<Scalars['Boolean']>;
  callToAction_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  freshworksProduct?: InputMaybe<Scalars['String']>;
  freshworksProduct_contains?: InputMaybe<Scalars['String']>;
  freshworksProduct_exists?: InputMaybe<Scalars['Boolean']>;
  freshworksProduct_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  freshworksProduct_not?: InputMaybe<Scalars['String']>;
  freshworksProduct_not_contains?: InputMaybe<Scalars['String']>;
  freshworksProduct_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  navigationLinksCollection_exists?: InputMaybe<Scalars['Boolean']>;
  navigationLinksMobileCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<ISysFilter>;
}

export interface IComponentHeaderLinkingCollections {
  __typename?: 'ComponentHeaderLinkingCollections';
  entryCollection?: Maybe<IEntryCollection>;
  templatePageCollection?: Maybe<ITemplatePageCollection>;
}

export interface IComponentHeaderLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentHeaderLinkingCollectionsTemplatePageCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentHeaderNavigationLinksCollection {
  __typename?: 'ComponentHeaderNavigationLinksCollection';
  items: Array<Maybe<IMenuItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IComponentHeaderNavigationLinksMobileCollection {
  __typename?: 'ComponentHeaderNavigationLinksMobileCollection';
  items: Array<Maybe<IMenuItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export enum IComponentHeaderOrder {
  FreshworksProductAsc = 'freshworksProduct_ASC',
  FreshworksProductDesc = 'freshworksProduct_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export interface IComponentHeading extends IEntry {
  __typename?: 'ComponentHeading';
  background?: Maybe<Scalars['String']>;
  body?: Maybe<IComponentHeadingBody>;
  contentfulMetadata: IContentfulMetadata;
  eyebrow?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<IComponentHeadingLinkingCollections>;
  sys: ISys;
}

export interface IComponentHeadingBackgroundArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentHeadingBodyArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentHeadingEyebrowArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentHeadingHeadingArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentHeadingInternalNameArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentHeadingLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IComponentHeadingBody {
  __typename?: 'ComponentHeadingBody';
  json: Scalars['JSON'];
  links: IComponentHeadingBodyLinks;
}

export interface IComponentHeadingBodyAssets {
  __typename?: 'ComponentHeadingBodyAssets';
  block: Array<Maybe<IAsset>>;
  hyperlink: Array<Maybe<IAsset>>;
}

export interface IComponentHeadingBodyEntries {
  __typename?: 'ComponentHeadingBodyEntries';
  block: Array<Maybe<IEntry>>;
  hyperlink: Array<Maybe<IEntry>>;
  inline: Array<Maybe<IEntry>>;
}

export interface IComponentHeadingBodyLinks {
  __typename?: 'ComponentHeadingBodyLinks';
  assets: IComponentHeadingBodyAssets;
  entries: IComponentHeadingBodyEntries;
}

export interface IComponentHeadingCollection {
  __typename?: 'ComponentHeadingCollection';
  items: Array<Maybe<IComponentHeading>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IComponentHeadingFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentHeadingFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentHeadingFilter>>>;
  background?: InputMaybe<Scalars['String']>;
  background_contains?: InputMaybe<Scalars['String']>;
  background_exists?: InputMaybe<Scalars['Boolean']>;
  background_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  background_not?: InputMaybe<Scalars['String']>;
  background_not_contains?: InputMaybe<Scalars['String']>;
  background_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  eyebrow?: InputMaybe<Scalars['String']>;
  eyebrow_contains?: InputMaybe<Scalars['String']>;
  eyebrow_exists?: InputMaybe<Scalars['Boolean']>;
  eyebrow_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  eyebrow_not?: InputMaybe<Scalars['String']>;
  eyebrow_not_contains?: InputMaybe<Scalars['String']>;
  eyebrow_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading?: InputMaybe<Scalars['String']>;
  heading_contains?: InputMaybe<Scalars['String']>;
  heading_exists?: InputMaybe<Scalars['Boolean']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading_not?: InputMaybe<Scalars['String']>;
  heading_not_contains?: InputMaybe<Scalars['String']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<ISysFilter>;
}

export interface IComponentHeadingLinkingCollections {
  __typename?: 'ComponentHeadingLinkingCollections';
  componentCardDeckCollection?: Maybe<IComponentCardDeckCollection>;
  componentCaseStudiesCollection?: Maybe<IComponentCaseStudiesCollection>;
  componentSwitcherCollection?: Maybe<IComponentSwitcherCollection>;
  componentTestimonialsCollection?: Maybe<IComponentTestimonialsCollection>;
  entryCollection?: Maybe<IEntryCollection>;
  templatePageCollection?: Maybe<ITemplatePageCollection>;
}

export interface IComponentHeadingLinkingCollectionsComponentCardDeckCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentHeadingLinkingCollectionsComponentCaseStudiesCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentHeadingLinkingCollectionsComponentSwitcherCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentHeadingLinkingCollectionsComponentTestimonialsCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentHeadingLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentHeadingLinkingCollectionsTemplatePageCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export enum IComponentHeadingOrder {
  BackgroundAsc = 'background_ASC',
  BackgroundDesc = 'background_DESC',
  EyebrowAsc = 'eyebrow_ASC',
  EyebrowDesc = 'eyebrow_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export interface IComponentHero extends IEntry {
  __typename?: 'ComponentHero';
  background?: Maybe<Scalars['String']>;
  body?: Maybe<IComponentHeroBody>;
  contentfulMetadata: IContentfulMetadata;
  dummyModalReference?: Maybe<IEntry>;
  dummyReference?: Maybe<IComponentVideo>;
  eyebrow?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<IComponentHeroLinkingCollections>;
  reference?: Maybe<IComponentImage>;
  sys: ISys;
  trustbar?: Maybe<IEntry>;
}

export interface IComponentHeroBackgroundArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentHeroBodyArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentHeroDummyModalReferenceArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentHeroDummyReferenceArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentHeroEyebrowArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentHeroHeadingArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentHeroInternalNameArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentHeroLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IComponentHeroReferenceArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentHeroTrustbarArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentHeroBody {
  __typename?: 'ComponentHeroBody';
  json: Scalars['JSON'];
  links: IComponentHeroBodyLinks;
}

export interface IComponentHeroBodyAssets {
  __typename?: 'ComponentHeroBodyAssets';
  block: Array<Maybe<IAsset>>;
  hyperlink: Array<Maybe<IAsset>>;
}

export interface IComponentHeroBodyEntries {
  __typename?: 'ComponentHeroBodyEntries';
  block: Array<Maybe<IEntry>>;
  hyperlink: Array<Maybe<IEntry>>;
  inline: Array<Maybe<IEntry>>;
}

export interface IComponentHeroBodyLinks {
  __typename?: 'ComponentHeroBodyLinks';
  assets: IComponentHeroBodyAssets;
  entries: IComponentHeroBodyEntries;
}

export interface IComponentHeroCollection {
  __typename?: 'ComponentHeroCollection';
  items: Array<Maybe<IComponentHero>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IComponentHeroFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentHeroFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentHeroFilter>>>;
  background?: InputMaybe<Scalars['String']>;
  background_contains?: InputMaybe<Scalars['String']>;
  background_exists?: InputMaybe<Scalars['Boolean']>;
  background_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  background_not?: InputMaybe<Scalars['String']>;
  background_not_contains?: InputMaybe<Scalars['String']>;
  background_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  dummyModalReference_exists?: InputMaybe<Scalars['Boolean']>;
  dummyReference?: InputMaybe<ICfComponentVideoNestedFilter>;
  dummyReference_exists?: InputMaybe<Scalars['Boolean']>;
  eyebrow?: InputMaybe<Scalars['String']>;
  eyebrow_contains?: InputMaybe<Scalars['String']>;
  eyebrow_exists?: InputMaybe<Scalars['Boolean']>;
  eyebrow_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  eyebrow_not?: InputMaybe<Scalars['String']>;
  eyebrow_not_contains?: InputMaybe<Scalars['String']>;
  eyebrow_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading?: InputMaybe<Scalars['String']>;
  heading_contains?: InputMaybe<Scalars['String']>;
  heading_exists?: InputMaybe<Scalars['Boolean']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading_not?: InputMaybe<Scalars['String']>;
  heading_not_contains?: InputMaybe<Scalars['String']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  reference?: InputMaybe<ICfComponentImageNestedFilter>;
  reference_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<ISysFilter>;
  trustbar_exists?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentHeroForm extends IEntry {
  __typename?: 'ComponentHeroForm';
  contentBackground?: Maybe<Scalars['String']>;
  contentfulMetadata: IContentfulMetadata;
  eyebrow?: Maybe<Scalars['String']>;
  form?: Maybe<IComponentSignUpForm>;
  heading?: Maybe<Scalars['String']>;
  heroFeatureList?: Maybe<IComponentList>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<IComponentHeroFormLinkingCollections>;
  mediaReference?: Maybe<IComponentHeroFormMediaReference>;
  subheading?: Maybe<Scalars['String']>;
  sys: ISys;
  trustbar?: Maybe<IComponentTrustBar>;
}

export interface IComponentHeroFormContentBackgroundArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentHeroFormEyebrowArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentHeroFormFormArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentHeroFormHeadingArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentHeroFormHeroFeatureListArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentHeroFormInternalNameArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentHeroFormLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IComponentHeroFormMediaReferenceArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentHeroFormSubheadingArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentHeroFormTrustbarArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentHeroFormCollection {
  __typename?: 'ComponentHeroFormCollection';
  items: Array<Maybe<IComponentHeroForm>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IComponentHeroFormFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentHeroFormFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentHeroFormFilter>>>;
  contentBackground?: InputMaybe<Scalars['String']>;
  contentBackground_contains?: InputMaybe<Scalars['String']>;
  contentBackground_exists?: InputMaybe<Scalars['Boolean']>;
  contentBackground_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentBackground_not?: InputMaybe<Scalars['String']>;
  contentBackground_not_contains?: InputMaybe<Scalars['String']>;
  contentBackground_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  eyebrow?: InputMaybe<Scalars['String']>;
  eyebrow_contains?: InputMaybe<Scalars['String']>;
  eyebrow_exists?: InputMaybe<Scalars['Boolean']>;
  eyebrow_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  eyebrow_not?: InputMaybe<Scalars['String']>;
  eyebrow_not_contains?: InputMaybe<Scalars['String']>;
  eyebrow_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  form?: InputMaybe<ICfComponentSignUpFormNestedFilter>;
  form_exists?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Scalars['String']>;
  heading_contains?: InputMaybe<Scalars['String']>;
  heading_exists?: InputMaybe<Scalars['Boolean']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading_not?: InputMaybe<Scalars['String']>;
  heading_not_contains?: InputMaybe<Scalars['String']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroFeatureList?: InputMaybe<ICfComponentListNestedFilter>;
  heroFeatureList_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mediaReference_exists?: InputMaybe<Scalars['Boolean']>;
  subheading?: InputMaybe<Scalars['String']>;
  subheading_contains?: InputMaybe<Scalars['String']>;
  subheading_exists?: InputMaybe<Scalars['Boolean']>;
  subheading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subheading_not?: InputMaybe<Scalars['String']>;
  subheading_not_contains?: InputMaybe<Scalars['String']>;
  subheading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<ISysFilter>;
  trustbar?: InputMaybe<ICfComponentTrustBarNestedFilter>;
  trustbar_exists?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentHeroFormLinkingCollections {
  __typename?: 'ComponentHeroFormLinkingCollections';
  entryCollection?: Maybe<IEntryCollection>;
  templatePageCollection?: Maybe<ITemplatePageCollection>;
}

export interface IComponentHeroFormLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentHeroFormLinkingCollectionsTemplatePageCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export type IComponentHeroFormMediaReference =
  | IComponentAccolades
  | IComponentImage
  | IComponentTestimonialCard
  | IComponentVideo;

export enum IComponentHeroFormOrder {
  ContentBackgroundAsc = 'contentBackground_ASC',
  ContentBackgroundDesc = 'contentBackground_DESC',
  EyebrowAsc = 'eyebrow_ASC',
  EyebrowDesc = 'eyebrow_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export interface IComponentHeroLinkingCollections {
  __typename?: 'ComponentHeroLinkingCollections';
  entryCollection?: Maybe<IEntryCollection>;
  templatePageCollection?: Maybe<ITemplatePageCollection>;
}

export interface IComponentHeroLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentHeroLinkingCollectionsTemplatePageCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export enum IComponentHeroOrder {
  BackgroundAsc = 'background_ASC',
  BackgroundDesc = 'background_DESC',
  EyebrowAsc = 'eyebrow_ASC',
  EyebrowDesc = 'eyebrow_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export interface IComponentImage extends IEntry {
  __typename?: 'ComponentImage';
  alternateText?: Maybe<Scalars['String']>;
  bynderImage?: Maybe<Scalars['JSON']>;
  contentfulMetadata: IContentfulMetadata;
  image?: Maybe<IAsset>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<IComponentImageLinkingCollections>;
  sys: ISys;
  title?: Maybe<Scalars['String']>;
}

export interface IComponentImageAlternateTextArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentImageBynderImageArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentImageImageArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentImageInternalNameArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentImageLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IComponentImageTitleArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentImageCollection {
  __typename?: 'ComponentImageCollection';
  items: Array<Maybe<IComponentImage>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IComponentImageFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentImageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentImageFilter>>>;
  alternateText?: InputMaybe<Scalars['String']>;
  alternateText_contains?: InputMaybe<Scalars['String']>;
  alternateText_exists?: InputMaybe<Scalars['Boolean']>;
  alternateText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  alternateText_not?: InputMaybe<Scalars['String']>;
  alternateText_not_contains?: InputMaybe<Scalars['String']>;
  alternateText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  bynderImage_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<ISysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IComponentImageLinkingCollections {
  __typename?: 'ComponentImageLinkingCollections';
  componentAccoladesCollection?: Maybe<IComponentAccoladesCollection>;
  componentBasicCardCollection?: Maybe<IComponentBasicCardCollection>;
  componentCaseStudyCardCollection?: Maybe<IComponentCaseStudyCardCollection>;
  componentConversionPanelCollection?: Maybe<IComponentConversionPanelCollection>;
  componentFeaturesCollection?: Maybe<IComponentFeaturesCollection>;
  componentFullWidthSwitchbackCollection?: Maybe<IComponentFullWidthSwitchbackCollection>;
  componentHeroCollection?: Maybe<IComponentHeroCollection>;
  componentHeroFormCollection?: Maybe<IComponentHeroFormCollection>;
  componentOffsetGridCollection?: Maybe<IComponentOffsetGridCollection>;
  componentSwitchbackCollection?: Maybe<IComponentSwitchbackCollection>;
  componentSwitcherItemCollection?: Maybe<IComponentSwitcherItemCollection>;
  componentTestimonialCardCollection?: Maybe<IComponentTestimonialCardCollection>;
  entityCompanyCollection?: Maybe<IEntityCompanyCollection>;
  entryCollection?: Maybe<IEntryCollection>;
  menuItemCollection?: Maybe<IMenuItemCollection>;
}

export interface IComponentImageLinkingCollectionsComponentAccoladesCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentImageLinkingCollectionsComponentBasicCardCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentImageLinkingCollectionsComponentCaseStudyCardCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentImageLinkingCollectionsComponentConversionPanelCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentImageLinkingCollectionsComponentFeaturesCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentImageLinkingCollectionsComponentFullWidthSwitchbackCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentImageLinkingCollectionsComponentHeroCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentImageLinkingCollectionsComponentHeroFormCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentImageLinkingCollectionsComponentOffsetGridCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentImageLinkingCollectionsComponentSwitchbackCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentImageLinkingCollectionsComponentSwitcherItemCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentImageLinkingCollectionsComponentTestimonialCardCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentImageLinkingCollectionsEntityCompanyCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentImageLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentImageLinkingCollectionsMenuItemCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export enum IComponentImageOrder {
  AlternateTextAsc = 'alternateText_ASC',
  AlternateTextDesc = 'alternateText_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export interface IComponentInputField extends IEntry {
  __typename?: 'ComponentInputField';
  contentfulMetadata: IContentfulMetadata;
  inputField?: Maybe<IFormInputField>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<IComponentInputFieldLinkingCollections>;
  submitButton?: Maybe<IComponentButton>;
  sys: ISys;
}

export interface IComponentInputFieldInputFieldArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentInputFieldInternalNameArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentInputFieldLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IComponentInputFieldSubmitButtonArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentInputFieldCollection {
  __typename?: 'ComponentInputFieldCollection';
  items: Array<Maybe<IComponentInputField>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IComponentInputFieldFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentInputFieldFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentInputFieldFilter>>>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  inputField?: InputMaybe<ICfFormInputFieldNestedFilter>;
  inputField_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  submitButton?: InputMaybe<ICfComponentButtonNestedFilter>;
  submitButton_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<ISysFilter>;
}

export interface IComponentInputFieldLinkingCollections {
  __typename?: 'ComponentInputFieldLinkingCollections';
  entryCollection?: Maybe<IEntryCollection>;
}

export interface IComponentInputFieldLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export enum IComponentInputFieldOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export interface IComponentList extends IEntry {
  __typename?: 'ComponentList';
  contentfulMetadata: IContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<IComponentListLinkingCollections>;
  listItemsCollection?: Maybe<IComponentListListItemsCollection>;
  sys: ISys;
}

export interface IComponentListInternalNameArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentListLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IComponentListListItemsCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentListCollection {
  __typename?: 'ComponentListCollection';
  items: Array<Maybe<IComponentList>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IComponentListFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentListFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentListFilter>>>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  listItemsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<ISysFilter>;
}

export interface IComponentListItem extends IEntry {
  __typename?: 'ComponentListItem';
  body?: Maybe<IComponentListItemBody>;
  contentfulMetadata: IContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<IComponentListItemLinkingCollections>;
  symbol?: Maybe<Scalars['String']>;
  sys: ISys;
  title?: Maybe<Scalars['String']>;
}

export interface IComponentListItemBodyArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentListItemInternalNameArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentListItemLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IComponentListItemSymbolArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentListItemTitleArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentListItemBody {
  __typename?: 'ComponentListItemBody';
  json: Scalars['JSON'];
  links: IComponentListItemBodyLinks;
}

export interface IComponentListItemBodyAssets {
  __typename?: 'ComponentListItemBodyAssets';
  block: Array<Maybe<IAsset>>;
  hyperlink: Array<Maybe<IAsset>>;
}

export interface IComponentListItemBodyEntries {
  __typename?: 'ComponentListItemBodyEntries';
  block: Array<Maybe<IEntry>>;
  hyperlink: Array<Maybe<IEntry>>;
  inline: Array<Maybe<IEntry>>;
}

export interface IComponentListItemBodyLinks {
  __typename?: 'ComponentListItemBodyLinks';
  assets: IComponentListItemBodyAssets;
  entries: IComponentListItemBodyEntries;
}

export interface IComponentListItemCollection {
  __typename?: 'ComponentListItemCollection';
  items: Array<Maybe<IComponentListItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IComponentListItemFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentListItemFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentListItemFilter>>>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_exists?: InputMaybe<Scalars['Boolean']>;
  symbol_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<ISysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IComponentListItemLinkingCollections {
  __typename?: 'ComponentListItemLinkingCollections';
  componentAccordionCollection?: Maybe<IComponentAccordionCollection>;
  componentListCollection?: Maybe<IComponentListCollection>;
  entryCollection?: Maybe<IEntryCollection>;
}

export interface IComponentListItemLinkingCollectionsComponentAccordionCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentListItemLinkingCollectionsComponentListCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentListItemLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export enum IComponentListItemOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SymbolAsc = 'symbol_ASC',
  SymbolDesc = 'symbol_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export interface IComponentListLinkingCollections {
  __typename?: 'ComponentListLinkingCollections';
  componentHeroFormCollection?: Maybe<IComponentHeroFormCollection>;
  componentSwitcherItemCollection?: Maybe<IComponentSwitcherItemCollection>;
  entryCollection?: Maybe<IEntryCollection>;
}

export interface IComponentListLinkingCollectionsComponentHeroFormCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentListLinkingCollectionsComponentSwitcherItemCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentListLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentListListItemsCollection {
  __typename?: 'ComponentListListItemsCollection';
  items: Array<Maybe<IComponentListItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export enum IComponentListOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export interface IComponentOffsetGrid extends IEntry {
  __typename?: 'ComponentOffsetGrid';
  contentfulMetadata: IContentfulMetadata;
  eyebrow?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<IComponentOffsetGridLinkingCollections>;
  media?: Maybe<IAsset>;
  offsetGridCardsCollection?: Maybe<IComponentOffsetGridOffsetGridCardsCollection>;
  reference?: Maybe<IComponentImage>;
  sys: ISys;
}

export interface IComponentOffsetGridEyebrowArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentOffsetGridHeadingArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentOffsetGridInternalNameArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentOffsetGridLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IComponentOffsetGridMediaArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentOffsetGridOffsetGridCardsCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentOffsetGridReferenceArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentOffsetGridCard extends IEntry {
  __typename?: 'ComponentOffsetGridCard';
  contentfulMetadata: IContentfulMetadata;
  heading?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<IComponentOffsetGridCardLinkingCollections>;
  subheading?: Maybe<Scalars['String']>;
  sys: ISys;
}

export interface IComponentOffsetGridCardHeadingArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentOffsetGridCardInternalNameArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentOffsetGridCardLinkArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentOffsetGridCardLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IComponentOffsetGridCardSubheadingArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentOffsetGridCardCollection {
  __typename?: 'ComponentOffsetGridCardCollection';
  items: Array<Maybe<IComponentOffsetGridCard>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IComponentOffsetGridCardFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentOffsetGridCardFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentOffsetGridCardFilter>>>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  heading?: InputMaybe<Scalars['String']>;
  heading_contains?: InputMaybe<Scalars['String']>;
  heading_exists?: InputMaybe<Scalars['Boolean']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading_not?: InputMaybe<Scalars['String']>;
  heading_not_contains?: InputMaybe<Scalars['String']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link?: InputMaybe<Scalars['String']>;
  link_contains?: InputMaybe<Scalars['String']>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link_not?: InputMaybe<Scalars['String']>;
  link_not_contains?: InputMaybe<Scalars['String']>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subheading?: InputMaybe<Scalars['String']>;
  subheading_contains?: InputMaybe<Scalars['String']>;
  subheading_exists?: InputMaybe<Scalars['Boolean']>;
  subheading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subheading_not?: InputMaybe<Scalars['String']>;
  subheading_not_contains?: InputMaybe<Scalars['String']>;
  subheading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<ISysFilter>;
}

export interface IComponentOffsetGridCardLinkingCollections {
  __typename?: 'ComponentOffsetGridCardLinkingCollections';
  componentOffsetGridCollection?: Maybe<IComponentOffsetGridCollection>;
  entryCollection?: Maybe<IEntryCollection>;
}

export interface IComponentOffsetGridCardLinkingCollectionsComponentOffsetGridCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentOffsetGridCardLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export enum IComponentOffsetGridCardOrder {
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export interface IComponentOffsetGridCollection {
  __typename?: 'ComponentOffsetGridCollection';
  items: Array<Maybe<IComponentOffsetGrid>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IComponentOffsetGridFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentOffsetGridFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentOffsetGridFilter>>>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  eyebrow?: InputMaybe<Scalars['String']>;
  eyebrow_contains?: InputMaybe<Scalars['String']>;
  eyebrow_exists?: InputMaybe<Scalars['Boolean']>;
  eyebrow_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  eyebrow_not?: InputMaybe<Scalars['String']>;
  eyebrow_not_contains?: InputMaybe<Scalars['String']>;
  eyebrow_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading?: InputMaybe<Scalars['String']>;
  heading_contains?: InputMaybe<Scalars['String']>;
  heading_exists?: InputMaybe<Scalars['Boolean']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading_not?: InputMaybe<Scalars['String']>;
  heading_not_contains?: InputMaybe<Scalars['String']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  media_exists?: InputMaybe<Scalars['Boolean']>;
  offsetGridCardsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  reference?: InputMaybe<ICfComponentImageNestedFilter>;
  reference_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<ISysFilter>;
}

export interface IComponentOffsetGridLinkingCollections {
  __typename?: 'ComponentOffsetGridLinkingCollections';
  entryCollection?: Maybe<IEntryCollection>;
  templatePageCollection?: Maybe<ITemplatePageCollection>;
}

export interface IComponentOffsetGridLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentOffsetGridLinkingCollectionsTemplatePageCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentOffsetGridOffsetGridCardsCollection {
  __typename?: 'ComponentOffsetGridOffsetGridCardsCollection';
  items: Array<Maybe<IComponentOffsetGridOffsetGridCardsItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export type IComponentOffsetGridOffsetGridCardsItem = IComponentOffsetGridCard;

export enum IComponentOffsetGridOrder {
  EyebrowAsc = 'eyebrow_ASC',
  EyebrowDesc = 'eyebrow_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export interface IComponentPricing extends IEntry {
  __typename?: 'ComponentPricing';
  contentfulMetadata: IContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<IComponentPricingLinkingCollections>;
  sys: ISys;
}

export interface IComponentPricingInternalNameArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentPricingLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IComponentPricingCollection {
  __typename?: 'ComponentPricingCollection';
  items: Array<Maybe<IComponentPricing>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IComponentPricingFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentPricingFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentPricingFilter>>>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<ISysFilter>;
}

export interface IComponentPricingLinkingCollections {
  __typename?: 'ComponentPricingLinkingCollections';
  entryCollection?: Maybe<IEntryCollection>;
}

export interface IComponentPricingLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export enum IComponentPricingOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export interface IComponentSignUpForm extends IEntry {
  __typename?: 'ComponentSignUpForm';
  company?: Maybe<IFormInputField>;
  contentfulMetadata: IContentfulMetadata;
  dataCenterList?: Maybe<Array<Maybe<Scalars['String']>>>;
  email?: Maybe<IFormInputField>;
  firstName?: Maybe<IFormInputField>;
  heading?: Maybe<Scalars['String']>;
  hiddenFormsCollection?: Maybe<IComponentSignUpFormHiddenFormsCollection>;
  internalName?: Maybe<Scalars['String']>;
  lastName?: Maybe<IFormInputField>;
  linkedFrom?: Maybe<IComponentSignUpFormLinkingCollections>;
  pageRedirection?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<IFormInputField>;
  privacyNotice?: Maybe<Scalars['String']>;
  sys: ISys;
  termsOfService?: Maybe<Scalars['String']>;
}

export interface IComponentSignUpFormCompanyArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentSignUpFormDataCenterListArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentSignUpFormEmailArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentSignUpFormFirstNameArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentSignUpFormHeadingArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentSignUpFormHiddenFormsCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentSignUpFormInternalNameArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentSignUpFormLastNameArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentSignUpFormLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IComponentSignUpFormPageRedirectionArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentSignUpFormPhoneNumberArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentSignUpFormPrivacyNoticeArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentSignUpFormTermsOfServiceArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentSignUpFormCollection {
  __typename?: 'ComponentSignUpFormCollection';
  items: Array<Maybe<IComponentSignUpForm>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IComponentSignUpFormFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentSignUpFormFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentSignUpFormFilter>>>;
  company?: InputMaybe<ICfFormInputFieldNestedFilter>;
  company_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  dataCenterList_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dataCenterList_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dataCenterList_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dataCenterList_exists?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<ICfFormInputFieldNestedFilter>;
  email_exists?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<ICfFormInputFieldNestedFilter>;
  firstName_exists?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Scalars['String']>;
  heading_contains?: InputMaybe<Scalars['String']>;
  heading_exists?: InputMaybe<Scalars['Boolean']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading_not?: InputMaybe<Scalars['String']>;
  heading_not_contains?: InputMaybe<Scalars['String']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hiddenFormsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastName?: InputMaybe<ICfFormInputFieldNestedFilter>;
  lastName_exists?: InputMaybe<Scalars['Boolean']>;
  pageRedirection?: InputMaybe<Scalars['String']>;
  pageRedirection_contains?: InputMaybe<Scalars['String']>;
  pageRedirection_exists?: InputMaybe<Scalars['Boolean']>;
  pageRedirection_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageRedirection_not?: InputMaybe<Scalars['String']>;
  pageRedirection_not_contains?: InputMaybe<Scalars['String']>;
  pageRedirection_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phoneNumber?: InputMaybe<ICfFormInputFieldNestedFilter>;
  phoneNumber_exists?: InputMaybe<Scalars['Boolean']>;
  privacyNotice?: InputMaybe<Scalars['String']>;
  privacyNotice_contains?: InputMaybe<Scalars['String']>;
  privacyNotice_exists?: InputMaybe<Scalars['Boolean']>;
  privacyNotice_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  privacyNotice_not?: InputMaybe<Scalars['String']>;
  privacyNotice_not_contains?: InputMaybe<Scalars['String']>;
  privacyNotice_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<ISysFilter>;
  termsOfService?: InputMaybe<Scalars['String']>;
  termsOfService_contains?: InputMaybe<Scalars['String']>;
  termsOfService_exists?: InputMaybe<Scalars['Boolean']>;
  termsOfService_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  termsOfService_not?: InputMaybe<Scalars['String']>;
  termsOfService_not_contains?: InputMaybe<Scalars['String']>;
  termsOfService_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IComponentSignUpFormHiddenFormsCollection {
  __typename?: 'ComponentSignUpFormHiddenFormsCollection';
  items: Array<Maybe<IFormInputField>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IComponentSignUpFormLinkingCollections {
  __typename?: 'ComponentSignUpFormLinkingCollections';
  componentHeroFormCollection?: Maybe<IComponentHeroFormCollection>;
  entryCollection?: Maybe<IEntryCollection>;
}

export interface IComponentSignUpFormLinkingCollectionsComponentHeroFormCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentSignUpFormLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export enum IComponentSignUpFormOrder {
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageRedirectionAsc = 'pageRedirection_ASC',
  PageRedirectionDesc = 'pageRedirection_DESC',
  PrivacyNoticeAsc = 'privacyNotice_ASC',
  PrivacyNoticeDesc = 'privacyNotice_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TermsOfServiceAsc = 'termsOfService_ASC',
  TermsOfServiceDesc = 'termsOfService_DESC',
}

export interface IComponentSwitchback extends IEntry {
  __typename?: 'ComponentSwitchback';
  assetSide?: Maybe<Scalars['String']>;
  body?: Maybe<IComponentSwitchbackBody>;
  contentfulMetadata: IContentfulMetadata;
  eyebrow?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<IComponentSwitchbackLinkingCollections>;
  reference?: Maybe<IComponentImage>;
  sys: ISys;
}

export interface IComponentSwitchbackAssetSideArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentSwitchbackBodyArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentSwitchbackEyebrowArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentSwitchbackHeadingArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentSwitchbackInternalNameArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentSwitchbackLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IComponentSwitchbackReferenceArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentSwitchbackBody {
  __typename?: 'ComponentSwitchbackBody';
  json: Scalars['JSON'];
  links: IComponentSwitchbackBodyLinks;
}

export interface IComponentSwitchbackBodyAssets {
  __typename?: 'ComponentSwitchbackBodyAssets';
  block: Array<Maybe<IAsset>>;
  hyperlink: Array<Maybe<IAsset>>;
}

export interface IComponentSwitchbackBodyEntries {
  __typename?: 'ComponentSwitchbackBodyEntries';
  block: Array<Maybe<IEntry>>;
  hyperlink: Array<Maybe<IEntry>>;
  inline: Array<Maybe<IEntry>>;
}

export interface IComponentSwitchbackBodyLinks {
  __typename?: 'ComponentSwitchbackBodyLinks';
  assets: IComponentSwitchbackBodyAssets;
  entries: IComponentSwitchbackBodyEntries;
}

export interface IComponentSwitchbackCollection {
  __typename?: 'ComponentSwitchbackCollection';
  items: Array<Maybe<IComponentSwitchback>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IComponentSwitchbackFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentSwitchbackFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentSwitchbackFilter>>>;
  assetSide?: InputMaybe<Scalars['String']>;
  assetSide_contains?: InputMaybe<Scalars['String']>;
  assetSide_exists?: InputMaybe<Scalars['Boolean']>;
  assetSide_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  assetSide_not?: InputMaybe<Scalars['String']>;
  assetSide_not_contains?: InputMaybe<Scalars['String']>;
  assetSide_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  eyebrow?: InputMaybe<Scalars['String']>;
  eyebrow_contains?: InputMaybe<Scalars['String']>;
  eyebrow_exists?: InputMaybe<Scalars['Boolean']>;
  eyebrow_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  eyebrow_not?: InputMaybe<Scalars['String']>;
  eyebrow_not_contains?: InputMaybe<Scalars['String']>;
  eyebrow_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading?: InputMaybe<Scalars['String']>;
  heading_contains?: InputMaybe<Scalars['String']>;
  heading_exists?: InputMaybe<Scalars['Boolean']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading_not?: InputMaybe<Scalars['String']>;
  heading_not_contains?: InputMaybe<Scalars['String']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  reference?: InputMaybe<ICfComponentImageNestedFilter>;
  reference_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<ISysFilter>;
}

export interface IComponentSwitchbackLinkingCollections {
  __typename?: 'ComponentSwitchbackLinkingCollections';
  entryCollection?: Maybe<IEntryCollection>;
  templatePageCollection?: Maybe<ITemplatePageCollection>;
}

export interface IComponentSwitchbackLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentSwitchbackLinkingCollectionsTemplatePageCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export enum IComponentSwitchbackOrder {
  AssetSideAsc = 'assetSide_ASC',
  AssetSideDesc = 'assetSide_DESC',
  EyebrowAsc = 'eyebrow_ASC',
  EyebrowDesc = 'eyebrow_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export interface IComponentSwitcher extends IEntry {
  __typename?: 'ComponentSwitcher';
  background?: Maybe<Scalars['String']>;
  contentfulMetadata: IContentfulMetadata;
  headingComponent?: Maybe<IComponentHeading>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<IComponentSwitcherLinkingCollections>;
  switcherItemsCollection?: Maybe<IComponentSwitcherSwitcherItemsCollection>;
  sys: ISys;
}

export interface IComponentSwitcherBackgroundArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentSwitcherHeadingComponentArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentSwitcherInternalNameArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentSwitcherLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IComponentSwitcherSwitcherItemsCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentSwitcherCollection {
  __typename?: 'ComponentSwitcherCollection';
  items: Array<Maybe<IComponentSwitcher>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IComponentSwitcherFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentSwitcherFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentSwitcherFilter>>>;
  background?: InputMaybe<Scalars['String']>;
  background_contains?: InputMaybe<Scalars['String']>;
  background_exists?: InputMaybe<Scalars['Boolean']>;
  background_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  background_not?: InputMaybe<Scalars['String']>;
  background_not_contains?: InputMaybe<Scalars['String']>;
  background_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  headingComponent?: InputMaybe<ICfComponentHeadingNestedFilter>;
  headingComponent_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  switcherItemsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<ISysFilter>;
}

export interface IComponentSwitcherItem extends IEntry {
  __typename?: 'ComponentSwitcherItem';
  contentfulMetadata: IContentfulMetadata;
  heading?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<IComponentSwitcherItemLinkingCollections>;
  primaryButton?: Maybe<IComponentButton>;
  secondaryButton?: Maybe<IComponentButton>;
  subheading?: Maybe<Scalars['String']>;
  switcherItemImage?: Maybe<IComponentImage>;
  switcherItemList?: Maybe<IComponentList>;
  switcherItemTitle?: Maybe<Scalars['String']>;
  sys: ISys;
}

export interface IComponentSwitcherItemHeadingArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentSwitcherItemInternalNameArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentSwitcherItemLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IComponentSwitcherItemPrimaryButtonArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentSwitcherItemSecondaryButtonArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentSwitcherItemSubheadingArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentSwitcherItemSwitcherItemImageArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentSwitcherItemSwitcherItemListArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentSwitcherItemSwitcherItemTitleArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentSwitcherItemCollection {
  __typename?: 'ComponentSwitcherItemCollection';
  items: Array<Maybe<IComponentSwitcherItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IComponentSwitcherItemFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentSwitcherItemFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentSwitcherItemFilter>>>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  heading?: InputMaybe<Scalars['String']>;
  heading_contains?: InputMaybe<Scalars['String']>;
  heading_exists?: InputMaybe<Scalars['Boolean']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading_not?: InputMaybe<Scalars['String']>;
  heading_not_contains?: InputMaybe<Scalars['String']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  primaryButton?: InputMaybe<ICfComponentButtonNestedFilter>;
  primaryButton_exists?: InputMaybe<Scalars['Boolean']>;
  secondaryButton?: InputMaybe<ICfComponentButtonNestedFilter>;
  secondaryButton_exists?: InputMaybe<Scalars['Boolean']>;
  subheading?: InputMaybe<Scalars['String']>;
  subheading_contains?: InputMaybe<Scalars['String']>;
  subheading_exists?: InputMaybe<Scalars['Boolean']>;
  subheading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subheading_not?: InputMaybe<Scalars['String']>;
  subheading_not_contains?: InputMaybe<Scalars['String']>;
  subheading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  switcherItemImage?: InputMaybe<ICfComponentImageNestedFilter>;
  switcherItemImage_exists?: InputMaybe<Scalars['Boolean']>;
  switcherItemList?: InputMaybe<ICfComponentListNestedFilter>;
  switcherItemList_exists?: InputMaybe<Scalars['Boolean']>;
  switcherItemTitle?: InputMaybe<Scalars['String']>;
  switcherItemTitle_contains?: InputMaybe<Scalars['String']>;
  switcherItemTitle_exists?: InputMaybe<Scalars['Boolean']>;
  switcherItemTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  switcherItemTitle_not?: InputMaybe<Scalars['String']>;
  switcherItemTitle_not_contains?: InputMaybe<Scalars['String']>;
  switcherItemTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<ISysFilter>;
}

export interface IComponentSwitcherItemLinkingCollections {
  __typename?: 'ComponentSwitcherItemLinkingCollections';
  componentSwitcherCollection?: Maybe<IComponentSwitcherCollection>;
  entryCollection?: Maybe<IEntryCollection>;
}

export interface IComponentSwitcherItemLinkingCollectionsComponentSwitcherCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentSwitcherItemLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export enum IComponentSwitcherItemOrder {
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
  SwitcherItemTitleAsc = 'switcherItemTitle_ASC',
  SwitcherItemTitleDesc = 'switcherItemTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export interface IComponentSwitcherLinkingCollections {
  __typename?: 'ComponentSwitcherLinkingCollections';
  entryCollection?: Maybe<IEntryCollection>;
  templatePageCollection?: Maybe<ITemplatePageCollection>;
}

export interface IComponentSwitcherLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentSwitcherLinkingCollectionsTemplatePageCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export enum IComponentSwitcherOrder {
  BackgroundAsc = 'background_ASC',
  BackgroundDesc = 'background_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export interface IComponentSwitcherSwitcherItemsCollection {
  __typename?: 'ComponentSwitcherSwitcherItemsCollection';
  items: Array<Maybe<IComponentSwitcherItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IComponentTestimonialCard extends IEntry {
  __typename?: 'ComponentTestimonialCard';
  background?: Maybe<Scalars['String']>;
  contentfulMetadata: IContentfulMetadata;
  fullStoryUrl?: Maybe<Scalars['String']>;
  image?: Maybe<IComponentImage>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<IComponentTestimonialCardLinkingCollections>;
  person?: Maybe<IEntityPerson>;
  quote?: Maybe<IComponentTestimonialCardQuote>;
  sys: ISys;
}

export interface IComponentTestimonialCardBackgroundArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentTestimonialCardFullStoryUrlArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentTestimonialCardImageArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentTestimonialCardInternalNameArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentTestimonialCardLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IComponentTestimonialCardPersonArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentTestimonialCardQuoteArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentTestimonialCardCollection {
  __typename?: 'ComponentTestimonialCardCollection';
  items: Array<Maybe<IComponentTestimonialCard>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IComponentTestimonialCardFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentTestimonialCardFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentTestimonialCardFilter>>>;
  background?: InputMaybe<Scalars['String']>;
  background_contains?: InputMaybe<Scalars['String']>;
  background_exists?: InputMaybe<Scalars['Boolean']>;
  background_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  background_not?: InputMaybe<Scalars['String']>;
  background_not_contains?: InputMaybe<Scalars['String']>;
  background_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  fullStoryUrl?: InputMaybe<Scalars['String']>;
  fullStoryUrl_contains?: InputMaybe<Scalars['String']>;
  fullStoryUrl_exists?: InputMaybe<Scalars['Boolean']>;
  fullStoryUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fullStoryUrl_not?: InputMaybe<Scalars['String']>;
  fullStoryUrl_not_contains?: InputMaybe<Scalars['String']>;
  fullStoryUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image?: InputMaybe<ICfComponentImageNestedFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  person?: InputMaybe<ICfEntityPersonNestedFilter>;
  person_exists?: InputMaybe<Scalars['Boolean']>;
  quote_contains?: InputMaybe<Scalars['String']>;
  quote_exists?: InputMaybe<Scalars['Boolean']>;
  quote_not_contains?: InputMaybe<Scalars['String']>;
  sys?: InputMaybe<ISysFilter>;
}

export interface IComponentTestimonialCardLinkingCollections {
  __typename?: 'ComponentTestimonialCardLinkingCollections';
  componentHeroFormCollection?: Maybe<IComponentHeroFormCollection>;
  componentTestimonialsCollection?: Maybe<IComponentTestimonialsCollection>;
  entryCollection?: Maybe<IEntryCollection>;
}

export interface IComponentTestimonialCardLinkingCollectionsComponentHeroFormCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentTestimonialCardLinkingCollectionsComponentTestimonialsCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentTestimonialCardLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export enum IComponentTestimonialCardOrder {
  BackgroundAsc = 'background_ASC',
  BackgroundDesc = 'background_DESC',
  FullStoryUrlAsc = 'fullStoryUrl_ASC',
  FullStoryUrlDesc = 'fullStoryUrl_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export interface IComponentTestimonialCardQuote {
  __typename?: 'ComponentTestimonialCardQuote';
  json: Scalars['JSON'];
  links: IComponentTestimonialCardQuoteLinks;
}

export interface IComponentTestimonialCardQuoteAssets {
  __typename?: 'ComponentTestimonialCardQuoteAssets';
  block: Array<Maybe<IAsset>>;
  hyperlink: Array<Maybe<IAsset>>;
}

export interface IComponentTestimonialCardQuoteEntries {
  __typename?: 'ComponentTestimonialCardQuoteEntries';
  block: Array<Maybe<IEntry>>;
  hyperlink: Array<Maybe<IEntry>>;
  inline: Array<Maybe<IEntry>>;
}

export interface IComponentTestimonialCardQuoteLinks {
  __typename?: 'ComponentTestimonialCardQuoteLinks';
  assets: IComponentTestimonialCardQuoteAssets;
  entries: IComponentTestimonialCardQuoteEntries;
}

export interface IComponentTestimonials extends IEntry {
  __typename?: 'ComponentTestimonials';
  background?: Maybe<Scalars['String']>;
  contained?: Maybe<Scalars['Boolean']>;
  contentfulMetadata: IContentfulMetadata;
  headingComponent?: Maybe<IComponentHeading>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<IComponentTestimonialsLinkingCollections>;
  sys: ISys;
  testimonialCardsCollection?: Maybe<IComponentTestimonialsTestimonialCardsCollection>;
}

export interface IComponentTestimonialsBackgroundArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentTestimonialsContainedArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentTestimonialsHeadingComponentArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentTestimonialsInternalNameArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentTestimonialsLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IComponentTestimonialsTestimonialCardsCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentTestimonialsCollection {
  __typename?: 'ComponentTestimonialsCollection';
  items: Array<Maybe<IComponentTestimonials>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IComponentTestimonialsFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentTestimonialsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentTestimonialsFilter>>>;
  background?: InputMaybe<Scalars['String']>;
  background_contains?: InputMaybe<Scalars['String']>;
  background_exists?: InputMaybe<Scalars['Boolean']>;
  background_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  background_not?: InputMaybe<Scalars['String']>;
  background_not_contains?: InputMaybe<Scalars['String']>;
  background_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contained?: InputMaybe<Scalars['Boolean']>;
  contained_exists?: InputMaybe<Scalars['Boolean']>;
  contained_not?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  headingComponent?: InputMaybe<ICfComponentHeadingNestedFilter>;
  headingComponent_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<ISysFilter>;
  testimonialCardsCollection_exists?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentTestimonialsLinkingCollections {
  __typename?: 'ComponentTestimonialsLinkingCollections';
  entryCollection?: Maybe<IEntryCollection>;
  templatePageCollection?: Maybe<ITemplatePageCollection>;
}

export interface IComponentTestimonialsLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentTestimonialsLinkingCollectionsTemplatePageCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export enum IComponentTestimonialsOrder {
  BackgroundAsc = 'background_ASC',
  BackgroundDesc = 'background_DESC',
  ContainedAsc = 'contained_ASC',
  ContainedDesc = 'contained_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export interface IComponentTestimonialsTestimonialCardsCollection {
  __typename?: 'ComponentTestimonialsTestimonialCardsCollection';
  items: Array<Maybe<IComponentTestimonialCard>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IComponentTrustBar extends IEntry {
  __typename?: 'ComponentTrustBar';
  background?: Maybe<Scalars['String']>;
  companyCollection?: Maybe<IComponentTrustBarCompanyCollection>;
  contentfulMetadata: IContentfulMetadata;
  heading?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<IComponentTrustBarLinkingCollections>;
  sys: ISys;
  variant?: Maybe<Scalars['String']>;
}

export interface IComponentTrustBarBackgroundArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentTrustBarCompanyCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentTrustBarHeadingArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentTrustBarInternalNameArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentTrustBarLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IComponentTrustBarVariantArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentTrustBarCollection {
  __typename?: 'ComponentTrustBarCollection';
  items: Array<Maybe<IComponentTrustBar>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IComponentTrustBarCompanyCollection {
  __typename?: 'ComponentTrustBarCompanyCollection';
  items: Array<Maybe<IEntityCompany>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IComponentTrustBarFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentTrustBarFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentTrustBarFilter>>>;
  background?: InputMaybe<Scalars['String']>;
  background_contains?: InputMaybe<Scalars['String']>;
  background_exists?: InputMaybe<Scalars['Boolean']>;
  background_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  background_not?: InputMaybe<Scalars['String']>;
  background_not_contains?: InputMaybe<Scalars['String']>;
  background_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  companyCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  heading?: InputMaybe<Scalars['String']>;
  heading_contains?: InputMaybe<Scalars['String']>;
  heading_exists?: InputMaybe<Scalars['Boolean']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading_not?: InputMaybe<Scalars['String']>;
  heading_not_contains?: InputMaybe<Scalars['String']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<ISysFilter>;
  variant?: InputMaybe<Scalars['String']>;
  variant_contains?: InputMaybe<Scalars['String']>;
  variant_exists?: InputMaybe<Scalars['Boolean']>;
  variant_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  variant_not?: InputMaybe<Scalars['String']>;
  variant_not_contains?: InputMaybe<Scalars['String']>;
  variant_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IComponentTrustBarLinkingCollections {
  __typename?: 'ComponentTrustBarLinkingCollections';
  componentHeroFormCollection?: Maybe<IComponentHeroFormCollection>;
  entryCollection?: Maybe<IEntryCollection>;
  templatePageCollection?: Maybe<ITemplatePageCollection>;
}

export interface IComponentTrustBarLinkingCollectionsComponentHeroFormCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentTrustBarLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentTrustBarLinkingCollectionsTemplatePageCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export enum IComponentTrustBarOrder {
  BackgroundAsc = 'background_ASC',
  BackgroundDesc = 'background_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC',
}

export interface IComponentVideo extends IEntry {
  __typename?: 'ComponentVideo';
  bynderVideoAsset?: Maybe<Scalars['JSON']>;
  captions?: Maybe<Scalars['JSON']>;
  contentfulMetadata: IContentfulMetadata;
  ctaButton?: Maybe<IComponentButton>;
  heading?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<IComponentVideoLinkingCollections>;
  subheading?: Maybe<Scalars['String']>;
  sys: ISys;
  videoLength?: Maybe<Scalars['String']>;
}

export interface IComponentVideoBynderVideoAssetArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentVideoCaptionsArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentVideoCtaButtonArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IComponentVideoHeadingArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentVideoInternalNameArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentVideoLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IComponentVideoSubheadingArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentVideoVideoLengthArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IComponentVideoCollection {
  __typename?: 'ComponentVideoCollection';
  items: Array<Maybe<IComponentVideo>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IComponentVideoFilter {
  AND?: InputMaybe<Array<InputMaybe<IComponentVideoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IComponentVideoFilter>>>;
  bynderVideoAsset_exists?: InputMaybe<Scalars['Boolean']>;
  captions_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  ctaButton?: InputMaybe<ICfComponentButtonNestedFilter>;
  ctaButton_exists?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Scalars['String']>;
  heading_contains?: InputMaybe<Scalars['String']>;
  heading_exists?: InputMaybe<Scalars['Boolean']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading_not?: InputMaybe<Scalars['String']>;
  heading_not_contains?: InputMaybe<Scalars['String']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subheading?: InputMaybe<Scalars['String']>;
  subheading_contains?: InputMaybe<Scalars['String']>;
  subheading_exists?: InputMaybe<Scalars['Boolean']>;
  subheading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subheading_not?: InputMaybe<Scalars['String']>;
  subheading_not_contains?: InputMaybe<Scalars['String']>;
  subheading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<ISysFilter>;
  videoLength?: InputMaybe<Scalars['String']>;
  videoLength_contains?: InputMaybe<Scalars['String']>;
  videoLength_exists?: InputMaybe<Scalars['Boolean']>;
  videoLength_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  videoLength_not?: InputMaybe<Scalars['String']>;
  videoLength_not_contains?: InputMaybe<Scalars['String']>;
  videoLength_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IComponentVideoLinkingCollections {
  __typename?: 'ComponentVideoLinkingCollections';
  componentBasicCardCollection?: Maybe<IComponentBasicCardCollection>;
  componentHeroCollection?: Maybe<IComponentHeroCollection>;
  componentHeroFormCollection?: Maybe<IComponentHeroFormCollection>;
  entryCollection?: Maybe<IEntryCollection>;
}

export interface IComponentVideoLinkingCollectionsComponentBasicCardCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentVideoLinkingCollectionsComponentHeroCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentVideoLinkingCollectionsComponentHeroFormCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IComponentVideoLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export enum IComponentVideoOrder {
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VideoLengthAsc = 'videoLength_ASC',
  VideoLengthDesc = 'videoLength_DESC',
}

export interface IContentfulMetadata {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<IContentfulTag>>;
}

export interface IContentfulMetadataFilter {
  tags?: InputMaybe<IContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
}

export interface IContentfulMetadataTagsFilter {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IContentfulTag {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
}

export interface IEntityCompany extends IEntry {
  __typename?: 'EntityCompany';
  companyLogoDark?: Maybe<IComponentImage>;
  companyLogoLight?: Maybe<IComponentImage>;
  contentfulMetadata: IContentfulMetadata;
  facebookUrl?: Maybe<Scalars['String']>;
  instagramUrl?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<IEntityCompanyLinkingCollections>;
  linkedinUrl?: Maybe<Scalars['String']>;
  logoDark?: Maybe<IAsset>;
  logoLight?: Maybe<IAsset>;
  name?: Maybe<Scalars['String']>;
  sys: ISys;
  twitterUrl?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  youtubeUrl?: Maybe<Scalars['String']>;
}

export interface IEntityCompanyCompanyLogoDarkArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IEntityCompanyCompanyLogoLightArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IEntityCompanyFacebookUrlArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IEntityCompanyInstagramUrlArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IEntityCompanyLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IEntityCompanyLinkedinUrlArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IEntityCompanyLogoDarkArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IEntityCompanyLogoLightArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IEntityCompanyNameArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IEntityCompanyTwitterUrlArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IEntityCompanyUrlArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IEntityCompanyYoutubeUrlArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IEntityCompanyCollection {
  __typename?: 'EntityCompanyCollection';
  items: Array<Maybe<IEntityCompany>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IEntityCompanyFilter {
  AND?: InputMaybe<Array<InputMaybe<IEntityCompanyFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IEntityCompanyFilter>>>;
  companyLogoDark?: InputMaybe<ICfComponentImageNestedFilter>;
  companyLogoDark_exists?: InputMaybe<Scalars['Boolean']>;
  companyLogoLight?: InputMaybe<ICfComponentImageNestedFilter>;
  companyLogoLight_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  facebookUrl?: InputMaybe<Scalars['String']>;
  facebookUrl_contains?: InputMaybe<Scalars['String']>;
  facebookUrl_exists?: InputMaybe<Scalars['Boolean']>;
  facebookUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  facebookUrl_not?: InputMaybe<Scalars['String']>;
  facebookUrl_not_contains?: InputMaybe<Scalars['String']>;
  facebookUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  instagramUrl?: InputMaybe<Scalars['String']>;
  instagramUrl_contains?: InputMaybe<Scalars['String']>;
  instagramUrl_exists?: InputMaybe<Scalars['Boolean']>;
  instagramUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  instagramUrl_not?: InputMaybe<Scalars['String']>;
  instagramUrl_not_contains?: InputMaybe<Scalars['String']>;
  instagramUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linkedinUrl?: InputMaybe<Scalars['String']>;
  linkedinUrl_contains?: InputMaybe<Scalars['String']>;
  linkedinUrl_exists?: InputMaybe<Scalars['Boolean']>;
  linkedinUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linkedinUrl_not?: InputMaybe<Scalars['String']>;
  linkedinUrl_not_contains?: InputMaybe<Scalars['String']>;
  linkedinUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  logoDark_exists?: InputMaybe<Scalars['Boolean']>;
  logoLight_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<ISysFilter>;
  twitterUrl?: InputMaybe<Scalars['String']>;
  twitterUrl_contains?: InputMaybe<Scalars['String']>;
  twitterUrl_exists?: InputMaybe<Scalars['Boolean']>;
  twitterUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  twitterUrl_not?: InputMaybe<Scalars['String']>;
  twitterUrl_not_contains?: InputMaybe<Scalars['String']>;
  twitterUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  youtubeUrl?: InputMaybe<Scalars['String']>;
  youtubeUrl_contains?: InputMaybe<Scalars['String']>;
  youtubeUrl_exists?: InputMaybe<Scalars['Boolean']>;
  youtubeUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  youtubeUrl_not?: InputMaybe<Scalars['String']>;
  youtubeUrl_not_contains?: InputMaybe<Scalars['String']>;
  youtubeUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IEntityCompanyLinkingCollections {
  __typename?: 'EntityCompanyLinkingCollections';
  componentFooterCollection?: Maybe<IComponentFooterCollection>;
  componentTrustBarCollection?: Maybe<IComponentTrustBarCollection>;
  entityPersonCollection?: Maybe<IEntityPersonCollection>;
  entryCollection?: Maybe<IEntryCollection>;
}

export interface IEntityCompanyLinkingCollectionsComponentFooterCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IEntityCompanyLinkingCollectionsComponentTrustBarCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IEntityCompanyLinkingCollectionsEntityPersonCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IEntityCompanyLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export enum IEntityCompanyOrder {
  FacebookUrlAsc = 'facebookUrl_ASC',
  FacebookUrlDesc = 'facebookUrl_DESC',
  InstagramUrlAsc = 'instagramUrl_ASC',
  InstagramUrlDesc = 'instagramUrl_DESC',
  LinkedinUrlAsc = 'linkedinUrl_ASC',
  LinkedinUrlDesc = 'linkedinUrl_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TwitterUrlAsc = 'twitterUrl_ASC',
  TwitterUrlDesc = 'twitterUrl_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  YoutubeUrlAsc = 'youtubeUrl_ASC',
  YoutubeUrlDesc = 'youtubeUrl_DESC',
}

export interface IEntityPerson extends IEntry {
  __typename?: 'EntityPerson';
  company?: Maybe<IEntityCompany>;
  contentfulMetadata: IContentfulMetadata;
  fullName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<IEntityPersonLinkingCollections>;
  role?: Maybe<Scalars['String']>;
  sys: ISys;
}

export interface IEntityPersonCompanyArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IEntityPersonFullNameArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IEntityPersonLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IEntityPersonRoleArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IEntityPersonCollection {
  __typename?: 'EntityPersonCollection';
  items: Array<Maybe<IEntityPerson>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IEntityPersonFilter {
  AND?: InputMaybe<Array<InputMaybe<IEntityPersonFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IEntityPersonFilter>>>;
  company?: InputMaybe<ICfEntityCompanyNestedFilter>;
  company_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  fullName?: InputMaybe<Scalars['String']>;
  fullName_contains?: InputMaybe<Scalars['String']>;
  fullName_exists?: InputMaybe<Scalars['Boolean']>;
  fullName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fullName_not?: InputMaybe<Scalars['String']>;
  fullName_not_contains?: InputMaybe<Scalars['String']>;
  fullName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  role?: InputMaybe<Scalars['String']>;
  role_contains?: InputMaybe<Scalars['String']>;
  role_exists?: InputMaybe<Scalars['Boolean']>;
  role_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  role_not?: InputMaybe<Scalars['String']>;
  role_not_contains?: InputMaybe<Scalars['String']>;
  role_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<ISysFilter>;
}

export interface IEntityPersonLinkingCollections {
  __typename?: 'EntityPersonLinkingCollections';
  componentCaseStudyCardCollection?: Maybe<IComponentCaseStudyCardCollection>;
  componentTestimonialCardCollection?: Maybe<IComponentTestimonialCardCollection>;
  entryCollection?: Maybe<IEntryCollection>;
}

export interface IEntityPersonLinkingCollectionsComponentCaseStudyCardCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IEntityPersonLinkingCollectionsComponentTestimonialCardCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IEntityPersonLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export enum IEntityPersonOrder {
  FullNameAsc = 'fullName_ASC',
  FullNameDesc = 'fullName_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export interface IEntry {
  contentfulMetadata: IContentfulMetadata;
  sys: ISys;
}

export interface IEntryCollection {
  __typename?: 'EntryCollection';
  items: Array<Maybe<IEntry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IEntryFilter {
  AND?: InputMaybe<Array<InputMaybe<IEntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IEntryFilter>>>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  sys?: InputMaybe<ISysFilter>;
}

export enum IEntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export interface IFormDropdownField extends IEntry {
  __typename?: 'FormDropdownField';
  contentfulMetadata: IContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<IFormDropdownFieldLinkingCollections>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  placeholder?: Maybe<Scalars['String']>;
  sys: ISys;
}

export interface IFormDropdownFieldInternalNameArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IFormDropdownFieldLabelArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IFormDropdownFieldLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IFormDropdownFieldOptionsArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IFormDropdownFieldPlaceholderArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IFormDropdownFieldCollection {
  __typename?: 'FormDropdownFieldCollection';
  items: Array<Maybe<IFormDropdownField>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IFormDropdownFieldFilter {
  AND?: InputMaybe<Array<InputMaybe<IFormDropdownFieldFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IFormDropdownFieldFilter>>>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  label?: InputMaybe<Scalars['String']>;
  label_contains?: InputMaybe<Scalars['String']>;
  label_exists?: InputMaybe<Scalars['Boolean']>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  label_not?: InputMaybe<Scalars['String']>;
  label_not_contains?: InputMaybe<Scalars['String']>;
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  options_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  options_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  options_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  options_exists?: InputMaybe<Scalars['Boolean']>;
  placeholder?: InputMaybe<Scalars['String']>;
  placeholder_contains?: InputMaybe<Scalars['String']>;
  placeholder_exists?: InputMaybe<Scalars['Boolean']>;
  placeholder_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  placeholder_not?: InputMaybe<Scalars['String']>;
  placeholder_not_contains?: InputMaybe<Scalars['String']>;
  placeholder_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<ISysFilter>;
}

export interface IFormDropdownFieldLinkingCollections {
  __typename?: 'FormDropdownFieldLinkingCollections';
  componentGenericFormCollection?: Maybe<IComponentGenericFormCollection>;
  entryCollection?: Maybe<IEntryCollection>;
}

export interface IFormDropdownFieldLinkingCollectionsComponentGenericFormCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IFormDropdownFieldLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export enum IFormDropdownFieldOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  PlaceholderAsc = 'placeholder_ASC',
  PlaceholderDesc = 'placeholder_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export interface IFormInputField extends IEntry {
  __typename?: 'FormInputField';
  contentfulMetadata: IContentfulMetadata;
  disabled?: Maybe<Scalars['Boolean']>;
  endIcon?: Maybe<Scalars['String']>;
  helperText?: Maybe<Scalars['String']>;
  hiddenField?: Maybe<Scalars['Boolean']>;
  identification?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<IFormInputFieldLinkingCollections>;
  placeholder?: Maybe<Scalars['String']>;
  startIcon?: Maybe<Scalars['String']>;
  sys: ISys;
  toolTipDescription?: Maybe<Scalars['String']>;
  toolTipTitle?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  valueOfField?: Maybe<Scalars['String']>;
}

export interface IFormInputFieldDisabledArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IFormInputFieldEndIconArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IFormInputFieldHelperTextArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IFormInputFieldHiddenFieldArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IFormInputFieldIdentificationArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IFormInputFieldInternalNameArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IFormInputFieldLabelArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IFormInputFieldLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IFormInputFieldPlaceholderArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IFormInputFieldStartIconArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IFormInputFieldToolTipDescriptionArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IFormInputFieldToolTipTitleArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IFormInputFieldTypeArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IFormInputFieldValueOfFieldArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IFormInputFieldCollection {
  __typename?: 'FormInputFieldCollection';
  items: Array<Maybe<IFormInputField>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IFormInputFieldFilter {
  AND?: InputMaybe<Array<InputMaybe<IFormInputFieldFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IFormInputFieldFilter>>>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  disabled_exists?: InputMaybe<Scalars['Boolean']>;
  disabled_not?: InputMaybe<Scalars['Boolean']>;
  endIcon?: InputMaybe<Scalars['String']>;
  endIcon_contains?: InputMaybe<Scalars['String']>;
  endIcon_exists?: InputMaybe<Scalars['Boolean']>;
  endIcon_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  endIcon_not?: InputMaybe<Scalars['String']>;
  endIcon_not_contains?: InputMaybe<Scalars['String']>;
  endIcon_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  helperText?: InputMaybe<Scalars['String']>;
  helperText_contains?: InputMaybe<Scalars['String']>;
  helperText_exists?: InputMaybe<Scalars['Boolean']>;
  helperText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  helperText_not?: InputMaybe<Scalars['String']>;
  helperText_not_contains?: InputMaybe<Scalars['String']>;
  helperText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hiddenField?: InputMaybe<Scalars['Boolean']>;
  hiddenField_exists?: InputMaybe<Scalars['Boolean']>;
  hiddenField_not?: InputMaybe<Scalars['Boolean']>;
  identification?: InputMaybe<Scalars['String']>;
  identification_contains?: InputMaybe<Scalars['String']>;
  identification_exists?: InputMaybe<Scalars['Boolean']>;
  identification_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  identification_not?: InputMaybe<Scalars['String']>;
  identification_not_contains?: InputMaybe<Scalars['String']>;
  identification_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  label?: InputMaybe<Scalars['String']>;
  label_contains?: InputMaybe<Scalars['String']>;
  label_exists?: InputMaybe<Scalars['Boolean']>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  label_not?: InputMaybe<Scalars['String']>;
  label_not_contains?: InputMaybe<Scalars['String']>;
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  placeholder?: InputMaybe<Scalars['String']>;
  placeholder_contains?: InputMaybe<Scalars['String']>;
  placeholder_exists?: InputMaybe<Scalars['Boolean']>;
  placeholder_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  placeholder_not?: InputMaybe<Scalars['String']>;
  placeholder_not_contains?: InputMaybe<Scalars['String']>;
  placeholder_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startIcon?: InputMaybe<Scalars['String']>;
  startIcon_contains?: InputMaybe<Scalars['String']>;
  startIcon_exists?: InputMaybe<Scalars['Boolean']>;
  startIcon_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startIcon_not?: InputMaybe<Scalars['String']>;
  startIcon_not_contains?: InputMaybe<Scalars['String']>;
  startIcon_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<ISysFilter>;
  toolTipDescription?: InputMaybe<Scalars['String']>;
  toolTipDescription_contains?: InputMaybe<Scalars['String']>;
  toolTipDescription_exists?: InputMaybe<Scalars['Boolean']>;
  toolTipDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  toolTipDescription_not?: InputMaybe<Scalars['String']>;
  toolTipDescription_not_contains?: InputMaybe<Scalars['String']>;
  toolTipDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  toolTipTitle?: InputMaybe<Scalars['String']>;
  toolTipTitle_contains?: InputMaybe<Scalars['String']>;
  toolTipTitle_exists?: InputMaybe<Scalars['Boolean']>;
  toolTipTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  toolTipTitle_not?: InputMaybe<Scalars['String']>;
  toolTipTitle_not_contains?: InputMaybe<Scalars['String']>;
  toolTipTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Scalars['String']>;
  type_contains?: InputMaybe<Scalars['String']>;
  type_exists?: InputMaybe<Scalars['Boolean']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type_not?: InputMaybe<Scalars['String']>;
  type_not_contains?: InputMaybe<Scalars['String']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  valueOfField?: InputMaybe<Scalars['String']>;
  valueOfField_contains?: InputMaybe<Scalars['String']>;
  valueOfField_exists?: InputMaybe<Scalars['Boolean']>;
  valueOfField_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  valueOfField_not?: InputMaybe<Scalars['String']>;
  valueOfField_not_contains?: InputMaybe<Scalars['String']>;
  valueOfField_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IFormInputFieldLinkingCollections {
  __typename?: 'FormInputFieldLinkingCollections';
  componentGenericFormCollection?: Maybe<IComponentGenericFormCollection>;
  componentInputFieldCollection?: Maybe<IComponentInputFieldCollection>;
  componentSignUpFormCollection?: Maybe<IComponentSignUpFormCollection>;
  entryCollection?: Maybe<IEntryCollection>;
}

export interface IFormInputFieldLinkingCollectionsComponentGenericFormCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IFormInputFieldLinkingCollectionsComponentInputFieldCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IFormInputFieldLinkingCollectionsComponentSignUpFormCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IFormInputFieldLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export enum IFormInputFieldOrder {
  DisabledAsc = 'disabled_ASC',
  DisabledDesc = 'disabled_DESC',
  EndIconAsc = 'endIcon_ASC',
  EndIconDesc = 'endIcon_DESC',
  HelperTextAsc = 'helperText_ASC',
  HelperTextDesc = 'helperText_DESC',
  HiddenFieldAsc = 'hiddenField_ASC',
  HiddenFieldDesc = 'hiddenField_DESC',
  IdentificationAsc = 'identification_ASC',
  IdentificationDesc = 'identification_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  PlaceholderAsc = 'placeholder_ASC',
  PlaceholderDesc = 'placeholder_DESC',
  StartIconAsc = 'startIcon_ASC',
  StartIconDesc = 'startIcon_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  ToolTipDescriptionAsc = 'toolTipDescription_ASC',
  ToolTipDescriptionDesc = 'toolTipDescription_DESC',
  ToolTipTitleAsc = 'toolTipTitle_ASC',
  ToolTipTitleDesc = 'toolTipTitle_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  ValueOfFieldAsc = 'valueOfField_ASC',
  ValueOfFieldDesc = 'valueOfField_DESC',
}

export enum IImageFormat {
  Avif = 'AVIF',
  Jpg = 'JPG',
  JpgProgressive = 'JPG_PROGRESSIVE',
  Png = 'PNG',
  Png8 = 'PNG8',
  Webp = 'WEBP',
}

export enum IImageResizeFocus {
  Bottom = 'BOTTOM',
  BottomLeft = 'BOTTOM_LEFT',
  BottomRight = 'BOTTOM_RIGHT',
  Center = 'CENTER',
  Face = 'FACE',
  Faces = 'FACES',
  Left = 'LEFT',
  Right = 'RIGHT',
  Top = 'TOP',
  TopLeft = 'TOP_LEFT',
  TopRight = 'TOP_RIGHT',
}

export enum IImageResizeStrategy {
  Crop = 'CROP',
  Fill = 'FILL',
  Fit = 'FIT',
  Pad = 'PAD',
  Scale = 'SCALE',
  Thumb = 'THUMB',
}

export interface IImageTransformOptions {
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  cornerRadius?: InputMaybe<Scalars['Int']>;
  format?: InputMaybe<IImageFormat>;
  height?: InputMaybe<Scalars['Dimension']>;
  quality?: InputMaybe<Scalars['Quality']>;
  resizeFocus?: InputMaybe<IImageResizeFocus>;
  resizeStrategy?: InputMaybe<IImageResizeStrategy>;
  width?: InputMaybe<Scalars['Dimension']>;
}

export interface IMenuItem extends IEntry {
  __typename?: 'MenuItem';
  blogFormat?: Maybe<Scalars['Boolean']>;
  button?: Maybe<IComponentButton>;
  contentfulMetadata: IContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<IComponentImage>;
  internalName?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<IMenuItemLinkingCollections>;
  menuCollection?: Maybe<IMenuItemMenuCollection>;
  sys: ISys;
}

export interface IMenuItemBlogFormatArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IMenuItemButtonArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IMenuItemDescriptionArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IMenuItemImageArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IMenuItemInternalNameArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IMenuItemLabelArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IMenuItemLinkArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IMenuItemLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IMenuItemMenuCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IMenuItemCollection {
  __typename?: 'MenuItemCollection';
  items: Array<Maybe<IMenuItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IMenuItemFilter {
  AND?: InputMaybe<Array<InputMaybe<IMenuItemFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IMenuItemFilter>>>;
  blogFormat?: InputMaybe<Scalars['Boolean']>;
  blogFormat_exists?: InputMaybe<Scalars['Boolean']>;
  blogFormat_not?: InputMaybe<Scalars['Boolean']>;
  button?: InputMaybe<ICfComponentButtonNestedFilter>;
  button_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image?: InputMaybe<ICfComponentImageNestedFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  label?: InputMaybe<Scalars['String']>;
  label_contains?: InputMaybe<Scalars['String']>;
  label_exists?: InputMaybe<Scalars['Boolean']>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  label_not?: InputMaybe<Scalars['String']>;
  label_not_contains?: InputMaybe<Scalars['String']>;
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link?: InputMaybe<Scalars['String']>;
  link_contains?: InputMaybe<Scalars['String']>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link_not?: InputMaybe<Scalars['String']>;
  link_not_contains?: InputMaybe<Scalars['String']>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  menuCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<ISysFilter>;
}

export interface IMenuItemLinkingCollections {
  __typename?: 'MenuItemLinkingCollections';
  componentFooterCollection?: Maybe<IComponentFooterCollection>;
  componentHeaderCollection?: Maybe<IComponentHeaderCollection>;
  entryCollection?: Maybe<IEntryCollection>;
  menuItemCollection?: Maybe<IMenuItemCollection>;
}

export interface IMenuItemLinkingCollectionsComponentFooterCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IMenuItemLinkingCollectionsComponentHeaderCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IMenuItemLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IMenuItemLinkingCollectionsMenuItemCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IMenuItemMenuCollection {
  __typename?: 'MenuItemMenuCollection';
  items: Array<Maybe<IMenuItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export enum IMenuItemOrder {
  BlogFormatAsc = 'blogFormat_ASC',
  BlogFormatDesc = 'blogFormat_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export interface IMetaSeo extends IEntry {
  __typename?: 'MetaSeo';
  contentfulMetadata: IContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<IMetaSeoLinkingCollections>;
  noFollow?: Maybe<Scalars['Boolean']>;
  noIndex?: Maybe<Scalars['Boolean']>;
  openGraphImage?: Maybe<IAsset>;
  pageDescription?: Maybe<Scalars['String']>;
  pageTitle?: Maybe<Scalars['String']>;
  sys: ISys;
}

export interface IMetaSeoInternalNameArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IMetaSeoLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface IMetaSeoNoFollowArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IMetaSeoNoIndexArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IMetaSeoOpenGraphImageArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IMetaSeoPageDescriptionArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IMetaSeoPageTitleArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface IMetaSeoCollection {
  __typename?: 'MetaSeoCollection';
  items: Array<Maybe<IMetaSeo>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IMetaSeoFilter {
  AND?: InputMaybe<Array<InputMaybe<IMetaSeoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IMetaSeoFilter>>>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  noFollow?: InputMaybe<Scalars['Boolean']>;
  noFollow_exists?: InputMaybe<Scalars['Boolean']>;
  noFollow_not?: InputMaybe<Scalars['Boolean']>;
  noIndex?: InputMaybe<Scalars['Boolean']>;
  noIndex_exists?: InputMaybe<Scalars['Boolean']>;
  noIndex_not?: InputMaybe<Scalars['Boolean']>;
  openGraphImage_exists?: InputMaybe<Scalars['Boolean']>;
  pageDescription?: InputMaybe<Scalars['String']>;
  pageDescription_contains?: InputMaybe<Scalars['String']>;
  pageDescription_exists?: InputMaybe<Scalars['Boolean']>;
  pageDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageDescription_not?: InputMaybe<Scalars['String']>;
  pageDescription_not_contains?: InputMaybe<Scalars['String']>;
  pageDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageTitle?: InputMaybe<Scalars['String']>;
  pageTitle_contains?: InputMaybe<Scalars['String']>;
  pageTitle_exists?: InputMaybe<Scalars['Boolean']>;
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageTitle_not?: InputMaybe<Scalars['String']>;
  pageTitle_not_contains?: InputMaybe<Scalars['String']>;
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<ISysFilter>;
}

export interface IMetaSeoLinkingCollections {
  __typename?: 'MetaSeoLinkingCollections';
  entryCollection?: Maybe<IEntryCollection>;
  templatePageCollection?: Maybe<ITemplatePageCollection>;
}

export interface IMetaSeoLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface IMetaSeoLinkingCollectionsTemplatePageCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export enum IMetaSeoOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NoFollowAsc = 'noFollow_ASC',
  NoFollowDesc = 'noFollow_DESC',
  NoIndexAsc = 'noIndex_ASC',
  NoIndexDesc = 'noIndex_DESC',
  PageDescriptionAsc = 'pageDescription_ASC',
  PageDescriptionDesc = 'pageDescription_DESC',
  PageTitleAsc = 'pageTitle_ASC',
  PageTitleDesc = 'pageTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export interface IQuery {
  __typename?: 'Query';
  asset?: Maybe<IAsset>;
  assetCollection?: Maybe<IAssetCollection>;
  componentAccolades?: Maybe<IComponentAccolades>;
  componentAccoladesCollection?: Maybe<IComponentAccoladesCollection>;
  componentAccordion?: Maybe<IComponentAccordion>;
  componentAccordionCollection?: Maybe<IComponentAccordionCollection>;
  componentBasicCard?: Maybe<IComponentBasicCard>;
  componentBasicCardCollection?: Maybe<IComponentBasicCardCollection>;
  componentButton?: Maybe<IComponentButton>;
  componentButtonCollection?: Maybe<IComponentButtonCollection>;
  componentBynder?: Maybe<IComponentBynder>;
  componentBynderCollection?: Maybe<IComponentBynderCollection>;
  componentCardDeck?: Maybe<IComponentCardDeck>;
  componentCardDeckCollection?: Maybe<IComponentCardDeckCollection>;
  componentCaseStudies?: Maybe<IComponentCaseStudies>;
  componentCaseStudiesCollection?: Maybe<IComponentCaseStudiesCollection>;
  componentCaseStudyCard?: Maybe<IComponentCaseStudyCard>;
  componentCaseStudyCardCollection?: Maybe<IComponentCaseStudyCardCollection>;
  componentConversionPanel?: Maybe<IComponentConversionPanel>;
  componentConversionPanelCollection?: Maybe<IComponentConversionPanelCollection>;
  componentFeatures?: Maybe<IComponentFeatures>;
  componentFeaturesCard?: Maybe<IComponentFeaturesCard>;
  componentFeaturesCardCollection?: Maybe<IComponentFeaturesCardCollection>;
  componentFeaturesCollection?: Maybe<IComponentFeaturesCollection>;
  componentFooter?: Maybe<IComponentFooter>;
  componentFooterCollection?: Maybe<IComponentFooterCollection>;
  componentForm?: Maybe<IComponentForm>;
  componentFormCollection?: Maybe<IComponentFormCollection>;
  componentFullWidthSwitchback?: Maybe<IComponentFullWidthSwitchback>;
  componentFullWidthSwitchbackCollection?: Maybe<IComponentFullWidthSwitchbackCollection>;
  componentGenericForm?: Maybe<IComponentGenericForm>;
  componentGenericFormCollection?: Maybe<IComponentGenericFormCollection>;
  componentHeader?: Maybe<IComponentHeader>;
  componentHeaderCollection?: Maybe<IComponentHeaderCollection>;
  componentHeading?: Maybe<IComponentHeading>;
  componentHeadingCollection?: Maybe<IComponentHeadingCollection>;
  componentHero?: Maybe<IComponentHero>;
  componentHeroCollection?: Maybe<IComponentHeroCollection>;
  componentHeroForm?: Maybe<IComponentHeroForm>;
  componentHeroFormCollection?: Maybe<IComponentHeroFormCollection>;
  componentImage?: Maybe<IComponentImage>;
  componentImageCollection?: Maybe<IComponentImageCollection>;
  componentInputField?: Maybe<IComponentInputField>;
  componentInputFieldCollection?: Maybe<IComponentInputFieldCollection>;
  componentList?: Maybe<IComponentList>;
  componentListCollection?: Maybe<IComponentListCollection>;
  componentListItem?: Maybe<IComponentListItem>;
  componentListItemCollection?: Maybe<IComponentListItemCollection>;
  componentOffsetGrid?: Maybe<IComponentOffsetGrid>;
  componentOffsetGridCard?: Maybe<IComponentOffsetGridCard>;
  componentOffsetGridCardCollection?: Maybe<IComponentOffsetGridCardCollection>;
  componentOffsetGridCollection?: Maybe<IComponentOffsetGridCollection>;
  componentPricing?: Maybe<IComponentPricing>;
  componentPricingCollection?: Maybe<IComponentPricingCollection>;
  componentSignUpForm?: Maybe<IComponentSignUpForm>;
  componentSignUpFormCollection?: Maybe<IComponentSignUpFormCollection>;
  componentSwitchback?: Maybe<IComponentSwitchback>;
  componentSwitchbackCollection?: Maybe<IComponentSwitchbackCollection>;
  componentSwitcher?: Maybe<IComponentSwitcher>;
  componentSwitcherCollection?: Maybe<IComponentSwitcherCollection>;
  componentSwitcherItem?: Maybe<IComponentSwitcherItem>;
  componentSwitcherItemCollection?: Maybe<IComponentSwitcherItemCollection>;
  componentTestimonialCard?: Maybe<IComponentTestimonialCard>;
  componentTestimonialCardCollection?: Maybe<IComponentTestimonialCardCollection>;
  componentTestimonials?: Maybe<IComponentTestimonials>;
  componentTestimonialsCollection?: Maybe<IComponentTestimonialsCollection>;
  componentTrustBar?: Maybe<IComponentTrustBar>;
  componentTrustBarCollection?: Maybe<IComponentTrustBarCollection>;
  componentVideo?: Maybe<IComponentVideo>;
  componentVideoCollection?: Maybe<IComponentVideoCollection>;
  entityCompany?: Maybe<IEntityCompany>;
  entityCompanyCollection?: Maybe<IEntityCompanyCollection>;
  entityPerson?: Maybe<IEntityPerson>;
  entityPersonCollection?: Maybe<IEntityPersonCollection>;
  entryCollection?: Maybe<IEntryCollection>;
  formDropdownField?: Maybe<IFormDropdownField>;
  formDropdownFieldCollection?: Maybe<IFormDropdownFieldCollection>;
  formInputField?: Maybe<IFormInputField>;
  formInputFieldCollection?: Maybe<IFormInputFieldCollection>;
  menuItem?: Maybe<IMenuItem>;
  menuItemCollection?: Maybe<IMenuItemCollection>;
  metaSeo?: Maybe<IMetaSeo>;
  metaSeoCollection?: Maybe<IMetaSeoCollection>;
  templatePage?: Maybe<ITemplatePage>;
  templatePageCollection?: Maybe<ITemplatePageCollection>;
}

export interface IQueryAssetArgs {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IQueryAssetCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IAssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IAssetFilter>;
}

export interface IQueryComponentAccoladesArgs {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IQueryComponentAccoladesCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IComponentAccoladesOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IComponentAccoladesFilter>;
}

export interface IQueryComponentAccordionArgs {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IQueryComponentAccordionCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IComponentAccordionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IComponentAccordionFilter>;
}

export interface IQueryComponentBasicCardArgs {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IQueryComponentBasicCardCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IComponentBasicCardOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IComponentBasicCardFilter>;
}

export interface IQueryComponentButtonArgs {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IQueryComponentButtonCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IComponentButtonOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IComponentButtonFilter>;
}

export interface IQueryComponentBynderArgs {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IQueryComponentBynderCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IComponentBynderOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IComponentBynderFilter>;
}

export interface IQueryComponentCardDeckArgs {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IQueryComponentCardDeckCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IComponentCardDeckOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IComponentCardDeckFilter>;
}

export interface IQueryComponentCaseStudiesArgs {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IQueryComponentCaseStudiesCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IComponentCaseStudiesOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IComponentCaseStudiesFilter>;
}

export interface IQueryComponentCaseStudyCardArgs {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IQueryComponentCaseStudyCardCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IComponentCaseStudyCardOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IComponentCaseStudyCardFilter>;
}

export interface IQueryComponentConversionPanelArgs {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IQueryComponentConversionPanelCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IComponentConversionPanelOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IComponentConversionPanelFilter>;
}

export interface IQueryComponentFeaturesArgs {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IQueryComponentFeaturesCardArgs {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IQueryComponentFeaturesCardCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IComponentFeaturesCardOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IComponentFeaturesCardFilter>;
}

export interface IQueryComponentFeaturesCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IComponentFeaturesOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IComponentFeaturesFilter>;
}

export interface IQueryComponentFooterArgs {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IQueryComponentFooterCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IComponentFooterOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IComponentFooterFilter>;
}

export interface IQueryComponentFormArgs {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IQueryComponentFormCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IComponentFormOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IComponentFormFilter>;
}

export interface IQueryComponentFullWidthSwitchbackArgs {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IQueryComponentFullWidthSwitchbackCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IComponentFullWidthSwitchbackOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IComponentFullWidthSwitchbackFilter>;
}

export interface IQueryComponentGenericFormArgs {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IQueryComponentGenericFormCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IComponentGenericFormOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IComponentGenericFormFilter>;
}

export interface IQueryComponentHeaderArgs {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IQueryComponentHeaderCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IComponentHeaderOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IComponentHeaderFilter>;
}

export interface IQueryComponentHeadingArgs {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IQueryComponentHeadingCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IComponentHeadingOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IComponentHeadingFilter>;
}

export interface IQueryComponentHeroArgs {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IQueryComponentHeroCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IComponentHeroOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IComponentHeroFilter>;
}

export interface IQueryComponentHeroFormArgs {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IQueryComponentHeroFormCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IComponentHeroFormOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IComponentHeroFormFilter>;
}

export interface IQueryComponentImageArgs {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IQueryComponentImageCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IComponentImageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IComponentImageFilter>;
}

export interface IQueryComponentInputFieldArgs {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IQueryComponentInputFieldCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IComponentInputFieldOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IComponentInputFieldFilter>;
}

export interface IQueryComponentListArgs {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IQueryComponentListCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IComponentListOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IComponentListFilter>;
}

export interface IQueryComponentListItemArgs {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IQueryComponentListItemCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IComponentListItemOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IComponentListItemFilter>;
}

export interface IQueryComponentOffsetGridArgs {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IQueryComponentOffsetGridCardArgs {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IQueryComponentOffsetGridCardCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IComponentOffsetGridCardOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IComponentOffsetGridCardFilter>;
}

export interface IQueryComponentOffsetGridCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IComponentOffsetGridOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IComponentOffsetGridFilter>;
}

export interface IQueryComponentPricingArgs {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IQueryComponentPricingCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IComponentPricingOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IComponentPricingFilter>;
}

export interface IQueryComponentSignUpFormArgs {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IQueryComponentSignUpFormCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IComponentSignUpFormOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IComponentSignUpFormFilter>;
}

export interface IQueryComponentSwitchbackArgs {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IQueryComponentSwitchbackCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IComponentSwitchbackOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IComponentSwitchbackFilter>;
}

export interface IQueryComponentSwitcherArgs {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IQueryComponentSwitcherCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IComponentSwitcherOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IComponentSwitcherFilter>;
}

export interface IQueryComponentSwitcherItemArgs {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IQueryComponentSwitcherItemCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IComponentSwitcherItemOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IComponentSwitcherItemFilter>;
}

export interface IQueryComponentTestimonialCardArgs {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IQueryComponentTestimonialCardCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IComponentTestimonialCardOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IComponentTestimonialCardFilter>;
}

export interface IQueryComponentTestimonialsArgs {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IQueryComponentTestimonialsCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IComponentTestimonialsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IComponentTestimonialsFilter>;
}

export interface IQueryComponentTrustBarArgs {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IQueryComponentTrustBarCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IComponentTrustBarOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IComponentTrustBarFilter>;
}

export interface IQueryComponentVideoArgs {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IQueryComponentVideoCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IComponentVideoOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IComponentVideoFilter>;
}

export interface IQueryEntityCompanyArgs {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IQueryEntityCompanyCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IEntityCompanyOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IEntityCompanyFilter>;
}

export interface IQueryEntityPersonArgs {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IQueryEntityPersonCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IEntityPersonOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IEntityPersonFilter>;
}

export interface IQueryEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IEntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IEntryFilter>;
}

export interface IQueryFormDropdownFieldArgs {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IQueryFormDropdownFieldCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IFormDropdownFieldOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IFormDropdownFieldFilter>;
}

export interface IQueryFormInputFieldArgs {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IQueryFormInputFieldCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IFormInputFieldOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IFormInputFieldFilter>;
}

export interface IQueryMenuItemArgs {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IQueryMenuItemCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IMenuItemOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IMenuItemFilter>;
}

export interface IQueryMetaSeoArgs {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IQueryMetaSeoCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IMetaSeoOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IMetaSeoFilter>;
}

export interface IQueryTemplatePageArgs {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface IQueryTemplatePageCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ITemplatePageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ITemplatePageFilter>;
}

export interface ISys {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
}

export interface ISysFilter {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
}

export interface ITemplatePage extends IEntry {
  __typename?: 'TemplatePage';
  blackFooter?: Maybe<Scalars['Boolean']>;
  blackHeader?: Maybe<Scalars['Boolean']>;
  componentsCollection?: Maybe<ITemplatePageComponentsCollection>;
  contentfulMetadata: IContentfulMetadata;
  footerStyle?: Maybe<Scalars['String']>;
  headerStyle?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ITemplatePageLinkingCollections>;
  mainContentName?: Maybe<Scalars['String']>;
  productNavigation?: Maybe<IComponentHeader>;
  seoMetadata?: Maybe<IMetaSeo>;
  slug?: Maybe<Scalars['String']>;
  sys: ISys;
}

export interface ITemplatePageBlackFooterArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface ITemplatePageBlackHeaderArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface ITemplatePageComponentsCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export interface ITemplatePageFooterStyleArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface ITemplatePageHeaderStyleArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface ITemplatePageInternalNameArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface ITemplatePageLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface ITemplatePageMainContentNameArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface ITemplatePageProductNavigationArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface ITemplatePageSeoMetadataArgs {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}

export interface ITemplatePageSlugArgs {
  locale?: InputMaybe<Scalars['String']>;
}

export interface ITemplatePageCollection {
  __typename?: 'TemplatePageCollection';
  items: Array<Maybe<ITemplatePage>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export interface ITemplatePageComponentsCollection {
  __typename?: 'TemplatePageComponentsCollection';
  items: Array<Maybe<ITemplatePageComponentsItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
}

export type ITemplatePageComponentsItem =
  | IComponentAccolades
  | IComponentAccordion
  | IComponentCardDeck
  | IComponentCaseStudies
  | IComponentConversionPanel
  | IComponentFeatures
  | IComponentFullWidthSwitchback
  | IComponentHeading
  | IComponentHero
  | IComponentHeroForm
  | IComponentOffsetGrid
  | IComponentSwitchback
  | IComponentSwitcher
  | IComponentTestimonials
  | IComponentTrustBar;

export interface ITemplatePageFilter {
  AND?: InputMaybe<Array<InputMaybe<ITemplatePageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ITemplatePageFilter>>>;
  blackFooter?: InputMaybe<Scalars['Boolean']>;
  blackFooter_exists?: InputMaybe<Scalars['Boolean']>;
  blackFooter_not?: InputMaybe<Scalars['Boolean']>;
  blackHeader?: InputMaybe<Scalars['Boolean']>;
  blackHeader_exists?: InputMaybe<Scalars['Boolean']>;
  blackHeader_not?: InputMaybe<Scalars['Boolean']>;
  componentsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  footerStyle?: InputMaybe<Scalars['String']>;
  footerStyle_contains?: InputMaybe<Scalars['String']>;
  footerStyle_exists?: InputMaybe<Scalars['Boolean']>;
  footerStyle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  footerStyle_not?: InputMaybe<Scalars['String']>;
  footerStyle_not_contains?: InputMaybe<Scalars['String']>;
  footerStyle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headerStyle?: InputMaybe<Scalars['String']>;
  headerStyle_contains?: InputMaybe<Scalars['String']>;
  headerStyle_exists?: InputMaybe<Scalars['Boolean']>;
  headerStyle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headerStyle_not?: InputMaybe<Scalars['String']>;
  headerStyle_not_contains?: InputMaybe<Scalars['String']>;
  headerStyle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mainContentName?: InputMaybe<Scalars['String']>;
  mainContentName_contains?: InputMaybe<Scalars['String']>;
  mainContentName_exists?: InputMaybe<Scalars['Boolean']>;
  mainContentName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mainContentName_not?: InputMaybe<Scalars['String']>;
  mainContentName_not_contains?: InputMaybe<Scalars['String']>;
  mainContentName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  productNavigation?: InputMaybe<ICfComponentHeaderNestedFilter>;
  productNavigation_exists?: InputMaybe<Scalars['Boolean']>;
  seoMetadata?: InputMaybe<ICfMetaSeoNestedFilter>;
  seoMetadata_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<ISysFilter>;
}

export interface ITemplatePageLinkingCollections {
  __typename?: 'TemplatePageLinkingCollections';
  entryCollection?: Maybe<IEntryCollection>;
}

export interface ITemplatePageLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
}

export enum ITemplatePageOrder {
  BlackFooterAsc = 'blackFooter_ASC',
  BlackFooterDesc = 'blackFooter_DESC',
  BlackHeaderAsc = 'blackHeader_ASC',
  BlackHeaderDesc = 'blackHeader_DESC',
  FooterStyleAsc = 'footerStyle_ASC',
  FooterStyleDesc = 'footerStyle_DESC',
  HeaderStyleAsc = 'headerStyle_ASC',
  HeaderStyleDesc = 'headerStyle_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  MainContentNameAsc = 'mainContentName_ASC',
  MainContentNameDesc = 'mainContentName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export interface ICfComponentButtonNestedFilter {
  AND?: InputMaybe<Array<InputMaybe<ICfComponentButtonNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ICfComponentButtonNestedFilter>>>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  endIcon?: InputMaybe<Scalars['String']>;
  endIcon_contains?: InputMaybe<Scalars['String']>;
  endIcon_exists?: InputMaybe<Scalars['Boolean']>;
  endIcon_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  endIcon_not?: InputMaybe<Scalars['String']>;
  endIcon_not_contains?: InputMaybe<Scalars['String']>;
  endIcon_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hierarchy?: InputMaybe<Scalars['String']>;
  hierarchy_contains?: InputMaybe<Scalars['String']>;
  hierarchy_exists?: InputMaybe<Scalars['Boolean']>;
  hierarchy_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hierarchy_not?: InputMaybe<Scalars['String']>;
  hierarchy_not_contains?: InputMaybe<Scalars['String']>;
  hierarchy_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  label?: InputMaybe<Scalars['String']>;
  labelIcon?: InputMaybe<Scalars['String']>;
  labelIcon_contains?: InputMaybe<Scalars['String']>;
  labelIcon_exists?: InputMaybe<Scalars['Boolean']>;
  labelIcon_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  labelIcon_not?: InputMaybe<Scalars['String']>;
  labelIcon_not_contains?: InputMaybe<Scalars['String']>;
  labelIcon_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  label_contains?: InputMaybe<Scalars['String']>;
  label_exists?: InputMaybe<Scalars['Boolean']>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  label_not?: InputMaybe<Scalars['String']>;
  label_not_contains?: InputMaybe<Scalars['String']>;
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link?: InputMaybe<Scalars['String']>;
  link_contains?: InputMaybe<Scalars['String']>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link_not?: InputMaybe<Scalars['String']>;
  link_not_contains?: InputMaybe<Scalars['String']>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rainbowHover?: InputMaybe<Scalars['Boolean']>;
  rainbowHover_exists?: InputMaybe<Scalars['Boolean']>;
  rainbowHover_not?: InputMaybe<Scalars['Boolean']>;
  size?: InputMaybe<Scalars['String']>;
  size_contains?: InputMaybe<Scalars['String']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  size_not?: InputMaybe<Scalars['String']>;
  size_not_contains?: InputMaybe<Scalars['String']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startIcon?: InputMaybe<Scalars['String']>;
  startIcon_contains?: InputMaybe<Scalars['String']>;
  startIcon_exists?: InputMaybe<Scalars['Boolean']>;
  startIcon_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startIcon_not?: InputMaybe<Scalars['String']>;
  startIcon_not_contains?: InputMaybe<Scalars['String']>;
  startIcon_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<ISysFilter>;
}

export interface ICfComponentHeaderNestedFilter {
  AND?: InputMaybe<Array<InputMaybe<ICfComponentHeaderNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ICfComponentHeaderNestedFilter>>>;
  callToActionDark_exists?: InputMaybe<Scalars['Boolean']>;
  callToActionMobile_exists?: InputMaybe<Scalars['Boolean']>;
  callToAction_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  freshworksProduct?: InputMaybe<Scalars['String']>;
  freshworksProduct_contains?: InputMaybe<Scalars['String']>;
  freshworksProduct_exists?: InputMaybe<Scalars['Boolean']>;
  freshworksProduct_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  freshworksProduct_not?: InputMaybe<Scalars['String']>;
  freshworksProduct_not_contains?: InputMaybe<Scalars['String']>;
  freshworksProduct_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  navigationLinksCollection_exists?: InputMaybe<Scalars['Boolean']>;
  navigationLinksMobileCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<ISysFilter>;
}

export interface ICfComponentHeadingNestedFilter {
  AND?: InputMaybe<Array<InputMaybe<ICfComponentHeadingNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ICfComponentHeadingNestedFilter>>>;
  background?: InputMaybe<Scalars['String']>;
  background_contains?: InputMaybe<Scalars['String']>;
  background_exists?: InputMaybe<Scalars['Boolean']>;
  background_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  background_not?: InputMaybe<Scalars['String']>;
  background_not_contains?: InputMaybe<Scalars['String']>;
  background_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  eyebrow?: InputMaybe<Scalars['String']>;
  eyebrow_contains?: InputMaybe<Scalars['String']>;
  eyebrow_exists?: InputMaybe<Scalars['Boolean']>;
  eyebrow_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  eyebrow_not?: InputMaybe<Scalars['String']>;
  eyebrow_not_contains?: InputMaybe<Scalars['String']>;
  eyebrow_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading?: InputMaybe<Scalars['String']>;
  heading_contains?: InputMaybe<Scalars['String']>;
  heading_exists?: InputMaybe<Scalars['Boolean']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading_not?: InputMaybe<Scalars['String']>;
  heading_not_contains?: InputMaybe<Scalars['String']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<ISysFilter>;
}

export interface ICfComponentImageNestedFilter {
  AND?: InputMaybe<Array<InputMaybe<ICfComponentImageNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ICfComponentImageNestedFilter>>>;
  alternateText?: InputMaybe<Scalars['String']>;
  alternateText_contains?: InputMaybe<Scalars['String']>;
  alternateText_exists?: InputMaybe<Scalars['Boolean']>;
  alternateText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  alternateText_not?: InputMaybe<Scalars['String']>;
  alternateText_not_contains?: InputMaybe<Scalars['String']>;
  alternateText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  bynderImage_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<ISysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface ICfComponentListNestedFilter {
  AND?: InputMaybe<Array<InputMaybe<ICfComponentListNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ICfComponentListNestedFilter>>>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  listItemsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<ISysFilter>;
}

export interface ICfComponentSignUpFormNestedFilter {
  AND?: InputMaybe<Array<InputMaybe<ICfComponentSignUpFormNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ICfComponentSignUpFormNestedFilter>>>;
  company_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  dataCenterList_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dataCenterList_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dataCenterList_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dataCenterList_exists?: InputMaybe<Scalars['Boolean']>;
  email_exists?: InputMaybe<Scalars['Boolean']>;
  firstName_exists?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Scalars['String']>;
  heading_contains?: InputMaybe<Scalars['String']>;
  heading_exists?: InputMaybe<Scalars['Boolean']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading_not?: InputMaybe<Scalars['String']>;
  heading_not_contains?: InputMaybe<Scalars['String']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hiddenFormsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastName_exists?: InputMaybe<Scalars['Boolean']>;
  pageRedirection?: InputMaybe<Scalars['String']>;
  pageRedirection_contains?: InputMaybe<Scalars['String']>;
  pageRedirection_exists?: InputMaybe<Scalars['Boolean']>;
  pageRedirection_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageRedirection_not?: InputMaybe<Scalars['String']>;
  pageRedirection_not_contains?: InputMaybe<Scalars['String']>;
  pageRedirection_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phoneNumber_exists?: InputMaybe<Scalars['Boolean']>;
  privacyNotice?: InputMaybe<Scalars['String']>;
  privacyNotice_contains?: InputMaybe<Scalars['String']>;
  privacyNotice_exists?: InputMaybe<Scalars['Boolean']>;
  privacyNotice_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  privacyNotice_not?: InputMaybe<Scalars['String']>;
  privacyNotice_not_contains?: InputMaybe<Scalars['String']>;
  privacyNotice_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<ISysFilter>;
  termsOfService?: InputMaybe<Scalars['String']>;
  termsOfService_contains?: InputMaybe<Scalars['String']>;
  termsOfService_exists?: InputMaybe<Scalars['Boolean']>;
  termsOfService_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  termsOfService_not?: InputMaybe<Scalars['String']>;
  termsOfService_not_contains?: InputMaybe<Scalars['String']>;
  termsOfService_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface ICfComponentTrustBarNestedFilter {
  AND?: InputMaybe<Array<InputMaybe<ICfComponentTrustBarNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ICfComponentTrustBarNestedFilter>>>;
  background?: InputMaybe<Scalars['String']>;
  background_contains?: InputMaybe<Scalars['String']>;
  background_exists?: InputMaybe<Scalars['Boolean']>;
  background_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  background_not?: InputMaybe<Scalars['String']>;
  background_not_contains?: InputMaybe<Scalars['String']>;
  background_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  companyCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  heading?: InputMaybe<Scalars['String']>;
  heading_contains?: InputMaybe<Scalars['String']>;
  heading_exists?: InputMaybe<Scalars['Boolean']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading_not?: InputMaybe<Scalars['String']>;
  heading_not_contains?: InputMaybe<Scalars['String']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<ISysFilter>;
  variant?: InputMaybe<Scalars['String']>;
  variant_contains?: InputMaybe<Scalars['String']>;
  variant_exists?: InputMaybe<Scalars['Boolean']>;
  variant_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  variant_not?: InputMaybe<Scalars['String']>;
  variant_not_contains?: InputMaybe<Scalars['String']>;
  variant_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface ICfComponentVideoNestedFilter {
  AND?: InputMaybe<Array<InputMaybe<ICfComponentVideoNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ICfComponentVideoNestedFilter>>>;
  bynderVideoAsset_exists?: InputMaybe<Scalars['Boolean']>;
  captions_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  ctaButton_exists?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Scalars['String']>;
  heading_contains?: InputMaybe<Scalars['String']>;
  heading_exists?: InputMaybe<Scalars['Boolean']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading_not?: InputMaybe<Scalars['String']>;
  heading_not_contains?: InputMaybe<Scalars['String']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subheading?: InputMaybe<Scalars['String']>;
  subheading_contains?: InputMaybe<Scalars['String']>;
  subheading_exists?: InputMaybe<Scalars['Boolean']>;
  subheading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subheading_not?: InputMaybe<Scalars['String']>;
  subheading_not_contains?: InputMaybe<Scalars['String']>;
  subheading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<ISysFilter>;
  videoLength?: InputMaybe<Scalars['String']>;
  videoLength_contains?: InputMaybe<Scalars['String']>;
  videoLength_exists?: InputMaybe<Scalars['Boolean']>;
  videoLength_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  videoLength_not?: InputMaybe<Scalars['String']>;
  videoLength_not_contains?: InputMaybe<Scalars['String']>;
  videoLength_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface ICfEntityCompanyNestedFilter {
  AND?: InputMaybe<Array<InputMaybe<ICfEntityCompanyNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ICfEntityCompanyNestedFilter>>>;
  companyLogoDark_exists?: InputMaybe<Scalars['Boolean']>;
  companyLogoLight_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  facebookUrl?: InputMaybe<Scalars['String']>;
  facebookUrl_contains?: InputMaybe<Scalars['String']>;
  facebookUrl_exists?: InputMaybe<Scalars['Boolean']>;
  facebookUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  facebookUrl_not?: InputMaybe<Scalars['String']>;
  facebookUrl_not_contains?: InputMaybe<Scalars['String']>;
  facebookUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  instagramUrl?: InputMaybe<Scalars['String']>;
  instagramUrl_contains?: InputMaybe<Scalars['String']>;
  instagramUrl_exists?: InputMaybe<Scalars['Boolean']>;
  instagramUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  instagramUrl_not?: InputMaybe<Scalars['String']>;
  instagramUrl_not_contains?: InputMaybe<Scalars['String']>;
  instagramUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linkedinUrl?: InputMaybe<Scalars['String']>;
  linkedinUrl_contains?: InputMaybe<Scalars['String']>;
  linkedinUrl_exists?: InputMaybe<Scalars['Boolean']>;
  linkedinUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linkedinUrl_not?: InputMaybe<Scalars['String']>;
  linkedinUrl_not_contains?: InputMaybe<Scalars['String']>;
  linkedinUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  logoDark_exists?: InputMaybe<Scalars['Boolean']>;
  logoLight_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<ISysFilter>;
  twitterUrl?: InputMaybe<Scalars['String']>;
  twitterUrl_contains?: InputMaybe<Scalars['String']>;
  twitterUrl_exists?: InputMaybe<Scalars['Boolean']>;
  twitterUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  twitterUrl_not?: InputMaybe<Scalars['String']>;
  twitterUrl_not_contains?: InputMaybe<Scalars['String']>;
  twitterUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  youtubeUrl?: InputMaybe<Scalars['String']>;
  youtubeUrl_contains?: InputMaybe<Scalars['String']>;
  youtubeUrl_exists?: InputMaybe<Scalars['Boolean']>;
  youtubeUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  youtubeUrl_not?: InputMaybe<Scalars['String']>;
  youtubeUrl_not_contains?: InputMaybe<Scalars['String']>;
  youtubeUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface ICfEntityPersonNestedFilter {
  AND?: InputMaybe<Array<InputMaybe<ICfEntityPersonNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ICfEntityPersonNestedFilter>>>;
  company_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  fullName?: InputMaybe<Scalars['String']>;
  fullName_contains?: InputMaybe<Scalars['String']>;
  fullName_exists?: InputMaybe<Scalars['Boolean']>;
  fullName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fullName_not?: InputMaybe<Scalars['String']>;
  fullName_not_contains?: InputMaybe<Scalars['String']>;
  fullName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  role?: InputMaybe<Scalars['String']>;
  role_contains?: InputMaybe<Scalars['String']>;
  role_exists?: InputMaybe<Scalars['Boolean']>;
  role_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  role_not?: InputMaybe<Scalars['String']>;
  role_not_contains?: InputMaybe<Scalars['String']>;
  role_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<ISysFilter>;
}

export interface ICfFormInputFieldNestedFilter {
  AND?: InputMaybe<Array<InputMaybe<ICfFormInputFieldNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ICfFormInputFieldNestedFilter>>>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  disabled_exists?: InputMaybe<Scalars['Boolean']>;
  disabled_not?: InputMaybe<Scalars['Boolean']>;
  endIcon?: InputMaybe<Scalars['String']>;
  endIcon_contains?: InputMaybe<Scalars['String']>;
  endIcon_exists?: InputMaybe<Scalars['Boolean']>;
  endIcon_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  endIcon_not?: InputMaybe<Scalars['String']>;
  endIcon_not_contains?: InputMaybe<Scalars['String']>;
  endIcon_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  helperText?: InputMaybe<Scalars['String']>;
  helperText_contains?: InputMaybe<Scalars['String']>;
  helperText_exists?: InputMaybe<Scalars['Boolean']>;
  helperText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  helperText_not?: InputMaybe<Scalars['String']>;
  helperText_not_contains?: InputMaybe<Scalars['String']>;
  helperText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hiddenField?: InputMaybe<Scalars['Boolean']>;
  hiddenField_exists?: InputMaybe<Scalars['Boolean']>;
  hiddenField_not?: InputMaybe<Scalars['Boolean']>;
  identification?: InputMaybe<Scalars['String']>;
  identification_contains?: InputMaybe<Scalars['String']>;
  identification_exists?: InputMaybe<Scalars['Boolean']>;
  identification_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  identification_not?: InputMaybe<Scalars['String']>;
  identification_not_contains?: InputMaybe<Scalars['String']>;
  identification_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  label?: InputMaybe<Scalars['String']>;
  label_contains?: InputMaybe<Scalars['String']>;
  label_exists?: InputMaybe<Scalars['Boolean']>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  label_not?: InputMaybe<Scalars['String']>;
  label_not_contains?: InputMaybe<Scalars['String']>;
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  placeholder?: InputMaybe<Scalars['String']>;
  placeholder_contains?: InputMaybe<Scalars['String']>;
  placeholder_exists?: InputMaybe<Scalars['Boolean']>;
  placeholder_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  placeholder_not?: InputMaybe<Scalars['String']>;
  placeholder_not_contains?: InputMaybe<Scalars['String']>;
  placeholder_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startIcon?: InputMaybe<Scalars['String']>;
  startIcon_contains?: InputMaybe<Scalars['String']>;
  startIcon_exists?: InputMaybe<Scalars['Boolean']>;
  startIcon_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startIcon_not?: InputMaybe<Scalars['String']>;
  startIcon_not_contains?: InputMaybe<Scalars['String']>;
  startIcon_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<ISysFilter>;
  toolTipDescription?: InputMaybe<Scalars['String']>;
  toolTipDescription_contains?: InputMaybe<Scalars['String']>;
  toolTipDescription_exists?: InputMaybe<Scalars['Boolean']>;
  toolTipDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  toolTipDescription_not?: InputMaybe<Scalars['String']>;
  toolTipDescription_not_contains?: InputMaybe<Scalars['String']>;
  toolTipDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  toolTipTitle?: InputMaybe<Scalars['String']>;
  toolTipTitle_contains?: InputMaybe<Scalars['String']>;
  toolTipTitle_exists?: InputMaybe<Scalars['Boolean']>;
  toolTipTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  toolTipTitle_not?: InputMaybe<Scalars['String']>;
  toolTipTitle_not_contains?: InputMaybe<Scalars['String']>;
  toolTipTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Scalars['String']>;
  type_contains?: InputMaybe<Scalars['String']>;
  type_exists?: InputMaybe<Scalars['Boolean']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type_not?: InputMaybe<Scalars['String']>;
  type_not_contains?: InputMaybe<Scalars['String']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  valueOfField?: InputMaybe<Scalars['String']>;
  valueOfField_contains?: InputMaybe<Scalars['String']>;
  valueOfField_exists?: InputMaybe<Scalars['Boolean']>;
  valueOfField_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  valueOfField_not?: InputMaybe<Scalars['String']>;
  valueOfField_not_contains?: InputMaybe<Scalars['String']>;
  valueOfField_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface ICfMenuItemNestedFilter {
  AND?: InputMaybe<Array<InputMaybe<ICfMenuItemNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ICfMenuItemNestedFilter>>>;
  blogFormat?: InputMaybe<Scalars['Boolean']>;
  blogFormat_exists?: InputMaybe<Scalars['Boolean']>;
  blogFormat_not?: InputMaybe<Scalars['Boolean']>;
  button_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  label?: InputMaybe<Scalars['String']>;
  label_contains?: InputMaybe<Scalars['String']>;
  label_exists?: InputMaybe<Scalars['Boolean']>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  label_not?: InputMaybe<Scalars['String']>;
  label_not_contains?: InputMaybe<Scalars['String']>;
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link?: InputMaybe<Scalars['String']>;
  link_contains?: InputMaybe<Scalars['String']>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link_not?: InputMaybe<Scalars['String']>;
  link_not_contains?: InputMaybe<Scalars['String']>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  menuCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<ISysFilter>;
}

export interface ICfMetaSeoNestedFilter {
  AND?: InputMaybe<Array<InputMaybe<ICfMetaSeoNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ICfMetaSeoNestedFilter>>>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  noFollow?: InputMaybe<Scalars['Boolean']>;
  noFollow_exists?: InputMaybe<Scalars['Boolean']>;
  noFollow_not?: InputMaybe<Scalars['Boolean']>;
  noIndex?: InputMaybe<Scalars['Boolean']>;
  noIndex_exists?: InputMaybe<Scalars['Boolean']>;
  noIndex_not?: InputMaybe<Scalars['Boolean']>;
  openGraphImage_exists?: InputMaybe<Scalars['Boolean']>;
  pageDescription?: InputMaybe<Scalars['String']>;
  pageDescription_contains?: InputMaybe<Scalars['String']>;
  pageDescription_exists?: InputMaybe<Scalars['Boolean']>;
  pageDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageDescription_not?: InputMaybe<Scalars['String']>;
  pageDescription_not_contains?: InputMaybe<Scalars['String']>;
  pageDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageTitle?: InputMaybe<Scalars['String']>;
  pageTitle_contains?: InputMaybe<Scalars['String']>;
  pageTitle_exists?: InputMaybe<Scalars['Boolean']>;
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageTitle_not?: InputMaybe<Scalars['String']>;
  pageTitle_not_contains?: InputMaybe<Scalars['String']>;
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<ISysFilter>;
}

declare global {
  export type AssetFragment = {
    __typename: 'Asset';
    contentType?: string | null;
    title?: string | null;
    description?: string | null;
    url?: string | null;
    width?: number | null;
    height?: number | null;
    sys: { __typename?: 'Sys'; id: string };
  };

  export type ComponentAccordionFragment = {
    __typename: 'ComponentAccordion';
    internalName?: string | null;
    eyebrow?: string | null;
    heading?: string | null;
    variant?: string | null;
    sys: { __typename?: 'Sys'; id: string };
    body?: {
      __typename?: 'ComponentAccordionBody';
      json: any;
      links: {
        __typename?: 'ComponentAccordionBodyLinks';
        entries: {
          __typename?: 'ComponentAccordionBodyEntries';
          block: Array<
            | { __typename?: 'ComponentAccolades' }
            | { __typename?: 'ComponentAccordion' }
            | { __typename?: 'ComponentBasicCard' }
            | ({ __typename?: 'ComponentButton' } & ComponentButtonFragment)
            | { __typename?: 'ComponentBynder' }
            | { __typename?: 'ComponentCardDeck' }
            | { __typename?: 'ComponentCaseStudies' }
            | { __typename?: 'ComponentCaseStudyCard' }
            | { __typename?: 'ComponentConversionPanel' }
            | { __typename?: 'ComponentFeatures' }
            | { __typename?: 'ComponentFeaturesCard' }
            | { __typename?: 'ComponentFooter' }
            | { __typename?: 'ComponentForm' }
            | { __typename?: 'ComponentFullWidthSwitchback' }
            | { __typename?: 'ComponentGenericForm' }
            | { __typename?: 'ComponentHeader' }
            | { __typename?: 'ComponentHeading' }
            | { __typename?: 'ComponentHero' }
            | { __typename?: 'ComponentHeroForm' }
            | { __typename?: 'ComponentImage' }
            | { __typename?: 'ComponentInputField' }
            | { __typename?: 'ComponentList' }
            | { __typename?: 'ComponentListItem' }
            | { __typename?: 'ComponentOffsetGrid' }
            | { __typename?: 'ComponentOffsetGridCard' }
            | { __typename?: 'ComponentPricing' }
            | { __typename?: 'ComponentSignUpForm' }
            | { __typename?: 'ComponentSwitchback' }
            | { __typename?: 'ComponentSwitcher' }
            | { __typename?: 'ComponentSwitcherItem' }
            | { __typename?: 'ComponentTestimonialCard' }
            | { __typename?: 'ComponentTestimonials' }
            | { __typename?: 'ComponentTrustBar' }
            | { __typename?: 'ComponentVideo' }
            | { __typename?: 'EntityCompany' }
            | { __typename?: 'EntityPerson' }
            | { __typename?: 'FormDropdownField' }
            | { __typename?: 'FormInputField' }
            | { __typename?: 'MenuItem' }
            | { __typename?: 'MetaSeo' }
            | { __typename?: 'TemplatePage' }
            | null
          >;
        };
      };
    } | null;
    accordionItemsCollection?: {
      __typename?: 'ComponentAccordionAccordionItemsCollection';
      items: Array<({ __typename?: 'ComponentListItem' } & ComponentListItemFragment) | null>;
    } | null;
  };

  export type ComponentListItemFragment = {
    __typename: 'ComponentListItem';
    internalName?: string | null;
    symbol?: string | null;
    title?: string | null;
    sys: { __typename?: 'Sys'; id: string };
    body?: { __typename?: 'ComponentListItemBody'; json: any } | null;
  };

  export type ComponentFeaturesFragment = {
    __typename: 'ComponentFeatures';
    internalName?: string | null;
    background?: string | null;
    eyebrow?: string | null;
    heading?: string | null;
    imageSide?: string | null;
    sys: { __typename?: 'Sys'; id: string };
    body?: {
      __typename?: 'ComponentFeaturesBody';
      json: any;
      links: {
        __typename?: 'ComponentFeaturesBodyLinks';
        entries: {
          __typename?: 'ComponentFeaturesBodyEntries';
          block: Array<
            | { __typename?: 'ComponentAccolades'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentAccordion'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentBasicCard'; sys: { __typename?: 'Sys'; id: string } }
            | ({ __typename?: 'ComponentButton'; sys: { __typename?: 'Sys'; id: string } } & ComponentButtonFragment)
            | { __typename?: 'ComponentBynder'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentCardDeck'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentCaseStudies'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentCaseStudyCard'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentConversionPanel'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentFeatures'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentFeaturesCard'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentFooter'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentForm'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentFullWidthSwitchback'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentGenericForm'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentHeader'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentHeading'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentHero'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentHeroForm'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentImage'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentInputField'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentList'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentListItem'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentOffsetGrid'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentOffsetGridCard'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentPricing'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentSignUpForm'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentSwitchback'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentSwitcher'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentSwitcherItem'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentTestimonialCard'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentTestimonials'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentTrustBar'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentVideo'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'EntityCompany'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'EntityPerson'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'FormDropdownField'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'FormInputField'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'MenuItem'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'MetaSeo'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'TemplatePage'; sys: { __typename?: 'Sys'; id: string } }
            | null
          >;
        };
      };
    } | null;
    callToAction?: ({ __typename?: 'ComponentButton' } & ComponentButtonFragment) | null;
    featuresImage?: ({ __typename?: 'ComponentImage' } & ComponentImageFragment) | null;
    featureCardsCollection?: {
      __typename?: 'ComponentFeaturesFeatureCardsCollection';
      items: Array<({ __typename?: 'ComponentFeaturesCard' } & ComponentFeaturesCardFragment) | null>;
    } | null;
  };

  export type ComponentFeaturesCardFragment = {
    __typename: 'ComponentFeaturesCard';
    internalName?: string | null;
    icon?: string | null;
    heading?: string | null;
    subheading?: string | null;
    sys: { __typename?: 'Sys'; id: string };
  };

  export type ComponentButtonFragment = {
    __typename: 'ComponentButton';
    internalName?: string | null;
    label?: string | null;
    labelIcon?: string | null;
    link?: string | null;
    hierarchy?: string | null;
    size?: string | null;
    startIcon?: string | null;
    endIcon?: string | null;
    rainbowHover?: boolean | null;
    sys: { __typename?: 'Sys'; id: string };
  };

  export type ComponentCardDeckFragment = {
    __typename: 'ComponentCardDeck';
    internalName?: string | null;
    headingDirection?: string | null;
    centerHeadingContent?: boolean | null;
    sys: { __typename?: 'Sys'; id: string };
    headingComponent?: ({ __typename?: 'ComponentHeading' } & ComponentHeadingFragment) | null;
    cardsCollection?: {
      __typename?: 'ComponentCardDeckCardsCollection';
      items: Array<({ __typename?: 'ComponentBasicCard' } & ComponentBasicCardFragment) | null>;
    } | null;
  };

  export type ComponentCaseStudiesFragment = {
    __typename: 'ComponentCaseStudies';
    internalName?: string | null;
    background?: string | null;
    sys: { __typename?: 'Sys'; id: string };
    headingComponent?: ({ __typename?: 'ComponentHeading' } & ComponentHeadingFragment) | null;
    caseStudyCardsCollection?: {
      __typename?: 'ComponentCaseStudiesCaseStudyCardsCollection';
      items: Array<({ __typename?: 'ComponentCaseStudyCard' } & ComponentCaseStudyCardFragment) | null>;
    } | null;
  };

  export type ComponentCaseStudyCardFragment = {
    __typename: 'ComponentCaseStudyCard';
    internalName?: string | null;
    sys: { __typename?: 'Sys'; id: string };
    caseStudyLinkButton?: ({ __typename?: 'ComponentButton' } & ComponentButtonFragment) | null;
    caseStudyImage?: ({ __typename?: 'ComponentImage' } & ComponentImageFragment) | null;
    caseStudyStats?: { __typename?: 'ComponentCaseStudyCardCaseStudyStats'; json: any } | null;
    quote?: { __typename?: 'ComponentCaseStudyCardQuote'; json: any } | null;
    person?: ({ __typename?: 'EntityPerson' } & EntityPersonFragment) | null;
  };

  export type ComponentImageFragment = {
    __typename: 'ComponentImage';
    internalName?: string | null;
    title?: string | null;
    alternateText?: string | null;
    bynderImage?: any | null;
    sys: { __typename?: 'Sys'; id: string };
    image?: ({ __typename?: 'Asset' } & AssetFragment) | null;
  };

  export type MetaSeoFragment = {
    __typename: 'MetaSeo';
    internalName?: string | null;
    pageTitle?: string | null;
    pageDescription?: string | null;
    noIndex?: boolean | null;
    noFollow?: boolean | null;
    sys: { __typename?: 'Sys'; id: string };
    openGraphImage?: ({ __typename?: 'Asset' } & AssetFragment) | null;
  };

  export type ComponentHeroFragment = {
    __typename: 'ComponentHero';
    internalName?: string | null;
    background?: string | null;
    eyebrow?: string | null;
    heading?: string | null;
    sys: { __typename?: 'Sys'; id: string };
    reference?: ({ __typename?: 'ComponentImage' } & ComponentImageFragment) | null;
    body?: {
      __typename?: 'ComponentHeroBody';
      json: any;
      links: {
        __typename?: 'ComponentHeroBodyLinks';
        entries: {
          __typename?: 'ComponentHeroBodyEntries';
          block: Array<
            | ({
                __typename?: 'ComponentAccolades';
                sys: { __typename?: 'Sys'; id: string };
              } & ComponentAccoladesFragment)
            | { __typename?: 'ComponentAccordion'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentBasicCard'; sys: { __typename?: 'Sys'; id: string } }
            | ({ __typename?: 'ComponentButton'; sys: { __typename?: 'Sys'; id: string } } & ComponentButtonFragment)
            | { __typename?: 'ComponentBynder'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentCardDeck'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentCaseStudies'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentCaseStudyCard'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentConversionPanel'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentFeatures'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentFeaturesCard'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentFooter'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentForm'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentFullWidthSwitchback'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentGenericForm'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentHeader'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentHeading'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentHero'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentHeroForm'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentImage'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentInputField'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentList'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentListItem'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentOffsetGrid'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentOffsetGridCard'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentPricing'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentSignUpForm'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentSwitchback'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentSwitcher'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentSwitcherItem'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentTestimonialCard'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentTestimonials'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentTrustBar'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentVideo'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'EntityCompany'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'EntityPerson'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'FormDropdownField'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'FormInputField'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'MenuItem'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'MetaSeo'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'TemplatePage'; sys: { __typename?: 'Sys'; id: string } }
            | null
          >;
        };
      };
    } | null;
  };

  export type ComponentHeadingFragment = {
    __typename: 'ComponentHeading';
    internalName?: string | null;
    eyebrow?: string | null;
    background?: string | null;
    heading?: string | null;
    sys: { __typename?: 'Sys'; id: string };
    body?: {
      __typename?: 'ComponentHeadingBody';
      json: any;
      links: {
        __typename?: 'ComponentHeadingBodyLinks';
        entries: {
          __typename?: 'ComponentHeadingBodyEntries';
          block: Array<
            | { __typename?: 'ComponentAccolades'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentAccordion'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentBasicCard'; sys: { __typename?: 'Sys'; id: string } }
            | ({ __typename?: 'ComponentButton'; sys: { __typename?: 'Sys'; id: string } } & ComponentButtonFragment)
            | { __typename?: 'ComponentBynder'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentCardDeck'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentCaseStudies'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentCaseStudyCard'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentConversionPanel'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentFeatures'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentFeaturesCard'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentFooter'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentForm'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentFullWidthSwitchback'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentGenericForm'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentHeader'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentHeading'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentHero'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentHeroForm'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentImage'; sys: { __typename?: 'Sys'; id: string } }
            | ({
                __typename?: 'ComponentInputField';
                sys: { __typename?: 'Sys'; id: string };
              } & ComponentInputFieldFragment)
            | { __typename?: 'ComponentList'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentListItem'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentOffsetGrid'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentOffsetGridCard'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentPricing'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentSignUpForm'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentSwitchback'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentSwitcher'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentSwitcherItem'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentTestimonialCard'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentTestimonials'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentTrustBar'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentVideo'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'EntityCompany'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'EntityPerson'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'FormDropdownField'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'FormInputField'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'MenuItem'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'MetaSeo'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'TemplatePage'; sys: { __typename?: 'Sys'; id: string } }
            | null
          >;
        };
      };
    } | null;
  };

  export type ComponentOffsetGridFragment = {
    __typename: 'ComponentOffsetGrid';
    internalName?: string | null;
    eyebrow?: string | null;
    heading?: string | null;
    sys: { __typename?: 'Sys'; id: string };
    reference?: ({ __typename?: 'ComponentImage' } & ComponentImageFragment) | null;
    offsetGridCardsCollection?: {
      __typename?: 'ComponentOffsetGridOffsetGridCardsCollection';
      items: Array<({ __typename?: 'ComponentOffsetGridCard' } & ComponentOffsetGridCardFragment) | null>;
    } | null;
  };

  export type ComponentOffsetGridCardFragment = {
    __typename: 'ComponentOffsetGridCard';
    internalName?: string | null;
    heading?: string | null;
    subheading?: string | null;
    link?: string | null;
    sys: { __typename?: 'Sys'; id: string };
  };

  export type ComponentConversionPanelFragment = {
    __typename: 'ComponentConversionPanel';
    internalName?: string | null;
    contained?: boolean | null;
    background?: string | null;
    rainbowLine?: boolean | null;
    containedBackground?: string | null;
    eyebrow?: string | null;
    heading?: string | null;
    sys: { __typename?: 'Sys'; id: string };
    reference?:
      | { __typename?: 'ComponentGenericForm' }
      | ({ __typename?: 'ComponentImage' } & ComponentImageFragment)
      | null;
    body?: {
      __typename?: 'ComponentConversionPanelBody';
      json: any;
      links: {
        __typename?: 'ComponentConversionPanelBodyLinks';
        entries: {
          __typename?: 'ComponentConversionPanelBodyEntries';
          block: Array<
            | { __typename?: 'ComponentAccolades'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentAccordion'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentBasicCard'; sys: { __typename?: 'Sys'; id: string } }
            | ({ __typename?: 'ComponentButton'; sys: { __typename?: 'Sys'; id: string } } & ComponentButtonFragment)
            | { __typename?: 'ComponentBynder'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentCardDeck'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentCaseStudies'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentCaseStudyCard'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentConversionPanel'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentFeatures'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentFeaturesCard'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentFooter'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentForm'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentFullWidthSwitchback'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentGenericForm'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentHeader'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentHeading'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentHero'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentHeroForm'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentImage'; sys: { __typename?: 'Sys'; id: string } }
            | ({
                __typename?: 'ComponentInputField';
                sys: { __typename?: 'Sys'; id: string };
              } & ComponentInputFieldFragment)
            | { __typename?: 'ComponentList'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentListItem'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentOffsetGrid'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentOffsetGridCard'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentPricing'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentSignUpForm'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentSwitchback'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentSwitcher'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentSwitcherItem'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentTestimonialCard'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentTestimonials'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentTrustBar'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'ComponentVideo'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'EntityCompany'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'EntityPerson'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'FormDropdownField'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'FormInputField'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'MenuItem'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'MetaSeo'; sys: { __typename?: 'Sys'; id: string } }
            | { __typename?: 'TemplatePage'; sys: { __typename?: 'Sys'; id: string } }
            | null
          >;
        };
      };
    } | null;
  };

  export type TemplatePageMetaDataFragment = {
    __typename: 'TemplatePage';
    internalName?: string | null;
    slug?: string | null;
    footerStyle?: string | null;
    headerStyle?: string | null;
    sys: { __typename?: 'Sys'; id: string };
    productNavigation?: ({ __typename?: 'ComponentHeader' } & ComponentHeaderFragment) | null;
    seoMetadata?: ({ __typename?: 'MetaSeo' } & MetaSeoFragment) | null;
  };

  type TemplatePageComponents1_ComponentAccolades_Fragment = { __typename?: 'ComponentAccolades' };

  type TemplatePageComponents1_ComponentAccordion_Fragment = {
    __typename?: 'ComponentAccordion';
  } & ComponentAccordionFragment;

  type TemplatePageComponents1_ComponentCardDeck_Fragment = { __typename?: 'ComponentCardDeck' };

  type TemplatePageComponents1_ComponentCaseStudies_Fragment = { __typename?: 'ComponentCaseStudies' };

  type TemplatePageComponents1_ComponentConversionPanel_Fragment = {
    __typename?: 'ComponentConversionPanel';
  } & ComponentConversionPanelFragment;

  type TemplatePageComponents1_ComponentFeatures_Fragment = { __typename?: 'ComponentFeatures' };

  type TemplatePageComponents1_ComponentFullWidthSwitchback_Fragment = {
    __typename?: 'ComponentFullWidthSwitchback';
  } & ComponentFullWidthSwitchbackFragment;

  type TemplatePageComponents1_ComponentHeading_Fragment = {
    __typename?: 'ComponentHeading';
  } & ComponentHeadingFragment;

  type TemplatePageComponents1_ComponentHero_Fragment = { __typename?: 'ComponentHero' } & ComponentHeroFragment;

  type TemplatePageComponents1_ComponentHeroForm_Fragment = { __typename?: 'ComponentHeroForm' };

  type TemplatePageComponents1_ComponentOffsetGrid_Fragment = {
    __typename?: 'ComponentOffsetGrid';
  } & ComponentOffsetGridFragment;

  type TemplatePageComponents1_ComponentSwitchback_Fragment = {
    __typename?: 'ComponentSwitchback';
  } & ComponentSwitchbackFragment;

  type TemplatePageComponents1_ComponentSwitcher_Fragment = { __typename?: 'ComponentSwitcher' };

  type TemplatePageComponents1_ComponentTestimonials_Fragment = { __typename?: 'ComponentTestimonials' };

  type TemplatePageComponents1_ComponentTrustBar_Fragment = {
    __typename?: 'ComponentTrustBar';
  } & ComponentTrustBarFragment;

  export type TemplatePageComponents1Fragment =
    | TemplatePageComponents1_ComponentAccolades_Fragment
    | TemplatePageComponents1_ComponentAccordion_Fragment
    | TemplatePageComponents1_ComponentCardDeck_Fragment
    | TemplatePageComponents1_ComponentCaseStudies_Fragment
    | TemplatePageComponents1_ComponentConversionPanel_Fragment
    | TemplatePageComponents1_ComponentFeatures_Fragment
    | TemplatePageComponents1_ComponentFullWidthSwitchback_Fragment
    | TemplatePageComponents1_ComponentHeading_Fragment
    | TemplatePageComponents1_ComponentHero_Fragment
    | TemplatePageComponents1_ComponentHeroForm_Fragment
    | TemplatePageComponents1_ComponentOffsetGrid_Fragment
    | TemplatePageComponents1_ComponentSwitchback_Fragment
    | TemplatePageComponents1_ComponentSwitcher_Fragment
    | TemplatePageComponents1_ComponentTestimonials_Fragment
    | TemplatePageComponents1_ComponentTrustBar_Fragment;

  type TemplatePageComponents2_ComponentAccolades_Fragment = {
    __typename?: 'ComponentAccolades';
  } & ComponentAccoladesFragment;

  type TemplatePageComponents2_ComponentAccordion_Fragment = { __typename?: 'ComponentAccordion' };

  type TemplatePageComponents2_ComponentCardDeck_Fragment = {
    __typename?: 'ComponentCardDeck';
  } & ComponentCardDeckFragment;

  type TemplatePageComponents2_ComponentCaseStudies_Fragment = {
    __typename?: 'ComponentCaseStudies';
  } & ComponentCaseStudiesFragment;

  type TemplatePageComponents2_ComponentConversionPanel_Fragment = { __typename?: 'ComponentConversionPanel' };

  type TemplatePageComponents2_ComponentFeatures_Fragment = {
    __typename?: 'ComponentFeatures';
  } & ComponentFeaturesFragment;

  type TemplatePageComponents2_ComponentFullWidthSwitchback_Fragment = { __typename?: 'ComponentFullWidthSwitchback' };

  type TemplatePageComponents2_ComponentHeading_Fragment = { __typename?: 'ComponentHeading' };

  type TemplatePageComponents2_ComponentHero_Fragment = { __typename?: 'ComponentHero' };

  type TemplatePageComponents2_ComponentHeroForm_Fragment = {
    __typename?: 'ComponentHeroForm';
  } & ComponentHeroFormFragment;

  type TemplatePageComponents2_ComponentOffsetGrid_Fragment = { __typename?: 'ComponentOffsetGrid' };

  type TemplatePageComponents2_ComponentSwitchback_Fragment = { __typename?: 'ComponentSwitchback' };

  type TemplatePageComponents2_ComponentSwitcher_Fragment = {
    __typename?: 'ComponentSwitcher';
  } & ComponentSwitcherFragment;

  type TemplatePageComponents2_ComponentTestimonials_Fragment = {
    __typename?: 'ComponentTestimonials';
  } & ComponentTestimonialsFragment;

  type TemplatePageComponents2_ComponentTrustBar_Fragment = { __typename?: 'ComponentTrustBar' };

  export type TemplatePageComponents2Fragment =
    | TemplatePageComponents2_ComponentAccolades_Fragment
    | TemplatePageComponents2_ComponentAccordion_Fragment
    | TemplatePageComponents2_ComponentCardDeck_Fragment
    | TemplatePageComponents2_ComponentCaseStudies_Fragment
    | TemplatePageComponents2_ComponentConversionPanel_Fragment
    | TemplatePageComponents2_ComponentFeatures_Fragment
    | TemplatePageComponents2_ComponentFullWidthSwitchback_Fragment
    | TemplatePageComponents2_ComponentHeading_Fragment
    | TemplatePageComponents2_ComponentHero_Fragment
    | TemplatePageComponents2_ComponentHeroForm_Fragment
    | TemplatePageComponents2_ComponentOffsetGrid_Fragment
    | TemplatePageComponents2_ComponentSwitchback_Fragment
    | TemplatePageComponents2_ComponentSwitcher_Fragment
    | TemplatePageComponents2_ComponentTestimonials_Fragment
    | TemplatePageComponents2_ComponentTrustBar_Fragment;

  export type ComponentBasicCardFragment = {
    __typename: 'ComponentBasicCard';
    internalName?: string | null;
    size?: string | null;
    variant?: string | null;
    category?: string | null;
    categoryColor?: string | null;
    heading?: string | null;
    body?: string | null;
    link?: string | null;
    longHeading?: string | null;
    date?: any | null;
    sys: { __typename?: 'Sys'; id: string };
    media?: ({ __typename?: 'Asset' } & AssetFragment) | null;
    mediaReference?:
      | ({ __typename?: 'ComponentImage' } & ComponentImageFragment)
      | ({ __typename?: 'ComponentVideo' } & ComponentVideoFragment)
      | null;
  };

  export type ComponentListFragment = {
    __typename: 'ComponentList';
    internalName?: string | null;
    sys: { __typename?: 'Sys'; id: string };
    listItemsCollection?: {
      __typename?: 'ComponentListListItemsCollection';
      items: Array<({ __typename?: 'ComponentListItem' } & ComponentListItemFragment) | null>;
    } | null;
  };

  export type ComponentTrustBarFragment = {
    __typename: 'ComponentTrustBar';
    internalName?: string | null;
    background?: string | null;
    variant?: string | null;
    heading?: string | null;
    sys: { __typename?: 'Sys'; id: string };
    companyCollection?: {
      __typename?: 'ComponentTrustBarCompanyCollection';
      items: Array<({ __typename?: 'EntityCompany' } & EntityCompanyFragment) | null>;
    } | null;
  };

  export type ComponentSwitchbackFragment = {
    __typename: 'ComponentSwitchback';
    internalName?: string | null;
    eyebrow?: string | null;
    heading?: string | null;
    assetSide?: string | null;
    sys: { __typename?: 'Sys'; id: string };
    reference?: ({ __typename?: 'ComponentImage' } & ComponentImageFragment) | null;
    body?: {
      __typename?: 'ComponentSwitchbackBody';
      json: any;
      links: {
        __typename?: 'ComponentSwitchbackBodyLinks';
        entries: {
          __typename?: 'ComponentSwitchbackBodyEntries';
          block: Array<
            | { __typename?: 'ComponentAccolades' }
            | { __typename?: 'ComponentAccordion' }
            | { __typename?: 'ComponentBasicCard' }
            | ({ __typename?: 'ComponentButton' } & ComponentButtonFragment)
            | { __typename?: 'ComponentBynder' }
            | { __typename?: 'ComponentCardDeck' }
            | { __typename?: 'ComponentCaseStudies' }
            | { __typename?: 'ComponentCaseStudyCard' }
            | { __typename?: 'ComponentConversionPanel' }
            | { __typename?: 'ComponentFeatures' }
            | { __typename?: 'ComponentFeaturesCard' }
            | { __typename?: 'ComponentFooter' }
            | { __typename?: 'ComponentForm' }
            | { __typename?: 'ComponentFullWidthSwitchback' }
            | { __typename?: 'ComponentGenericForm' }
            | { __typename?: 'ComponentHeader' }
            | { __typename?: 'ComponentHeading' }
            | { __typename?: 'ComponentHero' }
            | { __typename?: 'ComponentHeroForm' }
            | { __typename?: 'ComponentImage' }
            | { __typename?: 'ComponentInputField' }
            | { __typename?: 'ComponentList' }
            | { __typename?: 'ComponentListItem' }
            | { __typename?: 'ComponentOffsetGrid' }
            | { __typename?: 'ComponentOffsetGridCard' }
            | { __typename?: 'ComponentPricing' }
            | { __typename?: 'ComponentSignUpForm' }
            | { __typename?: 'ComponentSwitchback' }
            | { __typename?: 'ComponentSwitcher' }
            | { __typename?: 'ComponentSwitcherItem' }
            | { __typename?: 'ComponentTestimonialCard' }
            | { __typename?: 'ComponentTestimonials' }
            | { __typename?: 'ComponentTrustBar' }
            | { __typename?: 'ComponentVideo' }
            | { __typename?: 'EntityCompany' }
            | { __typename?: 'EntityPerson' }
            | { __typename?: 'FormDropdownField' }
            | { __typename?: 'FormInputField' }
            | { __typename?: 'MenuItem' }
            | { __typename?: 'MetaSeo' }
            | { __typename?: 'TemplatePage' }
            | null
          >;
        };
        assets: {
          __typename?: 'ComponentSwitchbackBodyAssets';
          block: Array<({ __typename?: 'Asset' } & AssetFragment) | null>;
        };
      };
    } | null;
  };

  export type ComponentFullWidthSwitchbackFragment = {
    __typename: 'ComponentFullWidthSwitchback';
    internalName?: string | null;
    eyebrow?: string | null;
    heading?: string | null;
    assetSide?: string | null;
    sys: { __typename?: 'Sys'; id: string };
    reference?: ({ __typename?: 'ComponentImage' } & ComponentImageFragment) | null;
    body?: {
      __typename?: 'ComponentFullWidthSwitchbackBody';
      json: any;
      links: {
        __typename?: 'ComponentFullWidthSwitchbackBodyLinks';
        entries: {
          __typename?: 'ComponentFullWidthSwitchbackBodyEntries';
          block: Array<
            | { __typename?: 'ComponentAccolades' }
            | { __typename?: 'ComponentAccordion' }
            | { __typename?: 'ComponentBasicCard' }
            | ({ __typename?: 'ComponentButton' } & ComponentButtonFragment)
            | { __typename?: 'ComponentBynder' }
            | { __typename?: 'ComponentCardDeck' }
            | { __typename?: 'ComponentCaseStudies' }
            | { __typename?: 'ComponentCaseStudyCard' }
            | { __typename?: 'ComponentConversionPanel' }
            | { __typename?: 'ComponentFeatures' }
            | { __typename?: 'ComponentFeaturesCard' }
            | { __typename?: 'ComponentFooter' }
            | { __typename?: 'ComponentForm' }
            | { __typename?: 'ComponentFullWidthSwitchback' }
            | { __typename?: 'ComponentGenericForm' }
            | { __typename?: 'ComponentHeader' }
            | { __typename?: 'ComponentHeading' }
            | { __typename?: 'ComponentHero' }
            | { __typename?: 'ComponentHeroForm' }
            | { __typename?: 'ComponentImage' }
            | { __typename?: 'ComponentInputField' }
            | { __typename?: 'ComponentList' }
            | { __typename?: 'ComponentListItem' }
            | { __typename?: 'ComponentOffsetGrid' }
            | { __typename?: 'ComponentOffsetGridCard' }
            | { __typename?: 'ComponentPricing' }
            | { __typename?: 'ComponentSignUpForm' }
            | { __typename?: 'ComponentSwitchback' }
            | { __typename?: 'ComponentSwitcher' }
            | { __typename?: 'ComponentSwitcherItem' }
            | { __typename?: 'ComponentTestimonialCard' }
            | { __typename?: 'ComponentTestimonials' }
            | { __typename?: 'ComponentTrustBar' }
            | { __typename?: 'ComponentVideo' }
            | { __typename?: 'EntityCompany' }
            | { __typename?: 'EntityPerson' }
            | { __typename?: 'FormDropdownField' }
            | { __typename?: 'FormInputField' }
            | { __typename?: 'MenuItem' }
            | { __typename?: 'MetaSeo' }
            | { __typename?: 'TemplatePage' }
            | null
          >;
        };
        assets: {
          __typename?: 'ComponentFullWidthSwitchbackBodyAssets';
          block: Array<({ __typename?: 'Asset' } & AssetFragment) | null>;
        };
      };
    } | null;
  };

  export type ComponentSwitcherFragment = {
    __typename: 'ComponentSwitcher';
    internalName?: string | null;
    background?: string | null;
    sys: { __typename?: 'Sys'; id: string };
    headingComponent?: ({ __typename?: 'ComponentHeading' } & ComponentHeadingFragment) | null;
    switcherItemsCollection?: {
      __typename?: 'ComponentSwitcherSwitcherItemsCollection';
      items: Array<({ __typename?: 'ComponentSwitcherItem' } & ComponentSwitcherItemFragment) | null>;
    } | null;
  };

  export type ComponentSwitcherItemFragment = {
    __typename: 'ComponentSwitcherItem';
    internalName?: string | null;
    switcherItemTitle?: string | null;
    heading?: string | null;
    subheading?: string | null;
    sys: { __typename?: 'Sys'; id: string };
    switcherItemList?: ({ __typename?: 'ComponentList' } & ComponentListFragment) | null;
    primaryButton?: ({ __typename?: 'ComponentButton' } & ComponentButtonFragment) | null;
    secondaryButton?: ({ __typename?: 'ComponentButton' } & ComponentButtonFragment) | null;
    switcherItemImage?: ({ __typename?: 'ComponentImage' } & ComponentImageFragment) | null;
  };

  export type EntityCompanyFragment = {
    __typename?: 'EntityCompany';
    name?: string | null;
    sys: { __typename?: 'Sys'; id: string };
    companyLogoLight?: ({ __typename?: 'ComponentImage' } & ComponentImageFragment) | null;
    companyLogoDark?: ({ __typename?: 'ComponentImage' } & ComponentImageFragment) | null;
  };

  export type EntityPersonFragment = {
    __typename?: 'EntityPerson';
    fullName?: string | null;
    role?: string | null;
    sys: { __typename?: 'Sys'; id: string };
    company?: ({ __typename?: 'EntityCompany' } & EntityCompanyFragment) | null;
  };

  export type ComponentAccoladesFragment = {
    __typename: 'ComponentAccolades';
    internalName?: string | null;
    heading?: string | null;
    eyebrow?: string | null;
    sys: { __typename?: 'Sys'; id: string };
    body?: {
      __typename?: 'ComponentAccoladesBody';
      json: any;
      links: {
        __typename?: 'ComponentAccoladesBodyLinks';
        entries: {
          __typename?: 'ComponentAccoladesBodyEntries';
          block: Array<
            | { __typename?: 'ComponentAccolades' }
            | { __typename?: 'ComponentAccordion' }
            | { __typename?: 'ComponentBasicCard' }
            | ({ __typename?: 'ComponentButton' } & ComponentButtonFragment)
            | { __typename?: 'ComponentBynder' }
            | { __typename?: 'ComponentCardDeck' }
            | { __typename?: 'ComponentCaseStudies' }
            | { __typename?: 'ComponentCaseStudyCard' }
            | { __typename?: 'ComponentConversionPanel' }
            | { __typename?: 'ComponentFeatures' }
            | { __typename?: 'ComponentFeaturesCard' }
            | { __typename?: 'ComponentFooter' }
            | { __typename?: 'ComponentForm' }
            | { __typename?: 'ComponentFullWidthSwitchback' }
            | { __typename?: 'ComponentGenericForm' }
            | { __typename?: 'ComponentHeader' }
            | { __typename?: 'ComponentHeading' }
            | { __typename?: 'ComponentHero' }
            | { __typename?: 'ComponentHeroForm' }
            | { __typename?: 'ComponentImage' }
            | { __typename?: 'ComponentInputField' }
            | { __typename?: 'ComponentList' }
            | { __typename?: 'ComponentListItem' }
            | { __typename?: 'ComponentOffsetGrid' }
            | { __typename?: 'ComponentOffsetGridCard' }
            | { __typename?: 'ComponentPricing' }
            | { __typename?: 'ComponentSignUpForm' }
            | { __typename?: 'ComponentSwitchback' }
            | { __typename?: 'ComponentSwitcher' }
            | { __typename?: 'ComponentSwitcherItem' }
            | { __typename?: 'ComponentTestimonialCard' }
            | { __typename?: 'ComponentTestimonials' }
            | { __typename?: 'ComponentTrustBar' }
            | { __typename?: 'ComponentVideo' }
            | { __typename?: 'EntityCompany' }
            | { __typename?: 'EntityPerson' }
            | { __typename?: 'FormDropdownField' }
            | { __typename?: 'FormInputField' }
            | { __typename?: 'MenuItem' }
            | { __typename?: 'MetaSeo' }
            | { __typename?: 'TemplatePage' }
            | null
          >;
        };
      };
    } | null;
    accoladesImageCollection?: {
      __typename?: 'ComponentAccoladesAccoladesImageCollection';
      items: Array<({ __typename?: 'ComponentImage' } & ComponentImageFragment) | null>;
    } | null;
  };

  export type ComponentInputFieldFragment = {
    __typename: 'ComponentInputField';
    internalName?: string | null;
    sys: { __typename?: 'Sys'; id: string };
    inputField?: ({ __typename?: 'FormInputField' } & FormInputFieldFragment) | null;
    submitButton?: ({ __typename?: 'ComponentButton' } & ComponentButtonFragment) | null;
  };

  export type ComponentTestimonialCardFragment = {
    __typename: 'ComponentTestimonialCard';
    internalName?: string | null;
    fullStoryUrl?: string | null;
    background?: string | null;
    sys: { __typename?: 'Sys'; id: string };
    quote?: { __typename?: 'ComponentTestimonialCardQuote'; json: any } | null;
    person?: ({ __typename?: 'EntityPerson' } & EntityPersonFragment) | null;
    image?: ({ __typename?: 'ComponentImage' } & ComponentImageFragment) | null;
  };

  export type ComponentTestimonialsFragment = {
    __typename: 'ComponentTestimonials';
    internalName?: string | null;
    contained?: boolean | null;
    background?: string | null;
    sys: { __typename?: 'Sys'; id: string };
    headingComponent?: ({ __typename?: 'ComponentHeading' } & ComponentHeadingFragment) | null;
    testimonialCardsCollection?: {
      __typename?: 'ComponentTestimonialsTestimonialCardsCollection';
      items: Array<({ __typename?: 'ComponentTestimonialCard' } & ComponentTestimonialCardFragment) | null>;
    } | null;
  };

  export type MenuItemFragment = {
    __typename: 'MenuItem';
    internalName?: string | null;
    label?: string | null;
    description?: string | null;
    link?: string | null;
    blogFormat?: boolean | null;
    sys: { __typename?: 'Sys'; id: string };
    image?: ({ __typename?: 'ComponentImage' } & ComponentImageFragment) | null;
    button?: ({ __typename?: 'ComponentButton' } & ComponentButtonFragment) | null;
    menuCollection?: {
      __typename?: 'MenuItemMenuCollection';
      items: Array<{
        __typename: 'MenuItem';
        internalName?: string | null;
        label?: string | null;
        description?: string | null;
        link?: string | null;
        blogFormat?: boolean | null;
        sys: { __typename?: 'Sys'; id: string };
        image?: ({ __typename?: 'ComponentImage' } & ComponentImageFragment) | null;
        button?: ({ __typename?: 'ComponentButton' } & ComponentButtonFragment) | null;
        menuCollection?: {
          __typename?: 'MenuItemMenuCollection';
          items: Array<{
            __typename: 'MenuItem';
            internalName?: string | null;
            label?: string | null;
            description?: string | null;
            link?: string | null;
            blogFormat?: boolean | null;
            sys: { __typename?: 'Sys'; id: string };
            image?: ({ __typename?: 'ComponentImage' } & ComponentImageFragment) | null;
            button?: ({ __typename?: 'ComponentButton' } & ComponentButtonFragment) | null;
          } | null>;
        } | null;
      } | null>;
    } | null;
  };

  export type ComponentHeaderFragment = {
    __typename: 'ComponentHeader';
    internalName?: string | null;
    freshworksProduct?: string | null;
    sys: { __typename?: 'Sys'; id: string; spaceId: string; environmentId: string };
    contentfulMetadata: {
      __typename: 'ContentfulMetadata';
      tags: Array<{ __typename?: 'ContentfulTag'; id?: string | null; name?: string | null } | null>;
    };
    callToAction?: ({ __typename?: 'ComponentButton' } & ComponentButtonFragment) | null;
    callToActionMobile?: ({ __typename?: 'ComponentButton' } & ComponentButtonFragment) | null;
    navigationLinksCollection?: {
      __typename?: 'ComponentHeaderNavigationLinksCollection';
      items: Array<({ __typename?: 'MenuItem' } & MenuItemFragment) | null>;
    } | null;
    navigationLinksMobileCollection?: {
      __typename?: 'ComponentHeaderNavigationLinksMobileCollection';
      items: Array<({ __typename?: 'MenuItem' } & MenuItemFragment) | null>;
    } | null;
  };

  export type ComponentFooterFragment = {
    __typename: 'ComponentFooter';
    internalName?: string | null;
    contactNumber?: string | null;
    contactEmail?: string | null;
    googlePlayUrl?: string | null;
    appStoreUrl?: string | null;
    legalText?: string | null;
    sys: { __typename?: 'Sys'; id: string };
    announcementCard?: ({ __typename?: 'MenuItem' } & MenuItemFragment) | null;
    menuItemsCollection?: {
      __typename?: 'ComponentFooterMenuItemsCollection';
      items: Array<({ __typename?: 'MenuItem' } & MenuItemFragment) | null>;
    } | null;
    privacyTermsMenuCollection?: {
      __typename?: 'ComponentFooterPrivacyTermsMenuCollection';
      items: Array<({ __typename?: 'MenuItem' } & MenuItemFragment) | null>;
    } | null;
    company?: ({ __typename?: 'EntityCompany' } & EntityCompanyFragment) | null;
  };

  export type FormInputFieldFragment = {
    __typename: 'FormInputField';
    internalName?: string | null;
    type?: string | null;
    label?: string | null;
    placeholder?: string | null;
    helperText?: string | null;
    startIcon?: string | null;
    endIcon?: string | null;
    toolTipTitle?: string | null;
    disabled?: boolean | null;
    toolTipDescription?: string | null;
    identification?: string | null;
    valueOfField?: string | null;
    sys: { __typename?: 'Sys'; id: string };
  };

  export type ComponentVideoFragment = {
    __typename: 'ComponentVideo';
    internalName?: string | null;
    bynderVideoAsset?: any | null;
    videoLength?: string | null;
    heading?: string | null;
    subheading?: string | null;
    sys: { __typename?: 'Sys'; id: string };
    ctaButton?: ({ __typename?: 'ComponentButton' } & ComponentButtonFragment) | null;
  };

  export type ComponentSignUpFormFragment = {
    __typename: 'ComponentSignUpForm';
    internalName?: string | null;
    heading?: string | null;
    termsOfService?: string | null;
    privacyNotice?: string | null;
    dataCenterList?: Array<string | null> | null;
    pageRedirection?: string | null;
    sys: { __typename?: 'Sys'; id: string };
    firstName?: ({ __typename?: 'FormInputField' } & FormInputFieldFragment) | null;
    lastName?: ({ __typename?: 'FormInputField' } & FormInputFieldFragment) | null;
    company?: ({ __typename?: 'FormInputField' } & FormInputFieldFragment) | null;
    phoneNumber?: ({ __typename?: 'FormInputField' } & FormInputFieldFragment) | null;
    email?: ({ __typename?: 'FormInputField' } & FormInputFieldFragment) | null;
    hiddenFormsCollection?: {
      __typename?: 'ComponentSignUpFormHiddenFormsCollection';
      items: Array<({ __typename?: 'FormInputField' } & FormInputFieldFragment) | null>;
    } | null;
  };

  export type ComponentHeroFormFragment = {
    __typename: 'ComponentHeroForm';
    internalName?: string | null;
    contentBackground?: string | null;
    eyebrow?: string | null;
    heading?: string | null;
    subheading?: string | null;
    sys: { __typename?: 'Sys'; id: string };
    heroFeatureList?: ({ __typename?: 'ComponentList' } & ComponentListFragment) | null;
    mediaReference?:
      | ({ __typename?: 'ComponentAccolades' } & ComponentAccoladesFragment)
      | ({ __typename?: 'ComponentImage' } & ComponentImageFragment)
      | ({ __typename?: 'ComponentTestimonialCard' } & ComponentTestimonialCardFragment)
      | ({ __typename?: 'ComponentVideo' } & ComponentVideoFragment)
      | null;
    form?: ({ __typename?: 'ComponentSignUpForm' } & ComponentSignUpFormFragment) | null;
    trustbar?: ({ __typename?: 'ComponentTrustBar' } & ComponentTrustBarFragment) | null;
  };

  export type ComponentGenericFormFragment = {
    __typename: 'ComponentGenericForm';
    internalName?: string | null;
    heading?: string | null;
    subheading?: string | null;
    bodyTextLabel?: string | null;
    dataCenterList?: Array<string | null> | null;
    termsOfServicePage?: string | null;
    sys: { __typename?: 'Sys'; id: string };
    callToAction?: ({ __typename?: 'ComponentButton' } & ComponentButtonFragment) | null;
    hiddenFormsCollection?: {
      __typename?: 'ComponentGenericFormHiddenFormsCollection';
      items: Array<({ __typename?: 'FormInputField' } & FormInputFieldFragment) | null>;
    } | null;
    formsCollection?: {
      __typename?: 'ComponentGenericFormFormsCollection';
      items: Array<
        | ({ __typename?: 'FormDropdownField' } & FormDropdownFieldFragment)
        | ({ __typename?: 'FormInputField' } & FormInputFieldFragment)
        | null
      >;
    } | null;
  };

  export type FormDropdownFieldFragment = {
    __typename: 'FormDropdownField';
    internalName?: string | null;
    label?: string | null;
    placeholder?: string | null;
    options?: Array<string | null> | null;
    sys: { __typename?: 'Sys'; id: string };
  };

  export type TemplatePageAllSlugsQueryVariables = Exact<{ [key: string]: never }>;

  export type TemplatePageAllSlugsQuery = {
    __typename?: 'Query';
    templatePageCollection?: {
      __typename?: 'TemplatePageCollection';
      items: Array<{
        __typename?: 'TemplatePage';
        slug?: string | null;
        sys: { __typename?: 'Sys'; id: string };
      } | null>;
    } | null;
  };

  export type TemplatePage1QueryVariables = Exact<{
    slug?: InputMaybe<Scalars['String']>;
    locale?: InputMaybe<Scalars['String']>;
  }>;

  export type TemplatePage1Query = {
    __typename?: 'Query';
    templatePageCollection?: {
      __typename?: 'TemplatePageCollection';
      items: Array<
        | ({
            __typename?: 'TemplatePage';
            componentsCollection?: {
              __typename?: 'TemplatePageComponentsCollection';
              items: Array<
                | ({ __typename?: 'ComponentAccolades' } & TemplatePageComponents1_ComponentAccolades_Fragment)
                | ({ __typename?: 'ComponentAccordion' } & TemplatePageComponents1_ComponentAccordion_Fragment)
                | ({ __typename?: 'ComponentCardDeck' } & TemplatePageComponents1_ComponentCardDeck_Fragment)
                | ({ __typename?: 'ComponentCaseStudies' } & TemplatePageComponents1_ComponentCaseStudies_Fragment)
                | ({
                    __typename?: 'ComponentConversionPanel';
                  } & TemplatePageComponents1_ComponentConversionPanel_Fragment)
                | ({ __typename?: 'ComponentFeatures' } & TemplatePageComponents1_ComponentFeatures_Fragment)
                | ({
                    __typename?: 'ComponentFullWidthSwitchback';
                  } & TemplatePageComponents1_ComponentFullWidthSwitchback_Fragment)
                | ({ __typename?: 'ComponentHeading' } & TemplatePageComponents1_ComponentHeading_Fragment)
                | ({ __typename?: 'ComponentHero' } & TemplatePageComponents1_ComponentHero_Fragment)
                | ({ __typename?: 'ComponentHeroForm' } & TemplatePageComponents1_ComponentHeroForm_Fragment)
                | ({ __typename?: 'ComponentOffsetGrid' } & TemplatePageComponents1_ComponentOffsetGrid_Fragment)
                | ({ __typename?: 'ComponentSwitchback' } & TemplatePageComponents1_ComponentSwitchback_Fragment)
                | ({ __typename?: 'ComponentSwitcher' } & TemplatePageComponents1_ComponentSwitcher_Fragment)
                | ({ __typename?: 'ComponentTestimonials' } & TemplatePageComponents1_ComponentTestimonials_Fragment)
                | ({ __typename?: 'ComponentTrustBar' } & TemplatePageComponents1_ComponentTrustBar_Fragment)
                | null
              >;
            } | null;
          } & TemplatePageMetaDataFragment)
        | null
      >;
    } | null;
    componentFooter?: ({ __typename?: 'ComponentFooter' } & ComponentFooterFragment) | null;
  };

  export type TemplatePage2QueryVariables = Exact<{
    slug?: InputMaybe<Scalars['String']>;
    locale?: InputMaybe<Scalars['String']>;
  }>;

  export type TemplatePage2Query = {
    __typename?: 'Query';
    templatePageCollection?: {
      __typename?: 'TemplatePageCollection';
      items: Array<{
        __typename?: 'TemplatePage';
        componentsCollection?: {
          __typename?: 'TemplatePageComponentsCollection';
          items: Array<
            | ({ __typename?: 'ComponentAccolades' } & TemplatePageComponents2_ComponentAccolades_Fragment)
            | ({ __typename?: 'ComponentAccordion' } & TemplatePageComponents2_ComponentAccordion_Fragment)
            | ({ __typename?: 'ComponentCardDeck' } & TemplatePageComponents2_ComponentCardDeck_Fragment)
            | ({ __typename?: 'ComponentCaseStudies' } & TemplatePageComponents2_ComponentCaseStudies_Fragment)
            | ({ __typename?: 'ComponentConversionPanel' } & TemplatePageComponents2_ComponentConversionPanel_Fragment)
            | ({ __typename?: 'ComponentFeatures' } & TemplatePageComponents2_ComponentFeatures_Fragment)
            | ({
                __typename?: 'ComponentFullWidthSwitchback';
              } & TemplatePageComponents2_ComponentFullWidthSwitchback_Fragment)
            | ({ __typename?: 'ComponentHeading' } & TemplatePageComponents2_ComponentHeading_Fragment)
            | ({ __typename?: 'ComponentHero' } & TemplatePageComponents2_ComponentHero_Fragment)
            | ({ __typename?: 'ComponentHeroForm' } & TemplatePageComponents2_ComponentHeroForm_Fragment)
            | ({ __typename?: 'ComponentOffsetGrid' } & TemplatePageComponents2_ComponentOffsetGrid_Fragment)
            | ({ __typename?: 'ComponentSwitchback' } & TemplatePageComponents2_ComponentSwitchback_Fragment)
            | ({ __typename?: 'ComponentSwitcher' } & TemplatePageComponents2_ComponentSwitcher_Fragment)
            | ({ __typename?: 'ComponentTestimonials' } & TemplatePageComponents2_ComponentTestimonials_Fragment)
            | ({ __typename?: 'ComponentTrustBar' } & TemplatePageComponents2_ComponentTrustBar_Fragment)
            | null
          >;
        } | null;
      } | null>;
    } | null;
  };

  export type ComponentHeaderQueryVariables = Exact<{
    locale?: InputMaybe<Scalars['String']>;
  }>;

  export type ComponentHeaderQuery = {
    __typename?: 'Query';
    componentHeader?: ({ __typename?: 'ComponentHeader' } & ComponentHeaderFragment) | null;
  };
}
