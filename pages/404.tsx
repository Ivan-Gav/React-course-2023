import { useRouter } from 'next/router';

export default function Page404() {
  const router = useRouter();

  return (
    <div className="fallback">
      <h1>404 - Page Not Found</h1>
      <button type="button" onClick={() => router.push('/')}>
        Go to Main page
      </button>
    </div>
  );
}
