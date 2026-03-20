
import { Card, CardHeader, CardBody, Divider, Button } from "@heroui/react";
import React, { useState } from "react";
function Finish() {
  // 1. State to track if chat is open or closed
  const [isOpen, setIsOpen] = useState(false);

  return (
    /* Positioning the whole thing at the bottom right */
    <div className="fixed bottom-10 right-10 flex flex-col items-end z-50">
      
      {/* 2. The Chat Window (Only shows when isOpen is true) */}
      {isOpen && (
        <Card className="w-[300px] mb-4 shadow-2xl animate-appearance-in">
          <CardHeader className="flex gap-3 bg-[#F26922] text-white">
            <div className="bg-white/20 p-2 rounded-full">
              <p className="font-bold">C</p>
            </div>
            <div className="flex flex-col">
              <p className="text-md font-bold">Cypher AI</p>
              <p className="text-xs text-white/80">Online</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody className="h-[250px] bg-gray-50 overflow-y-auto">
            <div className="space-y-3">
              <p className="bg-white p-2 rounded-lg text-sm shadow-sm border">Hello Rayhan! How can I help you today?</p>
              <p className="bg-[#F26922] text-white p-2 rounded-lg text-sm shadow-sm self-end ml-10">I need help with my project!</p>
            </div>
          </CardBody>
        </Card>
      )}

      {/* 3. The Toggle Icon (The "C" Circle) */}
      <button 
        onClick={() => setIsOpen(!isOpen)} // Toggles between true and false
        className={`
          bg-[#F26922] flex items-center justify-center rounded-full 
          w-[60px] h-[60px] shadow-lg transition-transform 
          active:scale-90 hover:scale-105
        `}
      >
        <h1 className='text-2xl text-white font-bold leading-none'>
          {isOpen ? '×' : 'C'} {/* Changes to X when open */}
        </h1>
      </button>
    </div>
  );
}

export default Finish;