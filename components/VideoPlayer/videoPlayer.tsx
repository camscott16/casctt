"use client";

import React from "react";

const VideoPlayer = ({ src }: { src: string }) => {
  return (
    <div className="w-full md:w-96 h-56 md:h-64 lg:h-72  rounded-lg shadow-2xl overflow-hidden">
      <video autoPlay loop muted playsInline className="w-full h-full object-cover">
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
