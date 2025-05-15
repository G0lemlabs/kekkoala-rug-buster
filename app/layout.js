import './globals.css';

export const metadata = {
  title: 'KekKoala dApp',
  description: 'Clean, production-ready meme dApp',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
