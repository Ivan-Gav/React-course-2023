import { useRouter } from 'next/router';

type FallbackProps = {
  errorMessage?: string;
};

function Fallback(props: FallbackProps) {
  const { errorMessage } = props;
  const router = useRouter();

  return (
    <div className="fallback">
      {errorMessage ? (
        <>
          <h2>Following error has occured:</h2>
          <h1>{errorMessage}</h1>
        </>
      ) : (
        <h1>Something went wrong...</h1>
      )}
      <button
        type="button"
        onClick={() => {
          router.push('/');
          router.reload();
        }}
      >
        Go to Main page
      </button>
    </div>
  );
}

export default Fallback;
