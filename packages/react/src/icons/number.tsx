
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Number: React.FC<IconProps> = ({
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
    <path fill="#000" d="M6.51 15.65a.523.523 0 1 1-.985-.351l2.377-6.535a.83.83 0 0 1 1.56 0l2.374 6.535a.523.523 0 1 1-.985.35L8.723 9.57a.043.043 0 0 0-.081 0zm.162-2.238c0-.251.204-.456.456-.456h3.1a.456.456 0 1 1 0 .912h-3.1a.456.456 0 0 1-.456-.456M13.692 16a.55.55 0 0 1-.4-.926l2.453-2.611q.436-.472.718-.821.285-.35.426-.665.14-.315.14-.665 0-.399-.19-.688a1.26 1.26 0 0 0-.517-.452 1.65 1.65 0 0 0-.733-.16q-.433 0-.756.179-.319.179-.494.498a1.3 1.3 0 0 0-.107.255c-.08.266-.293.497-.571.497s-.51-.228-.458-.5q.075-.393.273-.72.32-.525.878-.817a2.7 2.7 0 0 1 1.262-.292q.71 0 1.254.292.543.29.85.783.309.495.309 1.106 0 .433-.16.847-.156.41-.543.916a16 16 0 0 1-1.08 1.22l-1.633 1.731a.044.044 0 0 0 .032.074h3.053a.46.46 0 1 1 0 .919z"/>
  </svg>
);

export default Number;
