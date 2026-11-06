const PageTitle = ({ children }) => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-green-500 text-6xl font-bold">{children}</h1>
    </main>
  );
};

export default PageTitle;