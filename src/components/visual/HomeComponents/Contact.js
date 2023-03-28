import React from "react";

function Contact() {
  return (
    <div className="mt-32">
      <div className="flex justify-center text-4xl font-semibold">
        Have Something in Mind ?
      </div>
      <div className="flex justify-center text-3xl font-medium mt-3 ">
        I am available
      </div>
      <div className="flex justify-center mt-3">
        <button
          className="text-white bg-black mt-5 px-3 py-2 rounded-lg w-60 text-xl
            border border-black">
          Contact Me
        </button>
      </div>
    </div>
  );
}

export default Contact;
