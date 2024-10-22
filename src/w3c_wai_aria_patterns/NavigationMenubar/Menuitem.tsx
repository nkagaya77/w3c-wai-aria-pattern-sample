import { useState } from "react"

type Props = {
	title: string
	hasSubMenu?: boolean
}

export const Menuitem = ({ title, hasSubMenu = false }: Props) => {
	const [isExpanded, setIsExpanded] = useState(false)

	const conditionalAttributes = hasSubMenu
		? {
				"aria-haspopup": true,
				"aria-expanded": isExpanded,
			}
		: {
				"aria-current": "page" as const,
			}

	return (
		<button
			type="button"
			role="menuitem"
			{...conditionalAttributes}
			onClick={() => setIsExpanded(!isExpanded)}
			className="peer group flex items-center gap-1 aria-current:border-b-1 border-sky-700"
		>
			{title}
			{hasSubMenu && (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
					className="group-aria-expanded:rotate-180 transform transition-transform duration-0"
					width="12"
					height="9"
					viewBox="0 0 12 9"
				>
					<title>down</title>
					<polygon points="1 0, 11 0, 6 8" />
				</svg>
			)}
		</button>
	)
}
