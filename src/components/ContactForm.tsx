import { useForm } from "@formcarry/react";
import { useRef } from "react";
import { cn } from "../utils/utils";
import type { getI18N } from "@/i18n";

type Props = {
  i18n: ReturnType<typeof getI18N>["contactForm"];
};

export default function ContactForm({ i18n }: Props) {
  const formRef = useRef<HTMLFormElement>(null!);
  const { state, submit } = useForm({
    id: "GPN_9w1_XvW",
  });

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    submit(e);
    formRef.current.reset();
  }

  let buttonText = i18n.submit;

  if (state.submitting) {
    buttonText = i18n.submitting;
  }

  if (state.submitted) {
    buttonText = i18n.submitted;
  }

  if (state.error) {
    buttonText = i18n.error;
  }

  return (
    <section className="my-10" id="contact-us">
      <div className="container px-6 py-12 mx-auto">
        <div className="lg:flex lg:items-center lg:-mx-6">
          <div className="lg:w-1/2 lg:mx-6">
            <h1 className="text-4xl font-semibold capitalize lg:text-6xl">
              {i18n.title}
            </h1>

            <div className="mt-6 space-y-8 md:mt-8">
              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
            <div className="w-full px-8 py-10 mx-auto overflow-hidden rounded-lg">
              <h1 className="text-lg font-medium">{i18n.title}</h1>

              <form className="mt-6" onSubmit={handleSubmit}>
                <div className="flex-1">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >
                    {i18n.name}
                  </label>
                  <input
                    id="name"
                    required
                    name="name"
                    type="text"
                    placeholder={i18n.namePlaceholder}
                    className="block w-full px-5 py-3 mt-2 bg-background placeholder-gray-400 border border-muted-foreground rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="flex-1 mt-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >
                    {i18n.email}
                  </label>
                  <input
                    required
                    id="email"
                    name="email"
                    type="email"
                    placeholder={i18n.emailPlaceholder}
                    className="block w-full px-5 py-3 mt-2 bg-background placeholder-gray-400 border border-muted-foreground rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="w-full mt-6">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >
                    {i18n.message}
                  </label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    className="block w-full px-5 py-3 mt-2 bg-background placeholder-gray-400 border border-muted-foreground rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40 h-32"
                    placeholder={i18n.messagePlaceholder}
                  />
                </div>

                <button
                  className={cn([
                    "w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-foreground transition-colors duration-300 transform rounded-md focus:outline-none bg-primary",
                    state.submitting && "bg-gray-500 cursor-wait",
                    state.submitted && "bg-primary",
                    state.error && "bg-destructive",
                  ])}
                >
                  {buttonText}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
