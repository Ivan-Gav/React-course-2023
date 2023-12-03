import { useDispatch } from 'react-redux';
import { IFormData, IFormInputs } from '../models/models';
import { add } from './accountSlice';

const toBase64 = (file: File) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

export default function useAccounts() {
  const dispatch = useDispatch();

  const saveAccount = async (account: IFormInputs) => {
    const pic = await toBase64(account.image);
    const { name, age, email, gender, country, password } = account;
    const data: IFormData = {
      image: typeof pic === 'string' ? pic : '',
      name,
      age,
      email,
      gender,
      country,
      password,
    };
    dispatch(add(data));
  };

  return { saveAccount };
}
