export default function Loading() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center" aria-label="Loading page content">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="w-20 h-20 rounded-full border-4 border-forest-100 border-t-forest-700 animate-spin" aria-hidden="true" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display font-bold text-forest-900 text-sm">AS</span>
          </div>
        </div>
        <p className="text-gray-400 text-sm font-medium">Loading...</p>
      </div>
    </div>
  );
}
