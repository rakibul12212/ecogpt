import Image from "next/image";
import assets from "@/assets";
import Container from "./Container/Container";

const Sidebar = () => {
  return (
    <Container className="flex flex-col md:flex-row  justify-center gap-2 md:gap-4 py-4">
      <Image src={assets.images.logo} width={50} height={50} alt="logo" />

      <div className="relative text-center ">
        <h1 className="font-bold text-xl md:text-2xl tracking-wide md:tracking-[0.4em] text-[#713CF4]">
          EchoGPT
        </h1>

        <h1
          className="absolute font-bold text-xl md:text-2xl tracking-wide md:tracking-[0.4em] left-0 right-0 top-[0.9em] scale-y-[-1] opacity-30"
          style={{
            maskImage:
              "linear-gradient(to bottom, rgba(100, 80, 244, 0.5), transparent)",
            WebkitMaskImage:
              "linear-gradient(to top, rgba(100, 80, 244, 0.5), transparent)",
          }}
        >
          EchoGPT
        </h1>
      </div>
    </Container>
  );
};

export default Sidebar;
