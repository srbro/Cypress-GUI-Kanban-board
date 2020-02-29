type Colors = {
  [color: string]: string;
};

const colors: Colors = {
  white: '#ffffff',
  gray: '#E2E8F0',
  black600: '#102540',
  black400: '#4C5E74',
  black200: '#BBC2CA',
  blue600: '#2992DB',
  blue400: '#56B2E5',
  blue200: '#BEE3F6',
  red600: '#E12A5A',
  red400: '#E86B79',
  red200: '#F4C2C2'
};

export function getColumnColor(columnId: string, weight: number): string {
  if (columnId === 'todo') return colors[`blue${weight}`];
  if (columnId === 'inProgress') return colors[`red${weight}`];
  return colors[`black${weight}`];
}

export default colors;
