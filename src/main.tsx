import {StrictMode} from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "windi.css";
import "./assets/main.css";
import AuthProvider from "./contexts/AuthContext";

ReactDOM.render(
	<StrictMode>
		<AuthProvider>
			<App />
		</AuthProvider>
	</StrictMode>,
	document.getElementById("root")
);
