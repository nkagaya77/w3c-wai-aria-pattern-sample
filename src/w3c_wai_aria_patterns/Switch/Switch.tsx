import { useState } from "react"

export const Switch = () => {
	const [isSwitchOn, setIsSwitchOn] = useState(false)

	return (
		<div>
			<button
				type="button"
				role="switch"
				aria-checked={isSwitchOn}
				className="group/switch py-2 px-4 cursor-pointer"
				onClick={() => setIsSwitchOn(!isSwitchOn)}
			>
				<span className="inline-block">Notifications</span>
				<span className="ml-3 relative inline-block top-1 border-2 border-black rounded-xl h-5 w-10">
					<span className="absolute top-0.5 left-0.5 inline-block border-2 border-black rounded-lg h-3 w-3 bg-black group-aria-checked/switch:left-[21px] group-aria-checked/switch:bg-green-500 group-aria-checked/switch:border-green-500" />
				</span>
				<span
					className="ml-1 hidden group-aria-checked/switch:inline"
					aria-hidden="true"
				>
					On
				</span>
				<span
					className="ml-1 inline group-aria-checked/switch:hidden"
					aria-hidden="true"
				>
					Off
				</span>
			</button>
		</div>
	)
}
