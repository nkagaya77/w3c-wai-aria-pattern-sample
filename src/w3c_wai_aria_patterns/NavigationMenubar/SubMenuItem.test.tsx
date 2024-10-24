import { render, screen } from "@testing-library/react"
import { SubMenuItem } from "./SubMenuItem"

it("show sub menuitem without submenu", async () => {
	render(<SubMenuItem title="Overview" />)

	const menuitem = screen.getByRole("menuitem", { name: "Overview" })
	expect(menuitem).toBeVisible()
	expect(menuitem).not.toHaveAttribute("aria-haspopup")
	expect(menuitem).not.toHaveAttribute("aria-expanded")

	expect(await screen.queryByTitle("right")).not.toBeInTheDocument()
})

it("show sub menuitem with submenu", async () => {
	render(<SubMenuItem title="Facts" hasSubSubMenu={true} />)

	const menuitem = screen.getByRole("menuitem", { name: "Facts" })
	expect(menuitem).toBeVisible()
	expect(menuitem).toHaveAttribute("aria-haspopup", "true")
	expect(menuitem).toHaveAttribute("aria-expanded", "false")

	expect(screen.getByTitle("right").parentElement).toBeVisible()
})
