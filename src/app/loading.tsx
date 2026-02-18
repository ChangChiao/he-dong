export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-tan-light border-t-gold" />
        <span className="text-sm text-brown-text">載入中...</span>
      </div>
    </div>
  );
}
