import "./globals.css";
import FirebaseAnalytics from "./components/FirebaseAnalytics.jsx";

export const metadata = {
  title: "Website Preview",
  description: "Generated website preview"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <FirebaseAnalytics />
      </body>
    </html>
  );
}
