import { useState } from 'react';
import emptyProfile from '../assets/images/empty-profile.png';
import * as yup from 'yup';

type Gender = 'notspecified' | 'female' | 'male';

// interface IFormInput {
//   image: File;
//   name: string;
//   age: number;
//   email: string;
//   gender: Gender;
//   country: string;
//   password: string;
//   confirmpassword: string;
//   tc: string;
// }

interface IFormErrors {
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

const COUNTRIES = [
  'Poland',
  'Germany',
  'France',
  'Ukraine',
  'Belarus',
  'Russia',
  'UK',
  'USA',
];

// validation

const MAX_FILE_SIZE = 1000000;

const VALID_FILE_EXTENSIONS = ['jpg', 'png', 'jpeg'];

function isValidFileType(fileName: string) {
  const extension = fileName.split('.').pop();
  return !!(extension && VALID_FILE_EXTENSIONS.indexOf(extension) > -1);
}

const schema = yup.object().shape({
  image: yup
    .mixed<File>()
    .required()
    .test('required', 'this field is required', (value) => {
      return !!value.name;
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
  tc: yup.string().required('please accept terms and conditions'),
});

// -----------------------------------------------------------------

export default function UncontrolledForm() {
  const [errors, setErrors] = useState<IFormErrors>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formJson = Object.fromEntries(formData.entries());
    try {
      const isValid = await schema.validate(formJson, { abortEarly: false });
      setErrors({});
      console.log(`Form is valid: ${isValid}`);
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        let errs: IFormErrors = {};
        for (const key of error.inner) {
          if (key.path && !(key.path in errs)) {
            errs = { ...errs, [key.path]: key.message };
          }
        }
        setErrors(errs);
        console.log(error.inner);
      }
    }
  };

  return (
    <form className="form" method="post" onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="image">
          <input
            className="profile-pic-input"
            type="file"
            id="image"
            name="image"
            accept="image/jpeg, image/png, image/jpg"
            hidden
          />
          <img
            className="profile-pic"
            src={emptyProfile}
            alt="profile pic"
            width={150}
            height={200}
          />
        </label>
        {errors.image && <span className="error">{errors.image}</span>}
      </fieldset>

      <fieldset>
        <label htmlFor="name" className="label">
          Name
        </label>
        <input name="name" id="name" />
        {errors.name && <span className="error">{errors.name}</span>}
      </fieldset>

      <fieldset>
        <label htmlFor="age" className="label">
          Age
        </label>
        <input type="number" name="age" id="age" />
        {errors.age && <span className="error">{errors.age}</span>}
      </fieldset>

      <fieldset>
        <label htmlFor="email" className="label">
          Email
        </label>
        <input name="email" id="email" />
        {errors.email && <span className="error">{errors.email}</span>}
      </fieldset>

      <fieldset>
        <label className="label">Gender</label>

        <input
          type="radio"
          name="gender"
          id="nogender"
          value="nogender"
          defaultChecked={true}
        />
        <label htmlFor="nogender">not specified</label>

        <input type="radio" name="gender" id="female" value="female" />
        <label htmlFor="female">female</label>

        <input type="radio" name="gender" id="male" value="male" />
        <label htmlFor="male">male</label>

        {errors.gender && <span className="error">{errors.gender}</span>}
      </fieldset>

      <fieldset>
        <label htmlFor="country" className="label">
          Country
        </label>
        <input id="country" name="country" />
        {errors.country && <span className="error">{errors.country}</span>}
      </fieldset>

      <fieldset>
        <label htmlFor="password" className="label">
          Password
        </label>
        <input type="text" id="password" name="password" />
        {errors.password && <span className="error">{errors.password}</span>}
      </fieldset>

      <fieldset>
        <label htmlFor="confirmpassword" className="label">
          Confirm Password
        </label>
        <input type="text" id="confirmpassword" name="confirmpassword" />
        {errors.confirmpassword && (
          <span className="error">{errors.confirmpassword}</span>
        )}
      </fieldset>

      <fieldset>
        <input type="checkbox" id="tc" name="tc" />
        <label htmlFor="tc">accept Terms and Conditions</label>
        {errors.tc && <span className="error">{errors.tc}</span>}
      </fieldset>

      <fieldset>
        <button>Submit</button>
      </fieldset>
    </form>
  );
}
