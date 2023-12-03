import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';

import { IFormInputs } from '../models/models';
import { schema } from '../validation/schema';
import useAccounts from '../state/useAccounts';
import { RootState } from '../state/store';
import StrengthIndicator from '../components/StrengthIndicator';

export default function ReactHookForm() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode: 'all',
  });
  const navigate = useNavigate();
  const { saveAccount } = useAccounts();
  const countries = useSelector((state: RootState) => state.countries);

  const pass = watch('password');
  const showpass = watch('showpass');
  const showconfirm = watch('showconfirm');

  const onSubmit = async (validData: IFormInputs) => {
    console.log(validData);
    const data = await saveAccount(validData);
    navigate('/', { state: { id: data.id } });
  };

  return (
    <form className="form" method="post" onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <label htmlFor="image">Image</label>
        <br />
        <input
          className="profile-pic-input"
          type="file"
          id="image"
          {...register('image')}
        />
        {errors.image && <span className="error">{errors.image.message}</span>}
      </fieldset>

      <fieldset>
        <label htmlFor="name" className="label">
          Name
        </label>
        <input id="name" {...register('name')} />
        {errors.name && <span className="error">{errors.name.message}</span>}
      </fieldset>

      <fieldset>
        <label htmlFor="age" className="label">
          Age
        </label>
        <input type="number" id="age" {...register('age')} />
        {errors.age && <span className="error">{errors.age.message}</span>}
      </fieldset>

      <fieldset>
        <label htmlFor="email" className="label">
          Email
        </label>
        <input id="email" {...register('email')} />
        {errors.email && <span className="error">{errors.email.message}</span>}
      </fieldset>

      <fieldset>
        <label className="label">Gender</label>

        <input
          type="radio"
          id="nogender"
          value="nogender"
          defaultChecked={true}
          {...register('gender')}
        />
        <label htmlFor="nogender">not specified</label>

        <input
          type="radio"
          id="female"
          value="female"
          {...register('gender')}
        />
        <label htmlFor="female">female</label>

        <input type="radio" id="male" value="male" {...register('gender')} />
        <label htmlFor="male">male</label>

        {errors.gender && (
          <span className="error">{errors.gender.message}</span>
        )}
      </fieldset>

      <fieldset>
        <label htmlFor="country" className="label">
          Country
        </label>
        <input id="country" list="countries" {...register('country')} />
        {errors.country && (
          <span className="error">{errors.country.message}</span>
        )}

        <datalist id="countries">
          {countries.map((country, i) => (
            <option key={`rhf${i}`} value={country} />
          ))}
        </datalist>
      </fieldset>

      <fieldset>
        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          type={showpass ? 'text' : 'password'}
          id="password"
          {...register('password')}
        />
        <input type="checkbox" {...register('showpass')} />
        {errors.password && (
          <span className="error">{errors.password.message}</span>
        )}
        <StrengthIndicator pass={pass} />
      </fieldset>

      <fieldset>
        <label htmlFor="confirmpassword" className="label">
          Confirm Password
        </label>
        <input
          type={showconfirm ? 'text' : 'password'}
          id="confirmpassword"
          {...register('confirmpassword')}
        />
        <input type="checkbox" {...register('showconfirm')} />
        {errors.confirmpassword && (
          <span className="error">{errors.confirmpassword.message}</span>
        )}
      </fieldset>

      <fieldset>
        <input type="checkbox" id="tc" value="accept" {...register('tc')} />
        <label htmlFor="tc">accept Terms and Conditions</label>
        {errors.tc && <span className="error">{errors.tc.message}</span>}
      </fieldset>

      <fieldset>
        <button disabled={!isDirty || !isValid}>Submit</button>
      </fieldset>
    </form>
  );
}
