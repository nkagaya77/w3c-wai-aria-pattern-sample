import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Alert } from "./Alert"

it("show alert component", async () => {
	render(<Alert />)

	const alertButton = screen.getByRole("button")
	expect(screen.queryByRole("alert")).not.toBeInTheDocument()

	await userEvent.click(alertButton)

	expect(screen.getByRole("alert")).toBeVisible()
	expect(screen.getByRole("alert")).toHaveTextContent("This is an alert")
})
