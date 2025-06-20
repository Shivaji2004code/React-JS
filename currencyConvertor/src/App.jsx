import { useState, useEffect } from "react";
import countries from './countries.js';

export default function App() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [fromCode, setFromCode] = useState("INR");
  const [toCode, setToCode] = useState("USD");
  const baseUrl = "https://open.er-api.com/v6/latest";

  const handle = async () => {
    if (!fromCode || !toCode || from === "") return;

    try {
      let response = await fetch(`${baseUrl}/${fromCode}`);
      let data = await response.json();
      let rate = data.rates[toCode];
      let final = from * rate;
      setTo(final.toFixed(2));
    } catch (error) {
      console.error("Conversion Error:", error);
    }
  };

  useEffect(() => {
    handle();
  }, []);

  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center p-4"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1603698057593-7d48b3f16b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
      }}
    >
      <div className="bg-black bg-opacity-70 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-xl text-white space-y-6">
        <h1 className="text-3xl font-bold text-center mb-4">🌍 Currency Converter</h1>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 text-sm font-semibold">From</label>
            <select
              value={fromCode}
              onChange={(e) => setFromCode(e.target.value)}
              className="w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600"
            >
              <option value="">-- Select Currency --</option>
              {Object.keys(countries).map((key) => (
                <option value={key} key={key}>{key}</option>
              ))}
            </select>
            {fromCode && (
              <img
                className="mt-2 w-12 h-12 rounded-full"
                src={`https://flagsapi.com/${countries[fromCode]}/flat/64.png`}
                alt="flag"
              />
            )}
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold">To</label>
            <select
              value={toCode}
              onChange={(e) => setToCode(e.target.value)}
              className="w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600"
            >
              <option value="">-- Select Currency --</option>
              {Object.keys(countries).map((key) => (
                <option value={key} key={key}>{key}</option>
              ))}
            </select>
            {toCode && (
              <img
                className="mt-2 w-12 h-12 rounded-full"
                src={`https://flagsapi.com/${countries[toCode]}/flat/64.png`}
                alt="flag"
              />
            )}
          </div>
        </div>

        <input
          type="number"
          placeholder="Enter amount"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600"
        />

        <button
          onClick={handle}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
        >
          Convert
        </button>

        {to && (
          <p className="text-center text-xl text-green-400 font-bold">
            Converted Amount: {to} {toCode}
          </p>
        )}
      </div>
    </div>
  );
}
