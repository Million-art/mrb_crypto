import React, { useState } from "react";
import chart from "../assets/OIP (2).jpg"
import lockIcon from '@/assets/lock.png'
const CryptoAnalyzer: React.FC = () => {
  const [symbol, setSymbol] = useState<string>("");
  const [timeframe, setTimeframe] = useState<string>("1 Hour");
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [showLockedPopup, setShowLockedPopup] = useState<boolean>(false);

  const handleAnalyze = (event: React.FormEvent) => {
    event.preventDefault();
     console.log("Analyzing:", { symbol, timeframe });
     setShowPopup(true); 
    // setShowLockedPopup(true)

  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (

    <section className="flex justify-center h-auto bg-gray-medium mx-5  rounded-xl  ">
      <form
        onSubmit={handleAnalyze}
        className="  shadow-md rounded-lg p-6 w-96"
      >
        <h2 className="text-lg text-white font-semibold text-center mb-3">
          Advanced Crypto Analyzer
        </h2>
        {/* <p className="text-sm text-white text-center mb-5">
          Analyze cryptocurrency using EMA, ADX, Volume, and Fibonacci levels
        </p> */}
        <p className="text-white text-center ">No Token found Connect Your Wallet to explore 🎉</p>
        <div className="flex flex-col text-white">
        <div className="mb-4 w-full ">
          <label htmlFor="symbol" className=" text-sm  ">
            Symbol (e.g., BTCUSDT)
          </label> 
          <input
            type="text"
            id="symbol"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            placeholder="Enter symbol"

            className=" px-4 w-full py-2 border rounded-md focus:ring bg-transparent text-black focus:ring-blue focus:outline-none"
            required
          />
        </div>

        <div className="mb-4 w-full">
          <label htmlFor="timeframe" className=" text-sm  ">
            Timeframe
          </label><br/>
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
        
<div className=" flex justify-center">

        <button
          type="submit"
          className="w-fit px-10  bg-gradient-to-r from-blue-light to-blue-medium font-bold text-white py-2 rounded-md hover:bg-yellow-light transition duration-300"
        >
          Analyze →
        </button>
</div>
      </form>

        {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40">
          <div className="bg-gray-medium text-white rounded-lg shadow-lg p-6 w-96">
            <img src={chart} alt="" className="w-full h-36 " />
            
            <h3 className="text-lg font-semibold text-center mb-4">
              BTCUSDT Spot 📊
            </h3>
            <p className="text-sm mb-4 text-center">
              <span className="font-semibold">Entry Zones</span>
            </p>
            <ul className="text-sm mb-4 space-y-2">
              <li>
                <span className="font-semibold">1st tranche</span>: 20% of the

                operative capital — <span className="text-green-dark">$89,000</span>
              </li>
              <li>
                <span className="font-semibold">2nd tranche</span>: 30% of the
                operative capital — <span className="text-green-dark">$85,000</span>
              </li>
              <li>
                <span className="font-semibold">3rd tranche</span>: 50% of the
                operative capital — <span className="text-green-dark">$80,000</span>
              </li>
            </ul>
            <button
              onClick={closePopup}

              className="w-full bg-red text-white py-2 rounded-md hover:bg-red transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* show locked popup */}
      {showLockedPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-40 h-screen bg">
          <div className="bg-gray-medium text-white rounded-lg shadow-lg p-6 w-96">
            <img src={lockIcon} alt=" Access Locked" className="w-full h-full " />
            
             
            <button
              onClick={closePopup}

              className="w-full bg-red text-white py-2 rounded-md hover:bg-red transition duration-300"
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
