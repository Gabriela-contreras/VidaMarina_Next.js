import React from "react";

const VisionSection = () => {
  return (
    <section className="py-20 bg-white mb-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-ocean mb-4" id="vision">Nuestra Visión</h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-ocean mb-6">
              Conservación Marina
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Nuestra fundación se dedica a la protección y conservación de los
              ecosistemas marinos, trabajando incansablemente para preservar la
              biodiversidad oceánica para las generaciones futuras.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Promovemos la investigación científica, la educación ambiental y
              el desarrollo sostenible de las comunidades costeras, creando un
              impacto positivo duradero en nuestros océanos.
            </p>
          </div>

          <div className="bg-ocean-light rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-ocean mb-6">
              Nuestros Valores
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">🌊</span>
                </div>
                <p className="text-gray-700">Respeto por la vida marina</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">🔬</span>
                </div>
                <p className="text-gray-700">
                  Investigación científica rigurosa
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">🤝</span>
                </div>
                <p className="text-gray-700">Colaboración comunitaria</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
