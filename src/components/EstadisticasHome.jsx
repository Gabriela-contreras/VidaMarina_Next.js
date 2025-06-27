import React from "react";

const EstadisticasHome = ({number, text}) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group">
      <div className="text-3xl font-bold text-cyan-300 group-hover:scale-110 transition-transform duration-300">
        {number}
      </div>
      <div className="text-sm text-cyan-100 mt-1">{text}</div>
    </div>
  );
};

export default EstadisticasHome;
