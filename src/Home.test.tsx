import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { Home } from "./Home"

it("show component link cards", () => {
	render(<Home />, { wrapper: BrowserRouter })

	const linkCardList = screen.getByRole("list")
	expect(linkCardList.children).toHaveLength(3)

	const linkToButton = screen.getByRole("link", { name: "Button" })
	expect(linkToButton).toHaveAttribute("href", "/button")

	const linkToAlert = screen.getByRole("link", { name: "Alert" })
	expect(linkToAlert).toHaveAttribute("href", "/alert")

	const linkToSwitch = screen.getByRole("link", { name: "Switch" })
	expect(linkToSwitch).toHaveAttribute("href", "/switch")
})
