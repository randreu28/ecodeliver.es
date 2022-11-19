import {
  BadgeCheckIcon,
  FingerPrintIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserAddIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import Link from "next/link";

export const i18nNavBar = {
  es: {
    navData: [
      { name: "Inicio", href: "inicio" },
      { name: "Cómo funciona", href: "como-funciona" },
      { name: "Valores", href: "valores" },
      { name: "Noticias", href: "noticias" },
      { name: "FAQ", href: "faq" },
    ],
    individual: "Particular",
    business: "Empresa",
  },
  en: {
    navData: [
      { name: "Home", href: "home" },
      { name: "Our model", href: "our-model" },
      { name: "Values", href: "values" },
      { name: "News", href: "news" },
      { name: "FAQ", href: "faq" },
    ],
    individual: "Individuals",
    business: "Business",
  },
};

export const i18nParticular = {
  es: {
    /* MetaData */
    metaTitle: "ecoDeliver - El BlaBlaCar de la paquetería, sostenible",
    metaDescription:
      "Transporte de paquetería sostenible, mediante una entrega colaborativa que te permite cubrir los costes de tus viajes en coche por España",

    /* Header */
    heroSentence: "Viaja y únete a la comunidad de entrega de paquetería más",
    wooblyTexts: ["sostenible", "transparente", "diferente"],
    heroCtaDescription: "Haz el seguimiento de tu paquete:",
    heroCtaPlaceholder: "Número de seguimiento",
    heroCta: "Busca",
    heroCtaToast: "Servidores no disponibles. Porfavor inténtalo mas tarde",

    /* Logos */
    logosHeader: "Con el apoyo de...",

    /* HowItWorks */
    hiwSubtitle: "Nuestro modelo",
    hiwTitle: "¿Cómo funciona?",
    hiwDescription: (
      <>
        Cualquiera que vaya a viajar entre ciudades puede ser un{" "}
        <b>
          <span className="text-primary">eco</span>Driver
        </b>
        , aprovechando el espacio libre en el coche, transportando paquetes
        consigo y cubriendo los gastos del viaje!
      </>
    ),
    hiwSteps: [
      {
        title: "Publica tu viaje en la App",
        description: (
          <>
            Tienes planeado viajar en coche? Completa tu perfil e indícanos la
            información de tu viaje en la app de{" "}
            <b>
              <span className="text-primary">eco</span>Deliver
            </b>
            .
          </>
        ),
      },
      {
        title: "Recoge los paquetes en nuestro almacén",
        description:
          "Te estaremos esperando con bolsas de paquetes a la salida de la ciuidad.",
      },
      {
        title: "Deja los paquetes al llegar a tu destino",
        description:
          "Cuando llegues a tu destino, dejas las bolsas con paquetes en nuestro almacén a la entrada de la ciudad y listo! Son 5 minutos de desvío en cada ciudad.",
      },
      {
        title: "Recibe el pago y ¡listo!",
        description:
          "Cubriendo los costes del viaje y evitando que un camión tenga que hacer el transporte (ahorrando todas esas emisiones!).",
      },
    ],

    /* Numbers */
    numbers: [
      {
        title: (
          <>
            15.7 kgCO<sub>2</sub>
          </>
        ),
        description: (
          <>
            Ahorrados en un viaje
            <br /> Barcelona-Madrid*
          </>
        ),
      },
      {
        title: "~50€",
        description: (
          <>
            De remuneración en un viaje <br />
            Barcelona-Valencia
          </>
        ),
      },
      {
        title: "100%",
        description: "Sonrisas garantizadas",
      },
    ],
    numberDisclaimer:
      "*Datos de la guía de cálculo de emisiones de la Generalitat de Cataluña y la CNMC",

    /* CTA */
    ctaTitle: (
      <>
        List@ para convertirte en un{" "}
        <b>
          <span className="text-primary">eco</span>Driver
        </b>
        ?
      </>
    ),
    ctaDescription: "Te damos un toque cuando esté listo",

    /* Values */
    valuesTitle: "Valores de nuestro servicio",
    valuesSubtitle: (
      <>
        Porque el <b className="text-primary">por qué</b> importa
      </>
    ),
    values: [
      {
        title: (
          <>
            Somos{" "}
            <span className="text-primary font-semibold">eco-friendly</span>
          </>
        ),
        text: (
          <>
            Since being an{" "}
            <b>
              <span className="text-primary">eco</span>Driver
            </b>{" "}
            you were going to travel anyway, you save a truck from having to
            transport those packages.
          </>
        ),
        children: <FingerPrintIcon className="h-6 w-6" />,
      },
      {
        title: (
          <>
            Cuidamos de las{" "}
            <span className="text-primary font-semibold">personas</span>
          </>
        ),
        text: (
          <>
            Transportamos paquetes pero tratamos con personas. Por eso, te
            cuidamos tanto a ti como a nuestros repartidores.
          </>
        ),
        children: <UserGroupIcon className="h-6 w-6" />,
      },
      {
        title: (
          <>
            Creamos{" "}
            <span className="text-primary font-semibold">comunidad</span>
          </>
        ),
        text: (
          <>
            Al ofrecer un servicio en comunidad, compartimos recursos y salimos
            ganando todos!
          </>
        ),
        children: <UserAddIcon className="h-6 w-6" />,
      },
      {
        title: (
          <>
            Muy <span className="text-primary font-semibold">práctico</span>
          </>
        ),
        text: (
          <>
            Disrumpimos el mercado, pero sin disrumpir tu viaje! Nos centramos
            en que para ti todo vaya <i>sobre ruedas</i>.
          </>
        ),
        children: <SparklesIcon className="h-6 w-6" />,
      },
      {
        title: (
          <>
            <span className="text-primary font-semibold">Transparencia</span>{" "}
            ante todo
          </>
        ),
        text: (
          <>
            Al ofrecer un servicio en comunidad, compartimos recursos y salimos
            ganando todos!
          </>
        ),
        children: <BadgeCheckIcon className="w-6 h-6" />,
      },
      {
        title: (
          <>
            Cuidando de tu{" "}
            <span className="text-primary font-semibold">seguridad</span>
          </>
        ),
        text: (
          <>
            Cuidamos de los{" "}
            <b>
              <span className="text-primary">eco</span>Deliver
            </b>{" "}
            y de los paquetes, verificando que se cumplen nuestros protocolos de
            seguridad.
          </>
        ),
        children: <ShieldCheckIcon className="h-6 w-6" />,
      },
    ],

    /* News */
    newsTitle: "News",
    newsSubtitle: "Our mentionts",
    articles: [
      {
        source: "CaixaBank",
        className: "",
        title:
          "Imagin conecta a inversores con los emprendedores ganadores del ImaginPlanetChallenge",
        children: (
          <>
            Imagin, la plataforma de servicios digitales y estilo de vida
            impulsada por CaixaBank, ha organizado una sesión Demo Day en la que
            los emprendedores ganadores de la primera edición del imaginPlanet
            Challenge han tenido la oportunidad de presentar sus iniciativas
            ante inversores, business angels, plataformas aceleradoras y
            organizaciones de referencia del ecosistema emprendedor.
          </>
        ),
        extLink:
          "https://www.caixabank.com/comunicacion/noticia/imagin-conecta-a-inversores-con-los-emprendedores-ganadores-del-imaginplanet-challenge_es.html?id=43056#",
        imgLink: "/media/articles/caixaBankArticle.jpg",
      },
      {
        source: "Diari Ara",
        className: "",
        title:
          "Imagin premia a un 'Blablacar' de paquetería y una plataforma de juguetes compartidos",
        children: (
          <>
            La primera competición de emprendimiento medioambiental de Imagin,
            la plataforma para jóvenes de CaixaBank, ya tiene ganadores. Se
            trata de una solución que pretende utilizar vehículos privados para
            transportar paquetes y de un proyecto que plantea alquilar juguetes
            en lugar de comprarlas. Los jóvenes detrás de eCodeliver y Kidalos,
            como se llaman estas dos ideas de empresa, han marchado a un
            laboratorio en Lanzarote donde expertos de la misma Imagin y un
            equipo de profesionales dedicados al emprendimiento, la
            sostenibilidad y la innovación les ayudarán a desarrollar una
            primera versión del producto que intentan construir.
          </>
        ),
        extLink:
          "https://www.ara.cat/economia/imagin-premia-blablacar-paqueteria-plataforma-joguines-compartides_1_4052007.html",
        imgLink: "/media/articles/araArticle.webp",
      },
      {
        source: "LaVanguardia",
        className: "md:col-span-2 lg:col-span-1",
        title:
          "ecoDeliver y Kidalos ganan la primera edición del imaginPlanet Challenge",
        children: (
          <>
            ecoDeliver y Kidalos han sido elegidos entre los 230 equipos
            participantes, formados por más de 700 jóvenes de 16 universidades
            españolas que, de la mano de imagin, han dado forma a sus ideas
            durante los tres últimos meses.
          </>
        ),
        extLink:
          "https://www.lavanguardia.com/vida/20210713/7597222/ecodeliver-kidalos-ganan-primera-edicion-imaginplanet-challenge.html",
        imgLink: "/media/articles/lavanguardiaArticle.webp",
      },
    ],

    /* FAQ */
    faqTitle: "Preguntas frequentes",
    faqSubtitle: "FAQ",
    disclousures: [
      {
        title: "¿Cuándo podré participar como ecoDriver?",
        isOpen: true,
        children: (
          <>
            Actualmente estamos en las etapas finales de desarrollo y nuestra
            aplicación estará disponible muy pronto! Además estamos realizando
            pruebas piloto para las que tu colaboración será muy bienvenida.
            Déjanos tu correo electrónico para que te avisemos del launch ;)
          </>
        ),
      },
      {
        title: "¿El contenido de los paquetes es seguro?",
        isOpen: false,
        children: (
          <>
            Si. Sólo transportamos paquetes de ecommerce (tiendas online) y el
            contenido es conocido y declarado para cada paquete. El contenido
            son artículos de cosmética, calzado, ropa y no se transportan
            paquetes con contenido peligroso.
          </>
        ),
      },
      {
        title:
          " ¿Cómo se garantiza la seguridad tanto del ecoDriver como de los paquetes?",
        isOpen: false,
        children: (
          <>
            Como ecoDriver, eres un miembro verificado de nuestra comunidad con
            tu identificación. Además, los paquetes se transportarán en bolsas
            selladas hechas a medida, lo que garantiza que nadie más que el
            remitente y el receptor puedan acceder a su interior a menos que la
            bolsa se rompa. De esta forma, podemos garantizar la seguridad del
            ecoDriver y del paquete gracias a nuestro seguimiento constante de
            todo el proceso.
          </>
        ),
      },
      {
        title: "¿Realizar un transporte es legal?",
        isOpen: false,
        children: (
          <>
            Si. De la misma manera en que funcionan otros servicios parecidos
            como BlaBlaCar, al tratarse de un transporte no profesional (donde
            no se genera un beneficio neto) no es necesario contar con un título
            de transporte y se considera un transporte particular, de toda la
            vida.
          </>
        ),
      },
      {
        title: "¿Cuánto dinero se paga por hacer un viaje como ecoDriver?",
        isOpen: false,
        children: (
          <>
            La remuneración se calcula teniendo en cuenta diferentes parámetros,
            como el número de paquetes, la distancia recorrida, el tipo de
            transporte… No obstante, en ningún caso se tendrá una remuneración
            que sobrepase el coste del viaje.
          </>
        ),
      },
    ],
  },

  en: {
    /* MetaData */
    metaTitle: "ecoDeliver - The sustainable BlaBlacar of deliveries",
    metaDescription:
      "Sustainable parcel delivery transportation, through a collaborative delivery that allows you to cover the costs of your car trips in Spain",

    /* Header */
    heroSentence:
      "Travel, join our parcel delivery community and become the most",
    wooblyTexts: ["sustainable", "collaborative", "transparent"],
    heroCtaDescription: "Track your package:",
    heroCtaPlaceholder: "Tracking number",
    heroCta: "Search",
    heroCtaToast: "Our servers are not available. Please try again later",

    /* Logos */
    logosHeader: "With the support of...",

    /* HowItWorks */
    hiwSubtitle: "Our model",
    hiwTitle: "How does it work?",
    hiwDescription: (
      <>
        Anyone who travels between cities can be an{" "}
        <b>
          <span className="text-primary">eco</span>Driver
        </b>
        , taking advantage of the free space in the car, transporting packages
        with them and covering the expenses of the trip!
      </>
    ),
    hiwSteps: [
      {
        title: "Publish your trip in the App",
        description: (
          <>
            Do you plan to travel by car? Complete your profile and reserve your
            packages through the{" "}
            <b>
              <span className="text-primary">eco</span>Deliver
            </b>{" "}
            App.
          </>
        ),
      },
      {
        title: "Pick up the packages at our warehouse",
        description:
          "We will be waiting for you with a few bags of packages right outside the city",
      },
      {
        title: "Leave the packages when you arrive at your destination",
        description:
          "When you arrive at your destination, leave the bags with packages at our warehouse at the entrance to the city and that's it! Only 5 minutes of detour in each city.",
      },
      {
        title: "Get paid and that's it!",
        description:
          "Covering the costs of the trip and saving a truck from having to do that transportation (saving all those emissions!)",
      },
    ],

    /* Numbers */
    numbers: [
      {
        title: (
          <>
            15.7 kgCO<sub>2</sub>
          </>
        ),
        description: (
          <>
            Saved on a
            <br /> Barcelona-Madrid trip*
          </>
        ),
      },
      {
        title: "~50€",
        description: (
          <>
            Remuneration on a
            <br />
            Barcelona-Valencia trip
          </>
        ),
      },
      {
        title: "100%",
        description: (
          <>
            Guaranteed <br /> smiles
          </>
        ),
      },
    ],
    numberDisclaimer:
      "*Data from the emission calculation guide of the Generalitat of Catalonia and the CNMC",

    /* CTA */
    ctaTitle: (
      <>
        Ready to become an{" "}
        <b>
          <span className="text-primary">eco</span>Driver
        </b>
        ?
      </>
    ),
    ctaDescription: "We'll let you know when it's ready",

    /* Values */
    valuesTitle: "Values of our service",
    valuesSubtitle: (
      <>
        Because the <b className="text-primary">why</b> matters
      </>
    ),
    values: [
      {
        title: (
          <>
            We are{" "}
            <span className="text-primary font-semibold">eco-friendly</span>
          </>
        ),
        text: (
          <>
            Since being an{" "}
            <b>
              <span className="text-primary">eco</span>Driver
            </b>{" "}
            you were going to travel anyway, you save a truck from having to
            transport those packages.
          </>
        ),
        children: <FingerPrintIcon className="h-6 w-6" />,
      },
      {
        title: (
          <>
            We take care of{" "}
            <span className="text-primary font-semibold">people</span>
          </>
        ),
        text: (
          <>
            We transport packages but we deal with people. For this reason, we
            take care of both you and our Last-Mile delivery Drivers.
          </>
        ),
        children: <UserGroupIcon className="h-6 w-6" />,
      },
      {
        title: (
          <>
            We create{" "}
            <span className="text-primary font-semibold">community</span>
          </>
        ),
        text: (
          <>
            By offering a service in community, we share resources. It&apos;s a
            win win!
          </>
        ),
        children: <UserAddIcon className="h-6 w-6" />,
      },
      {
        title: (
          <>
            Very <span className="text-primary font-semibold">practical</span>
          </>
        ),
        text: (
          <>
            We disrupt the market, but without disrupting your journey! We
            strive for your trip to run <i>on wheels</i>.
          </>
        ),
        children: <SparklesIcon className="h-6 w-6" />,
      },
      {
        title: (
          <>
            <span className="text-primary font-semibold">Transparency</span>{" "}
            above everything
          </>
        ),
        text: (
          <>
            We work hard to have a service and a community based on trust and
            things well done.
          </>
        ),
        children: <BadgeCheckIcon className="w-6 h-6" />,
      },
      {
        title: (
          <>
            Taking care of your{" "}
            <span className="text-primary font-semibold">safety</span>
          </>
        ),
        text: (
          <>
            We take care of both{" "}
            <b>
              <span className="text-primary">eco</span>Drivers
            </b>{" "}
            and packages, verifying that our security protocols are followed.
          </>
        ),
        children: <ShieldCheckIcon className="h-6 w-6" />,
      },
    ],

    /* News */
    newsTitle: "News",
    newsSubtitle: "Our mentionts",
    articles: [
      {
        source: "CaixaBank",
        className: "",
        title:
          "Imagin connects investors with the winner entrepeneurs of ImaginPlanetChallenge",
        children: (
          <>
            Imagin rewards a parcel &apos;Blablacar&apos; and a shared toy
            platform The first environmental entrepreneurship competition for
            Imagin, CaixaBank&apos;s platform for young people, already has
            winners. It is a solution that intends to use private vehicles to
            transport packages and a project that proposes renting toys instead
            of buying them. The young people behind eCodeliver and Kidalos, as
            these two business ideas are called, have participated in a program
            in Lanzarote where experts from Imagin itself and a team of
            professionals dedicated to entrepreneurship, sustainability and
            innovation will help them develop a first version of the product
            they are striving to build.
          </>
        ),
        extLink:
          "https://www.caixabank.com/comunicacion/noticia/imagin-conecta-a-inversores-con-los-emprendedores-ganadores-del-imaginplanet-challenge_es.html?id=43056#",
        imgLink: "/media/articles/caixaBankArticle.jpg",
      },
      {
        source: "Diari Ara",
        className: "",
        title:
          "Imagin rewards the 'Blablacar' of deliveries and a shared toy platform",
        children: (
          <>
            Imagin&apos;s first environmental entrepreneurship competition, the
            CaixaBank&apos;s platform for young people already has winners. It
            is about of a solution that intends to use private vehicles to
            transport packages and a project that proposes renting toys instead
            of buying them. The young people behind eCodeliver and Kidalos, as
            these two business ideas are called, have gone to a laboratory in
            Lanzarote where experts from the same Imagin and a team of
            professionals dedicated to entrepreneurship, sustainability and
            innovation will help them develop a first version of the product
            they are trying to build.
          </>
        ),
        extLink:
          "https://www.ara.cat/economia/imagin-premia-blablacar-paqueteria-plataforma-joguines-compartides_1_4052007.html",
        imgLink: "/media/articles/araArticle.webp",
      },
      {
        source: "LaVanguardia",
        className: "md:col-span-2 lg:col-span-1",
        title:
          "ecoDeliver and Kidalos win the first edition of the ImaginPlanetChallenge.",
        children: (
          <>
            ecoDeliver and Kidalos win the first edition of the imaginPlanet
            Challenge. ecoDeliver and Kidalos have been chosen among the 230
            participating teams, made up of more than 700 young people from 16
            Spanish universities who, hand in hand with imagin, have shaped
            their ideas during the last three months.
          </>
        ),
        extLink:
          "https://www.lavanguardia.com/vida/20210713/7597222/ecodeliver-kidalos-ganan-primera-edicion-imaginplanet-challenge.html",
        imgLink: "/media/articles/lavanguardiaArticle.webp",
      },
    ],

    /* FAQ */
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "FAQ",
    disclousures: [
      {
        title: "When can I participate as an ecoDriver?",
        isOpen: true,
        children: (
          <>
            We are currently in the final stages of development and our app will
            be available very soon! We are also carrying out pilot tests for
            which your collaboration will be very welcome. Leave us your email
            so we can notify you of the launch ;)
          </>
        ),
      },
      {
        title: "Is the content of the packages safe?",
        isOpen: false,
        children: (
          <>
            Yes. We only transport E-commerce packages (online stores) and the
            content is known and declared for each package. The contents are
            cosmetic items, footwear, clothing and packages with dangerous
            content are not transported.
          </>
        ),
      },
      {
        title:
          "How is the security of both the ecoDriver and the packages ensured?",
        isOpen: false,
        children: (
          <>
            As an ecoDriver, you are a verified member of our community with
            your ID. Additionally, packages will be transported in custom-made
            sealed bags, ensuring that no one other than the sender and receiver
            can access the interior unless the bag ruptures. In this way, we can
            guarantee the safety of the ecoDriver and the package thanks to our
            constant monitoring of the entire process.
          </>
        ),
      },
      {
        title: "Is transporting with ecoDeliver legal?",
        isOpen: false,
        children: (
          <>
            Yes. In the same way that other similar services work, such as
            BlaBlaCar, the service is a non-professional transportation (where
            no net profit is generated) it is not necessary to have any special
            title. It is considered as a private transportation, just another
            every-day commute.
          </>
        ),
      },
      {
        title: "How much money do you pay to take a trip as an ecoDriver?",
        isOpen: false,
        children: (
          <>
            The remuneration is calculated taking into account different
            parameters, such as the number of packages, the distance traveled,
            the type of transport... However, in no case will there be
            remuneration that exceeds the cost of the trip.
          </>
        ),
      },
    ],
  },
};

export const i18nEmpresa = {
  es: {
    /* MetaData */
    metaTitle: "ecoDeliver - El BlaBlaCar de la paquetería, sostenible",
    metaDescription:
      "Transporte de paquetería sostenible, mediante una entrega colaborativa que te permite cubrir los costes de tus viajes en coche por España",

    /* Header */
    heroSentence: (
      <>
        La entrega de paquetería más sostenible va{" "}
        <span className="text-primary">más allá</span> de la movilidad eléctrica{" "}
      </>
    ),
    heroCtaDescription:
      "Tienes una cuenta? Accede a la información de tus envíos aquí:",
    heroCta: "Inicia sesión",
    heroCta2: "Regístrate",
    heroCtaToast: "Servidores no disponibles. Porfavor inténtalo mas tarde",

    /* Logos */
    logosHeader: "Con el apoyo de...",
  },
  en: {
    /* MetaData */
    metaTitle: "ecoDeliver - The sustainable BlaBlacar of deliveries",
    metaDescription:
      "Sustainable parcel delivery transportation, through a collaborative delivery that allows you to cover the costs of your car trips in Spain",

    /* Header */
    heroSentence: (
      <>
        The most sustainable parcel delivery goes{" "}
        <span className="text-primary">beyond</span> electric mobility
      </>
    ),
    heroCtaDescription:
      "Do you have an account? Access your shipments' information here:",
    heroCta: "Log in",
    heroCta2: "Register",
    heroCtaToast: "Servidores not available. Please try again later",

    /* Logos */
    logosHeader: "With the trust of...",
  },
};

export const i18nCTA = {
  es: {
    call: "Notifícame",
    placeholder: "Correo electrónico",
    disclaimer: (
      <>
        Tranquilo, no enviamos spam. Nunca. ¡Sólo actualizaciones <br />{" "}
        importantes! Revisa nuestra{" "}
        <Link
          href="/privacidad"
          target="_blank"
          className="text-primary underline hover:opacity-75 duration-200"
        >
          politica de privacidad.
        </Link>
      </>
    ),
    onLoad: "Enviando...",
    onSuccess: "Tu correo ha sido enviado exitosamente",
    onError: "Ha ocurrido un error, porfavor inténtalo de nuevo más tarde",
  },
  en: {
    call: "Notify me",
    placeholder: "Your email",
    disclaimer: (
      <>
        Don&apos;t worry, we don&apos;t send spam. Ever.
        <br /> Only important updates! Review our{" "}
        <Link
          href="/privacidad"
          target="_blank"
          className="text-primary underline hover:opacity-75 duration-200"
        >
          privacy policy.
        </Link>
      </>
    ),
    onLoad: "Sending...",
    onSuccess: "Your email was sent succesfully!",
    onError: "An error occured, please try again later",
  },
};

export const i18nArticles = {
  es: "Ver más",
  en: "See more",
};

export const i18nFooter = {
  es: {
    aboutUs: "Sobre nosotros",
    workWithUS: "Trabaja con nosotros",
    privPolicy: "Política de privacidad",
    brandIdentity: "Identidad corporativa",

    contactUs: "Contáctanos",
  },
  en: {
    aboutUs: "About us",
    workWithUS: "Work with us",
    privPolicy: "Privacy policy",
    brandIdentity: "Brand identity",

    contactUs: "Contact us",
  },
};
