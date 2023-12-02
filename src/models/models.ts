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
