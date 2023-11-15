import { useNavigate } from 'react-router';
import { useRouteError } from 'react-router-dom';

function Fallback() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className="fallback">
      {error instanceof Error ? (
        <>
          <h2>Following Error has occured:</h2>
          <h1>{error.message}</h1>
        </>
      ) : (
        <h1>Something went wrong...</h1>
      )}
      <button type="button" onClick={() => navigate('/')}>
        Go to Main page
      </button>
    </div>
  );
}

export default Fallback;
