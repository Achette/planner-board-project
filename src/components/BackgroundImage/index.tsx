import background from "../../public/background.png";
import Image from "next/legacy/image";
import "./style.module.css";

export const BackgroundImage = () => {
  return (
    <div className="background">
      <Image
        src={background}
        alt="..."
        quality="100"
        layout="responsive"
        height="1000"
      />
    </div>
  );
};
