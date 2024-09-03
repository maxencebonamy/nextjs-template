import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "#/lib/style/globals.css"
import type { PropsWithChildren, ReactNode } from "react"
import Provider from "#/app/provider"

const font = Montserrat({ subsets: [ "latin" ] })

export const metadata: Metadata = {
	title: "Frontend Template",
	description: "Save time and effort with this template for frontend projects"
}

const RootLayout = ({ children }: Readonly<PropsWithChildren>): ReactNode => {
	return (
		<html lang="en">
			<body className={font.className}>
				<Provider>
					{ children }
				</Provider>
			</body>
		</html>
	)
}

export default RootLayout
