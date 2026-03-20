import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  DropdownTrigger,
  Dropdown,
  Avatar,
} from "@heroui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";

export const AcmeLogo = () => (
  <img src="/logo.png" className="w-[120px] md:w-[156px] h-auto block" alt="Acme Logo" />
);

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Incidents", path: "/incidents" },
    { name: "Locations", path: "/locations" },
    { name: "Activities", path: "/activities" },
    { name: "Documents", path: "/documents" },
    { name: "Cypher AI", path: "/cypher" },
  ];

  return (
    <Navbar 
      isBordered 
      isMenuOpen={isMenuOpen} 
      onMenuOpenChange={setIsMenuOpen} 
      className="bg-white"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.name} isActive={location.pathname === item.path}>
            <Link
              as={RouterLink}
              to={item.path}
              className={`text-sm font-medium ${
                location.pathname === item.path ? "text-red-800" : "text-black"
              } hover:text-red-800`}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end" className="gap-2">
        <Avatar
          isBordered
          as="button"
          className="transition-transform w-8 h-8"
          color="secondary"
          src="./notificaton.png"
        />
        <Avatar
          isBordered
          as="button"
          className="transition-transform w-8 h-8"
          color="secondary"
          src="./madhead.png"
        />
        <NavbarItem className="hidden md:flex flex-col items-start leading-tight">
          <p className="text-xs font-bold text-black">Usman Zafar</p>
          <p className="text-[10px] text-gray-500">usmanzafar@gmail.com</p>
        </NavbarItem>
      </NavbarContent>

      {/* --- FIXED SECTION: MOBILE MENU GAP --- */}
      <NavbarMenu className="bg-white/95 backdrop-blur-md pt-10 gap-4">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              as={RouterLink}
              to={item.path}
              className={`w-full py-3 text-xl border-b border-gray-100 ${
                location.pathname === item.path ? "text-red-800 font-bold" : "text-black"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default Header;