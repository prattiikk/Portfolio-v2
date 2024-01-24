import React, { useRef, useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import textSound from "../assets/audios/textMessageSound.mp3";

const ContactForm = () => {
  const [messages, setMessages] = useState([
    {
      type: "start",
      content: "Hey there! Can I get your contact information?",
      sender: "you",
      timestamp: new Date().toLocaleTimeString(),
    },
    {
      type: "start",
      content: "Sure, I'd love to connect! By the way, what's your name?",
      sender: "Pratik",
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
  });

  // text input reference
  const inputRef = useRef();

  // text message sound
  const audioRef = useRef(new Audio(textSound));
  const playTextSound = () => {
    audioRef.current.play();
  };

  const addMessage = (type, content, sender) => {
    const newMessage = {
      type,
      content,
      sender,
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const handleNameInput = () => {
    const name = inputRef.current.value;
    setUserDetails(() => ({ name: name }));
    setTimeout(() => {
      addMessage("end", `${name}`, "you");
      playTextSound();
    }, 500);

    setTimeout(() => {
      addMessage(
        "start",
        `Nice to meet you, ${name}! Drop your email so I can reach out.`,
        "Pratik"
      );
      playTextSound();
    }, 2000);

    inputRef.current.value = "";
  };

  const handleEmailInput = () => {
    const email = inputRef.current.value;
    setUserDetails(() => ({ email: email }));
    setTimeout(() => {
      addMessage("end", `${email}`, "you");
      playTextSound();
    }, 500);

    setTimeout(() => {
      addMessage("start", `Got it! I'll get back to you soon.`, "Pratik");
      playTextSound();
    }, 2000);

    inputRef.current.value = "";
    inputRef.current.disabled = true;
    inputRef.current.style.backgroundColor = "transparent";
  };

  useEffect(() => {
    const chatContainer = document.getElementById("chat-container");
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, [messages]);

  return (
    <div className="w-full h-full rounded-3xl overflow-auto bg-stone-100 md:px-8 flex flex-col items-center justify-center">
      <div
        id="chat-container"
        className="w-full h-[200px] overflow-scroll flex flex-col"
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat ${
              message.sender === "you" ? " chat-end user" : " chat-start owner"
            }`}
          >
            <div className="chat-header">
              <span className="mx-2 text-black">{message.sender}</span>
              <time className="text-xs text-black opacity-50">
                {message.timestamp}
              </time>
            </div>
            <div
              className={`chat-bubble text-xl ${
                message.sender === "you"
                  ? "user bg-blue-500 text-white self-end"
                  : "owner bg-stone-200 text-black self-start"
              }`}
            >
              {message.content}
            </div>

            {message.sender === "you" ? (
              <div className="chat-footer text-black opacity-50">Delivered</div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center w-full mt-2 h-12 border-2 rounded-full bg-transparent">
        <a
          href="#"
          className=" text-gray-400 h-full mx-2 flex items-center justify-center hover:text-blue-500 tooltip tooltip-right"
          data-tip="pvks5423@gmail.com"
        >
          <HiMail className="w-full h-full" />
        </a>
        <input
          ref={inputRef}
          type="text"
          placeholder="Type here"
          className="input w-full h-full relative bg-transparent text-black focus:border-none"
          style={{ border: "none", outline: "none" }}
        />

        <button
          className=" text-gray-400 h-full p-1 flex items-center justify-center hover:text-blue-500"
          onClick={userDetails.name ? handleEmailInput : handleNameInput}
        >
          <FaArrowCircleUp className=" w-full h-full" />
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
