export type SearchBarProps = {
  query: string;
  placeholder: string;
  type: string;
  className: string;
  sendRequest?: () => Promise<void>;
  makeError?: () => void;
  handleInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
