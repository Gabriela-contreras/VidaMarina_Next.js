export default function AutoridadesSection() {
  const autoridades = [
    {
      cargo: "Presidente",
      nombre: "Dr. Marina Océano",
      especialidad: "Biología Marina",
      inicial: "MO",
    },
    {
      cargo: "Vicepresidente",
      nombre: "Dra. Coral Arrecife",
      especialidad: "Oceanografía",
      inicial: "CA",
    },
    {
      cargo: "Secretario",
      nombre: "Lic. Delfín Azul",
      especialidad: "Conservación",
      inicial: "DA",
    },
    {
      cargo: "Tesorero",
      nombre: "Cont. Ballena Jorobada",
      especialidad: "Administración",
      inicial: "BJ",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 " id="autoridades">
      <div className="container mx-auto px-6 flex flex-row items-center justify-around">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-ocean mb-4" >Autoridades</h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg" >
            Equipo de trabajo: somos un grupo de personas apasionadas por la
            preservación y mejora de los ecosistemas marinos. Durante años,
            hemos dedicado nuestros esfuerzos a la investigación, educación y
            promoción de prácticas sostenibles para proteger la vida marina.
            Gracias a nuestras acciones constantes, hemos logrado involucrar a
            empresas y organizaciones reconocidas que comparten nuestra
            preocupación y compromiso con la conservación de los océanos. Por
            ello, hemos decidido dar el siguiente paso y crear esta fundación,
            con el propósito de canalizar nuestras iniciativas y trabajar de
            manera más estructurada para alcanzar nuestro objetivo de preservar
            y regenerar los ecosistemas marinos.
          </p>
        </div>

        <div className="flex flex-row flex-wrap justify-center gap-8">
          <img
            className="w-48 h-48 rounded-full mb-4"
            src="https://i.ytimg.com/vi/y-uzZIKh6Is/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDHrY5NIdoy7-zgey3j2HAucSyctg"
            alt="limpieza mundo marino"
          />

          <img
            className="w-48 h-48 rounded-full mb-4"
            src="https://mma.gob.cl/wp-content/uploads/2022/10/WhatsApp-Image-2022-09-29-at-4.30.50-PM.jpeg"
            alt="proteccion mundo marino"
          />
          <img
            className="w-48 h-48 rounded-full mb-4"
            src="https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2021/11/plastico-mar-2520385.jpg?tf=3840x"
            alt="sos"
          />
        </div>
      </div>
    </section>
  );
}
