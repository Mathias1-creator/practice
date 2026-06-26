export default function Wordmark({ variant = "light" }) {
  const isLight = variant === "light";

  return (
    <div className="flex flex-col leading-none">
      <span
        className="font-heading font-extrabold text-xl md:text-2xl tracking-wide"
        style={{ color: isLight ? "#13233B" : "#FFFFFF" }}
      >
        DELTA PACIFIC
      </span>
      <span
        className="font-body text-xs md:text-sm font-medium tracking-[0.2em]"
        style={{ color: "#B26B3E" }}
      >
        PLUMBING, INC.
      </span>
    </div>
  );
}