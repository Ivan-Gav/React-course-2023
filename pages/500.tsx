import { useRouter } from 'next/router';

export default function Page500() {
  const router = useRouter();

  return (
    <div className="fallback">
      <h1>500 - Server-side error occurred</h1>
      <button type="button" onClick={() => router.push('/')}>
        Go to Main page
      </button>
    </div>
  );
}
