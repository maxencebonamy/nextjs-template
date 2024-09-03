import type { PropsWithChildren, ReactNode } from "react"

const AppLayout = ({ children }: PropsWithChildren): ReactNode => {
	return (
		<>
			{ children }
		</>
	)
}

export default AppLayout
