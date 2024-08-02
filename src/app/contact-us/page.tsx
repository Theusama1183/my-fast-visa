import React from "react";
import Image from "next/image";
import Link from "next/link";
import EmailForm from "../components/EmailForm";

export default function ContactUs() {
  return (
    <>
      <section className="pt-10 md:pt-24 px-4 py-10 md:py-24 ">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center">
            Dejanos tu mensaje!
          </h2>
          <p className="text-2xl text-center mt-5">
            Podes rellenar el siguiente formulario o ver más formas de <br />{" "}
            contacto abajo. Te responderemos en 30 minutos.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-5 md:gap-20 mt-10">
            <div className="flex flex-col justify-center items-start">
              <div className="form w-full ">
                <EmailForm />
              </div>
            </div>
            <div className="map">
              <Image
                src={"/Rectangle154.png"}
                alt=""
                width={400}
                height={400}
                className="w-full"
              ></Image>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-Group6498 py-24 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white">
            ¿Tenés dudas? Contactános
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-5 md:gap-20">
            <div className="flex flex-col justify-center items-start ">
              <div className="flex items-center md:py-5 lg:py-10">
                <div className="ico w-1/12">
                  <Image
                    src={"/Email.png"}
                    alt=""
                    width={100}
                    height={90}
                  ></Image>
                </div>
                <div className="text-white  w-11/12">
                  <h4 className="text-2xl font-bold">Email</h4>
                  <p className="text-xl mt-2">contacto@myfastvisa.com</p>
                </div>
              </div>
              <div className="flex items-center md:py-5 lg:py-10 border-y w-full">
                <div className="ico w-1/12">
                  <Image
                    src={"/Call.png"}
                    alt=""
                    width={100}
                    height={90}
                  ></Image>
                </div>
                <div className="text-white  w-11/12">
                  <h4 className="text-2xl font-bold">WhatsApp</h4>
                  <Link
                    href={"https://wa.me/5492216832241?text=Hola!"}
                    className="text-xl mt-2"
                  >
                    +54 9 221 683-2241
                  </Link>
                </div>
              </div>
              <div className="flex items-center md:py-5 lg:py-10">
                <div className="ico w-1/12">
                  <Image
                    src={"/Location.png"}
                    alt=""
                    width={100}
                    height={90}
                  ></Image>
                </div>
                <div className="text-white w-11/12">
                  <h4 className="text-2xl font-bold">Oficina</h4>
                  <p className="text-xl lg:text-xl mt-2">
                    La Plata (oficina central) y Palermo.
                    <br />
                    La dirección se proporciona con cita previa.
                  </p>
                </div>
              </div>
            </div>
            <div className="map flex flex-col justify-center">
              <Image
                src={"/map-image.png"}
                alt=""
                width={723}
                height={604}
              ></Image>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
