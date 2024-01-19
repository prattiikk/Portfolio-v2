import React, { useState } from "react";

const ContactMe = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    // You can implement the logic to send the message here
    console.log(`Subject: Say hi\nEmail: ${email}\nMessage: ${message}`);
    // Reset the form after sending the message
    setEmail("");
    setMessage("");
  };

  return (
    <div className="w-full h-full p-10 mx-auto bg-stone-100 rounded-xl shadow-md">
      <p className=" p-2 text-gray-600 text-sm">I'll try to reply asap ⚡️</p>

      <input
        type="email"
        className="w-full px-4 py-2 text-black bg-white rounded-lg mb-2 focus:outline-none focus:border-purple-500"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        rows="2"
        className="w-full px-4 py-2 text-black bg-white rounded-lg mb-2 focus:outline-none focus:border-purple-500"
        placeholder="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button
        className=" bg-purple-500 w-full text-white px-4 py-2 rounded-md hover:bg-purple-600 transition duration-300"
        onClick={handleSendMessage}
      >
        Send
      </button>
    </div>
  );
};

export default ContactMe;
