"use server";

import { User } from "@/lib/model";
import { connectToDB } from "@/lib/utils";
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";

export const requestUsername = async (formData: any) => {
  try {
    await connectToDB();
    const { username, email, password } = Object.fromEntries(formData);

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    revalidatePath("/addusers");
    console.log("🚀 ~ requestUsername ~ user:", user);
  } catch (error) {
    console.log("🚀 ~ requestUsername ~ error:", error);
  }
};

export const fetchProducts = async () => {
  // console.log(q);
  // const regex = new RegExp(q, "i");

  //   const ITEM_PER_PAGE = 5;

  try {
    connectToDB();
    const count = await User.find();
    console.log("🚀 ~ fetchProducts ~ count:", count);

    return count;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products!");
  }
};

export const deleteUser = async (formData: any) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await User.findByIdAndDelete(id);
    revalidatePath("/addusers");
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user!");
  }
};
