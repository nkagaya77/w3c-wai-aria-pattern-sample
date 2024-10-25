import { useState } from "react"

type Props = {
	title: string
	hasSubSubMenu?: boolean
}

export const SubMenuItem = ({ title, hasSubSubMenu = false }: Props) => {
	const [isExpanded, setIsExpanded] = useState(false)

	const conditionalAttributes = hasSubSubMenu
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
			{hasSubSubMenu && (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
					className="group-aria-expanded:rotate-180 transform transition-transform duration-0"
					width="9"
					height="12"
					viewBox="0 0 9 12"
				>
					<title>right</title>
					<polygon points="0 1, 0 11, 8 6" />
				</svg>
			)}
		</button>
	)
}
