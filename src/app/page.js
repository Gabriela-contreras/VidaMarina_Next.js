import TitlePage from "@/components/TitlePage";
import "@/app/home/home.css";
import React from "react";
import VisionSection from "@/components/VisionSection";
import AutoridadesSection from "@/components/AutoridadesSection";
import MiembrosFundadoresSection from "@/components/MiembrosFundadoresSection";
import NoticiasSection from "@/components/NoticiasSection";
import EstadisticasHome from "@/components/EstadisticasHome";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-0 m-0 p-0">
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden ">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed transition-transform duration-1000"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/foto-gratis/primer-plano-peces-mantarraya-nadando-agua-algunos-peces-nadando-debajo-el_181624-14893.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/80 via-blue-800/70 to-teal-600/80" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Burbujas Animadas */}
          <div
            className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/20 rounded-full animate-bounce"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute top-1/3 right-1/3 w-3 h-3 bg-cyan-300/30 rounded-full animate-bounce"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-blue-300/40 rounded-full animate-bounce"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-1/2 right-1/4 w-5 h-5 bg-white/15 rounded-full animate-bounce"
            style={{ animationDelay: "0.5s" }}
          />

          {/* Ondas de Agua */}
          <div className="absolute -bottom-10 left-0 w-full h-32 opacity-30">
            <svg viewBox="0 0 1200 120" className="w-full h-full">
              <path
                d="M0,60 C150,90 350,30 600,60 C850,90 1050,30 1200,60 L1200,120 L0,120 Z"
                fill="url(#wave-gradient)"
                className="animate-pulse"
              >
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0 0; -100 0; 0 0"
                  dur="8s"
                  repeatCount="indefinite"
                />
              </path>
              <defs>
                <linearGradient
                  id="wave-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="rgba(6, 182, 212, 0.3)" />
                  <stop offset="50%" stopColor="rgba(59, 130, 246, 0.3)" />
                  <stop offset="100%" stopColor="rgba(16, 185, 129, 0.3)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Contenido Principal */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <h1
            id="inicio"
            className={`text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight transition-all duration-1000 delay-300 `}
          >
            <span className="block mb-2">Fundación</span>
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-teal-300 bg-clip-text text-transparent font-semibold">
              Vida Marina
            </span>
          </h1>

          {/* Subtítulo */}
          <p
            className={`text-lg md:text-xl text-cyan-100 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 `}
          >
            Protegiendo la vida marina para las futuras generaciones, desde los
            organismos más pequeños como el plancton, hasta las ballenas más
            grandes
          </p>

          {/* Botones de Acción */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-700 `}
          >
            {/* Botón Principal de Donaciones */}
            <Link 
            href={"#vision"}
            className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
              <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
              <div className="relative flex items-center space-x-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <span className="text-lg"> Conoce Más </span>
              </div>
              {/* Efecto de ondas al hacer hover */}
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-2 border-2 border-white/50 rounded-full animate-ping" />
              </div>
            </Link>

          </div>

          {/* Estadísticas Flotantes */}
          <div
            className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto transition-all duration-1000 delay-1000 `}
          >
            <EstadisticasHome number={"500+"} text={"Especies Protegidas"} />
            <EstadisticasHome number={"50k+"} text={"Hectáreas Conservadas"} />
            <EstadisticasHome number={"10"} text={"Años de Experiencia"} />
          </div>
        </div>

        {/* Indicador de Scroll */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1200 `}
        >
          <div className="flex flex-col items-center text-white/70 hover:text-white transition-colors cursor-pointer group">
            <span className="text-sm mb-2 group-hover:text-cyan-300 transition-colors">
              Descubre más
            </span>

            <Link
              href={"#vision"}
              className="w-6 h-10 border-2 border-white/30 rounded-full group-hover:border-cyan-300 transition-colors"
            >
              {" "}
              <div className="w-1 h-3 bg-white/50 rounded-full mx-auto mt-2 animate-bounce group-hover:bg-cyan-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* Secciones */}
      <div className="mt-20 pt-10">
        <VisionSection />
        <AutoridadesSection />
        <MiembrosFundadoresSection />
        <NoticiasSection />
      </div>

      {/* <ContactoSection /> */}

      <Link
        href="https://wa.link/hlfjku"
        className="whatsapp-float"
        target="_blank"
        title="¡Chatea con nosotros por WhatsApp!"
      >
        <svg
          className="whatsapp-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <path
            fill="#fff"
            d="M16 3C9.383 3 4 8.383 4 15c0 2.647.83 5.097 2.252 7.129L4 29l7.176-2.227C12.933 27.594 14.429 28 16 28c6.617 0 12-5.383 12-12S22.617 3 16 3zm0 22c-1.409 0-2.771-.271-4.021-.808l-.287-.119-4.262 1.323 1.321-4.152-.151-.269C6.511 18.215 6 16.64 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.818-7.093c-.266-.133-1.574-.777-1.818-.865-.243-.09-.42-.133-.596.134-.176.266-.684.866-.839 1.043-.155.178-.31.2-.576.067-.266-.134-1.123-.414-2.14-1.32-.791-.705-1.326-1.575-1.482-1.84-.155-.266-.017-.409.117-.541.12-.119.266-.309.4-.463.133-.155.177-.266.267-.443.089-.178.044-.334-.022-.466-.067-.133-.596-1.439-.816-1.97-.214-.513-.43-.442-.596-.45-.155-.007-.333-.009-.511-.009s-.467.067-.711.334c-.243.267-.946.926-.946 2.257 0 1.332.969 2.62 1.103 2.798.134.178 1.909 2.92 4.629 3.983.647.223 1.152.356 1.546.456.649.165 1.24.142 1.705.086.521-.062 1.574-.645 1.797-1.269.222-.625.222-1.158.155-1.269-.067-.111-.243-.178-.51-.311z"
          />
        </svg>
      </Link>
    </div>
  );
}
