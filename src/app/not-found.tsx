export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-center">
      <h1 className="font-serif-tc text-6xl font-bold text-gold">404</h1>
      <p className="mt-4 text-xl text-brown-text">找不到您要的頁面</p>
      <a
        href="/"
        className="mt-8 bg-gold px-8 py-3 font-semibold text-brown-dark transition-colors hover:bg-gold/90"
      >
        回到首頁
      </a>
    </div>
  );
}
