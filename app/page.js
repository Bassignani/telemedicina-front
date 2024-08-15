import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa"; // Importamos el ícono de tilde

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-4">

      {/* Sección Principal */}
      <section className="z-10 max-w-5xl w-full items-center justify-between lg:flex lg:pt-10 pb-10 bg-white"> {/* Fondo sólido blanco */}
        <div className="ml-2 left-0 top-0">
          <div>
            <h1 className="text-3xl lg:text-5xl mb-4 font-bold text-customWhite">
              Servicio Médico <span className="online-effect">Online</span>
            </h1>
            <p className="text-justify pr-4 text-gray-600">
              {/* Tu descripción aquí */}
            </p>
          </div>
          <div className="flex lg:justify-start sm:justify-center sm:mb-5 p-10">
            <Link href="/shifts">
              <button className="p-3 mt-3 mr-3 bg-transparent text-customWhite border-2 border-white rounded-full shadow-2xl hover:bg-green-800 hover:text-white">
                Agendar Turno
              </button>
            </Link>
            <Link href="/shifts">
              <button className="p-3 mt-3 mr-3 bg-transparent text-customWhite border-2 border-white rounded-full shadow-2xl hover:bg-green-800 hover:text-white">
                Especialidades
              </button>
            </Link>
          </div>
        </div>
        <div className="">
          <Image
            src="/images/S5.jpg"
            alt="Image Telemedicina"
            className="rounded-lg"
            width={600} // Reduce el ancho
            height={400} // Reduce la altura
          />
        </div>
      </section>

      {/* ¿Qué es Telemedicina? */}
      <section className="z-10 max-w-5xl w-full items-center justify-between lg:flex p-10 bg-white"> {/* Fondo sólido blanco */}
        <div className="container">
          <div className="flex flex-wrap items-center mb-12">
            <div className="w-full lg:w-1/2 mb-3 lg:mb-0">
              <h2 className="text-4xl font-bold font-heading text-gray-800">
                <span>¿Qué es Telemedicina?</span>
              </h2>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 -mb-6">
          <p className="text-lg font-medium text-customWhite">
              La telemedicina es una forma moderna de atención médica que permite a los pacientes recibir consultas, diagnósticos y tratamientos a través de medios digitales, sin necesidad de acudir en persona al consultorio del médico. <br />
              <br />
              A través de videollamadas y plataformas en línea, los profesionales de la salud pueden evaluar síntomas, emitir recetas digitales, y ofrecer recomendaciones de tratamiento, brindando un acceso más rápido y cómodo a la atención médica.
            </p>
          </div>
        </div>
      </section>

      {/* ¿Cómo Funciona Telemedicina? */}
      <section className="z-10 max-w-5xl w-full items-center justify-between lg:flex p-10 bg-white"> {/* Fondo sólido blanco */}
        <div className="container">
          <div className="mb-12 text-left">
            <h2 className="text-4xl font-bold font-heading text-gray-800">
              <span>¿Cómo Funciona Telemedicina?</span>
            </h2>
          </div>
          <div className="">
            <div className="flex items-center mb-4">
              <FaCheck className="text-green-600 mr-2" />
              <p className="text-lg font-medium text-customWhite">
                Seleccioná la Especialidad deseada
              </p>
            </div>

            <div className="flex items-center mb-4">
              <FaCheck className="text-green-600 mr-2" />
              <p className="text-lg font-medium text-customWhite">
                Elegí el día y horario disponible que desees.
              </p>
            </div>

            <div className="flex items-center mb-4">
              <FaCheck className="text-green-600 mr-2" />
              <p className="text-lg font-medium text-customWhite">
                Abona la consulta
              </p>
            </div>

            <div className="flex items-center mb-4">
              <FaCheck className="text-green-600 mr-2" />
              <p className="text-lg font-medium text-customWhite">
                Recibí en tu correo confirmación y agenda de turno
              </p>
            </div>
          </div>
        </div>
      </section>

    

    </main>
  );
}
