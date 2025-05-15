import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center space-y-6 text-center">
      <h1 className="text-5xl font-bold text-glitch">KekKoala Web3 Portal</h1>
      <p className="text-cyber">Connect. Mint. Vote. Meme.</p>
      <div className="space-x-4">
        <Link href="/wallet"><button className="bg-cyber text-black px-6 py-3 rounded">Wallet</button></Link>
        <Link href="/mint"><button className="bg-glitch text-black px-6 py-3 rounded">Mint NFT</button></Link>
        <Link href="/dao"><button className="bg-white text-black px-6 py-3 rounded">DAO</button></Link>
      </div>
    </main>
  );
}
