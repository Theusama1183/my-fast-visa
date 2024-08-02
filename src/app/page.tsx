import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="md:h-screen hero-section py-10 md:py-24 flex flex-col justify-center md:px-0 px-4">
        <div className="container mx-auto">
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-6xl font-bold md:leading-tight">
              Adelantá el turno de tu visa a los proximos{" "}
              <span className="bg-primary px-3 py-1 text-white rounded-lg">
                10 DIAS!
              </span>
            </h1>
            <p className="text-lg mt-6">
              La Embajada de EE.UU. en Argentina recién está dando turnos para
              noviembre. ¿Para qué esperar? Con MyFastVisa, conseguís un turno
              para la próxima semana, online, rápido y garantizado. No pierdas
              tiempo, hacelo ya!
            </p>
            <div className="space px-5">
              <br />
            </div>
            <div className="md:hidden md:items-center">
              <Link
                href="/adelantá-ya"
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-black hover:text-white mt-5 "
              >
                Adelantá ya
              </Link>
            </div>
          </div>
        </div>
        <Image
          src={"/us-flag.png"}
          alt="flag"
          className="flag-img md:absolute"
          width={800}
          height={400}
        ></Image>
      </section>
      <section className="py-10 md:py-24 md:px-0 px-4 md:mt-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            <div className="card text-center">
              <Image
                src={"/Internet.png"}
                className="m-auto"
                alt={"logo"}
                width={100}
                height={100}
              ></Image>
              <h3 className="text-xl my-3 font-bold">100% Online</h3>
              <p className="texl-lg">Sin salir de tu casa</p>
            </div>
            <div className="card text-center">
              <Image
                src={"/card-payment.png"}
                className="m-auto"
                alt={"logo"}
                width={100}
                height={100}
              ></Image>
              <h3 className="text-xl my-3 font-bold">Pagás después</h3>
              <p className="texl-lg">Pagás una vez que adelantamos tu turno</p>
            </div>
            <div className="card text-center">
              <Image
                src={"/Guarantee.png"}
                className="m-auto"
                alt={"logo"}
                width={100}
                height={100}
              ></Image>
              <h3 className="text-xl my-3 font-bold">Garantizado</h3>
              <p className="texl-lg">Turno asegurado en 2-3 días</p>
            </div>
            <div className="card text-center">
              <Image
                src={"/person-calendar.png"}
                className="m-auto"
                alt={"logo"}
                width={100}
                height={100}
              ></Image>
              <h3 className="text-xl my-3 font-bold">
                +1200 Turnos Adelantados
              </h3>
              <p className="texl-lg">Ayudamos clientes como vos desde 2022</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 md:py-24 md:px-0 px-4 ">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center">Precios</h2>
          <div className="w-96 mx-auto mt-5 bg-primary py-10 px-5 rounded-xl relative pricing-plan">
            <h3 className="text-3xl font-bold text-center">
              Adelanto de turno
            </h3>
            <h1 className="text-6xl font-bold text-center mt-7">$115</h1>
            <ul className="mt-7 web-list">
              <li>Turno garantizado en los próximos 10 días</li>
              <li>Resolvemos en 2-3 días</li>
              <li>Pagás después</li>
              <li>100% Online</li>
            </ul>
            <div className="space py-8"></div>
            <Link
              href={"#"}
              className="mt-9 px-10 py-3 bg-primary text-white rounded-xl border hover:bg-black hover:text-white absolute -bottom-5 left-50% transform translate-x-1/2"
            >
              Adelantá ya
            </Link>
          </div>
        </div>
      </section>
      <section className="pt-10 md:pt-24 md:px-0 px-4 ">
        <h2 className="text-5xl font-bold text-center">¿Cómo es el trámite?</h2>
        <p className="text-2xl text-center">En 3 simples pasos:</p>
        <div className="bg-simples-pasos py-20 px-5 rounded-xl mt-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              <div className="card text-center border text-white rounded-xl p-5 relative z-0 ">
                <h3 className="text-2xl my-3 font-bold">
                  Nos contactás por <br /> WhatsApp
                </h3>
                <p className="texl-lg mt-10">
                  Necesitamos conocer tu urgencia y <br /> acceso a la cuenta
                  para adelantar el turno.
                </p>
                <div className="space py-5"></div>
                <div className="-mb-24 relative z-10 ">
                  <Image
                    src={"/1201.png"}
                    alt=""
                    width={150}
                    height={150}
                    className="m-auto"
                  ></Image>
                </div>
              </div>
              <div className="card text-center border text-white rounded-xl p-5 relative z-0 mt-20 md:mt-0">
                <h3 className="text-2xl my-3 font-bold">
                  Conseguimos el <br /> adelanto
                </h3>
                <p className="texl-lg mt-10">
                  Generalmente, en 2 a 3 días conseguimos un turno para el CAS y
                  la Embajada dentro de los próximos 10 días.
                </p>
                <div className="space py-5"></div>
                <div className="-mb-24 relative z-10 ">
                  <Image
                    src={"/1202.png"}
                    alt=""
                    width={150}
                    height={150}
                    className="m-auto"
                  ></Image>
                </div>
              </div>
              <div className="card text-center border text-white rounded-xl p-5 relative z-0 mt-20 md:mt-0">
                <h3 className="text-2xl my-3 font-bold">Pagás la tarifa</h3>
                <br />
                <p className="texl-lg mt-10">
                  Apelamos a la buena fe de nuestros clientes para que efectúen
                  el pago una vez obtenido el servicio.
                </p>
                <div className="space py-5"></div>
                <div className="-mb-24 relative z-10 ">
                  <Image
                    src={"/1203.png"}
                    alt=""
                    width={150}
                    height={150}
                    className="m-auto"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
          <div className="space py-5"></div>
        </div>
      </section>
      <section className="pt-10 md:pt-0 md:px-0 px-4 relative md:mt-24">
        <Image
          src={"/half-flag-left.png"}
          alt=""
          width={300}
          height={990}
          className="absolute top-0 left-0 hidden md:block"
        ></Image>
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center">
            Preguntas frecuentes
          </h2>
          <div className="space py-5"></div>
          <div className="border-t border-black px-3 py-5">
            <h3 className="text-2xl font-bold">
              ¿Puedo cambiar el turno si el que elijo no me sirve?
            </h3>
            <p className="text-2xl mt-3">
              Sí. Lo ideal es no cambiarlo ya que conseguir un turno nuevo puede
              ser complicado, pero si es necesario, podemos conseguirte otro en
              una fecha cercana que te convenga.
            </p>
          </div>
          <div className="border-t border-black px-3 py-5">
            <h3 className="text-2xl font-bold">¿Cuánto tarda?</h3>
            <p className="text-2xl mt-3">
              En 2 a 3 días aseguramos la mayoría de los turnos. Algunos casos
              muy exitosos fueron en 6 horas, y otros tardaron hasta 4 días,
              pero no más que eso.
            </p>
          </div>
          <div className="border-t border-black px-3 py-5">
            <h3 className="text-2xl font-bold">¿Es confiable?</h3>
            <p className="text-2xl mt-3">
              Sí. Adelantamos turnos desde 2022, y además tenés la certeza de
              que pagás solo después de recibir el servicio.
            </p>
          </div>
          <div className="border-t border-black px-3 py-5">
            <h3 className="text-2xl font-bold">¿Cómo puedo pagar?</h3>
            <p className="text-2xl mt-3">
              Aceptamos transferencias en USD o pesos (dólar blue, valor
              comprador según dolarhoy.com), depósitos, efectivo en La Plata o
              Palermo, PayPal y criptomonedas.
            </p>
          </div>
          <div className="border-t border-black px-3 py-5">
            <h3 className="text-2xl font-bold">¿Dónde están ubicados?</h3>
            <p className="text-2xl mt-3">
              Podés visitarnos en La Plata (casco urbano) o en Palermo con cita
              previa.
            </p>
          </div>
          <div className="border-t border-black px-3 py-5">
            <h3 className="text-2xl font-bold">¿Cómo los contacto?</h3>
            <p className="text-2xl mt-3">
              Podés escribirnos a nuestro WhatsApp +5492395400101 y te guiaremos
              en los próximos pasos.
            </p>
          </div>
          <div className="border-t border-black px-3 py-5">
            <h3 className="text-2xl font-bold">
              Aún no empecé mi proceso de visa, ¿podrían asesorarme?
            </h3>
            <p className="text-2xl mt-3">
              Sí. La asesoría y gestión para llenar los formularios ante el
              Consulado tiene un costo de 55 USD por persona.
            </p>
          </div>
          <div className="border-y  border-black px-3 py-5">
            <h3 className="text-2xl font-bold">¿Cómo obtengo un turno?</h3>
            <p className="text-2xl mt-3">
              Primero tenés que completar el formulario DS-160 online. Una vez
              que lo llenes, lo envíes al consulado y pagues la tarifa, ya podés
              elegir el turno.
            </p>
          </div>
        </div>
        <Image
          src={"/half-flag-right.png"}
          alt=""
          width={300}
          height={990}
          className="absolute bottom-0 right-0 hidden md:block"
        ></Image>
      </section>
      <section className="py-24 md:py-0 md:px-0 px-4 relative">
        <div className="container mx-auto">
          <Image
            src={"/154510324ds4f.png"}
            alt=""
            width={1138}
            height={930}
            className="positiond-img"
          ></Image>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 positiond-wrapper">
            <Image
              src={"/11381138dsdw.png"}
              alt=""
              width={849}
              height={235}
            ></Image>
            <p className="text-lg mt-5 mb-14">
              Hay gente que sacó su turno hace un año y recién está yendo al
              consulado hoy. ¿Por qué esperar tanto si podés adelantarlo por
              solo 115 USD? Si realmente valorás tu tiempo, este es un negoción.
            </p>
            <Link
              href="/adelantá-ya"
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-black hover:text-white"
            >
              Adelantá ya
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-sdsi343i32 py-24 md:px-0 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div className="card text-center bg-primary border text-white rounded-xl p-5 relative z-0 ">
              <div className="-mt-28 relative z-10 ">
                <Image
                  src={"/testi-1.png"}
                  alt=""
                  width={180}
                  height={180}
                  className="m-auto"
                ></Image>
              </div>
              <h3 className="text-base my-3 font-bold">Sofía R., Belgrano</h3>
              <Image
                src={"/stars.png"}
                alt=""
                width={180}
                height={30}
                className="m-auto mt-5"
              ></Image>
              <Image
                src={"/qoute.png"}
                alt=""
                width={50}
                height={30}
                className="m-auto mt-5"
              ></Image>
              <p className="text-sm mt-10">
                No puedo creer la velocidad. Real. Les escribí un jueves, y el
                lunes ya fui al CAS y al consulado. Caterina y Alejo son unos
                genios. Los recomiendo un millón de veces.
              </p>
              <div className="space py-5"></div>
            </div>
            <div className="card text-center bg-primary border text-white rounded-xl p-5 relative z-0 mt-10 md:mt-0">
              <div className="-mt-32 relative z-10 ">
                <Image
                  src={"/testi-2.png"}
                  alt=""
                  width={130}
                  height={130}
                  className="m-auto"
                ></Image>
              </div>
              <h3 className="text-base my-3 font-bold">
                Martín G., Santiago del Estero
              </h3>
              <Image
                src={"/stars.png"}
                alt=""
                width={180}
                height={30}
                className="m-auto mt-5"
              ></Image>
              <Image
                src={"/qoute.png"}
                alt=""
                width={50}
                height={30}
                className="m-auto mt-5"
              ></Image>
              <p className="text-sm mt-10">
                Un amigo en Miami me regaló unos tickets para ir a ver a la
                selección. Estaba desesperado porque mi turno era en agosto y
                los partidos eran en junio. Los vi en TikTok, les escribí
                enseguida, y por suerte me adelantaron el turno y llegué a hacer
                todo. Genios!
              </p>
              <div className="space py-5"></div>
            </div>
            <div className="card text-center bg-primary border text-white rounded-xl p-5 relative z-0 mt-10 md:mt-0">
              <div className="-mt-32 relative z-10 ">
                <Image
                  src={"/testi-3.png"}
                  alt=""
                  width={130}
                  height={130}
                  className="m-auto"
                ></Image>
              </div>
              <h3 className="text-base my-3 font-bold">
                Lucia M. y Alex P., La Plata
              </h3>
              <Image
                src={"/stars.png"}
                alt=""
                width={180}
                height={30}
                className="m-auto mt-5"
              ></Image>
              <Image
                src={"/qoute.png"}
                alt=""
                width={50}
                height={30}
                className="m-auto mt-5"
              ></Image>
              <p className="text-sm mt-10">
                Le habían adelantado a un conocido y les escribimos. Nos
                adelantaron el turno en 6 días y nos lo aprobaron. Les llevamos
                un vino de la emoción jajaja. Nos gustó mucho la opción de pagar
                después. Muchas gracias Ramiro y Alejo 👏👏
              </p>
              <div className="space py-5"></div>
            </div>
          </div>
          <h2 className="text-5xl font-bold text-center mt-10 text-white">
            +1200 turnos adelantados
          </h2>
        </div>
      </section>
      <section className="bg-sdsajdiu34829 md:py-24 py-10">
        <div className="container mx-auto md:px-0 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col justify-center items-start">
              <h2 className="text-5xl font-bold">
                Asegurá tu turno para la <br /> próxima semana
              </h2>
              <p className="text-lg mt-5">
                No esperes de más. Sacate un peso de{" "}
                <br className="md:block hidden" /> encima adelantando el turno
                ahora.
              </p>
              <Link
                href="/adelantá-ya"
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-black hover:text-white mt-6"
              >
                Adelantá ya
              </Link>
            </div>
            <Image
              src={"/Rectangle155.png"}
              alt=""
              width={519}
              height={519}
            ></Image>
          </div>
        </div>
      </section>
      <section className="bg-Group6498 py-24">
        <div className="container mx-auto px-4 md:px-0">
          <h2 className="text-4xl font-bold text-white">
            ¿Tenés dudas? Contactános
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-5 md:gap-20">
            <div className="flex flex-col justify-center items-start ">
              <div className="flex items-center py-5">
                <div className="ico">
                  <Image
                    src={"/Email.png"}
                    alt=""
                    width={100}
                    height={90}
                    className="w-10 md:w-24"
                  ></Image>
                </div>
                <div className="text-white ml-5 ">
                  <h4 className="text-2xl font-bold">Email</h4>
                  <p className="text-xl mt-2">contacto@myfastvisa.com</p>
                </div>
              </div>
              <div className="flex items-center py-5 border-y w-full">
                <div className="ico">
                  <Image
                    src={"/Call.png"}
                    alt=""
                    width={100}
                    height={90}
                    className="w-10 md:w-24"
                  ></Image>
                </div>
                <div className="text-white ml-5 ">
                  <h4 className="text-2xl font-bold">WhatsApp</h4>
                  <p className="text-xl mt-2">+54 2214477897</p>
                </div>
              </div>
              <div className="flex items-center py-5">
                <div className="ico">
                  <Image
                    src={"/Location.png"}
                    alt=""
                    width={100}
                    height={90}
                    className="w-10 md:w-24"
                  ></Image>
                </div>
                <div className="text-white ml-5 ">
                  <h4 className="text-2xl font-bold">Oficina</h4>
                  <p className="text-xl mt-2">
                    La Plata (oficina central) y Palermo.
                    <br />
                    La dirección se proporciona con cita previa.
                  </p>
                </div>
              </div>
            </div>
            <div className="map">
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
