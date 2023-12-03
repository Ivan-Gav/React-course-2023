import { IFormData } from '../models/models';

export default function AccountCard(account: IFormData) {
  const { name, age, gender, country, image, email } = account;

  return (
    <div className="card">
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
