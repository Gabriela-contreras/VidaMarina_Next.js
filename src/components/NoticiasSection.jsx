import React from "react";

export default function NoticiasSection() {
  const noticias = [
    {
      titulo: "Nuevo Proyecto de Restauración de Corales",
      fecha: "15 de Junio, 2024",
      resumen:
        "Iniciamos un ambicioso proyecto para restaurar 100 hectáreas de arrecifes de coral en la costa patagónica.",
      categoria: "Proyectos",
    },
    {
      titulo: "Rescate Exitoso de Ballenas Varadas",
      fecha: "8 de Junio, 2024",
      resumen:
        "Nuestro equipo de rescate logró salvar a 12 ballenas piloto que habían encallado en Peninsula Valdés.",
      categoria: "Rescates",
    },
    {
      titulo: "Programa Educativo en Escuelas Costeras",
      fecha: "1 de Junio, 2024",
      resumen:
        "Lanzamos nuestro programa de educación ambiental que llegará a 50 escuelas de la región.",
      categoria: "Educación",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-ocean mb-4">
            Últimas Noticias
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg" id="noticias">
            Mantente al día con nuestras actividades y logros
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {noticias.map((noticia, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
            >
              {/* <div className="h-48  flex items-center justify-center">
                {/* <span className="text-6xl">
                  {index === 0 ? "🐠" : index === 1 ? "🐋" : "📚"}
                </span> */}
              {/* </div>  */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs bg-cyan-100 text-cyan-800 px-2 py-1 rounded">
                    {noticia.categoria}
                  </span>
                  <span className="text-xs text-gray-500">{noticia.fecha}</span>
                </div>
                <h3 className="font-semibold text-ocean text-lg mb-3">
                  {noticia.titulo}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{noticia.resumen}</p>
                <button className="text-cyan-600 hover:text-cyan-700 font-medium text-sm">
                  Leer más →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
