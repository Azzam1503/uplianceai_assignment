import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const bgOpacity = Math.min(count / 50, 1);
  const bgColor = `rgba(255, 165, 0, ${bgOpacity})`;

  return (
    <div
      className="flex flex-col items-center justify-center h-[95vh] w-full transition-all duration-700 ease-in-out"
      style={{ backgroundColor: bgColor }}
    >
      <p className="text-5xl font-bold mb-5">{count}</p>

      <div className="flex gap-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-all duration-300"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Increment
        </button>

        <button
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-all duration-300"
          onClick={() => setCount((prev) => prev - 1)}
        >
          Decrement
        </button>

        <button
          className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600 transition-all duration-300"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
