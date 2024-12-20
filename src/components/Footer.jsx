import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white dark:bg-gray-800 text-center py-4">
      <div className="container mx-auto">
        <p className="text-gray-700 dark:text-gray-300">
          &copy; {new Date().getFullYear()} Deva Raja. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
