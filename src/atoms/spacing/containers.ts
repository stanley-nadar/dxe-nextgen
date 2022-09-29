import { valueof } from 'utils/typeUtils';

export const container = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1170px',
  xxl: '1440px',
  xxxl: '1920px',
} as const;

export type ContainerDefinition = keyof typeof container;
export type ContainerValues = valueof<typeof container>;
export default container;
