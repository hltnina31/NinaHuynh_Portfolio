import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import LanguageProvider from "./contexts/LanguageContext.jsx";
import AppThemeProvider from "./theme/AppThemeProvider.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </AppThemeProvider>
  </React.StrictMode>
);
