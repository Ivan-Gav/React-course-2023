import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <>
      <h1>Something went wrong</h1>
      <Link to="/">go to Main page</Link>
    </>
  );
}
