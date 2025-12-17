import { ThemeProvider } from "@mui/material";
import DashboardPage from "./pages/DashboardPage";
import { theme } from "./config/theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <DashboardPage />
    </ThemeProvider>
  );
};

export default App;
