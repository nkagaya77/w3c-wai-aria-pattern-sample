import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { Button } from "./w3c_wai_aria_patterns/Button/Button"
import { Alert } from "./w3c_wai_aria_patterns/Alert/Alert"
import { Switch } from "./w3c_wai_aria_patterns/Switch/Switch"

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/button" element={<Button onClick={() => {}} />} />
					<Route path="/Alert" element={<Alert />} />
					<Route path="/Switch" element={<Switch />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
