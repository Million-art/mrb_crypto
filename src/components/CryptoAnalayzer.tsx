import React, { useState } from "react";
import TradingViewWidget from "./TradingView";

const CryptoAnalyzer: React.FC = () => {
  const [symbol, setSymbol] = useState<string>("");
  const [timeframe, setTimeframe] = useState<string>("1 Hour");
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const handleAnalyze = (event: React.FormEvent) => {
    event.preventDefault();
    if (symbol.trim()) {
      setShowPopup(true);
    } else {
      alert("Please enter a valid symbol.");
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <section className="flex justify-center h-auto bg-gray-medium mx-5 rounded-xl">
      <form onSubmit={handleAnalyze} className="shadow-md rounded-lg p-6 w-96">
        <h2 className="text-lg text-white font-semibold text-center mb-3">
          Advanced Crypto Analyzer
        </h2>
        <div className="flex flex-col text-white">
          <div className="mb-4 w-full">
            <label htmlFor="symbol" className="text-sm">
              Symbol (e.g., BTCUSDT)
            </label>
            <input
              type="text"
              id="symbol"
              value={symbol}
              onChange={(e) => setSymbol(e.target.value)}
              placeholder="Enter symbol"
              className="px-4 w-full py-2 border rounded-md focus:ring bg-transparent text-black focus:ring-blue focus:outline-none"
              required
            />
          </div>

          <div className="mb-4 w-full">
            <label htmlFor="timeframe" className="text-sm">
              Timeframe
            </label>
            <select
              id="timeframe"
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              className="w-full px-4 py-2 bg-gray-medium border bg-transparent rounded-md focus:ring text-primary focus:ring-yellow focus:outline-none"
            >
              <option value="1 Hour">1 Hour</option>
              <option value="4 Hours">4 Hours</option>
              <option value="1 Day">1 Day</option>
              <option value="1 Week">1 Week</option>
            </select>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-fit px-10 bg-gradient-to-r from-blue-light to-blue-medium font-bold text-white py-2 rounded-md hover:bg-yellow-light transition duration-300"
          >
            Analyze →
          </button>
        </div>
      </form>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40 min-h-screen min-w-screen">
          <div className="bg-gray-medium text-white rounded-lg shadow-lg p-6 w-96">
            <h3 className="text-lg font-semibold text-center mb-4">
              {symbol.toUpperCase()} Analysis
            </h3>
            <TradingViewWidget symbol={symbol.toUpperCase()} interval={timeframe} />
            <button
              onClick={closePopup}
              className="w-full bg-red text-white py-2 rounded-md hover:bg-red transition duration-300 mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CryptoAnalyzer;
