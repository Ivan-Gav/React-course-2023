import emptyProfile from '../assets/images/empty-profile.png';

export default function UncontrolledForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
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
        <span className="error">Error message</span>
      </fieldset>

      <fieldset>
        <label htmlFor="name" className="label">
          Name
        </label>
        <input name="name" id="name" />
        <span className="error">Error message</span>
      </fieldset>

      <fieldset>
        <label htmlFor="age" className="label">
          Age
        </label>
        <input type="number" name="age" id="age" />
        <span className="error">Error message</span>
      </fieldset>

      <fieldset>
        <label htmlFor="email" className="label">
          Email
        </label>
        <input type="email" name="email" id="email" />
        <span className="error">Error message</span>
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

        <span className="error">Error message</span>
      </fieldset>

      <fieldset>
        <label htmlFor="country" className="label">
          Country
        </label>
        <input id="country" name="country" />
        <span className="error">Error message</span>
      </fieldset>

      <fieldset>
        <label htmlFor="password" className="label">
          Password
        </label>
        <input type="password" id="password" name="password" />
        <span className="error">Error message</span>
      </fieldset>

      <fieldset>
        <label htmlFor="confirmpassword" className="label">
          Confirm Password
        </label>
        <input type="password" id="confirmpassword" name="confirmpassword" />
        <span className="error">Error message</span>
      </fieldset>

      <fieldset>
        <input type="checkbox" id="tc" name="tc" />
        <label htmlFor="tc">accept Terms and Conditions</label>
        <span className="error">Error message</span>
      </fieldset>

      <fieldset>
        <button>Submit</button>
      </fieldset>
    </form>
  );
}
