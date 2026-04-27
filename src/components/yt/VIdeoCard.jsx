import React from "react";

const StaticVideoCard = ({ video, onPlay }) => {
  return (
    <div
      onClick={() => onPlay(video.videoId)}
      className="relative rounded-2xl overflow-hidden cursor-pointer group 
      bg-gradient-to-br from-[#6D28D9] via-[#9333EA] to-[#EC4899]
      p-[1px] shadow-xl hover:shadow-2xl transition-all duration-300"
    >
      {/* Glass Inner Card */}
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden">

        {/* Video Section */}
        <div className="relative w-full aspect-video bg-black">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${video.videoId}&modestbranding=1&rel=0`}
            title={video.title}
            allow="autoplay; encrypted-media"
          />

          {/* Overlay (for click + dark effect) */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 text-black rounded-full p-3 scale-90 group-hover:scale-100 transition">
              ▶
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 text-white">
          <span className="text-[10px] font-semibold tracking-widest uppercase text-white/70">
            RiskMan Insights
          </span>

          <h3 className="mt-1 font-semibold text-sm leading-tight line-clamp-2">
            {video.title}
          </h3>

          <p className="mt-2 text-xs text-white/70 line-clamp-1">
            Professional consultancy & digital risk solutions
          </p>

          {/* CTA */}
          <div className="mt-3 inline-flex items-center text-xs font-medium text-white">
            Watch Now →
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticVideoCard;