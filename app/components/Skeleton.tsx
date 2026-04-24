export default function Skeleton() {
  return (
    <div className="bg-[#0d1629] border border-[rgba(99,179,237,0.15)] rounded-2xl overflow-hidden">


      <div className="h-44 bg-[#080e1d] flex items-center justify-center">
        <div className="w-28 h-28 rounded-full skeleton-shimmer" />
      </div>

      <div className="p-4 space-y-3">

        <div className="h-4 w-3/5 rounded-md skeleton-shimmer" />


        <div className="flex gap-4">
          <div className="h-7 w-20 rounded-md skeleton-shimmer" />
          <div className="h-7 w-16 rounded-md skeleton-shimmer" />
        </div>


        <div className="h-8 w-full rounded-lg skeleton-shimmer" />
      </div>
    </div>
  );
}