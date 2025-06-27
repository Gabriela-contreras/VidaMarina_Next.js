import React from "react";

const TitlePage = ({ title }) => {
  return (
    <div className="w-[40%] text-center font-light text-white mt-10 text-xl items-center justify-center flex flex-wrap">
      {title}
    </div>
  );
};

export default TitlePage;
