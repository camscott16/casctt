"use client";

import React from "react";

const VideoPlayer = () => {
  return (
    <div className="w-full md:w-170 h-200 md:h-150 lg:h-64 border-4 border-gray-300 rounded-lg shadow-2xl overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/walk.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
