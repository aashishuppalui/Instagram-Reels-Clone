import React, { useState, useEffect } from "react";
// import logo from './logo.svg';
import "./App.css";
import VideoCard from "./VideoCard";
import db from "./firebase";

function App() {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    //app component will eun Once when it loads, and never again
    db.collection("reels").onSnapshot((snapshot) =>
      setReels(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="app">
      {/* <h1>Instagram Reels Clone Demo 🚀🚀🚀🚀</h1> */}

      <div className="app_top">
        {/* image at top - logo */}
        <img
          className="app_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
          alt="insta-logo"
        />
        <h1>Reels</h1>
        {/* Reels text */}
      </div>

      <div className="app_videos">
        {/* Container for videos(scrollable container) */}

        {reels.map(({ url, likes, shares, channel, avatarSrc, song }) => (
          <VideoCard
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            url={url}
            likes={likes}
            shares={shares}
          />
        ))}

        {/* Video */}
      </div>
    </div>
  );
}

export default App;
