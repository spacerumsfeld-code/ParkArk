import React, { ReactElement } from 'react';
import clsx from 'clsx';

type CardProps = {
  children: React.ReactNode;
  withHeader?: boolean;
  withDividers?: boolean;
  className?: string;
};

export function Card({
  children,
  className,
  withDividers,
}: CardProps): ReactElement {
  return (
    <div
      className={clsx('overflow-hidden rounded-lg bg-white shadow', className)}
    >
      <div
        className={clsx(
          'overflow-hidden',
          withDividers && 'divide-y divide-gray-200'
        )}
      >
        {children}
      </div>
    </div>
  );
}

type CardHeaderProps = {
  children?: React.ReactNode;
};

Card.Header = function CardHeader({ children }: CardHeaderProps): ReactElement {
  return <div className="px-4 py-4 sm:px-6">{children}</div>;
};

type CardFooterProps = {
  children?: React.ReactNode;
};

Card.Footer = function CardFooter({ children }: CardFooterProps): ReactElement {
  return <div className="bg-gray-50 px-4 py-4 sm:px-6">{children}</div>;
};
