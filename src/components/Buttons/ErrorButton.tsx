import { ButtonProps } from './ButtonTypes';

export const ErrorButton = ({ makeError, children }: ButtonProps) => {
  return (
    <button onClick={makeError} className="page-btn" type="button">
      {children}
    </button>
  );
};
