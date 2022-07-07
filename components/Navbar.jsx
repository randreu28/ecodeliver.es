import { useEffect, useState } from "react";

export default function Navbar() {
  const [section, setSection] = useState("inicio");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    window.addEventListener("scroll", () => {
      sections.forEach((section) => {
        const sectionId = section.getAttribute("id");
        const sectionTop = section.offsetTop - window.innerHeight * 0.5;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY <= sectionBottom) {
          setSection(sectionId);
        }
      });
    });
  }, [setSection]);

  return (
    <h1 className="text-5xl fixed text-center pt-10">
      {section} <a href="#faq">test</a>
    </h1>
  );
}
