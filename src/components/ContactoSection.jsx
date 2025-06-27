import React from "react";

const ContactoSection = () => {
  return (
    <div className="flex flex-col w-[50%] mx-auto my-10 p-6 mb-10 ">
      <h2 className="text-4xl font-bold text-ocean mb-4" id="contacto">Contacto</h2>
      <form className="space-y-4 ">
        <input
          type="text"
          placeholder="Nombre"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
        />
        <textarea
          rows="4"
          placeholder="Mensaje"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg font-semibold transition-colors"
        >
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
};

export default ContactoSection;
