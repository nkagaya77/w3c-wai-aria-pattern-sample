import { useState } from "react";

type Props = {
	title: string;
	hasSubMenu?: boolean;
};

export const Menuitem = ({ title, hasSubMenu = false }: Props) => {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<button
			type="button"
			role="menuitem"
			aria-haspopup={hasSubMenu ? "true" : "false"}
			aria-expanded={isExpanded}
			onClick={() => setIsExpanded(!isExpanded)}
			className="peer group flex items-center gap-1"
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
	);
};
