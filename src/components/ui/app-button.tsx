import { forwardRef } from 'react';

type IProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const AppButtonBase = (
  props: IProps,
  forwardRef: React.ForwardedRef<HTMLButtonElement>
  ) => {
  
  // eslint-disable-next-line @stylistic/max-len
  const baseButton = 'px-4 py-2 rounded-md cursopr-pointer text-primary border-2 bg-white border-primary border-solid';
  return <button
    className={`${baseButton}`}
    {...props}
    ref={forwardRef}>{props.children}</button>;
};

const AppButton = forwardRef(AppButtonBase);

export { AppButton };