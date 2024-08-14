import Link from "next/link";
import Image from 'next/image';
import React from "react";
import { useState, useEffect } from "react";

const Header = ({ handleHidden }) => {
    const [scroll, setScroll] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        };
        document.addEventListener("scroll", handleScroll);
        return () => document.removeEventListener("scroll", handleScroll);
    }, [scroll]);

    return (
        <div className="flex flex-col items-center">
            <div className="w-full px-4">
                <nav className="bg-transparent flex items-center justify-between py-3 mx-auto max-w-screen-lg">
                    <Link href="/" className="flex-shrink-0">
                        <Image
                            className="h-25 rounded-lg"
                            src="/images/logos/telemedicine_logo_transparent.png"
                            alt="Telemedicina"
                            width={100}
                            height={100}
                        />
                    </Link>
                    <ul className="hidden lg:flex lg:items-center lg:space-x-12 mx-auto">
                        <li className="group relative pt-4 pb-4">
                            <Link href="/" className="text-lg font-semibold text-blueGray-600 hover:text-blueGray-500">
                                Inicio
                            </Link>
                        </li>
                        <li className="pt-4 pb-4">
                            <Link href="/specialties" className="text-lg font-semibold text-blueGray-600 hover:text-blueGray-500">
                                Agendar Turno
                            </Link>
                        </li>
                        <li className="pt-4 pb-4">
                            <Link href="/contact" className="text-lg font-semibold text-blueGray-600 hover:text-blueGray-500">
                                Especialidades
                            </Link>
                        </li>
                    </ul>
                    <div className="lg:hidden">
                        <button className="navbar-burger flex items-center py-2 px-3 text-blue-500 hover:text-blue-700 rounded border border-blue-200 hover:border-blue-300" onClick={handleHidden}>
                            <svg
                                className="fill-current h-4 w-4"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Mobile menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                            </svg>
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;
