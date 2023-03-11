import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

const MenuItems = ({ icon, menuItems,handleActionModal,classes= "" ,handleFilter,withId=false,activeLabel = "",itemClasses=""}) =>{
  return (
    <div className=" ">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button>{icon}</Menu.Button>
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
          <Menu.Items
            className={`${classes} absolute -right-2 w-56 origin-top-right divide-y 
            divide-gray-100 rounded-md bg-color-dark-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-100`}
          >
            <div className="py-1">
              {menuItems.map((item) => {
                return (
                  <Menu.Item key={item.id}>
                    {/* {({ active }) => ( */}
                    <button
                      onClick={() => {
                        if (item.id) {
                          handleActionModal(item.id);
                          return;
                        }
                        if(item.label){
                          handleActionModal(item.label);
                          return;
                        }
                      }}
                      className={`
                        ${itemClasses}
                        hover:bg-white hover:bg-opacity-5
                        ${
                          activeLabel === item.label
                            ? "bg-white bg-opacity-5"
                            : "bg-opacity-100"
                        }
                        ${
                          item.label === "Filter"
                            ? "text-white text-opacity-50 cursor-not-allowed"
                            : ""
                        }
                        text-white group flex w-full items-center px-2 py-2 text-sm `}
                    >
                      {item.icon && (
                        <div className="mx-2 h-5 w-5 flex items-center text-white">
                          {item.icon}
                        </div>
                      )}
                      <div>{item.label}</div>
                    </button>
                    {/* )} */}
                  </Menu.Item>
                );
              })}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
export default MenuItems
