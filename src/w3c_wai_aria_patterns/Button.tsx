interface ButtonProps {
	onClick: () => void;
}

export const Button = (props: ButtonProps) => {
	return (
		<div className="flex items-center flex-col">
			<p>
				This
				<q>Print</q>
				action button uses a<code>div</code>
				element.
			</p>
			<button
				type="button"
				id="action"
				onClick={props.onClick}
				className="rounded-md bg-sky-500 text-white p-2 align-middle"
			>
				Print Page
			</button>
			<p>
				This
				<q>Mute</q>
				toggle button uses an
				<code>a</code>
				element.
			</p>
			<button
				type="button"
				id="toggle"
				aria-pressed="false"
				onClick={props.onClick}
				className="rounded-md bg-violet-500 text-white p-2 align-middle flex items-center"
			>
				Mute
				<svg
					aria-hidden="true"
					focusable="false"
					height="20px"
					width="20px"
					className="ml-1"
				>
					<use href="#icon-sound" />
				</svg>
			</button>
			<svg
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				className="hidden"
				id="svg_definitions"
			>
				<title>SVG definitions</title>
				<defs>
					<symbol id="icon-mute" viewBox="0 0 75 75">
						<polygon
							id="polygon1"
							points="39.389,13.769 22.235,28.606 6,28.606 6,47.699 21.989,47.699 39.389,62.75 39.389,13.769"
							className="stroke-current stroke-[5] stroke-linejoin-round fill-current"
						/>
						<path
							id="path3003"
							d="M 48.651772,50.269646 69.395223,25.971024"
							className="fill-none stroke-current stroke-[5] stroke-linecap-round"
						/>
						<path
							id="path3003-1"
							d="M 69.395223,50.269646 48.651772,25.971024"
							className="fill-none stroke-current stroke-[5] stroke-linecap-round"
						/>
					</symbol>
					<symbol id="icon-sound" viewBox="0 0 75 75">
						<polygon
							points="39.389,13.769 22.235,28.606 6,28.606 6,47.699 21.989,47.699 39.389,62.75 39.389,13.769"
							className="stroke-current stroke-[5] stroke-linejoin-round fill-current"
						/>
						<path
							d="M 48.128,49.03 C 50.057,45.934 51.19,42.291 51.19,38.377 C 51.19,34.399 50.026,30.703 48.043,27.577"
							className="fill-none stroke-current stroke-[5] stroke-linecap-round"
						/>
						<path
							d="M 55.082,20.537 C 58.777,25.523 60.966,31.694 60.966,38.377 C 60.966,44.998 58.815,51.115 55.178,56.076"
							className="fill-none stroke-current stroke-[5] stroke-linecap-round"
						/>
						<path
							d="M 61.71,62.611 C 66.977,55.945 70.128,47.531 70.128,38.378 C 70.128,29.161 66.936,20.696 61.609,14.01"
							className="fill-none stroke-current stroke-[5] stroke-linecap-round"
						/>
					</symbol>
				</defs>
			</svg>
		</div>
	);
};
