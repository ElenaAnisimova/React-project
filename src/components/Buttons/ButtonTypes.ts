export type ButtonProps = {
  text?: string;
  children?: React.ReactNode;
  sendRequest?: () => void;
  makeError?: () => void;
  closeDetails?: () => void;
};
