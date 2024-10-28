import { render, screen, within } from "@testing-library/react"
import { Accordion } from "./Accordion"
import userEvent from "@testing-library/user-event"

it("show first Accordion", () => {
	const firstLabel = "Personal Information"
	render(<Accordion />)
	expect(screen.getByRole("heading", { name: firstLabel })).toBeVisible()

	const firstPanel = screen.getByRole("button", {
		name: firstLabel,
	})
	expect(firstPanel).toHaveAttribute("aria-expanded", "true")
	expect(firstPanel).toHaveAttribute("aria-controls", "sect1")

	const firstPanelContent = screen.getByRole("region", {
		name: firstLabel,
	})
	expect(within(firstPanelContent).getByRole("group").children).toHaveLength(6)
})

it("show second Accordion", async () => {
	const secondLabel = "Billing Address"

	render(<Accordion />)
	expect(screen.getByRole("heading", { name: secondLabel })).toBeVisible()

	const secondPanel = screen.getByRole("button", { name: secondLabel })
	expect(secondPanel).toHaveAttribute("aria-expanded", "false")
	expect(secondPanel).toHaveAttribute("aria-controls", "sect2")

	await userEvent.click(secondPanel)
	const secondPanelContent = screen.getByRole("region", {
		name: secondLabel,
	})
	expect(within(secondPanelContent).getByRole("group").children).toHaveLength(5)
})

it("show third Accordion", async () => {
	const thirdLabel = "Shipping Address"

	render(<Accordion />)
	expect(screen.getByRole("heading", { name: thirdLabel })).toBeVisible()

	const thirdPanel = screen.getByRole("button", { name: thirdLabel })
	expect(thirdPanel).toHaveAttribute("aria-expanded", "false")
	expect(thirdPanel).toHaveAttribute("aria-controls", "sect3")

	await userEvent.click(thirdPanel)
	const thirdPanelContent = screen.getByRole("region", {
		name: thirdLabel,
	})
	expect(within(thirdPanelContent).getByRole("group").children).toHaveLength(5)
})
