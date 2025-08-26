import "./globals.css";

export const metadata = {
    title: "Countries",
    icons: {
    icon: "/mundo.png",
  },
    description: "",

};


export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
