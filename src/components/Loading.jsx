export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <div className="text-center">
        <div className="w-14 h-14 border-4 border-white/30 border-t-cyan-400 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-lg font-semibold tracking-wide">Loading...</p>
      </div>
    </div>
  );
}