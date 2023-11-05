import { ButtonProps } from './ButtonTypes';

export const ErrorButton = ({ text, makeError }: ButtonProps) => {
  return (
    <button onClick={makeError} className="page-btn" type="button">
      {text}
    </button>
  );
};
