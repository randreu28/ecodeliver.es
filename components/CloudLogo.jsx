/* eslint-disable @next/next/no-img-element */
export default function CloudLogo() {
  return (
    <div className="max-w-screen-xl mx-auto my-20">
      <div className="gap-8 space-y-16 md:space-y-0 md:grid md:grid-cols-6 lg:grid-cols-5">
        <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
          <img
            className="grayscale max-w-full h-12"
            src="/media/cloudLogos/barcelonaActiva.png"
            alt="cloud logo"
          />
        </div>

        <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
          <img
            className="grayscale max-w-full h-12"
            src="/media/cloudLogos/caixaBank.png"
            alt="cloud logo"
          />
        </div>

        <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
          <img
            className="grayscale max-w-full h-24"
            src="/media/cloudLogos/caixaEnginyers.png"
            alt="cloud logo"
          />
        </div>

        <div className="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1">
          <img
            className="grayscale max-w-full h-12"
            src="/media/cloudLogos/upc.png"
            alt="cloud logo"
          />
        </div>

        <div className="flex items-center justify-center col-span-2 md:col-span-3 lg:col-span-1">
          <img
            className="grayscale max-w-full h-24"
            src="/media/cloudLogos/imaginBank.png"
            alt="cloud logo"
          />
        </div>
      </div>
    </div>
  );
}
