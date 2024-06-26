import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";

import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

import Router from "./router";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  return (
    <HelmetProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MantineProvider>
            <Toaster position="top-center" reverseOrder={false} />
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </MantineProvider>
        </PersistGate>
      </Provider>
    </HelmetProvider>
  );
};

export default App;
