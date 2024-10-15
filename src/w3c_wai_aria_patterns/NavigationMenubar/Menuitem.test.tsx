import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Menuitem } from "./Menuitem";

test("show menuitem", async () => {
	render(<Menuitem />);

	const menuitem = screen.getByRole("menuitem", { name: "About" });
	expect(menuitem).toBeVisible();
	expect(menuitem).toHaveAttribute("aria-haspopup", "true");
	expect(menuitem).toHaveAttribute("aria-expanded", "false");
});
