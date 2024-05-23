import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" flex  pt-5 gap-10 flex-col w-full h-60 border-t-2 justify-center items-center  bg-slate-50">
      <div className=" flex items-center gap-3">
        <Image
          src="/logo.png"
          alt="Logo of Albaniagateway"
          height={40}
          width={40}
          className=" rounded-sm"
        />

        <ul>Albaniagateway</ul>
        <p>© 2024</p>
      </div>
      <div className=" flex flex-col md:flex-row gap-3 md:gap-6">
        <ul>
          <Link href="/disclaimer">Disclaimer</Link>
        </ul>
        <ul>
          <Link href="/cookies-policy">Cookies Policy</Link>
        </ul>
        <ul>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
