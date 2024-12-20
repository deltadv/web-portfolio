import React from "react";

const Contact = () => {
  return (
    <section
      name="contact"
      className="w-full h-auto py-20 flex flex-col justify-center items-center px-4"
    >
      <div className="max-w-[1000px] w-full flex flex-col items-center">
        <div className="text-center pb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#00BFFF]">03</h2>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
            Contact
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-6">
            Feel free to fill out the form below or send me an email at -
            <a
              href="mailto:deltadv.code@gmail.com"
              className="text-[#00BFFF]"
            >
              {" "} deltadv.code@gmail.com
            </a>
          </p>
        </div>
        
        <form
          method="POST"
          action="https://getform.io/f/16ef295c-5122-48ee-8f8e-56e6159f05d3"
          className="flex flex-col max-w-[600px] w-full"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="bg-[#e2e8f0] text-gray-900 p-2 mb-4 rounded-md"
          />
          
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-[#e2e8f0] text-gray-900 p-2 mb-4 rounded-md"
          />
          
          <textarea
            name="message"
            rows="8"
            placeholder="Message"
            className="bg-[#e2e8f0] text-gray-900 p-2 mb-4 rounded-md"
          ></textarea>
          
          <button
            className="text-white bg-[#00BFFF] hover:bg-[#009ACD] py-3 px-6 rounded-md my-8 mx-auto flex items-center"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
