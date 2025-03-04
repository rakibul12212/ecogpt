import Image from "next/image";
import assets from "@/assets";

const Sidebar = () => {
  return (
    <div className="flex  justify-center gap-8">
      <Image src={assets.images.logo} width={50} height={50} alt="logo" />
      <div className="relative inline-block">
        {/* Original Text */}
        <h1 className="font-bold text-2xl tracking-[0.4em] text-[#713CF4]">
          EchoGPT
        </h1>

        {/* Water Reflection */}
        <h1
          className="absolute font-bold text-2xl tracking-[0.4em] left-0 right-0 top-[1.2em] scale-y-[-1] opacity-20"
          style={{
            maskImage:
              "linear-gradient(to bottom, rgba(113, 60, 244, 0.5), transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(113, 60, 244, 0.5), transparent)",
          }}
        >
          EchoGPT
        </h1>
      </div>
    </div>
  );
};

export default Sidebar;
