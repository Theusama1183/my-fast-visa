import React from "react";
import Image from "next/image";
import Link from "next/link";
import Timeline from "../components/Timeline";

export default function AboutUs() {
  return (
    <>
      {" "}
      <section className="pt-10 md:pt-24 ">
        <div className="px-4">
          <h2 className="text-5xl font-bold text-center">
            Conocé nuestro equipo
          </h2>
          <p className="text-2xl text-center mt-5">
            Somos 4 personas dedicadas 100% a MyFastVisa, cada una con un rol
            distinto.
          </p>
        </div>

        <div className="bg-Grou454f99 py-10 md:py-24 mt-10 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
              <div className="flex flex-col xl:justify-center items-start">
                <div className="lg:flex">
                  <div className="text-block text-center lg:w-2/4 px-12 flex flex-col justify-center text-white">
                    <h4 className="md:text-2xl lg:text-4xl font-bold">Alejo</h4>
                    <h5 className="md:text-2xl xl:text-4xl font-extralight mt-5">
                      Fundador 🏢
                    </h5>
                    <p className="text-sm mt-5">
                      Encargado de la estrategia y la gestión general. Lo vas a
                      encontrar siempre con un mate en la mano analizando los
                      números del negocio.
                    </p>
                  </div>
                  <div className="image-block lg:w-2/4 mt-4 md:mt-0">
                    <Image
                      src={"/alejo.png"}
                      alt=""
                      width={340}
                      height={442}
                      className=" w-full md:mt-3 lg:mt-0"
                    ></Image>
                  </div>
                </div>
              </div>
              <div className="flex flex-col xl:justify-center items-start">
                <div className="flex flex-col-reverse lg:flex-row">
                  <div className="image-block lg:w-2/4 mt-4 md:mt-0">
                    <Image
                      src={"/Caterina.png"}
                      alt=""
                      width={340}
                      height={442}
                      className=" w-full md:mt-3 lg:mt-0"
                    ></Image>
                  </div>
                  <div className="text-block text-center lg:w-2/4 px-12 flex flex-col justify-center text-white">
                    <h4 className="md:text-2xl lg:text-4xl font-bold">
                      Caterina
                    </h4>
                    <h5 className="md:text-2xl xl:text-4xl font-extralight mt-5">
                      Fundador 🏢
                    </h5>
                    <p className="text-sm mt-5">
                      Encargado de la estrategia y la gestión general. Lo vas a
                      encontrar siempre con un mate en la mano analizando los
                      números del negocio.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col xl:justify-center items-start">
                <div className="lg:flex">
                  <div className="text-block text-center lg:w-2/4 px-12 flex flex-col justify-center text-white">
                    <h4 className="md:text-2xl lg:text-4xl font-bold">
                      Delfina
                    </h4>
                    <h5 className="md:text-2xl xl:text-4xl font-extralight mt-5">
                      Asistente <br /> Administrativa 📝
                    </h5>
                    <p className="text-sm mt-5">
                      Se encarga de gestionar los pagos. Nunca la vas a
                      encontrar de malhumor, y ceba los mates más lavados que
                      hayas visto jamás.
                    </p>
                  </div>
                  <div className="image-block lg:w-2/4 mt-4 md:mt-0">
                    <Image
                      src={"/Delfina.png"}
                      alt=""
                      width={340}
                      height={442}
                      className=" w-full md:mt-3 lg:mt-0"
                    ></Image>
                  </div>
                </div>
              </div>
              <div className="flex flex-col xl:justify-center items-start">
                <div className="flex flex-col-reverse lg:flex-row">
                  <div className="image-block lg:w-2/4 mt-4 md:mt-0">
                    <Image
                      src={"/Ramiro.png"}
                      alt=""
                      width={340}
                      height={442}
                      className=" w-full md:mt-3 lg:mt-0"
                    ></Image>
                  </div>
                  <div className="text-block text-center lg:w-2/4 px-12 flex flex-col justify-center text-white">
                    <h4 className="md:text-2xl lg:text-4xl font-bold">
                      Ramiro
                    </h4>
                    <h5 className="md:text-2xl xl:text-4xl font-extralight mt-5">
                      Especialista en Trámites Consulares 📅
                    </h5>
                    <p className="text-sm mt-5">
                      Se encarga de gestionar y asegurar los turnos en el
                      consulado. Fanático de los Escape Rooms y viajar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-0">
          <h2 className="text-5xl font-bold text-center">Nuestra Historia</h2>

          <Timeline />
        </div>
      </section>
      <section className="bg-sdsi343i32 py-10  px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center text-white">
            Testimonios
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-10 mt-24 py-20">
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
            <div className="card text-center bg-primary border text-white rounded-xl p-5 relative z-0 mt-16 md:mt-0">
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
            <div className="card text-center bg-primary border text-white rounded-xl p-5 relative z-0 mt-16 md:mt-0">
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
      <section className="md:py-60 py-10">
        <Image
          src={"/sdsajdiu34829.png"}
          width={1000}
          height={600}
          alt=""
          className="absolute-img"
        ></Image>
        <div className="container mx-auto px-4">
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
                href="https://wa.me/5492216832241?text=Hola!"
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
              className="w-full"
            ></Image>
          </div>
        </div>
      </section>
    </>
  );
}
