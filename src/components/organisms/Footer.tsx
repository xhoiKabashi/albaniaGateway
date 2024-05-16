import Image from "next/image";

const Footer = () => {
  return (
    <div className=" flex  gap-3 flex-col w-full h-60 border-t-2 justify-center items-center  bg-slate-50">
      <div className=" flex items-center gap-3">
        <Image
          src="/logo.png"
          alt="Logo of Albaniagateway"
          height={40}
          width={40}
          className=" rounded-sm"
        />

        <ul>Albaniagateway</ul>
      </div>
      <div className=" flex">
        <p>
          All maps, graphics, flags, photos and original descriptions © 2024
          worldatlas.com
        </p>
      </div>
      <div className=" flex">
        <ul>Home</ul>
        <ul>Contact Us</ul>
        <ul>Privacy</ul>
        <ul>Copyright</ul>
        <ul>Fact Checking Policy</ul>
        <ul>Corrections Policy</ul>
        <ul>Ownership Policy</ul>
      </div>
      <div className=" flex">
        <ul>Social Media</ul>
        <ul>Social Media</ul>
        <ul>Social Media</ul>
        <ul>Social Media</ul>
      </div>
    </div>
  );
};

export default Footer;
