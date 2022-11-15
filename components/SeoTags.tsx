export default function SeoTags() {
  return (
    <>
      {/* Concrete-page based meta tags will be substituted if there is any.
      If not, these will be default */}
      <title>ecoDeliver - Entrega de paqueteria sostenible</title>
      <meta
        name="description"
        content="Transporte de paquetería colaborativo y de última milla verde mediante vehículos eléctricos en España."
      />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={process.env.SITE_URL} />
      <meta
        property="og:title"
        content="ecoDeliver - Entrega de paqueteria sostenible"
      />
      <meta
        property="og:description"
        content="Transporte de paquetería colaborativo y de última milla verde mediante vehículos eléctricos en España."
      />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/ecodeliver-es/image/upload/v1659538036/pilotTest_irbv0o.jpg"
      />

      {/* Twitter */}
      <meta
        name="twitter:card"
        content="Transporte de paquetería colaborativo y de última milla verde mediante vehículos eléctricos en España."
      />
      <meta name="twitter:site" content="@ecoDeliver_es" />
      <meta name="twitter:creator" content="@ecoDeliver_es" />
    </>
  );
}
