import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="py-4 px-24 w-full gap-6 flex items-center font-semibold justify-center bg-slate-50">
      <Link href="/">
        <Image src="/fmsb.jpeg" alt="logo" width={100} height={100} />
      </Link>
      <Link
        href="#home"
        className="bg-transparent hover:bg-gray-300 hover:font-bold px-4 py-2 rounded-md ease-in-out duration-300"
      >
        Home
      </Link>
      <Link
        href="#services"
        className="bg-transparent hover:bg-gray-300 hover:font-bold px-4 py-2 rounded-md ease-in-out duration-300"
      >
        Services
      </Link>
      <Link
        href="#testimonials"
        className="bg-transparent hover:bg-gray-300 hover:font-bold px-4 py-2 rounded-md ease-in-out duration-300"
      >
        Testimonials
      </Link>
      <Link
        href="#contact"
        className="bg-transparent hover:bg-gray-300 hover:font-bold px-4 py-2 rounded-md ease-in-out duration-300"
      >
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
