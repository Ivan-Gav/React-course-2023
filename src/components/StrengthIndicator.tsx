import usePassStrength from '../validation/usePassStrength';

export default function StrengthIndicator(props: { pass: string }) {
  const { strength } = usePassStrength();

  return (
    <div className="strength-indicator ">
      <progress
        id="strength"
        max="4"
        value={strength(props.pass)}
        className={`level-${strength(props.pass)}`}
      />
    </div>
  );
}
