import { Link } from "react-router";

const NotFound = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-5">
      <h1 className="text-8xl font-black text-sky-500">404</h1>
      <p className="text-2xl font-bold">Page not found</p>
      <Link to="/" className="text-xl font-bold underline">
        Go Home
      </Link>
    </main>
  );
};

export default NotFound;