'use client';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

export default function Wallet() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({ connector: new InjectedConnector() });
  const { disconnect } = useDisconnect();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center space-y-6 text-center">
      <h2 className="text-3xl font-bold">Wallet Connect</h2>
      {isConnected ? (
        <>
          <p>Connected: {address.slice(0, 6)}...{address.slice(-4)}</p>
          <button className="bg-white text-black px-4 py-2 rounded" onClick={() => disconnect()}>Disconnect</button>
        </>
      ) : (
        <button className="bg-cyber text-black px-6 py-3 rounded" onClick={() => connect()}>Connect Wallet</button>
      )}
    </main>
  );
}
