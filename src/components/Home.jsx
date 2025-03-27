import React from "react";
import { ImDownload2 } from "react-icons/im";
import { TypeAnimation } from "react-type-animation";
import Wave from "react-wavify";
import { Link } from "react-router-dom";

const Home = ({ isNavOpen }) => {
    return (
        <section
            name="home"
            className="w-full h-screen flex flex-col justify-center items-center px-4 bg-transparent relative overflow-hidden"
        >
            {/* Nama dan Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#00BFFF] text-center font-caveat">
                Hello there!
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-4 text-gray-900 dark:text-gray-100 text-center">
                I'm Deva Raja
            </h1>

            {/* Animasi Deskripsi */}
            {!isNavOpen && (
                <TypeAnimation
                    sequence={[
                        "a UI Designer",
                        2000,
                        "a UX Designer",
                        2000,
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-medium text-gray-800 dark:text-gray-300 mt-4 text-center"
                />
            )}

            {/* Tombol */}
            <div className="font-medium mt-8 flex flex-col sm:flex-row gap-4 justify-center z-10">
                <Link
                    to="/projects"
                    className="text-white bg-[#00BFFF] hover:bg-[#009ACD] py-3 px-6 rounded-md text-center transition duration-200"
                    aria-label="Projects"
                >
                    Projects
                </Link>
                <a
                    href="https://drive.google.com/file/d/1c5dfdl71wL72OqQfWb9ReBPCIGn6rq8x/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center text-white bg-gray-900 hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600 py-3 px-6 rounded-md text-center transition duration-200"
                    aria-label="Download CV"
                >
                    CV <ImDownload2 className="ml-2" />
                </a>
            </div>

            {/* Animasi Ombak - Lapisan 1 */}
            <Wave
                fill="#00BFFF"
                paused={false}
                style={{ position: "absolute", bottom: 0, width: "100%" }}
                options={{
                    height: 40,
                    amplitude: 20,
                    speed: 0.15,
                    points: 2,
                }}
            />
            {/* Animasi Ombak - Lapisan 2 */}
            <Wave
                fill="#00BFFF"
                paused={false}
                style={{ position: "absolute", bottom: 0, width: "100%", opacity: 0.6 }}
                options={{
                    height: 30,
                    amplitude: 15,
                    speed: 0.15,
                    points: 2,
                }}
            />
        </section>
    );
};

export default Home;