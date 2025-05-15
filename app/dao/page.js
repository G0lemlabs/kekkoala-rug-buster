'use client';
import { useState } from 'react';

export default function DaoPage() {
  const [votes, setVotes] = useState({ laser: 0, baked: 0 });

  return (
    <main className="min-h-screen flex flex-col items-center justify-center space-y-6 text-center">
      <h2 className="text-3xl font-bold">DAO Voting</h2>
      <p>What should KekKoala become?</p>
      <button className="bg-glitch text-black px-4 py-2 rounded" onClick={() => setVotes(v => ({ ...v, laser: v.laser + 1 }))}>
        Laser Eyes ({votes.laser})
      </button>
      <button className="bg-cyber text-black px-4 py-2 rounded" onClick={() => setVotes(v => ({ ...v, baked: v.baked + 1 }))}>
        Baked & Based ({votes.baked})
      </button>
    </main>
  );
}
