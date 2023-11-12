import { ButtonProps } from './ButtonTypes';

export const SearchButton = ({ sendRequest, children }: ButtonProps) => {
  return (
    <button onClick={sendRequest} className="page-btn" type="button">
      {children}
    </button>
  );
};
