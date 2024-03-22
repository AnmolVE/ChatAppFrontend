import React, { useState } from "react";

function MessageInput() {
  const { inputValue, setInputValue } = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = () => {
    console.log("Message send");
  };

  return (
    <div className="bg-[#ffffff] p-[15px] border-t-[1px_solid_#e0e0e0] flex items-center">
      <textarea
        className="flex-[1] border-[none] rounded-[5px] p-[10px] resize-none outline-none"
        placeholder="Type your message"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        className="bg-[#3498db] border-[none] rounded-[5px] text-[#ffffff] px-[20px] py-[10px] mt-[10px]"
        onClick={handleSendMessage}
      >
        Send
      </button>
    </div>
  );
}

export default MessageInput;
