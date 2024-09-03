import { expect, test } from "vitest"
import { cn } from "."

test("cn with two simple strings", () => {
	expect(cn("text-center", "text-blue-500")).toBe("text-center text-blue-500")
})

test("cn with a string and a condition object", () => {
	expect(cn("text-center", { "text-blue-500": true })).toBe("text-center text-blue-500")
})
