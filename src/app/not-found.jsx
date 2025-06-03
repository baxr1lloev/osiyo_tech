"use client";
import { useState } from 'react';

export default function notFound() {
  const [toggled, setToggled] = useState(false);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black font-['Fjalla_One']">
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[36vmin] h-[77.4vmin] origin-bottom ${
          !toggled ? 'animate-rotate' : ''
        }`}
      >
        <input
          type="checkbox"
          id="switch"
          className="hidden"
          checked={toggled}
          onChange={() => setToggled(!toggled)}
        />
        {!toggled && (
          <div className="relative w-[36vmin] h-[27vmin] bg-[#fffefe] rounded-full z-10"></div>
        )}
        {!toggled && (
          <div className="relative border-t-[36vmin] border-x-[11.7vmin] border-x-transparent border-t-[#8d8e7e] -mt-[12.6vmin]"></div>
        )}
        <div className="relative w-[14.4vmin] h-[1.8vmin] ml-[10.8vmin] bg-[#ffab2b]"></div>

        <div className="relative w-[7.38vmin] ml-[10.8vmin] border-t-[4.32vmin] border-x-[3.6vmin] border-x-transparent border-t-[#333]"></div>

        <div className="relative w-[7.308vmin] h-[21.6vmin] ml-[14.4vmin] bg-[#646464]"></div>

        <label
          htmlFor="switch"
          className="absolute top-[3.6vmin] left-[2.628vmin] w-[1.44vmin] h-[3.6vmin] border-[0.432vmin] border-[#333] bg-[#ffab2b] rounded cursor-pointer"
        ></label>
      </div>

      <div className="absolute w-[36vmin] left-1/2 -ml-[18vmin] text-center text-black select-none z-20">
        <div className="text-[12vmin] mt-[6.3vmin] animate-msgFirst">404</div>
        <div className="text-[4.2vmin] mt-[2.1vmin] animate-msgSecond">Page Not Found</div>
      </div>
    </div>
  );
}
