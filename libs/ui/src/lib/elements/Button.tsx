import React, { ReactElement } from 'react';
import { clsx } from 'clsx';

export enum ButtonSizeEnum {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
}

const sizes = {
  [ButtonSizeEnum.xs]: 'rounded px-2.5 py-1.5 text-xs',
  [ButtonSizeEnum.sm]: 'rounded-md px-3 py-2 text-sm leading-4',
  [ButtonSizeEnum.md]: 'rounded-md px-4 py-2 text-sm',
  [ButtonSizeEnum.lg]: 'rounded-md px-4 py-2.5 text-base',
  [ButtonSizeEnum.xl]: 'rounded-md px-6 py-3 text-base',
};

export enum ButtonStyleEnum {
  primary = 'primary',
  secondary = 'secondary',
  ghost = 'ghost',
}

const styles = {
  primary:
    'border border-transparent bg-gray-600 font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2',
  secondary:
    'border border-transparent bg-gray-100 font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2',
  ghost:
    'border border-gray-300 bg-white font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2',
};

export type ButtonProps = {
  onClick?: () => void;
  size?: ButtonSizeEnum;
  style?: ButtonStyleEnum;
  children?: any;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};

export function Button({
  onClick,
  size = ButtonSizeEnum.md,
  style = ButtonStyleEnum.primary,
  children,
  type = 'button',
  className,
}: ButtonProps): ReactElement {
  return (
    <button
      type={type}
      onClick={onClick ? () => onClick() : undefined}
      className={clsx(
        'inline-flex items-center justify-center',
        sizes[size],
        styles[style],
        className
      )}
    >
      {children}
    </button>
  );
}

type ButtonLabelProps = {
  children: any;
};

Button.Label = function ButtonLabel({
  children,
}: ButtonLabelProps): ReactElement {
  return <>{children}</>;
};

type ButtonIconProps = {
  Icon: any;
  left?: boolean;
  right?: boolean;
};

Button.Icon = function ButtonIcon({
  Icon,
  left,
  right,
}: ButtonIconProps): ReactElement {
  return (
    <Icon
      className={clsx(
        'h-5 w-5 text-gray-500',
        left && '-ml-0.5 mr-1.5',
        right && '-mr-0.5 ml-1.5'
      )}
    />
  );
};
