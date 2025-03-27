import { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause, FaBackwardStep, FaForwardStep } from "react-icons/fa6";
import LittlerootTown from "../assets/Littleroot Town  - Pokémon Emerald.mp3";
import EternaCity from "../assets/Eterna City - Pokémon Platinum.mp3";

const MusicPlayer = () => {
    // Daftar lagu dengan penambahan penyanyi
    const playlist = [
        { title: "Littleroot Town", artist: "Pokémon Emerald", src: LittlerootTown },
        { title: "Eterna City", artist: "Pokémon Platinum", src: EternaCity },
    ];

    // State untuk lagu saat ini dan status play/pause
    const [currentTrack, setCurrentTrack] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    // Efek untuk memutar/jeda audio berdasarkan status isPlaying
    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying, currentTrack]);

    // Fungsi untuk toggle play/pause
    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    // Fungsi untuk lagu sebelumnya
    const prevTrack = () => {
        setCurrentTrack((prev) => (prev === 0 ? playlist.length - 1 : prev - 1));
        setIsPlaying(true);
    };

    // Fungsi untuk lagu berikutnya
    const nextTrack = () => {
        setCurrentTrack((prev) => (prev === playlist.length - 1 ? 0 : prev + 1));
        setIsPlaying(true);
    };

    return (
        <div className="fixed bottom-4 right-4 w-44 p-3 bg-white dark:bg-[#1E1E1E] rounded-lg shadow-lg z-20 text-gray-900 dark:text-gray-100 border-2 border-[#00bfff]">
            {/* Nama lagu dan penyanyi */}
            <div className="text-center font-monserrat">
                <div className="font-semibold text-xs mb-1 truncate">
                    {playlist[currentTrack].title}
                </div>
                <div className="text-xs mb-2 text-gray-600 dark:text-gray-400 truncate">
                    {playlist[currentTrack].artist}
                </div>
            </div>

            {/* Kontrol pemutar */}
            <div className="flex justify-center items-center space-x-4">
                <button
                    onClick={prevTrack}
                    className="text-gray-700 dark:text-gray-300 hover:text-[#00BFFF] dark:hover:text-[#00BFFF] focus:outline-none"
                    aria-label="Previous Track"
                >
                    <FaBackwardStep />
                </button>
                <button
                    onClick={togglePlayPause}
                    className="text-gray-700 dark:text-gray-300 hover:text-[#00BFFF] dark:hover:text-[#00BFFF] focus:outline-none"
                    aria-label={isPlaying ? "Pause" : "Play"}
                >
                    {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
                <button
                    onClick={nextTrack}
                    className="text-gray-700 dark:text-gray-300 hover:text-[#00BFFF] dark:hover:text-[#00BFFF] focus:outline-none"
                    aria-label="Next Track"
                >
                    <FaForwardStep />
                </button>
            </div>

            {/* Elemen audio */}
            <audio
                ref={audioRef}
                src={playlist[currentTrack].src}
                onEnded={nextTrack}
            />
        </div>
    );
};

export default MusicPlayer;