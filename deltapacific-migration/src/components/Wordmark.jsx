export default function Wordmark({ variant = "light" }) {
  const isDark = variant === "dark";

  return (
    <img
      src={`${import.meta.env.BASE_URL}images/logo.png`}
      alt="Delta Pacific Plumbing Inc."
      style={{
        height: "48px",
        width: "auto",
        filter: isDark ? "brightness(0) invert(1)" : "none",
      }}
    />
  );
}
