import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
// import { navLinks } from "../../Blogs/Cpp";
import DropList from "./DropList";



export default function Dropdown({navLinks}) {
  return (
    <Menu as="div" className="relative inline-block text-left pt-4">
      <div>
        <Menu.Button className="inline-flex justify-center gap-x-1.5 rounded-md text-white bg-gray-800  py-2 w-[350px] text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 ">
          Topics
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-[2px] z-10 mt-2 w-[350px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {navLinks.map((items) => (
              <DropList key={items.label} {...items}/>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
