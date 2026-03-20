import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownTrigger,
  Dropdown,
  Avatar,
} from "@heroui/react";
import { Link as RouterLink } from "react-router-dom";

export const AcmeLogo = () => (
  <img src="/logo.png" className="w-[156px] h-auto block" alt="Acme Logo" />
);

function Header() {
  return (
   <Navbar>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <AcmeLogo />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex mx-auto text-center items-center justify-center">
          <NavbarItem >
            <Link  as={RouterLink} to="/dashboard" color="foreground" href="#"  className={'text-black hover:text-red-800'}>
              Dashboard
            </Link>
          </NavbarItem>
         <NavbarItem isActive>
  <Link 
  as={RouterLink} 
    to="/incidents"
    aria-current="page" 
    href="#" className={'text-black hover:text-red-800'}>
    Incidents
  </Link>
</NavbarItem>
          <NavbarItem>
            <Link 
            as={RouterLink} 
    to="/locations"
            href="#"  className={'text-black hover:text-red-800'}>
              Locations
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link as={RouterLink} to="/activities"           
            href="#"          
            className={'text-black hover:text-red-800'}>
              Activities
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link            
            as={RouterLink} to="/documents" 
            href="#"  className={'text-black hover:text-red-800'}>
              Documents
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#"  className={'text-black hover:text-red-800'}>
              Cypher AI
            </Link>
          </NavbarItem>
        </NavbarContent>

{/* // logo section */}
      <NavbarContent as="div" className="items-center space-x-2" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="./madhead.png"
            />
          </DropdownTrigger>
        </Dropdown>

        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="./notificaton.png "
            />
          </DropdownTrigger>
        </Dropdown>

<NavbarItem> 
<p>Usman Zafar</p>
<p>usmanzafar@gmail.com</p>
          </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
