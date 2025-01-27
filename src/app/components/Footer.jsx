import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white text-center">
      <div className="container p-12 flex items-center justify-center">
        <p className="text-slate-600">
          &copy; {new Date().getFullYear()} Anmol Singh. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
