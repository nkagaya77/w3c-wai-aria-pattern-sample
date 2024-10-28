import "@testing-library/jest-dom/vitest"
import "vitest"
import * as matchers from "@testing-library/jest-dom/matchers"
import { cleanup } from "@testing-library/react"
import { afterEach, expect } from "vitest"
import "../output.css"
import "../index.css"

expect.extend(matchers)

afterEach(() => {
	cleanup()
})
