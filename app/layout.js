import "./globals.css";

export const metadata = {
  title: "AS Associates - Quality Commodities. Trusted Worldwide.",
  description: "AS Associates is a Kannur-based wholesale trading and supply company delivering premium food commodities and essential products across India and global markets.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800&family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FBF9F5] text-[#2D2823] antialiased font-sans selection:bg-[#B26B2C] selection:text-white">
        {children}
      </body>
    </html>
  );
}
