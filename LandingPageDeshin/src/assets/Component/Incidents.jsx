import React from 'react'

function Incidents() {
 return (
   <Navbar isBordered maxWidth="full className={'bg-gray-200'}">
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <AcmeLogo />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex mx-auto text-center items-center justify-center">
          <NavbarItem>
            <Link color="foreground" href="#"  className={'text-black hover:text-red-800'}>
              Dashboard
            </Link>
          </NavbarItem>
         <NavbarItem isActive>
  <Link 
    aria-current="page" 
    href="#" className={'text-black hover:text-red-800'}>
    Incidents
  </Link>
</NavbarItem>
          <NavbarItem>
            <Link href="#"  className={'text-black hover:text-red-800'}>
              Locations
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#"  className={'text-black hover:text-red-800'}>
              Activities
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#"  className={'text-black hover:text-red-800'}>
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


export default Incidents;