import React, { forwardRef, ReactElement } from 'react';
import clsx from 'clsx';

type OuterContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const OuterContainer = forwardRef(function OuterContainer(
  { className, children }: OuterContainerProps,
  ref: React.Ref<HTMLDivElement>
): ReactElement {
  return (
    <div ref={ref} className={clsx('sm:px-8', className)}>
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
    </div>
  );
});

type InnerContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const InnerContainer = forwardRef(function InnerContainer(
  { className, children }: InnerContainerProps,
  ref: React.Ref<HTMLDivElement>
): ReactElement {
  return (
    <div
      ref={ref}
      className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
    >
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  );
});

type ContainerProps = {
  children: React.ReactNode;
};

export const Container: Container = forwardRef(function Container(
  { children }: ContainerProps,
  ref: React.Ref<HTMLDivElement>
) {
  return (
    <OuterContainer ref={ref}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  );
});

interface Container extends React.ForwardRefExoticComponent<ContainerProps> {
  Outer?: typeof OuterContainer;
  Inner?: typeof InnerContainer;
}

Container.Outer = OuterContainer;
Container.Inner = InnerContainer;
