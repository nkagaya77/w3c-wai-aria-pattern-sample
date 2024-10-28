import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Switch } from "./Switch"

it("show switch", async () => {
	render(<Switch />)

	const switchComponent = screen.getByRole("switch")
	expect(switchComponent).toBeVisible()
	expect(switchComponent).toHaveAttribute("aria-checked", "false")
	expect(screen.getByText("Off")).toBeVisible()
	expect(screen.getByText("On")).not.toBeVisible()

	await userEvent.click(switchComponent)

	expect(switchComponent).toHaveAttribute("aria-checked", "true")
	expect(screen.getByText("Off")).not.toBeVisible()
	expect(screen.getByText("On")).toBeVisible()
})
