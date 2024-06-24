import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "../styles/global.css";
import { wrapper, makeStore } from "../store/store";
import Head from "next/head";

function App({ Component, pageProps }) {
  const { store, persistor } = makeStore();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Head>
          <title>Contato da Rádio Novo Tempo</title>
          <meta
            name="description"
            content="Entre em contato pelo whatsapp da Rádio"
          />
        </Head>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default App;
