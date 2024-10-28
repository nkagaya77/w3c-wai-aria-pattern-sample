import { render, screen, within } from "@testing-library/react"
import { SwitchGroup } from "./SwitchGroup"
import userEvent from "@testing-library/user-event"

it("show SwitchGroup", async () => {
	render(<SwitchGroup />)

	expect(
		screen.getByRole("group", {
			name: "Environmental Controls",
		}),
	).toBeVisible()
	expect(
		screen.getByRole("heading", {
			name: "Environmental Controls",
		}),
	).toBeVisible()

	const firstSwitch = screen.getByRole("switch", { name: "Living Room Lights" })
	expect(firstSwitch).toHaveAttribute("aria-checked", "false")
	expect(within(firstSwitch).getByText("Living Room Lights")).toBeVisible()

	const secondSwitch = screen.getByRole("switch", {
		name: "Outdoor Lights",
	})
	expect(secondSwitch).toHaveAttribute("aria-checked", "false")
	expect(within(secondSwitch).getByText("Outdoor Lights")).toBeVisible()
})

it("toggle SwitchGroup", async () => {
	render(<SwitchGroup />)

	const firstSwitch = screen.getByRole("switch", { name: "Living Room Lights" })
	const secondSwitch = screen.getByRole("switch", { name: "Outdoor Lights" })

	expect(firstSwitch).toHaveAttribute("aria-checked", "false")
	expect(secondSwitch).toHaveAttribute("aria-checked", "false")
	expect(within(firstSwitch).getByText("On")).not.toBeVisible()
	expect(within(firstSwitch).getByText("Off")).toBeVisible()
	expect(within(secondSwitch).getByText("On")).not.toBeVisible()
	expect(within(secondSwitch).getByText("Off")).toBeVisible()

	await userEvent.click(firstSwitch)
	expect(firstSwitch).toHaveAttribute("aria-checked", "true")
	expect(secondSwitch).toHaveAttribute("aria-checked", "false")
	expect(within(firstSwitch).getByText("On")).toBeVisible()
	expect(within(firstSwitch).getByText("Off")).not.toBeVisible()

	await userEvent.click(secondSwitch)
	expect(firstSwitch).toHaveAttribute("aria-checked", "true")
	expect(secondSwitch).toHaveAttribute("aria-checked", "true")
	expect(within(secondSwitch).getByText("On")).toBeVisible()
	expect(within(secondSwitch).getByText("Off")).not.toBeVisible()
})
