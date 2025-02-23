"use client";

import { useEffect } from "react";

const PinterestBoard = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://assets.pinterest.com/js/pinit.js";
    script.dataset.pinBuild = "doBuild";
    document.body.appendChild(script);

    return () => {
      // Only remove the script if it still exists in the document
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="p-4 flex shadow-2xl bg-white rounded-lg">
      <a
        data-pin-do="embedBoard"
        data-pin-board-width="1200"
        data-pin-scale-height="500"
        data-pin-scale-width="140"
        href="https://www.pinterest.com/camscott17/alyv/"
      >
        {/* Fallback message if widget fails */}
        <p className="text-gray-600 text-sm">Loading Pinterest Board... You may have to refresh :P</p>
      </a>
    </div>
  );
};

export default PinterestBoard;
