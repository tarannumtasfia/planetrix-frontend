export default function Card() {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="h-40 bg-gray-200"></div>

      <div className="p-4">
        <h2 className="font-semibold text-lg">Planet</h2>
        <p className="text-sm text-gray-500">
          Some description here
        </p>
      </div>
    </div>
  );
}