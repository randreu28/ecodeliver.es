import SmNavbar from "../../components/SmNavbar";
import Step from "../../components/Step";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Tracking({ data, slug }) {
  if (data[0]) {
    return <TrackYourParcel slug={slug} data={data} />;
  } else {
    return <NotFound slug={slug} />;
  }
}

function TrackYourParcel({ slug, data }) {
  return (
    <>
      <SmNavbar className="sticky" />
      <h1 className="text-center font-bold text-4xl">Rastrea tu paquete</h1>
      <div className="m-5 p-5 sm:m-10 sm:p-10 shadow-lg rounded-xl border border-gray-200">
        <div className="flex flex-col sm:flex-row gap-4 justify-between text-md">
          <b className="my-auto text-2xl text-center sm:text-left">
            {slug} - En reparto
          </b>
          <button className="px-4 py-2 hover:cursor-not-allowed font-semibold text-white capitalize transition-colors duration-200 transform bg-primary rounded-md focus:ring focus:ring-green-300 focus:ring-opacity-80 hover:bg-green-500 focus:outline-none focus:bg-green-600">
            Modificar Entrega
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 pt-10 gap-5">
          <div>
            <h3 className="font-bold text-lg">Ciudad de destino: </h3>
            <p>{data[0].CityName}</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Estado: </h3>
            <p>
              {data[0].DeliveryStatus ? data[0].DeliveryStatus : "En reparto"}
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Fecha estimada de entrega: </h3>
            <p>{data[0].EstimatedDeliveryDate}</p>
          </div>

          <div>
            <h3 className="font-bold text-lg">Dirección de entrega: </h3>
            <p>{data[0].ReceiverAddress1}</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Número de teléfono asociado: </h3>
            <p>{data[0].ReceiverContactNo}</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Correo electrónico asociado: </h3>
            <p>{data[0].ReceiverEmailAddress}</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Código postal: </h3>
            <p>{data[0].ReceiverPostalCode}</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Nombre asociado: </h3>
            <p>{data[0].ReceiverName}</p>
          </div>
        </div>
        <hr className="my-10" />
        <ol className="flex flex-col space-y-10">
          <Step
            state="done"
            title="1. Preadmitido"
            date="2 de Agosto, 2022 · 9:16"
          >
            <h1>The description goes here</h1>
            <p>Lorem ipsum siamet dolorum ipsamet retorum licatrosu</p>
          </Step>
          <Step
            state="done"
            title="2. En reparto"
            date="3 de Agosto, 2022 · 12:22"
          >
            <h1>The description goes here</h1>
            <p>Lorem ipsum siamet dolorum ipsamet retorum licatrosu</p>
          </Step>
          <Step
            state="warning"
            title="3. Entregado"
            date="3 de Agosto, 2022 · 16:41"
            active
          >
            <h1>The description goes here</h1>
            <p>Lorem ipsum siamet dolorum ipsamet retorum licatrosu</p>
          </Step>
          <Step
            state="idle"
            title="4. En espera"
            date="3 de Agosto, 2022 · 15:48"
            last
          >
            <h1>The description goes here</h1>
            <p>Lorem ipsum siamet dolorum ipsamet retorum licatrosu</p>
          </Step>
        </ol>
      </div>
    </>
  );
}

function NotFound({ slug }) {
  const search = useRef();
  const router = useRouter();
  return (
    <>
      <SmNavbar />
      <div className="h-screen flex flex-col lg:flex-row p-10 md:p-20 gap-10 md:gap-20">
        <div className="m-auto text-gray-700 text-center">
          <span className="inline-block p-3 text-green-500 bg-green-100 rounded-full mb-5">
            <EmojiHappyIcon className="w-20 h-20 rotate-180 text-primary mx-auto" />
          </span>
          <b className="text-2xl">
            <h1 className="text-4xl">Sad story...</h1>
            <p className="pt-5">
              <span className="text-primary overflow-hidden max-w-xs">
                {slug}
              </span>{" "}
              no es un número de seguimiento válido
            </p>
          </b>

          <p className="text-lg pt-3">
            Verfica que el número de seguimiento es el correcto y vuelve a
            intentarlo!
          </p>
          <div className="flex flex-row flex-wrap justify-center pt-10 max-w-sm mx-auto">
            <input
              type="text"
              className="px-4 py-2 text-center w-full text-lg text-secondary bg-white border border-gray-300 rounded-md focus:border-primary-40 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Número de seguimiento"
              ref={search}
            />
            <button
              onClick={() => {
                router.push(`/rastrea-tu-paquete/${search.current.value}`);
                search.current.value = "";
              }}
              className="px-4 py-2 w-full mt-2 font-semibold tracking-wide text-lg text-white capitalize transition-colors duration-200 transform bg-primary rounded-md focus:ring focus:ring-green-300 focus:ring-opacity-80 hover:bg-green-500 focus:outline-none focus:bg-green-600"
            >
              Busca
            </button>
          </div>
        </div>
        <div className="m-auto">
          <Image
            alt=""
            className="object-contain pb-10 lg:pb-0 w-[500px] xl:w-[600px] mx-auto"
            src="/media/sadBird.gif"
            width={500}
            height={500}
          />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  //Testing order number --> EFB4A17760
  const slug = context?.params?.orderNumber[0] || "";
  const res = await fetch(
    `https://codelivery.elinktechnologies.net/api/Parcelhead/GetPakageTracking?OrderNumber=${slug}&securitykey=${process.env.API_TOKEN}`
  );
  const data = await res.json();
  return { props: { data, slug } };
}
