import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, Input, Button } from "@heroui/react";

// The SearchIcon remains the same
export const SearchIcon = ({size = 24, strokeWidth = 1.5, width, height, ...props}) => {
  return (
    <svg fill="none" height={height || size} viewBox="0 0 24 24" width={width || size} {...props}>
      <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} />
      <path d="M22 22L20 20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} />
    </svg>
  );
};

function Header2() {
  return (
    <Navbar maxWidth="full" className="bg-gray-100 py-2 border-b border-gray-200">
      {/* 1. Left Section: Welcome Text */}
      <NavbarContent justify="start">
        <NavbarBrand className="flex flex-col items-start leading-tight">
          <p className="hidden md:block text-gray-400 text-[10px] uppercase tracking-wider font-bold">Welcome back</p>
          <h3 className="text-lg md:text-xl font-bold text-black">Dashboard</h3>
        </NavbarBrand>
      </NavbarContent>

      {/* 2. Middle/End Section: Search Inputs */}
      <NavbarContent as="div" className="hidden lg:flex gap-4" justify="center">
        <Input
          classNames={{
            base: "max-w-[12rem] h-10",
            inputWrapper: "bg-white border border-gray-300 rounded-full shadow-sm",
          }}
          placeholder="Search items..."
          size="sm"
          startContent={<SearchIcon size={18} className="text-gray-400" />}
          type="search"
        />
        <Input
          classNames={{
            base: "max-w-[12rem] h-10",
            inputWrapper: "bg-white border border-gray-300 rounded-full shadow-sm",
          }}
          placeholder="Search locations..."
          size="sm"
          startContent={<SearchIcon size={18} className="text-gray-400" />}
          type="search"
        />
      </NavbarContent>

      {/* 3. Action Button */}
      <NavbarContent justify="end">
        <Button 
          className="bg-[#F26922] text-white rounded-full font-bold shadow-md px-6 min-w-[120px]"
          size="md"
        >
          Cypher AI
        </Button>
      </NavbarContent>
    </Navbar>
  );
}

export default Header2;