import {
  HandCoins,
  Handshake,
  CircleDot,
  CalendarCheck,
  Phone,
  Mail,
  MessageSquare,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Github,
} from "lucide-react";
import { Link } from "react-router-dom";

const FooterContent = () => {
  const company = [
    { name: "History", href: "/" },
    { name: "Careers", href: "/" },
    { name: "Social Impact", href: "/" },
    { name: "Store Locations", href: "/" },
  ];
  const community = [
    { name: "Renshoppe Club", href: "/" },
    { name: "Events", href: "/" },
    { name: "News", href: "/" },
    { name: "Blog", href: "/" },
  ];
  const help = [
    { name: "Refund Policy", href: "/" },
    { name: "Shipping & Returns", href: "/" },
    { name: "FAQ", href: "/" },
    { name: "Warranty", href: "/" },
  ];
  const handleSignUp = () => {
    alert(
      "Thank you for joining the Renshoppe Club! Enjoy your 10% discount on your first 10 purchase.",
    );
  };
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-white h-[calc(100vh-4rem)] mt-16 w-full">
      <section className="bg-black flex custom-md:flex-col gap-4 justify-between items-center px-6 py-8">
        <div>
          <h2 className="text-3xl font-bold">Join the Renshoppe Club!</h2>
        </div>
        <div>
          <p className="font-bold mb-2">Perks of signing up:</p>
          <ul className="flex flex-col gap-2">
            <li className="flex gap-2">
              <HandCoins />
              <span className="uppercase">welcome offer</span>
            </li>
            <li className="flex gap-2">
              <Handshake />
              <span className="uppercase">exclusive deals</span>
            </li>
            <li className="flex gap-2">
              <CircleDot />
              <span className="uppercase">first dibs on new drops</span>
            </li>
            <li className="flex gap-2">
              <CalendarCheck />
              <span className="uppercase">
                30-day hassle-free exchanges in stores
              </span>
            </li>
          </ul>
        </div>
        <div className="flex-shrink-0">
          <button
            onClick={handleSignUp}
            className="bg-red text-white hover:bg-white hover:text-red border-red border-2 border-solid  px-4 py-2 font-medium uppercase"
          >
            Get 10% Off
          </button>
        </div>
      </section>
      <section className="bg-red flex gap-4 custom-md:flex-col px-6 py-8">
        <div className="flex justify-around custom-md:justify-between w-1/2 custom-md:w-full">
          <article className="flex flex-col gap-2">
            <h2 className="uppercase font-semibold">company</h2>
            <ul className="text-sm">
              {company.map((item) => (
                <li key={item.name}>
                  <Link to={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </article>
          <article className="flex flex-col gap-2">
            <h2 className="uppercase font-semibold">community</h2>
            <ul className="text-sm">
              {community.map((item) => (
                <li key={item.name}>
                  <Link to={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </article>
          <article className="flex flex-col gap-2">
            <h2 className="uppercase font-semibold">help</h2>
            <ul className="text-sm">
              {help.map((item) => (
                <li key={item.name}>
                  <Link to={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </article>
        </div>
        <div className="w-1/2 custom-md:w-full">
          <h1 className="text-4xl font-semibold mb-2">Contact Us</h1>
          <p>
            If you have inquiries or need assistance, don&apos;t hesitate to
            ask!
          </p>
          <div className="flex gap-3 custom-md:flex-col text-sm my-4">
            <div className="flex gap-1">
              <Phone />
              <p>555-5555-555</p>
            </div>
            <div className="flex gap-1">
              <Mail />
              <p>support@renshoppe.com</p>
            </div>
            <div className="flex gap-1">
              <MessageSquare />
              <p>Chat with us</p>
            </div>
          </div>
          <div className="flex gap-3 flex-col my-4">
            <h2 className="text-2xl font-semibold">Connect with Us</h2>
            <div className="flex gap-1">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </a>
              <a
                href="https://www.x.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-red w-full px-6 py-4">
        <div className="flex gap-2 justify-center custom-md:flex-col text-sm">
          <p>&copy; 2024 Renshoppe. All Rights Reserved.</p>
          <p>
            <a href="#">Privacy Policy</a>
          </p>
          <p>
            <a href="#">Terms of Service</a>
          </p>
        </div>
      </section>
      <section className="bg-black w-full px-6 py-4">
        <p className="text-sm flex gap-2 justify-center">
          <span>Created by </span>
          <a
            href="https://www.github.com/rhenzala"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-1"
          >
            <button>
              <Github size={14} />
            </button>
            <span>rhenzala.</span>
          </a>
          <span>&copy; {currentYear}.</span>
        </p>
      </section>
    </footer>
  );
};

export default FooterContent;
