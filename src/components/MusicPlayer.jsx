import { useState, useRef, useEffect } from "react";
import { FaCirclePlay, FaCirclePause, FaBackwardStep, FaForwardStep, FaSpotify } from "react-icons/fa6";
import LittlerootTown from "../assets/Littleroot Town  - Pokémon Emerald.mp3";
import EternaCity from "../assets/Eterna City - Pokémon Platinum.mp3";
import TwinleafTown from "../assets/Twinleaf Town - Pokémon Platinum.mp3";
import VerdanturfTown from "../assets/Verdanturf Town - Pokémon Emerald.mp3";

const PLAYLIST = [
  { title: "Littleroot Town", artist: "Pokémon Emerald", src: LittlerootTown },
  { title: "Eterna City", artist: "Pokémon Platinum", src: EternaCity },
  { title: "Twinleaf Town", artist: "Pokémon Platinum", src: TwinleafTown },
  { title: "Verdanturf Town", artist: "Pokémon Emerald", src: VerdanturfTown },
];

const MusicPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef(new Audio(PLAYLIST[0].src));

  useEffect(() => {
    const audio = audioRef.current;
    audio.src = PLAYLIST[currentTrack].src;
    audio.currentTime = 0;
    setProgress(0);

    if (isPlaying) {
      audio.play().catch((error) => {
        console.error("Error playing audio:", error);
        setIsPlaying(false);
      });
    }

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", () =>
      setCurrentTrack((prev) => (prev === PLAYLIST.length - 1 ? 0 : prev + 1))
    );

    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("ended", () => {});
    };
  }, [currentTrack, isPlaying]);

  const handleProgressClick = (e) => {
    e.stopPropagation();
    const audio = audioRef.current;
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newProgress = (clickX / width) * 100;

    setProgress(newProgress);
    audio.currentTime = (newProgress / 100) * audio.duration || 0;
  };

  const togglePlayPause = (e) => {
    e.stopPropagation();
    const audio = audioRef.current;
    setIsPlaying((prev) => {
      if (!prev) {
        audio.play().catch((error) => console.error("Play error:", error));
      } else {
        audio.pause();
      }
      return !prev;
    });
  };

  const prevTrack = (e) => {
    e.stopPropagation();
    setCurrentTrack((prev) => (prev === 0 ? PLAYLIST.length - 1 : prev - 1));
  };

  const nextTrack = (e) => {
    e.stopPropagation();
    setCurrentTrack((prev) => (prev === PLAYLIST.length - 1 ? 0 : prev + 1));
  };

  const togglePlayer = () => setIsOpen((prev) => !prev);

  return (
    <div className="fixed bottom-4 right-4 z-20 font-montserrat">
      {!isOpen && (
        <button
          onClick={togglePlayer}
          className="w-12 h-12 bg-[#00bfff] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#00a1e6] transition-colors"
          aria-label="Open Music Player"
        >
          <FaSpotify size={24} />
        </button>
      )}

      {isOpen && (
        <div
          className="w-52 p-3 bg-white dark:bg-[#1E1E1E] rounded-lg shadow-lg text-gray-900 dark:text-gray-100 border-2 border-[#00bfff] cursor-pointer"
          onClick={togglePlayer}
        >
          <div className="text-center">
            <h3 className="font-semibold text-xs mb-1 truncate">
              {PLAYLIST[currentTrack].title}
            </h3>
            <p className="text-[0.65rem] mb-2 text-gray-600 dark:text-gray-400 truncate">
              {PLAYLIST[currentTrack].artist}
            </p>
            <div
              className="w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full cursor-pointer"
              onClick={handleProgressClick}
            >
              <div
                className="h-full bg-[#00bfff] rounded-full transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex justify-center items-center space-x-4 mt-2">
              <button
                onClick={prevTrack}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none transition-colors"
                aria-label="Previous Track"
              >
                <FaBackwardStep size={16} />
              </button>
              <button
                onClick={togglePlayPause}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none transition-colors flex items-center justify-center w-8 h-8"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <FaCirclePause size={24} className="rounded-full" />
                ) : (
                  <FaCirclePlay size={24} className="rounded-full" />
                )}
              </button>
              <button
                onClick={nextTrack}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none transition-colors"
                aria-label="Next Track"
              >
                <FaForwardStep size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;