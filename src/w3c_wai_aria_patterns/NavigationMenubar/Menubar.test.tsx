import { Menubar } from "./Menubar";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

test("show navigation", () => {
	render(<Menubar />);

	expect(
		screen.getByRole("navigation", { name: "W3C Patterns sample" }),
	).toBeVisible();
});

test("show menubar", async () => {
	render(<Menubar />);

	expect(
		screen.getByRole("menubar", { name: "W3C Patterns sample" }),
	).toBeVisible();

	expect(screen.getByRole("menuitem", { name: "Home" })).toHaveAttribute(
		"aria-current",
		"page",
	);
	const menuitems = await screen.findAllByRole("menuitem", { hidden: true });
	const nonCurrentMenuItems = menuitems.filter(
		(menuitem) =>
			!menuitem.hasAttribute("aria-current") && menuitem.children.length > 0,
	);
	for (const menuitem of nonCurrentMenuItems) {
		expect(menuitem).toHaveAttribute("aria-haspopup", "true");
		expect(menuitem).toHaveAttribute("aria-expanded", "false");
	}
});

test("show submenu", async () => {
	render(<Menubar />);

	expect(screen.getByRole("menu", { name: "About" })).toBeVisible();
	expect(screen.getByRole("menu", { name: "Facts" })).toBeVisible();
	expect(screen.getByRole("menu", { name: "Campus Tours" })).toBeVisible();
	expect(screen.getByRole("menu", { name: "Admissions" })).toBeVisible();
	expect(screen.getByRole("menu", { name: "Tuition" })).toBeVisible();
	expect(screen.getByRole("menu", { name: "Academics" })).toBeVisible();
});
