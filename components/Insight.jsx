export default function Insight({ children, emoji, type }) {
  let color;
  switch (type) {
    case "info":
      color =
        "text-blue-700 bg-blue-100 prose-blue prose-headings:text-blue-700 prose-em:text-blue-700 prose-li:marker:text-blue-800 prose-hr:border-blue-300 prose-blockquote:bg-blue-200 prose-blockquote:border-blue-600  prose-blockquote:text-blue-700 prose-li:text-blue-700 prose-strong:text-blue-700";
      break;

    case "danger":
      color =
        "text-red-700 bg-red-100 prose-red prose-headings:text-red-700 prose-em:text-red-700 prose-li:marker:text-red-800 prose-hr:border-red-300 prose-blockquote:bg-red-200 prose-blockquote:border-red-600  prose-blockquote:text-red-700 prose-li:text-red-700 prose-strong:text-red-700";
      break;

    case "success":
    default:
      color =
        "text-green-700 bg-green-100 prose-green prose-headings:text-green-700 prose-em:text-green-700 prose-li:marker:text-green-800 prose-hr:border-green-300 prose-blockquote:bg-green-200 prose-blockquote:border-green-600  prose-blockquote:text-green-700 prose-li:text-green-700 prose-strong:text-green-700";
      break;

    case "warning":
      color =
        "text-yellow-700 bg-yellow-100 prose-yellow prose-headings:text-yellow-700 prose-em:text-yellow-700 prose-li:marker:text-yellow-800 prose-hr:border-yellow-300 prose-blockquote:bg-yellow-200 prose-blockquote:border-yellow-600  prose-blockquote:text-yellow-700 prose-li:text-yellow-700 prose-strong:text-yellow-700";
      break;

    case "dark":
      color =
        "text-gray-700 bg-gray-100 prose-gray prose-headings:text-gray-700 prose-em:text-gray-700 prose-li:marker:text-gray-800 prose-hr:border-gray-300 prose-blockquote:bg-gray-200 prose-blockquote:border-gray-600  prose-blockquote:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-700";
      break;
  }

  return (
    <div
      className={
        "flex flex-row gap-5 rounded-lg px-2 pt-5 pr-6 text-justify " + color
      }
    >
      <span className="text-2xl pt-2 pl-2 w-10">{emoji}</span>
      <span>{children}</span>
    </div>
  );
}
