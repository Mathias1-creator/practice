export default function Wordmark() {
  return (
    <img
      src={`${import.meta.env.BASE_URL}images/logo.png`}
      alt="Delta Pacific Plumbing Inc."
      style={{ height: "72px", width: "auto" }}
    />
  );
}
