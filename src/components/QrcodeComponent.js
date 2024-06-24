import { useQRCode } from "next-qrcode";
import Image from "next/image";
import logoImage from "../../public/img/qrcode-nt.png";

export default ({ url, colorDark, colorLight, quizSize }) => {
  const { Canvas } = useQRCode();

  function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
  }

  return (
    <div
      className="qrcode"
      style={{ height: "70vh", width: "70vh", margin: "0 auto" }}
    >
      <Image
        src={logoImage}
        width={0}
        height={0}
        sizes="100vw"
        style={{ height: "70vh", width: "70vh" }}
      />
    </div>
  );
};
