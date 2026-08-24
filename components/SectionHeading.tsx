/**
 * 通用 Section 标题 — 工业风
 * tag: 小标签（如 "OUR SERVICES"）
 * title: 主标题
 * desc: 描述
 */
export function SectionHeading({
  tag,
  title,
  desc,
  light = false,
}: {
  tag?: string;
  title: string;
  desc?: string;
  light?: boolean;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      {tag && <span className="tag-chip mb-4">{tag}</span>}
      <h2
        className={`font-display text-3xl md:text-4xl font-bold tracking-wide ${
          light ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {desc && (
        <p
          className={`mt-3 text-base leading-relaxed ${
            light ? "text-white/60" : "text-steel/80"
          }`}
        >
          {desc}
        </p>
      )}
    </div>
  );
}
