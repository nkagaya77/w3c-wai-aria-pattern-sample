import { render, screen, within } from "@testing-library/react"
import { NavigationMenubar } from "./NavigationMenubar"

it("show header", () => {
	render(<NavigationMenubar />)

	const header = screen.getByRole("banner")
	expect(within(header).getByText("W3C Patterns sample")).toBeVisible()
})

it("show content", () => {
	render(<NavigationMenubar />)

	expect(
		screen.getByRole("region", { name: "Mythical University" }),
	).toBeVisible()
})

it("show footer", () => {
	render(<NavigationMenubar />)

	const footer = screen.getByRole("contentinfo")
	expect(within(footer).getByText("W3C Patterns sample")).toBeVisible()
})
