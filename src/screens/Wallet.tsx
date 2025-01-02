import { useState } from "react";
import walletImage from "@/assets/wallet.png"
const Wallet = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = () => {
    // Mock wallet connection logic
    const mockAddress = "0xdd...5ca8"; // Replace this with actual wallet logic
    setWalletAddress(mockAddress);
    setWalletConnected(true);
  };

  const disconnectWallet = () => {
    setWalletAddress("");
    setWalletConnected(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 rounded-lg p-6 text-center flex flex-col items-center text-white shadow-lg">
        <img src={walletImage} alt="Wallet" className="w-24 mb-6" />
        {!walletConnected ? (
          <>
            <h2 className="text-2xl font-semibold">Your Tokens</h2>
            <p className="mt-2">No tokens found! Connect your wallet to explore 🎉</p>
            <button
              onClick={connectWallet}
              className="mt-4 bg-gradient-to-r from-blue-light to-blue-medium text-white py-2 px-6 rounded-md"
            >
              Connect Wallet
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold">Connected Wallet</h2>
            <p className="mt-2">{walletAddress}</p>
            <button
              onClick={disconnectWallet}
              className="mt-4 bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600"
            >
              Disconnect Wallet
            </button>
            <div className="mt-6">
              <h3 className="text-xl font-medium">Your Tokens</h3>
              <p className="mt-2">No tokens found! Connect your wallet to explore 🎉</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Wallet;
