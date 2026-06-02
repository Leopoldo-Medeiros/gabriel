import { SVGProps } from 'react';
import type { Lang } from '../i18n/translations';

// Simplified inline SVG flags (viewBox 640x480, 4:3). Inline SVG instead of emoji
// flags because emoji flags do not render on Windows.

export const FlagBR: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="640" height="480" fill="#229E45" />
    <polygon points="320,48 600,240 320,432 40,240" fill="#F8E509" />
    <circle cx="320" cy="240" r="96" fill="#2B49A3" />
  </svg>
);

export const FlagES: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="640" height="480" fill="#C60B1E" />
    <rect y="120" width="640" height="240" fill="#FFC400" />
  </svg>
);

export const FlagUS: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  const stripe = 480 / 13;
  return (
    <svg viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg" {...props}>
      {Array.from({ length: 13 }, (_, i) => (
        <rect key={i} y={i * stripe} width="640" height={stripe} fill={i % 2 === 0 ? '#B22234' : '#fff'} />
      ))}
      <rect width="272" height={stripe * 7} fill="#3C3B6E" />
    </svg>
  );
};

export const FLAGS: Record<Lang, React.FC<SVGProps<SVGSVGElement>>> = {
  pt: FlagBR,
  es: FlagES,
  en: FlagUS,
};
