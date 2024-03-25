import {
  deleteUser,
  fetchProducts,
  requestUsername,
} from "@/actions/serverActions";
import React from "react";

const page = async () => {
  const data = await fetchProducts();

  return (
    <>
      <form action={requestUsername}>
        <input type="text" placeholder="username" name="username" />
        <input type="text" placeholder="email" name="email" />
        <input type="text" placeholder="password" name="password" />
        <button type="submit">Request</button>
      </form>
      {data.map((item: any, i: any) => (
        <div key={i} style={{ display: "flex" }}>
          <>
            {i + 1}username : {item.username}
          </>
          <>username : {item.email}</>
          <>username : {item.password}</>{" "}
          <form action={deleteUser}>
            <input type="hidden" name="id" value={item.id} />
            <button>Delete</button>
          </form>
        </div>
      ))}
    </>
  );
};

export default page;
