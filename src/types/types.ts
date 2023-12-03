export type FormDataType = {
  fullName?: string;
  age?: number;
  email?: string;
  password?: string;
  confirmPassword?: string;
  gender?: string;
  country?: string;
  terms?: boolean;
  image?: File | unknown;
};

export type Base64FormDataType = {
  fullName?: string;
  age?: number;
  email?: string;
  password?: string;
  confirmPassword?: string;
  gender?: string;
  terms?: boolean;
  image?: string;
  country?: string;
};

export type ErrorType = {
  [key: string]: string;
};

export type ErrorsStateType = {
  fullName?: string;
  age?: number;
  email?: string;
  password?: string;
  confirmPassword?: string;
  gender?: string;
  terms?: string;
  image?: string;
  country?: string;
};
