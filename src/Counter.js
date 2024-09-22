import { useState } from "react";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);

  function DecreaseHandler() {
    setCount(count - 1);
  }

  function IncreaseHandler() {
    setCount(count + 1);
  }

  function ResetHandler() {
    setCount(0);
  }

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-between bg-[#344151]">
      {/* Navbar */}
      <nav className="bg-[#344151] w-full py-4 text-center border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-white text-2xl sm:text-3xl font-bold">CounterApp</div>
            {/* Optional nav links for larger screens */}
            
          </div>
        </div>
      </nav>

      {/* Counter Section */}
      <div className="flex-grow flex justify-center items-center flex-col gap-9">
        <div className="text-[#0398d4] font-medium text-2xl">Increment and Decrement</div>
        <div className="bg-white flex justify-center gap-12 py-3 text-[25px] text-[#344151]">
          <button onClick={IncreaseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">
            +
          </button>
          <div className="font-bold gap-12 text-5xl">
            {count}
          </div>
          <button onClick={DecreaseHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">
            -
          </button>
        </div>
        <button onClick={ResetHandler} className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg">Reset</button>
      </div>

      {/* Footer */}
      <footer className="bg-[#344151] py-4 text-center border-t">
        <p className="text-white text-sm">© 2024 CounterApp. All rights reserved.</p>
        <p className="text-white text-sm">Created By Farman Anees</p>
        <p className="text-white text-sm">React App</p>
      </footer>
    </div>
  );
}

export default Counter;
