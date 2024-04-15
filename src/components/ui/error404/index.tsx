import image404 from "@/assets/images/404.png";
import Image from "next/image";

function Error404() {
  return (
    <div className="w-full h-96 items-center flex justify-center mt-28">
      <Image src={image404} alt="404" />
    </div>
  );
}

export default Error404;
