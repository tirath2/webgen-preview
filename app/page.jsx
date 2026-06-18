import Link from "next/link";

export default function Home() {
  return (
    <main className="empty-preview">
      <p className="eyebrow">Webgen Preview</p>
      <h1>Open a preview by id</h1>
      <p>Use the public URL format below after generating a website in the local admin app.</p>
      <code>/p/&lt;website_generation_id&gt;</code>
      <Link href="/p/demo">View demo route</Link>
    </main>
  );
}
