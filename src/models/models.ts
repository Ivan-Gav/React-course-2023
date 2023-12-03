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
  image: FileList | File;
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

export type IFormData = Omit<
  IFormInputs,
  'image' | 'confirmpassword' | 'tc' | 'showpass' | 'showconfirm'
> & { id: string; image: string };
