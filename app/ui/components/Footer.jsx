import React from "react";
import Link from "next/link"
import Image from "next/image";

const Footer = () => {
    return (
        <>
            <section className="py-10">
                <div className="container px-4 mx-auto wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                    <div className="flex flex-wrap mb-12 lg:mb-30 -mx-3 text-center lg:text-left">
                        <div className="w-full lg:w-1/5 px-3 mb-6 lg:mb-0">
                            <Link href="/" className="inline-block mx-auto lg:mx-0 text-3xl font-semibold leading-none">
                                
                                    <Image className="h-20" src="/images/logos/Logo.jpg" alt="Telemedicina" width={70} height={30}/>
                                
                            </Link>
                        </div>
                        <div className="w-full lg:w-2/5 px-3 py-10 mb-8 lg:mb-0">
                            <p className="max-w-md mx-auto lg:max-w-full lg:mx-0 lg:pr-32 lg:text-lg text-blueGray-400 leading-relaxed">
                                Servicios de <strong>Emergencia</strong> 24/7
                            </p>
                        </div>
                        <div className="w-full lg:w-1/5 px-3 mb-8 lg:mb-0">
                            <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">Oficina</p>
                            <p className="lg:text-lg text-blueGray-400">Neuquén, Argentina.</p>
                        </div>
                        <div className="w-full lg:w-1/5 px-3">
                            <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">Contacto</p>
                            <p className="lg:text-lg text-blueGray-400">299-111222333</p>
                            <p className="lg:text-lg text-blueGray-400"></p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center lg:justify-between">
                        <p className="text-sm text-blueGray-400">
                            &copy; {new Date().getFullYear()}. All rights reserved. Designed by{" "}
                            <Link className="text-blue-400" href="https://limaydev.com.ar" target="_blank">
                                limaydev.com.ar
                            
                            </Link>
                        </p>
                    
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;
