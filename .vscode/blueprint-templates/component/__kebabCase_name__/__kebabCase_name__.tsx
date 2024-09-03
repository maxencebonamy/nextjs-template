import type { ReactNode } from "react"
import { cn } from "#/lib/utils/tailwind"
import type { {{pascalCase name}}Props } from "."

export const {{pascalCase name}} = ({ className }: {{pascalCase name}}Props): ReactNode => {
	const tailwind = cn(
		className
	)

	return (
		<div>
			
		</div>
	)
}
