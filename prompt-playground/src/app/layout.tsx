// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Prompt Playground",
  description: "A mini playground for prompt engineering with OpenAI"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 p-4">
        {children}
      </body>
    </html>
  );
}
