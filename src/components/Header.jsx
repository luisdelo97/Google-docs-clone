"use client";
import Image from "next/image";
import {
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "../app/Material-Tailwind";
// import profile from "../../public/profile.jpg";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white">
      <div>
        <Menu>
          <MenuHandler>
            <IconButton
              color="gray"
              variant="outlined"
              className="h-20 w-20 border-0"
            >
              <i className="fa-solid fa-bars text-2xl" />
            </IconButton>
          </MenuHandler>
          <MenuList>
            <MenuItem>Menu Item 1</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
            <MenuItem>Menu Item 3</MenuItem>
          </MenuList>
        </Menu>
      </div>
      <div>
        <IconButton
          color="blue"
          variant="outlined"
          className="h-20 w-20 border-0"
        >
          <i className="fa-solid fa-file-lines text-4xl " />
        </IconButton>
      </div>

      <h1 className="hidden sm:block ml-2 text-gray-700 text-2xl">Docs</h1>
      <div
        className="mx-2 md:mx-20 flex flex-grow
       items-center px-5 py-2 bg-gray-100 text-gray-500 rounded-lg focus-within:text-gray-600 focus-within:shadow-md min-w-0"
      >
        <i className="fa-solid fa-magnifying-glass text-gray-500" />
        <input
          type="search"
          placeholder="Search"
          className="flex-grow pl-3 md:pl-5 text-base bg-transparent outline-none min-w-0"
        />
      </div>
      <div>
        <IconButton
          color="gray"
          variant="outlined"
          className="h-20 w-20 border-0 block"
        >
          <i className="fa-solid fa-layer-group text-3xl" />
        </IconButton>
      </div>

      <Menu>
        <MenuHandler>
          <img
            alt="profile-name"
            className="hidden md:block rounded-full h-10 w-10 ml-2 cursor-pointer"
            src={session?.user?.image}
            width={40}
            height={40}
          />
        </MenuHandler>
        <MenuList>
          <MenuItem
            className="flex gap-2"
            onClick={async () => {
              await signOut({ callbackUrl: "/Login" });
              console.log("here");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
              />
            </svg>
            <p className="font-normal">Sign Out</p>
          </MenuItem>
        </MenuList>
      </Menu>
    </header>
  );
};

export default Header;
