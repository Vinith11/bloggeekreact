import React from 'react'
import { Menu } from "@headlessui/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

const DropList = ({href, label}) => {
  return (
    <div>
        <Menu.Item key={label}>
                {({ active }) => (
                  <div>
                    <a
                      href={href}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      {label}
                    </a>
                  </div>
                )}
              </Menu.Item>
    </div>
  )
}

export default DropList