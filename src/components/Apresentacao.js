import Head from "next/head";
import CenterSidebar from "./CenterSidebar";
import { useSelector } from "react-redux";
import Fullscreen from "./Fullscreen";
import ShowPainel from "./ShowPainel";
import { useAppState } from "./stateService";
import { useState } from "react";
import Fab from "@mui/material/Fab";
import SettingsIcon from "@mui/icons-material/Settings";

export default () => {
  const { dispatchUpdate } = useAppState(); // Use o hook personalizado
  const [show, setShowConfig] = useState(false);

  function openPainelIcon() {
    setShowConfig(!show);
  }

  function openPainel() {
    setShowConfig(!show);
    window.open(
      window.location.protocol + "//" + window.location.host + "?painel=1"
    );
  }

  const backgroundImageSrc = useSelector(
    (state) => state.stylization.backgroundImage
  );

  return (
    <>
      <div>
        <Head>
          <style>
            {`
              body {
                margin: 0 !important;
                padding: 0 !important;
                background-color: #cdcdcd !important;
                background-size: cover !important;
                background-position: center !important;
                background-attachment: fixed !important;
                background-image: url(${backgroundImageSrc}) !important;
              }
              .container {
                  display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
              }

              `}
          </style>
        </Head>
      </div>
      <div onDoubleClick={openPainelIcon} className="container">
        <Fullscreen />
        <div
          className={show ? "flutuante visible" : "hidden"}
          style={{
            position: "absolute",
          }}
        >
          <Fab color="primary" aria-label="Tela Cheia">
            <SettingsIcon onClick={(e) => openPainel(show)} />
          </Fab>
        </div>
        <CenterSidebar />
      </div>
    </>
  );
};
