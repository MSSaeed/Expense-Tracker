import React, { useState } from "react";
import AddTransaction from "./AddTransaction";
import History from "./History";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-1/2  border">
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        <li
          onClick={() => {
            setToggle(false);
          }}
          className=" w-1/2"
        >
          <div
            aria-current="page"
            className={
              toggle
                ? " p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                : "p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
            }
          >
            Transaction
          </div>
        </li>
        <li
          onClick={() => {
            setToggle(true);
          }}
          className="  w-1/2"
        >
          <div
            className={
              !toggle
                ? " p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                : "p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
            }
          >
            History
          </div>
        </li>
      </ul>
      {toggle ? <History /> : <AddTransaction />}
    </div>
  );
};

export default Header;
