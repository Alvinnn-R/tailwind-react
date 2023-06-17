import { Menu } from "@headlessui/react";

export default function DropdownLink({ href, children }) {
  return (
    <Menu.Item>
      <a
        href={href}
        className="px-4 py-2 hover:bg-gray-100 text-gray-700 text-sm hover:text-black block"
      >
        {children}
      </a>
    </Menu.Item>
  );
}
