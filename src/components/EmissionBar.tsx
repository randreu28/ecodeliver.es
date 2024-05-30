import { useState } from "react";
import { getI18N } from "@/i18n";

type Props = {
  i18n: ReturnType<typeof getI18N>["collaborative"]["emissionBar"];
};

export default function EmissionBar({ i18n }: Props) {
  const DIESEL_EMISSIONS = 67.4; // grams of CO2 per package using diesel trucks
  const ECO_EMISSIONS = 3.5; // grams of CO2 per package using ecoDrivers
  const RANGE_MIN = 0;
  const RANGE_MAX = 2000000;

  const [packages, setPackages] = useState(RANGE_MAX / 10);

  const emissionsSaved = (
    (packages * (DIESEL_EMISSIONS - ECO_EMISSIONS)) /
    1000
  ).toLocaleString(undefined, { maximumFractionDigits: 2 });

  return (
    <section className="container my-32 space-y-5">
      <h2 className="text-4xl text-center font-bold">{i18n.title}</h2>
      <p className="text-primary text-6xl font-bold text-center">
        {emissionsSaved} kg {i18n.of} CO2
      </p>

      <p className="text-muted-foreground text-center max-w-2xl mx-auto">
        {i18n.accordingTo}{" "}
        <a
          className="hover:underline text-primary"
          href="https://canviclimatic.gencat.cat/es/actua/guia_de_calcul_demissions_de_co2/"
          target="_blank"
        >
          {i18n.ref1}
        </a>{" "}
        {i18n.and}{" "}
        <a
          href="https://www.transportes.gob.es/carreteras/sostenibilidad/eee-2030"
          target="_blank"
          className="hover:underline text-primary"
        >
          {i18n.ref2}
        </a>
      </p>

      <div className="">
        <label htmlFor="packageRange" className="sr-only">
          {i18n.packageQuantity}
        </label>
        <input
          id="packageRange"
          type="range"
          min={RANGE_MIN}
          max={RANGE_MAX}
          value={packages}
          onChange={(e) => setPackages(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
        />
        <h2 className="mt-2 text-center text-lg font-semibold">
          {packages.toLocaleString()} {i18n.packages}
        </h2>
      </div>
    </section>
  );
}
