
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const LinkBroken: React.FC<IconProps> = ({
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
    <path fill="#000" d="M10 8a2 2 0 1 1 4 0v1.5a.5.5 0 0 0 1 0V8a3 3 0 1 0-6 0v1.5a.5.5 0 0 0 1 0zm0 8a2 2 0 1 0 4 0v-1.5a.5.5 0 0 1 1 0V16a3 3 0 1 1-6 0v-1.5a.5.5 0 0 1 1 0zm-3.796-2.448a.5.5 0 0 1 .354-.612l.966-.259a.5.5 0 0 1 .259.966l-.966.259a.5.5 0 0 1-.613-.354m9.66-2.588a.5.5 0 0 1 .353-.612l.966-.259a.5.5 0 0 1 .259.966l-.966.259a.5.5 0 0 1-.612-.354m-9.047-.871a.5.5 0 1 0-.259.966l.966.259a.5.5 0 1 0 .259-.966zm9.659 2.588a.5.5 0 1 0-.259.966l.966.259a.5.5 0 1 0 .259-.966z"/>
  </svg>
);

export default LinkBroken;
