import "./globals.css";

export const metadata = {
  title: "Website Preview",
  description: "Generated website preview"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
