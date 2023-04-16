/* eslint-disable @next/next/no-img-element */
export function PrimaryCloudLogo() {
  return (
    <div className="max-w-screen-xl mx-auto my-20">
      <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
        <div className="flex items-center justify-center">
          <img
            className="grayscale max-w-full h-12"
            src="/media/cloudLogos/barcelonaActiva.png"
            alt="cloud logo"
          />
        </div>

        <div className="flex items-center justify-center">
          <img
            className="grayscale max-w-full h-12"
            src="/media/cloudLogos/caixaBank.png"
            alt="cloud logo"
          />
        </div>

        <div className="flex items-center justify-center">
          <img
            className="grayscale max-w-full h-24"
            src="/media/cloudLogos/imaginBank.png"
            alt="cloud logo"
          />
        </div>

        <div className="flex items-center justify-center">
          <img
            className="grayscale max-w-full h-12"
            src="/media/cloudLogos/upc.png"
            alt="cloud logo"
          />
        </div>

        <div className="flex items-center justify-center md:col-span-2 lg:col-span-1">
          <img
            className="grayscale max-w-full h-12"
            src="/media/cloudLogos/logisticsIncubator.png"
            alt="cloud logo"
          />
        </div>
      </div>
    </div>
  );
}

export function SecondaryCloudLogo() {
  return (
    <div className="max-w-screen-xl mx-auto my-20">
      <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex items-center justify-center">
          <img
            className="grayscale max-w-full h-12"
            src="/media/cloudLogos/europeanUnion.png"
            alt="cloud logo"
          />
        </div>

        <div className="flex items-center justify-center">
          <img
            className="grayscale max-w-full h-12"
            src="/media/cloudLogos/nextGen.png"
            alt="cloud logo"
          />
        </div>

        <div className="flex items-center justify-center">
          <img
            className="grayscale max-w-full h-12"
            src="/media/cloudLogos/zonaFranca.png"
            alt="cloud logo"
          />
        </div>

        <div className="flex items-center justify-center">
          <img
            className="grayscale max-w-full h-12"
            src="/media/cloudLogos/generalitat.png"
            alt="cloud logo"
          />
        </div>
      </div>
    </div>
  );
}
