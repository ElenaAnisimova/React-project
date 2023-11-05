import { ButtonProps } from './ButtonTypes';

export const SearchButton = ({ text, sendRequest }: ButtonProps) => {
  return (
    <button onClick={sendRequest} className="page-btn" type="button">
      {text}
    </button>
  );
};
