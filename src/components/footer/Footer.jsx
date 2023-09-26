import React from "react";

const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Fender", link: "/" },
      { name: "Yamaha", link: "/" },
      { name: "Gibson", link: "/" },
      { name: "PRS", link: "/" },
      { name: "D'angelico", link: "/" },
      { name: "Ibanez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@guitarcave.com", link: "mailto:customer@guitarcave.com" },
      { name: "+62855231238", link: "tel:+62811342362" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="py-5 px-10">
      <div
        className="flex justify-between items-start gap-20
      flex-wrap max-lg:flex-col"
      >
        <div className="flex flex-1 justify-start lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4
                className="text-white font-montserrat text-2xl leading-normal font-medium
                  mb-6"
              >
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-3 text-white-400 font-monserrat text-base leading-normal hover:text-slate-gray
                      cursor-pointer"
                  >
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
          Nestled in the heart of our bustling town, Guitar Cave is a haven for
          guitar enthusiasts of all levels, from seasoned shredders to aspiring
          strummers. Step into our cozy, music-filled sanctuary and immerse
          yourself in the world of guitars, where every instrument tells a
          story, and every chord played resonates with passion.
        </p>
      </div>
      <div
        className="flex justify-between
      text-white-400 mt-24 max-sm:flex-col max-sm:items-center"
      >
        <div className="flex flex-1 justify-start items-center gap-2 font-monserrat cursor-pointer">
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
