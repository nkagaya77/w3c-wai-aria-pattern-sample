import { useState } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button } from "./w3c_wai_aria_patterns/Button";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/button" element={<Button onClick={() => {}} />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
