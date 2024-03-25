import React from "react";
import { fetchProducts } from "@/actions/serverActions";
import { redirect } from "next/dist/server/api-utils";

const page = async () => {
  const data = await fetchProducts();
  return (
    <div>
      {data.map((item: any, i: any) => (
        <div key={i} style={{ display: "flex" }}>
          <>username : {item.username}</>
          <>username : {item.email}</>
          <>username : {item.password}</>
        </div>
      ))}
      <a href="/addusers">
        <button type="button">add user</button>
      </a>
    </div>
  );
};

export default page;
