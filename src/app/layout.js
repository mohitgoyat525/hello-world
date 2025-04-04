import "./globals.css";



export const metadata = {
  title: "Hello World",
  description: "Hello World Every Programer favorite Word",
  openGraph: {
    title: "Hello World",
    description: "Hello World Every Programer favorite Word",
    images: [
      {
        url: "/meta-img.png",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
