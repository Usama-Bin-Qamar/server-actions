import React from "react";
import { deleteUser, fetchUsers } from "@/actions/serverActions";
import { redirect } from "next/dist/server/api-utils";

const page = async () => {
  const data = await fetchUsers();
  return (
    <div className="lg:w-1/2 px-2 py-4 flex justify-center items-center flex-col">
      {data.map((item: any, i: any) => (
        <div key={i} className="w-11/12 px-4 bg-slate-50 flex flex-row">
          <div className="flex">
            <div className="flex flex-row mr-2">
              <p className="tracking-tighter text-black-500 md:text-lg dark:text-gray-400 pr-1">
                Email:
              </p>{" "}
              <p className="tracking-tighter text-gray-500 md:text-lg dark:text-gray-400">
                {item.email}
              </p>
            </div>
            <div className="flex flex-row">
              <p className="tracking-tighter text-black-500 md:text-lg dark:text-gray-400 pr-1">
                User Name:
              </p>{" "}
              <p className="tracking-tighter text-gray-500 md:text-lg dark:text-gray-400">
                {item.username}
              </p>
            </div>
          </div>
          <form action={deleteUser}>
            <input type="hidden" name="id" value={item.id} />
            <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
              Delete
            </button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default page;
