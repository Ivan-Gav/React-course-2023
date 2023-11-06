import { useNavigate } from 'react-router';

function Fallback() {
  const navigate = useNavigate();

  return (
    <div className="fallback">
      <h1>This is your ERROR bro!</h1>
      <button type="button" onClick={() => navigate('/')}>
        Go to Main page
      </button>
    </div>
  );
}

export default Fallback;
