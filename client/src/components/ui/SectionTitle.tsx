interface SectionTitleProps {
  label: string;
  title: string;
  description?: string;
  center?: boolean;
}

function SectionTitle({
  label,
  title,
  description,
  center = false,
}: SectionTitleProps) {
  return (
    <div
      className={`mb-16 ${
        center ? "mx-auto max-w-3xl text-center" : ""
      }`}
    >
      <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#006491]">
        {label}
      </span>

      <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-relaxed text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;