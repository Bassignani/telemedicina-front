'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const MobileMenu = ({ hiddenClass, handleRemove }) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>
            <div className={`${hiddenClass} navbar-menu  relative z-50 transition duration-300`}>
                <div className="navbar-backdrop fixed inset-0  opacity-25"></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-zinc-900/70 border-r overflow-y-auto transition duration-300">
                    <div className="flex items-center mb-8">
                        <Link href="/" className="mr-auto text-3xl font-semibold leading-none" >
                                {/* <Image className="h-20" src="/images/logos/Logo.jpg" alt="Telemedicina" width={10} height={10}/>                     */}
                        </Link>
                        <button className="navbar-close" onClick={handleRemove}>
                            <svg className="h-6 w-6 text-blueGray-400 cursor-pointer hover:text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul className="mobile-menu">
                            <li className={isActive.key == 1 ? "mb-1 menu-item-has-children rounded-xl active" : "mb-1 menu-item-has-children rounded-xl"} onClick={() => handleToggle(1)}>
                                {/* <span class="menu-expand">+</span> */}
                                <Link href="/" className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500 rounded-xl">
                                    Inicio
                                </Link>
                            </li>
                            <li className="mb-1 rounded-xl">
                                <Link href="/about" className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500 rounded-xl">
                                    Especialidades
                                </Link>
                            </li>
                            <li className="mb-1">
                                <Link href="/services" className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500 rounded-xl">
                                    Contactos
                                </Link>
                            </li>
                            <li className="mb-1">
                                <Link href="/shifts" className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500 rounded-xl">
                                    Calendario
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* <div className="mt-auto">
                        <p className="my-4 text-xs text-blueGray-400">
                            <span>Get in Touch</span>
                            <span className="text-blue-500 hover:text-blue-500 underline">contact@limaydev.com</span>
                        </p>
                    </div> */}
                </nav>
            </div>
        </>
    );
};

export default MobileMenu;
