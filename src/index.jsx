import React from "react";
import ReactDOMClient from "react-dom/client";
import { FinalGoogleAds } from "./screens/FinalGoogleAds";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<FinalGoogleAds />);
