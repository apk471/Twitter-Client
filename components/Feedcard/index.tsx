import React from "react";
import Image from "next/image";
import { FaRegUserCircle } from "react-icons/fa";
import { BiMessageRounded } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa6";
import { MdOutlineFileUpload } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { IoStatsChartOutline } from "react-icons/io5";

const FeedCard: React.FC = ()=> {
    return <div>
        <div className="grid grid-cols-12 border border-gray-700 border-r-0 border-l-0 border-b-0 hover:bg-slate-900 transition-all cursor-pointer">
        <div className="col-span-1 mt-3">
            <div className="pl-2 text-2xl">

        <FaRegUserCircle />
            </div>
        
        </div>
        <div className="col-span-11 mt-3">
            <h5>Ayush Amin</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas vel voluptate incidunt ipsum, repudiandae quaerat? Tempora alias beatae amet quidem cumque laborum, recusandae maxime nostrum!</p>
            <div className="flex flex-row justify-between gap-4 mt-5 text-xl mb-5">
                <div className=" hover:bg-sky-400 rounded-full">

            <BiMessageRounded />
                </div>
                <div className="hover:bg-green-300 rounded-full flex flex-row gap-2">
                <FaRetweet />
                <div className="text-gray-600 text-sm ">22.k</div>
                
                </div>
                <div className=" hover:bg-pink-400 rounded-full flex flex-row gap-2">
                
                <CiHeart /> <span className="text-gray-600 text-sm flex">22.k</span>
                </div>

                <div className="flex gap-2 ">
                    <div className="hover:bg-sky-400 rounded-lg flex flex-row gap-2">

                <MdOutlineFileUpload /> <span className="text-gray-600 text-sm flex ">22.k</span>
                    </div>
                    <div className="hover:bg-sky-400 rounded-lg flex flex-row gap-2">

                    <IoStatsChartOutline /> <span className="text-gray-600 text-sm flex">22.k</span>
                    </div>
                    </div>
                
            </div>
        </div>
    </div>
    </div>;  
    
}

export default FeedCard;