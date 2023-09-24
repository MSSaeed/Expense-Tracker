import React from "react";

const History = () => {
  const History = new Array(50).fill(null);
  return (
    <div className="h-[514px] overflow-hidden">
      <div className=" flex border  justify-between py-3 px-3">
        <h3 className="text-2xl font-semibold font-sans">History</h3>
        <input type="text" className="border px-4" placeholder="Search" />
      </div>
      <div className="overflow-y-scroll h-[448px]">
        <table className="min-w-full">
          <thead className="bg-white border-b">
            <tr>
              <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                #
              </th>
              <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Title
              </th>
              <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Amount
              </th>
              <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Description
              </th>
              <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Delete
              </th>
            </tr>
          </thead>
          <tbody className="overflow-y-scroll">
            {History.map((item, index) => {
              return (
                <tr
                  className={
                    index % 2 === 0
                      ? "bg-green-100 border-b"
                      : "bg-red-100 border-b"
                  }
                >
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {index + 1}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Larry the Bird
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    @twitter
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    @twitter
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    <button className="focus:outline-none">❌</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
