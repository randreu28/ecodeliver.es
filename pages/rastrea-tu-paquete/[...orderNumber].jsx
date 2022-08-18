import WebHolder from "../../components/Webholder";

export default function Tracking({ data, slug }) {
  console.log(data[0] ? data[0] : "No package found with ID:", slug);
  return <WebHolder />;
}

export async function getServerSideProps(context) {
  //Testing order number --> EFB4A17760
  const slug = context?.params?.orderNumber[0] || "";
  const res = await fetch(
    `https://codelivery.elinktechnologies.net/api/Parcelhead/GetPakageTracking?OrderNumber=${slug}&securitykey=${process.env.API_TOKEN}`
  );
  const data = await res.json();
  return { props: { data, slug } };
}
