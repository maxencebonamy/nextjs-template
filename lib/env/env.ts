import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
	server: {
		EXAMPLE: z.string().min(1)
	},
	client: {
		NEXT_PUBLIC_EXAMPLE: z.string().min(1)
	},
	runtimeEnv: {
		EXAMPLE: process.env.EXAMPLE,
		NEXT_PUBLIC_EXAMPLE: process.env.NEXT_PUBLIC_EXAMPLE
	}
})
