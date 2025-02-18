import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./pages/App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<BrowserRouter basename="/gym-log">
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</BrowserRouter>
);
