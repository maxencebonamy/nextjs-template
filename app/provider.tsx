"use client"

import { env } from "#/lib/env"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import type { PropsWithChildren, ReactNode } from "react"
import { createZodFetcher } from "zod-fetcher"

const queryClient = new QueryClient()

createZodFetcher({
	key: "example",
	baseUrl: env.NEXT_PUBLIC_EXAMPLE
})

const Provider = ({ children }: PropsWithChildren): ReactNode => {
	return (
		<QueryClientProvider client={queryClient}>
			{ children }
		</QueryClientProvider>
	)
}

export default Provider
