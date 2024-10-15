import { render, screen, within } from "@testing-library/react";
import { expect, test } from "vitest";
import { NavigationMenubar } from "./NavigationMenubar";

test("show header", () => {
	render(<NavigationMenubar />);

	const header = screen.getByRole("banner");
	expect(within(header).getByText("W3C Patterns sample")).toBeVisible();
});

test("show content", () => {
	render(<NavigationMenubar />);

	expect(
		screen.getByRole("region", { name: "Mythical University" }),
	).toBeVisible();
});

test("show footer", () => {
	render(<NavigationMenubar />);

	const footer = screen.getByRole("contentinfo");
	expect(within(footer).getByText("W3C Patterns sample")).toBeVisible();
});
