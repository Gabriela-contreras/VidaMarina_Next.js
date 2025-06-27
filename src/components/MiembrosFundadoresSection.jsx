import React from "react";

export default function MiembrosFundadoresSection() {
  const miembros = [
    {
      nombre: "Dr. Josef Charlton",
      aporte: "Investigación en grandes pelágicos",
      años: "15 años de experiencia",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKqw-qO07fgvCgT47WZQX6kwjyE7lA2ujXwQeJzEBxLe7AxZ_8l5KxZqpq68-o6-B9lRQ&usqp=CAU",
    },
    {
      nombre: "Dra. Juana Arrascaeta",
      aporte: "Conservación de reptiles marinos",
      años: "12 años de experiencia",
      img: "https://media.istockphoto.com/id/1405689277/es/foto/positivo-serio-modelo-millennial-chica-hogar-mujer-cabeza-foto-retrato.jpg?s=612x612&w=0&k=20&c=ThkOjWhi4Py82-GVcGdlOKppxp_ALuzUYTpesJrV0lM=",
    },
    {
      nombre: "Lic. María Coral",
      aporte: "Ecosistemas de fondos marinos",
      años: "10 años de experiencia",
      img: "https://img.freepik.com/fotos-premium/sonriente-mujer-adulta-media_33839-650.jpg?w=360",
    },
    {
      nombre: "Ing. Carlos Martinez",
      aporte: "Tecnología de conservación",
      años: "8 años de experiencia",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTMsx-zLTT-Rrk0hWNZuOhKarjtkAgSKynycbJT5f6RHePyfKPgt_f2O_QiESgK73mJgA&usqp=CAU",
    },
  ];

  return (
    <section className="py-20 bg-white" id="nosotros">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-ocean mb-4">
            Miembros Fundadores
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg" >
            Los pioneros que iniciaron esta misión de protección marina
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {miembros.map((miembro, index) => (
            <div
              key={index}
              className="bg-ocean-light rounded-xl p-6 card-hover"
            >
              <div className="flex items-start space-x-4">
                <div >
                  <img
                    className="w-16 h-16  rounded-full flex items-center justify-center flex-shrink-0"
                    src={miembro.img}
                    alt=""
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-ocean text-lg mb-2">
                    {miembro.nombre}
                  </h3>
                  <p className="text-gray-700 mb-2">{miembro.aporte}</p>
                  <p className="text-cyan-600 text-sm font-medium">
                    {miembro.años}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
