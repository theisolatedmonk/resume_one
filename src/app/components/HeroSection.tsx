import Link from 'next/link'
import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import { IoCall } from "react-icons/io5";
type Props = {}

export default function HeroSection({ }: Props) {
    return (
        <div className='flex flex-col w-full'>
            <h1 className='text-3xl font-bold'>Rahul Seth</h1>
            <h1 className='text-xl font-semibold'>VLSI Engineer</h1>
            <h1 className='text-sm'>I build pixel-perfect, engaging, and accessible digital experiences.

            </h1>

            <div className=" flex-col sm:flex hidden">
                <div className="flex  items-center">
                    <h1 className='w-10 hover:w-20 h-1 bg-white'></h1>
                    <h1 className="">About</h1>
                </div>
                <div className="flex items-center ">
                    <h1 className='w-10 hover:w-20 h-1 bg-white'></h1>
                    <h1 className="">About</h1>
                </div>
                <div className="flex  items-center">
                    <h1 className='w-10 hover:w-20 h-1 bg-white'></h1>
                    <h1 className="">About</h1>
                </div>
            </div>
            <div className="flex gap-2">
                <Link href={'https://www.linkedin.com/in/rahulsethji/'}><FaLinkedin />
                </Link>
                <Link href={'https://gmail.com/'}>
                    <IoMdMailUnread />

                </Link>
                <Link href={''}>
                    <IoCall />
                </Link>

            </div>
        </div>
    )
}