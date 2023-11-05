import { ButtonProps } from './ButtonTypes';

export const CloseButton = ({ text, closeDetails }: ButtonProps) => {
  return (
    <button onClick={closeDetails} className="page-btn" type="button">
      {text}
    </button>
  );
};
