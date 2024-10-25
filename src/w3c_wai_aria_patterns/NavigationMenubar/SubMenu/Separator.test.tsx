import { render, screen } from "@testing-library/react"
import { Separator } from "./Separator"

it("has the correct class names", () => {
	render(<Separator />)

	expect(screen.getByRole("separator")).toBeVisible()
})
