export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-sm mx-auto mt-16 space-y-4 flex flex-col items-center">
      {children}
    </div>
  );
}
