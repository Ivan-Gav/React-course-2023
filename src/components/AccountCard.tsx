import { useEffect, useState } from 'react';
import { IFormData } from '../models/models';

type AccountCardProps = {
  account: IFormData;
  new: boolean;
};

export default function AccountCard(props: AccountCardProps) {
  const { name, age, gender, country, image, email } = props.account;
  const [isNew, setIsNew] = useState(props.new);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsNew(false);
      clearTimeout(timerId);
    }, 2000);
  }, []);

  return (
    <div className={isNew ? 'card new' : 'card'}>
      <img src={image} alt="no image" height="200px" />
      <div className="card-text">
        <h3>{name}</h3>
        <p>
          <strong>Age:</strong> {age}
        </p>
        <p>
          <strong>Gender:</strong> {gender}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Country:</strong> {country}
        </p>
      </div>
    </div>
  );
}
