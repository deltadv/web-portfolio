import { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause, FaBackwardStep, FaForwardStep, FaSpotify } from "react-icons/fa6";
import LittlerootTown from "../assets/Littleroot Town  - Pokémon Emerald.mp3";
import EternaCity from "../assets/Eterna City - Pokémon Platinum.mp3";

const MusicPlayer = () => {
    const playlist = [
        { title: "Littleroot Town", artist: "Pokémon Emerald", src: LittlerootTown },
        { title: "Eterna City", artist: "Pokémon Platinum", src: EternaCity },
    ];

    const [currentTrack, setCurrentTrack] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateProgress = () => {
            const progressPercent = (audio.currentTime / audio.duration) * 100;
            setProgress(progressPercent || 0);
        };

        if (isPlaying) {
            audio.play().catch((error) => {
                console.error("Error playing audio:", error);
                setIsPlaying(false);
            });
            audio.addEventListener("timeupdate", updateProgress);
        } else {
            audio.pause();
        }

        return () => {
            audio.removeEventListener("timeupdate", updateProgress);
        };
    }, [isPlaying, currentTrack]);

    const handleProgressClick = (e) => {
        const audio = audioRef.current;
        if (!audio) return;

        const progressBar = e.currentTarget;
        const rect = progressBar.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        const newProgress = (clickX / width) * 100;

        setProgress(newProgress);
        const newTime = (newProgress / 100) * audio.duration;
        audio.currentTime = newTime;
    };

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const prevTrack = () => {
        setCurrentTrack((prev) => (prev === 0 ? playlist.length - 1 : prev - 1));
        setProgress(0);
        setIsPlaying(true);
    };

    const nextTrack = () => {
        setCurrentTrack((prev) => (prev === playlist.length - 1 ? 0 : prev + 1));
        setProgress(0);
        setIsPlaying(true);
    };

    const togglePlayer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed bottom-4 right-4 z-20">
            {/* Tombol Floating Spotify */}
            {!isOpen && (
                <button
                    onClick={togglePlayer}
                    className="w-12 h-12 bg-[#00bfff] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#00a1e6] transition-colors"
                    aria-label="Open Music Player"
                >
                    <FaSpotify size={24} />
                </button>
            )}

            {/* Music Player */}
            {isOpen && (
                <div
                    onClick={togglePlayer}
                    className="w-52 p-3 bg-white dark:bg-[#1E1E1E] rounded-lg shadow-lg text-gray-900 dark:text-gray-100 border-2 border-[#00bfff] cursor-pointer"
                >
                    <div className="text-center font-montserrat">
                        <div className="font-semibold text-xs mb-1 truncate">
                            {playlist[currentTrack].title}
                        </div>
                        <div className="text-[0.65rem] mb-2 text-gray-600 dark:text-gray-400 truncate">
                            {playlist[currentTrack].artist}
                        </div>
                        <div
                            className="w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full cursor-pointer"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleProgressClick(e);
                            }}
                        >
                            <div
                                className="h-full bg-[#00bfff] rounded-full transition-all duration-100"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>

                    <div
                        className="flex justify-center items-center space-x-4 mt-2"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={prevTrack}
                            className="text-gray-700 dark:text-gray-300 hover:text-[#00BFFF] dark:hover:text-[#00BFFF] focus:outline-none text-base"
                            aria-label="Previous Track"
                        >
                            <FaBackwardStep />
                        </button>
                        <button
                            onClick={togglePlayPause}
                            className="text-gray-700 dark:text-gray-300 hover:text-[#00BFFF] dark:hover:text-[#00BFFF] focus:outline-none"
                            aria-label={isPlaying ? "Pause" : "Play"}
                        >
                            <div className="w-6 h-6 flex items-center justify-center">
                                {isPlaying ? <FaPause size={18} /> : <FaPlay size={18} />}
                            </div>
                        </button>
                        <button
                            onClick={nextTrack}
                            className="text-gray-700 dark:text-gray-300 hover:text-[#00BFFF] dark:hover:text-[#00BFFF] focus:outline-none text-base"
                            aria-label="Next Track"
                        >
                            <FaForwardStep />
                        </button>
                    </div>
                </div>
            )}

            {/* Elemen audio dipindahkan ke luar kondisi isOpen */}
            <audio
                ref={audioRef}
                src={playlist[currentTrack].src}
                onEnded={nextTrack}
            />
        </div>
    );
};

export default MusicPlayer;