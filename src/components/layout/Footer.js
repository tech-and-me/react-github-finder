import React from "react";

const Footer = () => {
  const footerYear = new Date().getFullYear();
  return (
    <footer className="footer p-5 bg-gray-700 footer-center">
      <div>
        <img
          src="https://img.icons8.com/nolan/2x/iron-man.png"
          width="40"
          height="40"
        />
        <p className="text-neutral-content">
          Copyright &copy; {footerYear} All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
