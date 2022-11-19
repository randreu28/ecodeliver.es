import Button from "./Button";
import { useForm } from "@formcarry/react";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { i18nBusinessForm } from "../i18n";
import { useRouter } from "next/router";

export default function BusinessForm() {
  const form = useRef<HTMLFormElement>(null!);
  const translations = i18nBusinessForm[useRouter().locale as "es" | "en"];

  const { state, submit } = useForm({
    id: process.env.NEXT_PUBLIC_FORMCARRY_ID!,
  });

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    submit(e);

    e.preventDefault();
    form.current.reset();
  }

  useEffect(() => {
    if (state.submitting) {
      toast.loading(translations.onLoad);
    }
    if (state.submitted) {
      toast.dismiss(); //all toasts
      toast.success(translations.onSuccess);
    } else if (state.error) {
      toast.dismiss();
      toast.error(translations.onError);
    }
  }, [
    state.error,
    state.submitted,
    state.submitting,
    translations.onError,
    translations.onLoad,
    translations.onSuccess,
  ]);

  return (
    <>
      <form
        className="flex flex-col space-y-5 w-full"
        data-aos="fade-left"
        ref={form}
        onSubmit={handleSubmit}
      >
        <input
          name="Nombre"
          className="px-4 py-2 text-secondary bg-white border border-gray-300 rounded-md sm:mx-2 text-lg focus:border-primary-40 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder={translations.name}
        />
        <input
          type="email"
          name="Email"
          className="px-4 py-2 text-secondary bg-white border border-gray-300 rounded-md sm:mx-2 text-lg focus:border-primary-40 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder={translations.email}
          required
        />
        <input
          name="Business name"
          className="px-4 py-2 text-secondary bg-white border border-gray-300 rounded-md sm:mx-2 text-lg focus:border-primary-40 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder={translations.businessName}
          required
        />
        <textarea
          name="Message"
          className="px-4 py-2 h-32 text-secondary bg-white border border-gray-300 rounded-md sm:mx-2 text-lg focus:border-primary-40 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder={translations.message}
          required
        />
        <Button className="lg:max-w-fit sm:mx-2">{translations.call}</Button>
      </form>
    </>
  );
}
