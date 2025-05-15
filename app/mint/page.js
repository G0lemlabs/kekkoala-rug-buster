'use client';
import { useState } from 'react';

export default function MintPage() {
  const [minted, setMinted] = useState(false);

  return (
    <main className="min-h-screen flex flex-col justify-center items-center space-y-6 text-center">
      <h2 className="text-3xl font-bold text-glitch">Mint a KekKoala NFT</h2>
      {!minted ? (
        <button className="bg-cyber text-black px-6 py-3 rounded" onClick={() => setMinted(true)}>Mint Now</button>
      ) : (
        <div className="text-xl text-white animate-pulse">You've minted a Koala!</div>
      )}
    </main>
  );
}
