import {
  deleteUser,
  fetchUsers,
  requestUsername,
} from "@/actions/serverActions";
import Link from "next/link";
import React from "react";

const page = async () => {
  const data = await fetchUsers();

  return (
    <>
      <div className="container mx-auto flex   items-center h-screen flex-col">
        <div className="lg:w-1/2 px-2 py-4 flex justify-center items-center m-4">
          <form action={requestUsername} className="max-w-md mx-auto  ">
            <div className="relative z-0 w-full mb-5 group ">
              <input
                type="text"
                name="username"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                required
                placeholder=" "
              />

              <label
                htmlFor="floating_username"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Username
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                required
                placeholder=""
              />

              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                required
                placeholder=""
              />

              <label
                htmlFor="Password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
            </div>

            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="lg:w-1/2 px-2 py-4 flex justify-center items-center flex-col">
          {data.map((item: any, i: any) => (
            <div key={i} className="w-11/12 px-4 bg-slate-50 flex flex-row">
              <div className="flex">
                <div className="flex flex-row">
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
          <Link href="/addusers">Add User</Link>
        </div>
      </div>
    </>
  );
};

export default page;
