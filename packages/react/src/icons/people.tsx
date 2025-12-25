
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const People: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  title,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    aria-hidden={title ? 'false' : 'true'}
    {...props}
  >
    {title && <title>{title}</title>}
    <path fill="#000" fill-rule="evenodd" d="M11 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-1 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" clip-rule="evenodd"/><path fill="#000" d="M15.5 13a2.5 2.5 0 0 0-2.5 2.5c0-.686-.153-1.336-.428-1.918A3.5 3.5 0 0 1 19 15.5v2a.5.5 0 0 1-1 0v-2a2.5 2.5 0 0 0-2.5-2.5m-7 0A2.5 2.5 0 0 0 6 15.5v2a.5.5 0 0 1-1 0v-2a3.5 3.5 0 1 1 7 0v2a.5.5 0 0 1-1 0v-2A2.5 2.5 0 0 0 8.5 13"/><path fill="#000" fill-rule="evenodd" d="M18 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-1 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" clip-rule="evenodd"/>
  </svg>
);

export default People;
