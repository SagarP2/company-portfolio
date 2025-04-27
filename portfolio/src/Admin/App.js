import React, { useState } from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "./scenes/dashboard/gloabal/Sidebar";
import Topbar from "./scenes/dashboard/gloabal/Topbar";
import Dashboard from "./scenes/dashboard/index";
import Form from "./scenes/Form";
import Header from "../Admin/components/Header";
import Subproject from "./scenes/Subproject";

// Add this style object
const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  contentWrapper: {
    display: 'flex',
    flex: 1,
  },
  mainContent: {
    flex: 1,
    padding: '20px',
    overflowY: 'auto',
  },
};

// Add this CSS class
const centerContent = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  paddingTop: '20px',
};

function App({ onLogout }) {
  const [theme, colorMode] = useMode();
  const [selectedPage, setSelectedPage] = useState("dashboard");

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={styles.app}>
          <Topbar />
          <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
          <div style={styles.contentWrapper}>
            <Sidebar
              onLogout={onLogout}
              setSelectedPage={setSelectedPage}
            />
            <main style={styles.mainContent}>
              <div style={selectedPage === "New Project" ? centerContent : {}}>
                {selectedPage === "dashboard" && <Dashboard />}
                {selectedPage === "New Project" && <Form />}
                {selectedPage === "Subproject" && <Subproject />}
              </div>
            </main>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;