import React from "react";

const About = () => {
  return (
    <div className="relative w-full h-auto flex flex-col lg:flex-row justify-center items-start px-6 sm:px-12 md:px-16 lg:px-40 py-12 bg-[#121212]">
      {/* Left Section - Title */}
      <div className="lg:w-1/2 flex flex-col justify-center items-start mb-8 lg:mb-0 lg:pr-12">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          I love to create something simple and clean
        </h1>
      </div>

      {/* Right Section - Description */}
      <div className="lg:w-1/2 text-[#666666] space-y-6 leading-relaxed">
        <p>
          Hi there! I’m a UI/UX designer living in Sukabumi, a city known (at least to me) 
          for having the best bakmi ever. When it comes to design, I’m all 
          about keeping things simple, clean, and functional. I believe every element 
          in a design should have a purpose—no fluff, no waste. Oh, and I’m pretty 
          detail-oriented, which means I sometimes get so caught up in perfecting the 
          smallest details that I completely lose track of time.
        </p>
        <p>
          I’m also a massive <span className="text-[#a6a6a6] font-medium">Pokémon</span> fan. If you’ve taken a close look at one of the pictures 
          above, you might have spotted Zekrom, one of my favorite legendary Pokémon. But if we’re talking 
          all-time favorite, Lucario has my heart. I’ve played nearly every main series 
          <span className="text-[#a6a6a6] font-medium"> Pokémon</span> game out there, so if you’re a fellow fan, let’s talk—I could geek out 
          about Pokémon for hours.
        </p>
        <p>
          When I’m not designing or battling in a Pokémon game, you’ll usually find me watching something—movies, 
          series, or even anime. One of my all-time favorite shows is <span className="text-[#a6a6a6] font-medium">Dark</span>. It’s this 
          mind-bending time-travel mystery that weaves together the past, present, and future in the most fascinating way. 
          If you love intricate plots, unexpected twists, and a dash of sci-fi, you absolutely have to check it out.
        </p>
        <p>
          Anyway, that’s a little bit about me. Thanks for stopping by and taking the time to read—I really appreciate it!
        </p>
      </div>
    </div>
  );
};

export default About;
