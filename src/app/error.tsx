"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div style={{ padding: 32, textAlign: "center" }}>
      <h2>Something went wrong!</h2>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
