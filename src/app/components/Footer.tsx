import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer py-5 border-t-2 border-black">
      <div className="container mx-auto px-4 md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:flex items-center justify-between">
          <div className="logo">
            <Image
              src={"/main-logo.png"}
              alt=""
              width={200}
              height={70}
            ></Image>
          </div>
          <div className="menus">
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
          <div className="copywrite">
            <p className="text-right mb-0 text-sm">
              © 2024 MyFastVisa. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
