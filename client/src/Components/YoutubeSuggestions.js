import React from "react";

const YoutubeSuggestions = ({ youtubeSuggestions }) => {
  console.log(youtubeSuggestions);
  return (
    <div className="p-2 bg-neutral-200  border-2">
      {youtubeSuggestions.map((suggestion) => (
        <div
          key={suggestion.video_id}
          className="p-2 flex flex-col justify-center items-center gap-2"
        >
          <div>
            <a href={suggestion.video_url} target="_blank" rel="noreferrer">
              <img
                className="w-full transition-all hover:scale-105"
                src={suggestion.thumbnail_url}
                alt={suggestion.title}
              />
            </a>
          </div>
          <div className="overflow-hidden">
            <h1 className="w-full">{suggestion.title}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default YoutubeSuggestions;
