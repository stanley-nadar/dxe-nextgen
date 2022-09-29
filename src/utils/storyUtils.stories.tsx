import { ArrowRight, ChevronRight, Coffee, Globe, HelpCircle, Mail, Phone, Plus, X } from 'react-feather';

const storyExport = {
  excludeStories: /.*/,
};

export const iconMap = {
  Plus: <Plus />,
  ArrowRight: <ArrowRight />,
  ChevronRight: <ChevronRight />,
  X: <X />,
  Coffee: <Coffee />,
  Globe: <Globe />,
  HelpCircle: <HelpCircle />,
  Mail: <Mail />,
  Phone: <Phone />,
  undefined,
};

export const buttonIcons = ['←', '→', '↑', '↓', '<', '>', 'progress', undefined];

export const formatMap = {
  Percentage: (value: number) => `${value}%`,
  Celcius: (value: number) => `${value}°C`,
  Fahrenheit: (value: number) => `${value}°F`,
  undefined,
};
export const globalCSSValues = ['initial', 'inherit', 'revert', 'revert-layer', 'unset'];

export default storyExport;
