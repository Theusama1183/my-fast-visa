import React from "react";
import Image from "next/image";

export default function Timeline() {
  return (
    <div className="timeline mt-10">
      <div className="timeline-wrapper left">
        <div className="content md:text-right">
          <h2 className="text-3xl md:text-4xl font-bold">
            Nace MyFastVisa (2022)
          </h2>
          <p className="mt-5 text-xl md:text-2xl">
            Conocimos el sistema de primera mano. A los cuatro nos tocó esperar
            entre 6 y 8 meses para un turno. Mientras charlábamos con la gente
            en la fila, nos dimos cuenta de que muy pocos habían logrado
            adelantar el turno. Ahí decidimos armar VisaFast para que nadie más
            tuviera que sufrir esas largas esperas.
          </p>
          <Image
            src={"/timtline-img-1.png"}
            alt=""
            width={540}
            height={433}
            className="mt-5"
          ></Image>
        </div>
      </div>
      <div className="timeline-wrapper right">
        <div className="content text-left">
          <h2 className="text-3xl md:text-4xl font-bold">
            Primeros 250 Turnos Adelantados (2023)
          </h2>
          <p className="mt-5 text-xl md:text-2xl">
            Fue un verdadero hito llegar a 250 clientes en nuestro primer año.
            Hoy ya somos un poco más de 1200. Nos llena de orgullo la confianza
            de cada uno de ustedes.
          </p>
          <Image
            src={"/timtline-img-2.png"}
            alt=""
            width={540}
            height={433}
            className="mt-5"
          ></Image>
        </div>
      </div>
      <div className="timeline-wrapper left">
        <div className="content md:text-right">
          <h2 className="text-3xl md:text-4xl font-bold">
            Reducción de Tiempos de Espera (2024)
          </h2>
          <p className="mt-5 text-xl md:text-2xl">
            Agilizamos nuestro sistema con ayuda de IA y logramos reducir el
            tiempo de espera de 25 días a solo 10. No vas a encontrar mejor
            oferta en ningún lado!
          </p>
          <Image
            src={"/timtline-img-3.png"}
            alt=""
            width={540}
            height={433}
            className="mt-5"
          ></Image>
        </div>
      </div>
    </div>
  );
}
