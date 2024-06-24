import Head from "next/head";
import { useState } from "react";
import Fab from "@mui/material/Fab";
import SettingsIcon from "@mui/icons-material/Settings";
import { useSelector } from "react-redux";
import useAppState from "./stateService";

export default ({ initialStt, isClosed }) => {
  const [show, setInitial] = useState(initialStt);
  function openPainel(now) {
    const newState = !now;
    setInitial(newState);
    isClosed(newState);
  }

  return (
    <>
      <Head>
        <style>
          {`
              .visible {
                display: block; /* ou qualquer outra propriedade de exibição que você preferir */
            }
            div.hidden {
                display: none;
            }

              `}
        </style>
      </Head>
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
    </>
  );
};
