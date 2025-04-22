import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 flex flex-col items-center justify-center relative">

      {/* Header Section */}
      <header className="text-center max-w-3xl px-4 animate__animated animate__fadeIn animate__delay-1s">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-xl tracking-tight">
          Weirdest Moments in Cricket
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-400 font-medium animate__animated animate__fadeIn animate__delay-2s">
          Relive the most unpredictable moments, jaw-dropping blunders, and epic laugh-outs from the pitch.
        </p>
      </header>

      {/* Call-to-Action Buttons */}
      <div className="mt-12 flex gap-6 justify-center flex-wrap animate__animated animate__fadeIn animate__delay-3s">
        <button
          className="bg-[#0085FF] text-white font-semibold py-3 px-8 rounded-lg border-2 border-transparent hover:border-[#0085FF] hover:bg-black hover:text-[#0085FF] transition-all transform hover:scale-105 shadow-md tracking-tight"
          onClick={() => navigate("/signup")}
        >
          Step Up to the Pitch
        </button>
        <button
          className="border-2 border-[#0085FF] text-[#0085FF] font-semibold py-3 px-8 rounded-lg hover:bg-[#0085FF] hover:text-black transition-all transform hover:scale-105 shadow-md tracking-tight"
          onClick={() => navigate("/login")}
        >
          Start your innings
        </button>
      </div>

      {/* Features Section */}
      <section className="mt-16 text-center max-w-2xl px-4 animate__animated animate__fadeIn animate__delay-4s">
        <h2 className="text-3xl font-semibold text-white mb-6 tracking-tight">
          Why Step Onto Our Pitch?
        </h2>
        <ul className="text-gray-400 text-base md:text-lg space-y-4">
          <li>🏏 Share the most bizarre moments you've witnessed or recorded</li>
          <li>📊 Vote on the weirdest, funniest, and most iconic fails</li>
          <li>📁 Browse through curated categories like "Funny Run-Outs", "Pitch Fails", and more</li>
          <li>🌍 Connect with a global community of cricket fanatics</li>
        </ul>
      </section>

      {/* Background Pattern (subtle) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-[url('/subtle-cricket-pattern.png')] bg-repeat opacity-10 pointer-events-none" />
    </div>
  );
};

export default LandingPage;
