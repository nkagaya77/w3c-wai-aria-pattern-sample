import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Menuitem } from "./Menuitem";

test("show menuitem without submenu", async () => {
	render(<Menuitem title="Home" />);

	const menuitem = screen.getByRole("menuitem", { name: "Home" });
	expect(menuitem).toBeVisible();
	expect(menuitem).toHaveAttribute("aria-haspopup", "false");
	expect(menuitem).toHaveAttribute("aria-expanded", "false");

	expect(await screen.queryByTitle("down")).not.toBeInTheDocument();
});

test("show menuitem with submenu", async () => {
	render(<Menuitem title="About" hasSubMenu={true} />);

	const menuitem = screen.getByRole("menuitem", { name: "About" });
	expect(menuitem).toBeVisible();
	expect(menuitem).toHaveAttribute("aria-haspopup", "true");
	expect(menuitem).toHaveAttribute("aria-expanded", "false");

	expect(screen.getByTitle("down").parentElement).toBeVisible();
});
