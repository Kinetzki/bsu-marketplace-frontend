import React, { useEffect, useState } from "react";
import SidePanel from "../components/SidePanel";
import ShadedContainer from "../components/ShadedContainer";
import { useNavigate, useParams } from "react-router-dom";
import Marketplace from "../panels/Marketplace";
import Dashboard from "../panels/Dashboard";
import Cart from "../panels/Cart";
import Account from "../panels/Account";
import History from "../panels/History";
import ScreenLoader from "../components/ScreenLoader";
import Items from "../panels/Items";

function Home() {
  const [currentPanel, setCurrentPanel] = useState("marketplace");
  const [isLoading, setIsLoading] = useState(true);
  const { panel } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const panels = ["marketplace", "dashboard", "cart", "history", "account", "items"];

    if (panels.includes(panel)) {
      setCurrentPanel(panel);
    } else {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading && <ScreenLoader otherstyle={"z-[9999]"}/>}
      <div className="w-full flex">
        <SidePanel setpanel={setCurrentPanel} />
        {currentPanel === "marketplace" && <Marketplace />}
        {currentPanel === "dashboard" && <Dashboard />}
        {currentPanel === "cart" && <Cart />}
        {currentPanel === "history" && <History />}
        {currentPanel === "account" && <Account />}
        {currentPanel === "items" && <Items />}
      </div>
    </>
  );
}

export default Home;
