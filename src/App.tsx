import { useState } from "react"
import viteLogo from "/vite.svg"
import reactLogo from "./assets/react.svg"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { Button } from "./w3c_wai_aria_patterns/Button"

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
	)
}

export default App
