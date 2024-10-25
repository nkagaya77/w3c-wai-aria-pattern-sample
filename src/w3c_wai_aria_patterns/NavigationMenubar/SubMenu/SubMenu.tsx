import type { SubMenuItem } from "./SubMenuItem"
import type { Separator } from "./Separator"

type Props = {
	ariaLabel: string
	subMenuItems?: React.ReactElement<typeof SubMenuItem | typeof Separator>[]
}

export const SubMenu = ({ ariaLabel, subMenuItems }: Props) => {
	return (
		<ul
			role="menu"
			aria-label={ariaLabel}
			className="hidden peer-aria-expanded:block absolute l-0 border border-2 border-sky-700 bg-gray-100 p-2 space-y-2 underline underline-offset-1"
		>
			{subMenuItems?.map((item) => (
				<li role="presentation" key={item.key}>
					{item}
				</li>
			))}
			{/* 
			<li role="presentation">
				<button
					type="button"
					role="menuitem"
					aria-haspopup="true"
					aria-expanded={isFactsMenuChildItemExpanded}
					onClick={() =>
						setisFactsMenuChildItemExpanded(!isFactsMenuChildItemExpanded)
					}
					className="peer group flex items-center gap-1"
				>
					Facts
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
				</button>
				<ul
					role="menu"
					aria-label="Facts"
					className="hidden peer-aria-expanded:block absolute l-0 border border-2 border-sky-700 bg-gray-100 p-2 space-y-2 underline underline-offset-1"
				>
					<li role="presentation">
						<a role="menuitem" href="#history">
							History
						</a>
					</li>
					<li role="presentation">
						<a role="menuitem" href="#current-statistics">
							Current Statistics
						</a>
					</li>
					<li role="presentation">
						<a role="menuitem" href="#awards">
							Awards
						</a>
					</li>
				</ul>
			</li>
			<li role="presentation">
				<button
					type="button"
					role="menuitem"
					aria-haspopup="true"
					aria-expanded={isCampusToursMenuChildItemExpanded}
					onClick={() =>
						setIsCampusToursMenuChildItemExpanded(
							!isCampusToursMenuChildItemExpanded,
						)
					}
					className="peer group flex items-center gap-1"
				>
					Campus Tours
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
				</button>
				<ul
					role="menu"
					aria-label="Campus Tours"
					className="hidden peer-aria-expanded:block absolute l-0 border border-2 border-sky-700 bg-gray-100 p-2 space-y-2 underline underline-offset-1"
				>
					<li role="presentation">
						<a role="menuitem" href="#for-prospective-students">
							For prospective students
						</a>
					</li>
					<li role="presentation">
						<a role="menuitem" href="#for-alumni">
							For alumni
						</a>
					</li>
					<li role="presentation">
						<a role="menuitem" href="#for-visitors">
							For visitors
						</a>
					</li>
				</ul>
			</li> */}
		</ul>
	)
}

export default SubMenu
