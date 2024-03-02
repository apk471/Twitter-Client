"use client";
import Image from "next/image";
import React, { useCallback } from "react";
import { GrTwitter } from "react-icons/gr";
import { FaHome } from "react-icons/fa";
import { link } from "fs";
import FeedCard from "@/components/Feedcard";
import { FaHashtag } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { CgLogIn } from "react-icons/cg";
import { log } from "console";
import toast from "react-hot-toast";
import { graphql } from "@/gql";
import { graphqlClient } from "@/clients/api";
import { verifyUserGoogleTokenQuery } from "@/graphql/query/user";

interface TwitterSidebar {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebar[] = [
  {
    title: "Home",
    icon: <FaHome />,
  },
  {
    title: "Explore",
    icon: <FaHashtag />,
  },
  {
    title: "Notifications",
    icon: <FaBell />,
  },
  {
    title: "Messages",
    icon: <IoIosMail />,
  },
  {
    title: "Bookmark",
    icon: <CiBookmark />,
  },
  {
    title: "Profile",
    icon: <FaUser />,
  },
];

export default function Home() {
  const handleLogin = useCallback(async (cred: CredentialResponse) => {
    const gooleToken = cred.credential;
    if (!gooleToken) return toast.error(`Google token not found`);
    const {verifyGoogle} = await graphqlClient.request(
      verifyUserGoogleTokenQuery,
      { token: gooleToken }
    );

    toast.success("Verifies sucess");
    console.log(verifyGoogle);
    if(verifyGoogle){
      window.localStorage.setItem("__twitter_token" , verifyGoogle)
    }
  }, []);

    
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3  pt-6">
          <div className="text-4xl hover:bg-gray-600 rounded-full p-4 transition-all cursor-pointer h-fit w-fit">
            <GrTwitter />
          </div>
          <div>
            <ul className="text-2xl  mt-4 font-semibold pr-4">
              {sidebarMenuItems.map((item) => (
                <li
                  key={item.title}
                  className="flex justify-start items-center gap-4 hover:bg-gray-600 rounded-full p-4 w-fit cursor-pointer">
                  {" "}
                  <span>{item.icon}</span> <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 pr-10">
            <button className="bg-[#1d9bf0] p-4 rounded-full  w-full font-semibold ">
              Tweet
            </button>
          </div>
        </div>
        <div className="col-span-6 border-r-[0.2px] border-slate-500 border-l-[0.2px]">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3 p-5">
          <div className="p-5 border bg-slate-700 rounded-lg">
            <h1 className="text-xl pb-5 pr-5">New to Twitter?</h1>
            <div className="google-login-box pr-3">
              <GoogleLogin onSuccess={handleLogin} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
