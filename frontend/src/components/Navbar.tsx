"use client";
import React, { useState } from 'react';
//import { IoCallOutline } from "react-icons/io5";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import sps_logo from "../../public/assets/SPS.png"
import { LuBadgeHelp } from "react-icons/lu";
import Image from 'next/image';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Helper function to determine if a link is active
    const isActiveLink = (href: string): boolean => {
        if (href === '/') {
            return pathname === href;
        }
        return pathname.startsWith(href);
    };

    // Function to get link classes based on active state
    const getLinkClasses = (href: string): string => {
        const baseClasses = "block py-2 px-3 md:p-0 rounded hover:bg-gray-200";
        const activeClasses = "text-blue-700";
        const inactiveClasses = "text-black";
        
        return `${baseClasses} ${isActiveLink(href) ? activeClasses : inactiveClasses}`;
    };

    return (
        <nav className="bg-white border-gray-200 w-full fixed top-0 left-0 z-50">
            <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" legacyBehavior>
                    <a className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image 
                            src={sps_logo.src} 
                            alt="SPS Logo" 
                            width={200} 
                            height={200} 
                            className="h-8"
                        />
                    </a>
                </Link>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button
                        type="button"
                        className="flex items-center justify-center text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
                        <LuBadgeHelp className='mr-2'/>Help
                        {/*<IoCallOutline className="ml-2" />*/}
                    </button>
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-cta"
                        aria-expanded={isOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                <div className={`${isOpen ? 'block' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-cta">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <Link href="/" legacyBehavior>
                                <a className={getLinkClasses("/")}>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/tours" legacyBehavior>
                                <a className={getLinkClasses("/tours")}>All Tools</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/things-to-know" legacyBehavior>
                                <a className={getLinkClasses("/things-to-know")}>Things To Know</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about-us" legacyBehavior>
                                <a className={getLinkClasses("/about-us")}>About Us</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" legacyBehavior>
                                <a className={getLinkClasses("/contact")}>Contact Us</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;