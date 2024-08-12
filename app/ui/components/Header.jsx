'use client'

import Link from "next/link";
import Image from 'next/image'
import React from "react";
import { useState, useEffect } from "react";

const Header = ({handleHidden}) => {
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        document.addEventListener("scroll", () => {
          const scrollCheck = window.scrollY > 100
          if (scrollCheck !== scroll) {
            setScroll(scrollCheck)
          }
        })
      })
    return (
        <div className= "flex flex-col items-center justify-between mr-7"> {/*bg-transparent sticky-bar mt-4*/}
            <div className="w-full pl-4 pr-4">{/*container bg-transparent*/}
                <nav className="bg-transparent flex justify-between items-center py-3">{/**/}
                    <Link href="/" className="text-3xl font-semibold leading-none">
                        
                            <Image
                                className="h-25"
                                src="/images/logos/Logo.jpg"
                                alt="Telemedicina"
                                width={100}
                                height={100}
                            />
                    
                    </Link>
                    <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
                        <li className="group relative pt-4 pb-4">
                            <Link href="/" className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500"> 
                                Inicio                             
                            </Link>    
                        </li>
                        <li className="pt-4 pb-4">
                            <Link href="/specialties" className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                                Especialidades
                            </Link>
                        </li>
                        <li className="pt-4 pb-4">
                            <Link href="/contact" className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                                Contacto
                            </Link>
                        </li>
                        <li className="group relative pt-4 pb-4">
                            <Link href="/shifts" className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">                                    
                                Calendario                                    
                            </Link>    
                        </li>                    
                    </ul>
                    <div className="lg:hidden">
                        <button className="navbar-burger flex items-center py-2 px-3 text-blue-500 hover:text-blue-700 rounded border border-blue-200 hover:border-blue-300" onClick={handleHidden}>
                            <svg
                                className="fill-current h-4 w-4"
                                viewbox="0 0 20 20"
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
