import { render, screen } from "@testing-library/react"
import { Button } from "./Button"

it("show action button", () => {
	const onClick = vi.fn()
	render(<Button onClick={onClick} />)

	expect(screen.getByRole("button", { name: "Print Page" })).toBeInTheDocument()
})

it("show toggle button", () => {
	const onClick = vi.fn()
	render(<Button onClick={onClick} />)

	const toggleButton = screen.getByRole("button", { name: "Mute" })
	expect(toggleButton).toBeInTheDocument()
	expect(toggleButton).toHaveAccessibleName("Mute")
	expect(toggleButton).toHaveAttribute("aria-pressed", "false")
})
