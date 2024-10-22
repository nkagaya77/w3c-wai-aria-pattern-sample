import { render, screen } from "@testing-library/react"
import { Menuitem } from "./Menuitem"

it("show menuitem without submenu", async () => {
	render(<Menuitem title="Home" />)

	const menuitem = screen.getByRole("menuitem", { name: "Home" })
	expect(menuitem).toBeVisible()
	expect(menuitem).not.toHaveAttribute("aria-haspopup")
	expect(menuitem).not.toHaveAttribute("aria-expanded")

	expect(await screen.queryByTitle("down")).not.toBeInTheDocument()
})

it("show menuitem with submenu", async () => {
	render(<Menuitem title="About" hasSubMenu={true} />)

	const menuitem = screen.getByRole("menuitem", { name: "About" })
	expect(menuitem).toBeVisible()
	expect(menuitem).toHaveAttribute("aria-haspopup", "true")
	expect(menuitem).toHaveAttribute("aria-expanded", "false")

	expect(screen.getByTitle("down").parentElement).toBeVisible()
})
