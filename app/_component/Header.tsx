export default function Header() {
  return (
    <header className="flex items-center justify-between p-24">
      <div className="flex items-center">
        <div className="mr-8">
          <img src="/images/nextjs-logo.svg" alt="Next.js Logo" width="64" height="64" />
        </div>
        <h1 className="text-4xl font-bold">Next.js + Tailwind CSS</h1>
      </div>
      <div className="flex items-center">
        <a className="mr-4" href="" target="_blank" />
      </div>
    </header>
  );
}
