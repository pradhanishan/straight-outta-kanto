import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layouts/header/Header";
import classes from "./app.module.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BattlePage from "./pages/BattlePage";

const App: FC = () => {
  return (
    <div className={classes.app}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/battle" element={<BattlePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
