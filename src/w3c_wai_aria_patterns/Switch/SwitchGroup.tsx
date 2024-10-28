import { useState } from "react"

export const SwitchGroup = () => {
	const [isFirstSwitchOn, setsFirstSwitchOn] = useState(false)
	const [isSecondSwitchOn, setIsSecondSwitchOn] = useState(false)

	return (
		<fieldset aria-labelledby="id-group-label">
			<h3 id="id-group-label" className="text-xl font-bold">
				Environmental Controls
			</h3>
			<button
				type="button"
				role="switch"
				className="group/switch block m-2 py-2 px-4 border-0 rounded- cursor-pointer w-[17em] h-[3em] align-left bg-white text-black"
				aria-checked={isFirstSwitchOn}
				onClick={() => setsFirstSwitchOn(!isFirstSwitchOn)}
			>
				<span className="relative inline-block p-0 m-0 w-[10em] align-middle">
					Living Room Lights
				</span>
				<svg
					aria-hidden="true"
					className="inline-block relative align-middle"
					xmlns="http://www.w3.org/2000/svg"
					height="20"
					width="36"
				>
					<title>Living Room Lights Switch Icon</title>
					<rect
						className="fill-opacity-0 stroke-2 stroke-current"
						x="1"
						y="1"
						width="34"
						height="18"
						rx="4"
					/>
					<rect
						className="block stroke-current fill-current opacity-1 group-aria-checked/switch:hidden"
						x="4"
						y="4"
						width="12"
						height="12"
						rx="4"
					/>
					<rect
						className="hidden group-aria-checked/switch:block stroke-current fill-current fill-opacity-1 color-green-500"
						x="20"
						y="4"
						width="12"
						height="12"
						rx="4"
					/>
				</svg>
				<span
					className="hidden group-aria-checked/switch:inline-block ml-1"
					aria-hidden="true"
				>
					On
				</span>
				<span
					className="inline-block group-aria-checked/switch:hidden ml-1"
					aria-hidden="true"
				>
					Off
				</span>
			</button>

			<button
				type="button"
				role="switch"
				className="group/switch block m-2 py-2 px-4 border-0 rounded- cursor-pointer w-[17em] h-[3em] align-left bg-white text-black"
				aria-checked={isSecondSwitchOn}
				onClick={() => setIsSecondSwitchOn(!isSecondSwitchOn)}
			>
				<span className="relative inline-block p-0 m-0 w-[10em] align-middle">
					Outdoor Lights
				</span>
				<svg
					aria-hidden="true"
					className="inline-block relative align-middle"
					xmlns="http://www.w3.org/2000/svg"
					height="20"
					width="36"
				>
					<title>Outdoor Lights Switch Icon</title>
					<rect
						className="fill-opacity-0 stroke-2 stroke-current"
						x="1"
						y="1"
						width="34"
						height="18"
						rx="4"
					/>
					<rect
						className="block stroke-current fill-current opacity-1 group-aria-checked/switch:hidden"
						x="4"
						y="4"
						width="12"
						height="12"
						rx="4"
					/>
					<rect
						className="hidden group-aria-checked/switch:block stroke-current fill-current fill-opacity-1 color-green-500"
						x="20"
						y="4"
						width="12"
						height="12"
						rx="4"
					/>
				</svg>
				<span
					className="hidden group-aria-checked/switch:inline-block ml-1"
					aria-hidden="true"
				>
					On
				</span>
				<span
					className="inline-block group-aria-checked/switch:hidden ml-1"
					aria-hidden="true"
				>
					Off
				</span>
			</button>
		</fieldset>
	)
}
