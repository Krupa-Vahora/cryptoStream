import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Coin from "./Pages/Coin";
import { makeStyles } from "@material-ui/core";

function App() {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh",
    },
  }));

  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/coin/:id" element={<Coin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
