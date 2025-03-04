import Image from "next/image";
import assets from "@/assets";

const Sidebar = () => {
  return (
    <div>
      <Image src={assets.images.logo} width={50} height={50} alt="logo" />
      sidebar
    </div>
  );
};

export default Sidebar;
