
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Superscript: React.FC<IconProps> = ({
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
    <path fill="#000" d="M7.51 15.65a.523.523 0 1 1-.985-.351l2.377-6.535a.83.83 0 0 1 1.56 0l2.374 6.535a.523.523 0 1 1-.985.351L9.722 9.57a.043.043 0 0 0-.08 0zm.162-2.238c0-.251.204-.456.456-.456h3.1a.456.456 0 0 1 0 .912h-3.1a.456.456 0 0 1-.456-.456m6.652-1.302a.436.436 0 0 1-.287-.766l1.64-1.431q.259-.228.433-.407.175-.178.266-.345a.76.76 0 0 0 .091-.365.61.61 0 0 0-.258-.52q-.255-.195-.63-.195-.4 0-.643.21a.7.7 0 0 0-.133.151c-.127.197-.3.403-.534.403s-.432-.194-.367-.418q.11-.378.434-.642.494-.402 1.257-.403.513 0 .897.183.387.181.604.501.217.316.217.715 0 .315-.13.585-.125.27-.395.555-.27.281-.695.634l-.927.799a.023.023 0 0 0 .016.04h1.895a.357.357 0 1 1 0 .715z"/>
  </svg>
);

export default Superscript;
