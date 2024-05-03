export default function ContactForm() {
  return (
    <section className="my-10">
      <div className="container px-6 py-12 mx-auto">
        <div className="lg:flex lg:items-center lg:-mx-6">
          <div className="lg:w-1/2 lg:mx-6">
            <h1 className="text-5xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl">
              ¡Contáctanos!
            </h1>

            <div className="mt-6 space-y-8 md:mt-8">
              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <span className="mx-2 truncate w-72">+34 666 666 666</span>
              </p>

              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <a
                  href="mailto:hola@ecodeliver.tech"
                  className="mx-2 truncate w-72"
                >
                  hola@ecodeliver.tech
                </a>
              </p>
            </div>
          </div>

          <div className="mt-8 lg:w-1/2 lg:mx-6 ">
            <div className="w-full px-8 py-10 mx-auto overflow-hidden rounded-lg shadow-2xl lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50 border-2 border-muted-foreground">
              <h1 className="text-lg font-medium">
                ¿En qué te podemos ayudar?
              </h1>

              <form className="mt-6">
                <div className="flex-1">
                  <label className="block mb-2 text-sm ">Nombre</label>
                  <input
                    type="text"
                    placeholder="Elon Musk"
                    className="block w-full px-5 py-3 mt-2 bg-background placeholder-gray-400 border border-muted-foreground rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="flex-1 mt-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="elon@tesla.com"
                    className="block w-full px-5 py-3 mt-2 bg-background placeholder-gray-400 border border-muted-foreground rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="w-full mt-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Mensaje
                  </label>
                  <textarea
                    className="block w-full px-5 py-3 mt-2 bg-background placeholder-gray-400 border border-muted-foreground rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40 h-32"
                    placeholder="Quiero regalaros unos teslas..."
                  />
                </div>

                <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide capitalize transition-colors duration-300 transform bg-primary rounded-md hover:bg-primary/90 focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50">
                  Contáctanos
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
