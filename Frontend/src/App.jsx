import React from "react";
import "./App.css";

function App() {
  return (
    <div className="landing">
      <h1 className="title">Weirdest Moments in Cricket 🏏</h1>
      <p className="subtitle">
        Explore the funniest, weirdest, and most unforgettable moments from cricket history.
        Share yours or vote on others!
      </p>

      <div className="buttons">
        <button className="btn primary">Explore Moments</button>
        <button className="btn secondary">Submit Yours</button>
      </div>

      <div className="features">
        <div className="card">
          <h3>😂 Laugh Out Loud</h3>
          <p>Discover the moments that made fans laugh, cringe, and go “What just happened?!”</p>
        </div>
        <div className="card">
          <h3>📤 Submit Yours</h3>
          <p>Saw something strange? Share your weird cricket moment with the community.</p>
        </div>
        <div className="card">
          <h3>🔥 Top Voted</h3>
          <p>Browse the most legendary weird moments as voted by the fans!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
