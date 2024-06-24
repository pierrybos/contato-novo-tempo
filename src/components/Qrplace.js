import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Head from "next/head";
import Image from "next/image";
import Qrcode from "./Qrcode";
import QrcodeComponent from "./QrcodeComponent";
import TextComponent from "./TextComponent";

export default ({
  show,
  showText,
  showImage,
  showQr,
  title,
  subtitle,
  link,
  textSize,
  img,
  imageSize,
  qrcodeSize,
  textColor,
  qrcodeColor,
}) => {
  return (
    <>
      <div>
        <Head>
          <style>
            {`
              .textSide * { margin: 0; } 
              `}
          </style>
        </Head>
      </div>
      <div
        className="qrPlace"
        style={{ display: `${show ? "block" : "none"}` }}
      >
        <TextComponent
          title={title}
          showText={showText}
          textSize={textSize}
          textColor={textColor}
          subtitle={subtitle}
        />
        <div
          className="imageSide"
          style={{
            display: `${showImage ? "block" : "none"}`,
          }}
        >
          <Image src={img} width="135" />
        </div>
        <div
          className="qrSide"
          style={{
            display: `${showQr ? "block" : "none"}`,
          }}
        >
          <QrcodeComponent
            url={link}
            colorDark={qrcodeColor}
            quizSize={qrcodeSize}
          />
        </div>
      </div>
    </>
  );
};
