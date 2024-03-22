import React from "react";
import Message from "./Message";
import MessageInput from "./MessageInput";
import Sidebar from "../sidebar/Sidebar";

function ChatArea() {
  return (
    // <div className="h-screen flex items-center justify-center">
    //   <h1 className="text-5xl font-bold text-center animate-bounce">
    //     To Kaise hai aap log...
    //   </h1>
    // </div>

    <div className="flex h-screen bg-[#ffffff]">
      <Sidebar />
      <div className="flex-[3] flex flex-col">
        <div className="bg-[#3498db] text-[#ffffff] p-[15px] text-center"></div>
        <div className="flex-[1] p-[20px] overflow-y-auto">
          <Message text="Hey, how's it going" sent />
          <Message text="I am good" received />
          <Message text="Hey, how's it going" sent />
          <Message text="I am good" received />
        </div>
        <MessageInput />
      </div>
    </div>
  );
}

export default ChatArea;
