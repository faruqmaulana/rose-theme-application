import { useState } from "react";

export default function Cards() {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  return (
    // w-10/12 p-6 sm:w-1/2 sm:p-6 md:w-1/4 md:p-6 lg:w-1/4 lg:p-6 hover:scale-105 hover:shadow-2xl hover:shadow-black transition duration-700 cursor-pointer bg-gradient-to-tl from-slate-800 to-slate-900 rounded-2xl shadow-lg shadow-black text-white
    <div
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      className="w-10/12 p-6 sm:w-1/2 sm:p-6 md:w-1/4 md:p-6 lg:w-1/4 lg:p-6 hover:scale-105 hover:shadow-2xl hover:shadow-black transition duration-700 cursor-pointer bg-slate-800 rounded-2xl shadow-lg shadow-black text-white"
    >
      <div className="flex items-center justify-center flex-col mb-2">
        <img
          className={`w-28 mb-1 ${hovered && "animate-bounce"}`}
          src="https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg"
        />
        <div className="flex items-center gap-1">
          <h1 className="font-extrabold text-4xl">BTC</h1>
          {/* prettier-ignore */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
            </svg>
          {/* Conditional */}
          {/*<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
          </svg>*/}
        </div>
        <p className="text-md text-gray-400">Bitcoins</p>
      </div>
      <hr className="mb-3" />
      <h1 className="text-green-400">
        <span className="font-extrabold text-lg text-white">24change: </span>
        +3.98%
      </h1>
      <h1>
        <span className="font-extrabold text-lg">Price: </span>₹ 3,297,187
      </h1>
      <h1>
        <span className="font-extrabold text-lg">Market Cap: </span>₹
        62,509,268M
      </h1>
    </div>
  );
}
