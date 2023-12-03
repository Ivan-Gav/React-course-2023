import * as yup from 'yup';

import { Gender } from '../models/models';
import { COUNTRIES } from '../constants/countries';

const MAX_FILE_SIZE = 1000000;

const VALID_FILE_EXTENSIONS = ['jpg', 'png', 'jpeg'];

function isValidFileType(fileName: string) {
  const extension = fileName.split('.').pop();
  return !!(extension && VALID_FILE_EXTENSIONS.indexOf(extension) > -1);
}

export const schema = yup.object().shape({
  image: yup
    .mixed<File>()
    .required()
    .test('required', 'this field is required', (value) => {
      return !!(value.name !== '');
    })
    .test('is-valid-size', 'max allowed size is 1MB', (value) => {
      if (!value.name) return true;
      return value.size <= MAX_FILE_SIZE;
    })
    .test('is-valid-type', 'only png or jpeg files are allowed', (value) => {
      if (!value.name) return true;
      return isValidFileType(value.name.toLowerCase());
    }),
  name: yup
    .string()
    .required('this field is required')
    .matches(/^[A-Z]\w+/g, 'name must begin with capitall letter'),
  age: yup
    .string()
    .required('this field is required')
    .test(
      'is-above-zero',
      'the age must be above 0',
      (value) => Number(value) > 0
    ),
  email: yup
    .string()
    .required('this field is required')
    .email('incorrect email format'),
  gender: yup.mixed<Gender>().required('this field is required'),
  country: yup
    .string()
    .required('this field is required')
    .test('in-the-list', 'no such country in our list', (value) => {
      if (!value) return true;
      return COUNTRIES.includes(value.trim());
    }),
  password: yup
    .string()
    .required('this field is required')
    .matches(
      /(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=]).*$/g,
      'must contain 1 number, 1 capital letter, 1 lower-case letter, 1 special character'
    ),
  confirmpassword: yup
    .string()
    .required('this field is required')
    .oneOf([yup.ref('password')], 'passwords do not match'),
  tc: yup
    .string()
    .test(
      'for-hook-form',
      'please accept terms and conditions',
      (value) => value === 'accept'
    ),
});
