import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme
} from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light"
  }
});

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <h1>Cool</h1>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
