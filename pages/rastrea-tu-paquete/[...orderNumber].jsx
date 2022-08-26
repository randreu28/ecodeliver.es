import WebHolder from "../../components/Webholder";
import SmNavbar from "../../components/SmNavbar";
import Button from "../../components/Button";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Tracking({ data, slug }) {
  if (data[0]) {
    return <WebHolder />;
  } else {
    return <NotFound slug={slug} />;
  }
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
            <Button
              className="w-full mt-2 !mx-0"
              text="Busca"
              event={() => {
                router.push(`/rastrea-tu-paquete/${search.current.value}`);
                search.current.value = "";
              }}
            />
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
