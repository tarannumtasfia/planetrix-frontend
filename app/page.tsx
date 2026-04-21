import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Skeleton from "./components/Skeleton";

export default function Home() {
  const loading = true; // simulate loading

  return (
    <main>
      <Navbar />

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} />
            ))
          : [1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} />
            ))}

      </div>
    </main>
  );
}