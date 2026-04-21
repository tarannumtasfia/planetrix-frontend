export default function SectionHeader({
    title,
    subtitle,
    count,
  }: {
    title: string;
    subtitle?: string;
    count?: number;
  }) {
    return (
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="font-[family-name:var(--font-orbitron)] text-xl md:text-2xl font-bold tracking-widest text-slate-200 mb-1">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xs text-[#718096] tracking-wide">{subtitle}</p>
          )}
        </div>
        {count !== undefined && (
          <span className="text-xs font-[family-name:var(--font-orbitron)] tracking-widest text-[#718096]">
            {count} objects
          </span>
        )}
      </div>
    );
  }