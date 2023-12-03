export type FormDataType = {
  fullName?: string;
  age?: number;
  email?: string;
  password?: string;
  confirmPassword?: string;
  gender?: string;
  terms?: boolean;
  image?: File | unknown;
  country?: string;
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
