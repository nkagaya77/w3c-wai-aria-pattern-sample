import { render, screen } from "@testing-library/react"
import { Menubar } from "./Menubar"

it("show navigation", () => {
	render(<Menubar />)

	expect(
		screen.getByRole("navigation", { name: "W3C Patterns sample" }),
	).toBeVisible()
})

it("show menubar", async () => {
	render(<Menubar />)

	expect(
		screen.getByRole("menubar", { name: "W3C Patterns sample" }),
	).toBeVisible()

	expect(screen.getByRole("menuitem", { name: "Home" })).toHaveAttribute(
		"aria-current",
		"page",
	)
	const menuitems = await screen.findAllByRole("menuitem", { hidden: true })
	const nonCurrentMenuItems = menuitems.filter(
		(menuitem) =>
			!menuitem.hasAttribute("aria-current") && menuitem.children.length > 0,
	)
	for (const menuitem of nonCurrentMenuItems) {
		expect(menuitem).toHaveAttribute("aria-haspopup", "true")
		expect(menuitem).toHaveAttribute("aria-expanded", "false")
	}
})
