import Head from "next/head";
import { useEffect, useState } from "react";

import { Grid, Typography } from "@mui/material";

import QuizControll from "./QuizControll";
import ExportButton from "./ExportButton";
import ImageBackground from "./ImagemBackground";
import ImportButton from "./ImportButton";
import BodyControll from "./BodyControll";
import { useSearchParams } from "next/navigation";
import { useAppState } from "./stateService";
import { useSelector } from "react-redux";
import GetColor from "./GetColor";

export default () => {
  const searchParams = useSearchParams();
  const { dispatchUpdate } = useAppState(); // Use o hook personalizado

  const centerBackgroundColor = useSelector(
    (state) => state.stylization.centerBackgroundColor
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
              }
              .container {
                  position: relative;
                  width: 100%;
                  height: 100vh;  
              }
              .sidebarContainer {
                border: 1px solid #ccc; /* Adiciona borda para distinguir visualmente */
                border-radius: 5px; /* Arredonda as bordas */
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adiciona sombra */
                padding: 20px;
                background-color: rgba(225, 225, 225, 0.8);                
                margin-bottom: 20px; /* Adiciona espaçamento entre os itens */
              }
              `}
          </style>
        </Head>
      </div>
      <div className="container">
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <div className="sidebarContainer">
              <Typography variant="h6" gutterBottom>
                Qrcode
              </Typography>
              <QuizControll />
            </div>
          </Grid>

          <Grid item xs={4}>
            <div className="sidebarContainer">
              <Typography variant="h6" gutterBottom>
                Geral
              </Typography>
              <BodyControll />
            </div>
          </Grid>

          <Grid item xs={4}>
            <div className="sidebarContainer">
              <Typography variant="h6" gutterBottom>
                Backup
              </Typography>
              <ImportButton />
              <ExportButton />
            </div>
          </Grid>
          <Grid item xs={4} sm={4}>
            <div className="sidebarContainer">
              <Typography variant="h6" gutterBottom>
                Cor Fundo
              </Typography>
              <GetColor
                definedColor={centerBackgroundColor}
                fnDefinedColor={(e) =>
                  dispatchUpdate(e, "setCenterBackgroundColor")
                }
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="sidebarContainer">
              <Typography variant="h6" gutterBottom>
                Imagem de fundo
              </Typography>
              <ImageBackground />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
