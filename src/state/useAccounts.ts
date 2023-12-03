import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

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
      id: uuidv4(),
      image: typeof pic === 'string' ? pic : '',
      name,
      age,
      email,
      gender,
      country,
      password,
    };
    dispatch(add(data));
    return data;
  };

  return { saveAccount };
}
