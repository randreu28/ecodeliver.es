import Button from "./Button";
import { useForm } from "@formcarry/react";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";

export default function BusinessForm() {
  const form = useRef<HTMLFormElement>(null!);

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
      toast.loading("Sending...");
    }
    if (state.submitted) {
      toast.dismiss(); //all toasts
      toast.success("Your email was sent succesfully!");
    } else if (state.error) {
      toast.dismiss();
      toast.error("An error occured, please try again later");
    }
  }, [state.error, state.submitted, state.submitting]);

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
          placeholder="Nombre"
        />
        <input
          type="email"
          name="Email"
          className="px-4 py-2 text-secondary bg-white border border-gray-300 rounded-md sm:mx-2 text-lg focus:border-primary-40 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Correo electrónico"
          required
        />
        <input
          name="Business name"
          className="px-4 py-2 text-secondary bg-white border border-gray-300 rounded-md sm:mx-2 text-lg focus:border-primary-40 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Nombre de empresa"
          required
        />
        <textarea
          name="Message"
          className="px-4 py-2 h-32 text-secondary bg-white border border-gray-300 rounded-md sm:mx-2 text-lg focus:border-primary-40 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Mensaje"
          required
        />
        <Button className="lg:max-w-fit sm:mx-2"> Enviar</Button>
      </form>
    </>
  );
}
