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
  },
};
