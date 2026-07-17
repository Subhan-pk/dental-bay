export default function Loader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <span className="flex h-14 w-14 items-center justify-center rounded-full blue-gradient text-2xl font-bold text-white shadow-lg animate-pulse">
          D
        </span>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Loading</p>
      </div>
    </div>
  );
}
