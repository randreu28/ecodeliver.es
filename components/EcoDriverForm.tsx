import Button from "./Button";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useForm } from "@formcarry/react";
import { event } from "nextjs-google-analytics";
import toast from "react-hot-toast";
import { CTA } from "../i18n";
import { useRouter } from "next/router";

export default function EcoDriverForm() {
  const form = useRef<HTMLFormElement>(null!);

  const translations = CTA[useRouter().locale as "es" | "en"];

  const { state, submit } = useForm({
    id: process.env.NEXT_PUBLIC_FORMCARRY_ID!,
  });

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    submit(e);
    event("send_email", {}, process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID);
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
      <div className="mt-8 lg:mt-0" data-aos="fade-left">
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="flex flex-col space-y-3 gap-3 sm:space-y-0 sm:flex-row sm:-mx-2"
        >
          <input
            id="email"
            type="email"
            name="email"
            className="px-4 py-2 text-secondary bg-white border border-gray-300 rounded-md sm:mx-2 text-lg focus:border-primary-40 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder={translations.placeholder}
            required
          />

          <Button>{translations.call}</Button>
        </form>

        <p className="mt-3 text-sm text-gray-500">{translations.disclaimer}</p>
      </div>
    </>
  );
}
