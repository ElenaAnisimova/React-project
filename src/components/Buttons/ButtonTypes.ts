export type ButtonProps = {
  text?: string;
  children?: React.ReactNode;
  sendRequest?: () => Promise<void>;
  makeError?: () => void;
  closeDetails?: () => void;
};
