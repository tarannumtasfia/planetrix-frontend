export default function Skeleton() {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
      <div className="h-40 bg-gray-300"></div>

      <div className="p-4 space-y-2">
        <div className="h-4 bg-gray-300 w-3/4"></div>
        <div className="h-4 bg-gray-200 w-1/2"></div>
      </div>
    </div>
  );
}