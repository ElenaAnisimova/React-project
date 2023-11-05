export type ButtonProps = {
  text: string;
  sendRequest?: () => Promise<void>;
  makeError?: () => void;
};
