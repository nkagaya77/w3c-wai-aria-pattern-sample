import { render, screen } from "@testing-library/react"
import SubMenu from "./SubMenu"
import { SubMenuItem } from "./SubMenuItem"

const MENU_ITEMS_SAMPLE = [
	{
		title: "Overview",
		hasSubMenu: false,
	},
	{
		title: "Facts",
		hasSubMenu: true,
	},
]

it("show menus with no Menuitem", async () => {
	render(<SubMenu ariaLabel="About" />)

	const menu = screen.getByRole("menu", { name: "About" })
	expect(menu).toBeVisible()
	expect(menu.children).toHaveLength(0)
})

it("show menus with a MenuItem which has no subMenu", async () => {
	const MENU_ITEM_WITHOUT_SUBMENU = MENU_ITEMS_SAMPLE[0]
	render(
		<SubMenu
			ariaLabel="About"
			subMenuItems={[
				<SubMenuItem
					key={MENU_ITEM_WITHOUT_SUBMENU.title}
					title={MENU_ITEM_WITHOUT_SUBMENU.title}
					hasSubSubMenu={MENU_ITEM_WITHOUT_SUBMENU.hasSubMenu}
				/>,
			]}
		/>,
	)

	const menu = screen.getByRole("menu", { name: "About" })
	expect(menu.children).toHaveLength(1)

	const menuItem = screen.getAllByRole("menuitem")
	expect(menuItem).toHaveLength(1)
	expect(menuItem[0]).toHaveTextContent("Overview")
})

it("show menus with a MenuItem which has subMenu", async () => {
	const MENU_ITEM_WITH_SUBMENU = MENU_ITEMS_SAMPLE[1]
	render(
		<SubMenu
			ariaLabel="About"
			subMenuItems={[
				<SubMenuItem
					key={MENU_ITEM_WITH_SUBMENU.title}
					title={MENU_ITEM_WITH_SUBMENU.title}
					hasSubSubMenu={MENU_ITEM_WITH_SUBMENU.hasSubMenu}
				/>,
			]}
		/>,
	)

	const menuItem = screen.getAllByRole("menuitem")
	expect(menuItem).toHaveLength(1)
	expect(menuItem[0]).toHaveTextContent("Facts")
})
