import Image from "next/image";

export default function Home() {
  return (
    <main>
      <iframe
        src="/source.html"
        style={{ width: "100%", height: "100vh", border: "none" }}
        title="Legacy Site"
      />
    </main>
  );
}
