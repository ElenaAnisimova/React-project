import { ButtonProps } from './ButtonTypes';

export const CloseButton = ({ closeDetails, children }: ButtonProps) => {
  return (
    <button
      onClick={closeDetails}
      aria-label="close-button"
      className="page-btn"
      type="button"
    >
      {children}
    </button>
  );
};
