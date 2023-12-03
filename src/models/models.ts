export type Gender = 'notspecified' | 'female' | 'male';

export interface IFormErrors {
  image?: string;
  name?: string;
  age?: string;
  email?: string;
  gender?: string;
  country?: string;
  password?: string;
  confirmpassword?: string;
  tc?: string;
}

export interface IFormInputs {
  image: File;
  name: string;
  age: string;
  email: string;
  gender: Gender;
  country: string;
  password: string;
  confirmpassword: string;
  tc?: string;
  showpass?: boolean;
  showconfirm?: boolean;
}
