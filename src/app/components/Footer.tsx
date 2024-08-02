import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer pb-0 pt-5 md:py-5 border-t-2 border-black">
      <div className="md:px-14">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:flex items-center justify-between">
          <div className="logo">
            <Link href="/">
              <Image
                src={"/main-logo.png"}
                alt=""
                width={100}
                height={70}
                className="md:mx-none mx-auto"
              ></Image>
            </Link>
          </div>
          <div className="menus mt-4 md:mt-0">
            <ul className="text-center text-xl">
              <li>
                <Link href="/">Inicio</Link>
              </li>
              <li>
                <Link href="/about-us">Sobre Nosotros</Link>
              </li>
              <li>
                <Link href="/contact-us">Contacto</Link>
              </li>
            </ul>
          </div>
          <div className="copywrite mt-4 md:mt-0 bg-primary text-white py-2">
            <p className="text-center md:text-right mb-0 text-sm">
              © 2024 MyFastVisa. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
