// const lowerCaseRegEx = /(?=.*[a-z])/;
// const upperCaseRegEx = /(?=.*[A-Z])/;
// const digitRegEx = /(?=.*[0-9])/;
// const specCharRegEx = /(?=.[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]))/;

export default function usePassStrength() {
  const strength = (pass: string) => {
    const regExs = {
      lowerCaseRegEx: /.*[a-z]/,
      upperCaseRegEx: /.*[A-Z]/,
      digitRegEx: /.*[0-9]/,
      specCharRegEx: /.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/,
    };
    let passStrength = 0;
    Object.values(regExs).forEach((regEx) => {
      passStrength += regEx.test(pass) ? 1 : 0;
    });

    return passStrength;
  };

  return { strength };
}
