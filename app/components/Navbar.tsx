export default function Navbar() {
  return (
    <div className="w-full bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-500">Planetrix</h1>

      <div className="space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          Login
        </button>
      </div>
    </div>
  );
}