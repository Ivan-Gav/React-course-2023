import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import emptyProfile from '../assets/images/empty-profile.png';
import { COUNTRIES } from '../constants/countries';
import { IFormErrors } from '../models/models';
import { schema } from '../validation/schema';
import useAccounts from '../state/useAccounts';

export default function UncontrolledForm() {
  const [errors, setErrors] = useState<IFormErrors>({});
  const navigate = useNavigate();
  const { saveAccount } = useAccounts();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formJson = Object.fromEntries(formData.entries());
    try {
      const validData = await schema.validate(formJson, { abortEarly: false });
      setErrors({});
      console.log(validData);
      const data = await saveAccount(validData);
      navigate('/', { state: { id: data.id } });
    } catch (error) {
      console.log(error);
      if (error instanceof yup.ValidationError) {
        let errs: IFormErrors = {};
        for (const key of error.inner) {
          if (key.path && !(key.path in errs)) {
            errs = { ...errs, [key.path]: key.message };
          }
        }
        setErrors(errs);
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
        <input id="country" list="countries" name="country" />
        {errors.country && <span className="error">{errors.country}</span>}

        <datalist id="countries">
          {COUNTRIES.map((country, i) => (
            <option key={i} value={country} />
          ))}
        </datalist>
      </fieldset>

      <fieldset>
        <label htmlFor="password" className="label">
          Password
        </label>
        <input type="password" id="password" name="password" />
        {errors.password && <span className="error">{errors.password}</span>}
      </fieldset>

      <fieldset>
        <label htmlFor="confirmpassword" className="label">
          Confirm Password
        </label>
        <input type="password" id="confirmpassword" name="confirmpassword" />
        {errors.confirmpassword && (
          <span className="error">{errors.confirmpassword}</span>
        )}
      </fieldset>

      <fieldset>
        <input type="checkbox" id="tc" name="tc" value="accept" />
        <label htmlFor="tc">accept Terms and Conditions</label>
        {errors.tc && <span className="error">{errors.tc}</span>}
      </fieldset>

      <fieldset>
        <button>Submit</button>
      </fieldset>
    </form>
  );
}
