import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <>
            <section className="py-10 bg-green-500 text-gray-800"> {/* Cambia el color de fondo si es necesario */}
                <div className="container px-4 mx-auto wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                    {/* Sección de llamada a la acción */}
                    <div className="flex flex-col items-center mb-12">
                        <div className="text-center mb-6">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
                                ¡No Esperes Más!
                            </h2>
                            <p className="text-lg font-medium text-customWhite">
                                Únete a nuestra plataforma y empieza a recibir atención médica de calidad desde la comodidad de tu hogar.
                            </p>
                        </div>

                        <Link href="/shifts">
              <button className="p-3 mt-3 mr-3 bg-green-800 text-customWhite border-2 border-customWhite rounded-full shadow-2xl hover:bg-customWhite hover:text-green-800">
                Agendar Turno
              </button>
            </Link>
                    </div>

                    {/* Información del Footer */}
                    <div className="flex flex-wrap items-center justify-between">
                        <div className="w-full lg:w-1/3 flex items-center mb-6 lg:mb-0">
                            <Link href="/" className="flex items-center">
                                <Image className="h-20 rounded-full" src="/images/logos/telemedicine_logo_transparent.png" alt="Telemedicina" width={70} height={70} />
                            </Link>
                        </div>

                        <div className="w-full lg:w-2/3 text-center lg:text-right">
                            <p className="text-sm text-gray-600">
                                &copy; {new Date().getFullYear()}. Todos los derechos reservados. Diseñado por{" "}
                                <Link className="text-blue-400" href="https://limaydev.com.ar" target="_blank">
                                    limaydev.com.ar
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;
