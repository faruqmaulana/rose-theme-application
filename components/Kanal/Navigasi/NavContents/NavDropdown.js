import { Menu, Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";

export default function NavDropdown() {
  const Nav = [
    { to: "#", desc: "Home" },
    { to: "#", desc: "About" },
    { to: "#", desc: "Posts" },
  ];

  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="relative py-3 sm:max-w-xl">
        <nav>
          <Popover>
            <Popover.Button as="div" className="z-10">
              <button
                className="text-gray-500 w-10 h-10 relative focus:outline-none"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <span className="sr-only">Open main menu</span>
                <div className="text-white block w-5 absolute left-1/2 top-1/2 transform  -translate-x-1/2 -translate-y-1/2">
                  <span
                    aria-hidden="true"
                    className={`${
                      open ? "rotate-45" : "-translate-y-1.5"
                    } block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out`}
                  ></span>
                  <span
                    aria-hidden="true"
                    className={`${
                      open && "opacity-0"
                    } block absolute  h-0.5 w-5 bg-current transform transition duration-500 ease-in-out`}
                  ></span>
                  <span
                    aria-hidden="true"
                    className={`${
                      open ? "-rotate-45" : "translate-y-1.5"
                    } block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out`}
                  ></span>
                </div>
              </button>
            </Popover.Button>
            <Transition
              enter="transition duration-500"
              enterFrom="transform opacity-0"
              enterTo="transform opacity-100"
              leave="transition duration-500"
              leaveFrom="transform opacity-100"
              leaveTo="transform opacity-0"
            >
              <Popover.Panel className="absolute items-center justify-center right-0 min-w-fix w-screen max-w-screen  h-screen flex flex-col px-6 bg-white bg-opacity-70 backdrop-blur-lg pointer will-change-opacity gap-5 -mt-16 -z-10">
                <a href="/analytics">Analytics</a>
                <a href="/engagement">Engagement</a>
                <a href="/security">Security</a>
                <a href="/integrations">Integrations</a>
              </Popover.Panel>
            </Transition>
          </Popover>
        </nav>
      </div>
    </>
  );
}
