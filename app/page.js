import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-4">
      <section className="z-10 max-w-5xl w-full items-center justify-between lg:flex lg:pt-10 pb-10">
        <div className="ml-2 left-0 top-0">
          <div>
            <h1 className="text-3xl lg:text-5xl mb-4 font-bold">
              Telemedicina
              <br />
              <spam className="text-2xl lg:text-4xl">
                Consulta Médica Online en Toda Argentina
              </spam>
            </h1>
            {/* <h2 className="text-3xl lg:text-5xl mb-4 font-bold font-heading wow animate__animated animate__fadeIn">
              Telemedicina:{" "}
                <span className="text-blue-500"> Consulta medica Online</span>{" "}
                en todo Argentina
            </h2> */}
            <p className="text-justify pr-4">
              Reciba un tratamiento adecuado junto con exámenes, licencias y
              certificados médicos sin salir de casa. Todo por telemedicina
              Horario de atención: Lunes a Sábado de 08:00 a 21:00 hrs.
              Asistencia telefónica/Whatsapp al: +56 2 3304 8603
            </p>
          </div>
          <div className="flex  lg:justify-start sm:justify-center sm:mb-5 p-10">
            <Link href="/shifts">
              <button className="p-3 mt-3 mr-3 bg-green-400 rounded-full shadow-2xl  hover:bg-zinc-100 hover:text-zinc-800">
                Agenda una Turno
              </button>
            </Link>
            <Link href="/shifts">
              <button className="p-3 mt-3 bg-green-400 rounded-full shadow-2xl  hover:bg-zinc-100 hover:text-zinc-800">
                Nuestros Especialistas
              </button>
            </Link>
          </div>
        </div>
        <div className="">
          <Image
            src="/images/S5.jpg"
            alt="Image Telemedicina"
            className="rounded-lg"
            width={900}
            height={100}
          />
        </div>
      </section>

      <section
        className="z-10 max-w-5xl w-full items-center justify-between lg:flex bg-blue-500  "
        id="key-features"
      >
        <div className="container">
          <div className="flex flex-wrap items-center mb-12">
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
              <h2
                className="text-4xl font-bold font-heading wow animate__animated animate__fadeIn"
                data-wow-delay=".1s"
              >
                <span>Servicios de </span>
                <br />
                <span className="text-blue-600">Excelente </span>
                <span>
                  Calidad <br />
                </span>
              </h2>
            </div>
            <div className="w-full lg:w-1/2">
              <p
                className="lg:pl-16 text-blueGray-400 leading-loose wow animate__animated animate__fadeIn"
                data-wow-delay=".4s"
              >
                Atencion Médica en la comodidad de tu Hogar
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 -mb-6">
            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
              <div
                className="border border-gray-100 pt-8 px-6 pb-6  text-center rounded-xl shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                data-wow-delay=".3s"
              >
                <h3 className="mb-2 font-bold font-heading">Atencion Médica</h3>
                <p className="text-sm text-blueGray-400">
                  Reciba evaluación por médico general en línea y tendrá un
                  diagnóstico, junto con un tratamiento adecuado.
                  {/* Servicios con y sin chofer.
                    <br />
                    Traslados Programados.
                    <br />
                    Atención Domiciliaria. */}
                </p>
                <Link href="/">
                  <button className="bg-green">
                    Conectar con especialistas
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
              <div
                className="border border-gray-100 pt-8 px-6 pb-6  text-center rounded-xl shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                data-wow-delay=".7s"
              >
                <h3 className="mb-2 font-bold font-heading">
                  Medicina Preventiva
                </h3>
                <p className="text-sm text-blueGray-400">
                  Controles de Alcohol y Drogas.
                  <br />
                  Servicios Médicos-Legales.
                  <br />
                  Epidemiología Laboral.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
              <div
                className="border border-gray-100 pt-8 px-6 pb-6  text-center rounded-xl shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                data-wow-delay=".9s"
              >
                <h3 className="mb-2 font-bold font-heading">
                  Servicios Oil & Gas
                </h3>
                <p className="text-sm text-blueGray-400">
                  Permanencia en sitio. <br />
                  Trailer Enfermería.
                  <br />
                  Control de Ausentismo.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
              <div
                className="border border-gray-100 pt-8 px-6 pb-6  text-center rounded-xl shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                data-wow-delay=".5s"
              >
                <h3 className="mb-2 font-bold font-heading">Eventos</h3>
                <p className="text-sm text-blueGray-400">
                  Deportivos.
                  <br />
                  Recitales.
                  <br />
                  Actos Públicos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="z-10 max-w-5xl w-full items-center justify-between lg:flex p-10"
        id="key-features"
      >
        <div className="container">
          <div className="flex flex-wrap items-center mb-12">
            <div className="w-full lg:w-1/2 mb-3 lg:mb-0">
              <h2
                className="text-4xl font-bold font-heading wow animate__animated animate__fadeIn"
                data-wow-delay=".1s"
              >
                <span>¿Que es Telemedicna? </span>
                <br />
                {/* <span className="text-blue-600">Desempeño </span> */}
              </h2>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 -mb-6">
            <p>
              Telemedicarte es un centro médico virtual dedicado a la atención
              médica integral por telemedicina. Brindando todo el calor humano y
              calidad que caracteriza a cada uno de los profesionales que
              participan de este proyecto. Nuestro objetivo es llegar a la casa
              del paciente usando la tecnología. Protegiéndolo de las salas de
              espera y las multitudes en los centros de salud para evitar riesgo
              de contagio de otras enfermedades. Apostamos por la
              democratización de la medicina. Otorgando acceso a bajo costo a
              atención médica, órdenes de exámenes, tratamiento y licencias
              médicas según corresponda.
            </p>
          </div>
        </div>
      </section>

      <section
        className="z-10 max-w-5xl w-full items-center justify-between lg:flex p-10"
        id="key-features"
      >
        <div className="container">
          <div className="mb-12 text-center">
            <h2
              className="text-4xl font-bold font-heading wow animate__animated animate__fadeIn"
              data-wow-delay=".1s"
            >
              <span>¿Como Funciona Telemedicina?</span>
            </h2>
          </div>
          <div className="">

            <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
              <Image
                class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                src="/images/S5.jpg"
                alt="1"
                width="384"
                height="512"
              />
              <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                  <p class="text-lg font-medium">
                    “Tailwind CSS is the only framework that Ive seen scale on
                    large teams. It’s easy to customize, adapts to any design,
                    and the build size is tiny.”
                  </p>
                </blockquote>
                <figcaption class="font-medium">
                  <div class="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
                  <div class="text-slate-700 dark:text-slate-500">
                    Staff Engineer, Algolia
                  </div>
                </figcaption>
              </div>
            </figure>

            <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
              <Image
                class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                src="/images/S5.jpg"
                alt="1"
                width="384"
                height="512"
              />
              <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                  <p class="text-lg font-medium">
                    “Tailwind CSS is the only framework that Ive seen scale on
                    large teams. It’s easy to customize, adapts to any design,
                    and the build size is tiny.”
                  </p>
                </blockquote>
                <figcaption class="font-medium">
                  <div class="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
                  <div class="text-slate-700 dark:text-slate-500">
                    Staff Engineer, Algolia
                  </div>
                </figcaption>
              </div>
            </figure>

            <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
              <Image
                class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                src="/images/S5.jpg"
                alt="1"
                width="384"
                height="512"
              />
              <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                  <p class="text-lg font-medium">
                    “Tailwind CSS is the only framework that Ive seen scale on
                    large teams. It’s easy to customize, adapts to any design,
                    and the build size is tiny.”
                  </p>
                </blockquote>
                <figcaption class="font-medium">
                  <div class="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
                  <div class="text-slate-700 dark:text-slate-500">
                    Staff Engineer, Algolia
                  </div>
                </figcaption>
              </div>
            </figure>

          </div>
        </div>
      </section>

      <section className="z-10 max-w-5xl w-full items-center justify-between lg:flex p-10">
        <div className="container">
          <div className="max-w-2xl lg:max-w-3xl mx-auto">
            <div className="mb-12 text-center">
              <h2
                className="text-4xl font-bold font-heading wow animate__animated animate__fadeIn animated"
                data-wow-delay=".1s"
              >
                Estamos en Contacto!
              </h2>
              <p
                className="text-blueGray-600 wow animate__animated animate__fadeIn animated"
                data-wow-delay=".5s"
              >
                Nos encantará saber de Usted
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>

    // <main className="flex min-h-screen flex-col items-center justify-between pt-4">
    //   <section className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
    //     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
    //       Get started by editing&nbsp;
    //       <code className="font-mono font-bold">app/page.js</code>
    //     </p>
    //     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
    //       <a
    //         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{' '}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className="dark:invert"
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </section>

    //    <section className="z-10 max-w-5xl w-full items-center justify-between lg:flex p-10">
    //     <div className="ml-2 left-0 top-0">
    //       <div>
    //         <h1 className="text-xl lg:text-4xl s:text-xl">
    //           Telemedicina: Consulta Médica Online en Toda Argentina
    //         </h1>
    //         <p>
    //           Reciba un tratamiento adecuado junto con exámenes, licencias y
    //           certificados médicos sin salir de casa. Todo por telemedicina
    //           Horario de atención: Lunes a Sábado de 08:00 a 21:00 hrs.
    //           Asistencia telefónica/Whatsapp al: +56 2 3304 8603
    //         </p>
    //       </div>
    //       <div className="flex  lg:justify-start sm:justify-center sm:mb-5">
    //         <Link href="/shifts">
    //           <button className="p-3 mt-3 mr-3 bg-green-400 rounded-full shadow-2xl  hover:bg-zinc-100 hover:text-zinc-800">
    //             Agenda una Turno
    //           </button>
    //         </Link>
    //         <Link href="/shifts">
    //           <button className="p-3 mt-3 bg-green-400 rounded-full shadow-2xl  hover:bg-zinc-100 hover:text-zinc-800">
    //             Nuestros Especialistas
    //           </button>
    //         </Link>
    //       </div>
    //     </div>
    //     <div className="">
    //       <Image
    //         src="/images/S5.jpg"
    //         alt="Image Telemedicina"
    //         className="rounded-lg"
    //         width={900}
    //         height={100}
    //       />
    //     </div>
    //   </section>

    //   <section className="z-10 max-w-5xl w-full items-center justify-between lg:flex p-10">
    //     <div>

    //     </div>
    //   </section>

    //    <section className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
    //     <Image
    //       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </section>

    //   <section className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Docs{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Find in-depth information about Next.js features and API.
    //       </p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Learn{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Learn about Next.js in an interactive course with&nbsp;quizzes!
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Templates{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Explore the Next.js 13 playground.
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Deploy{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </section>
    // </main>
  );
}
