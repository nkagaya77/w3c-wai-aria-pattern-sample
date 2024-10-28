import { Link } from "react-router-dom"

export const Home = () => {
	return (
		<>
			<ul className="grid grid-cols-3 gap-4 w-full">
				<li className="outline-2 bg-sky-300 h-24 rounded-lg text-center">
					<Link
						className="w-full h-full flex items-center justify-center"
						to="/button"
					>
						<span>Button</span>
					</Link>
				</li>
				<li className="outline-2 bg-sky-300 h-24 rounded-lg text-center">
					<Link
						className="w-full h-full flex items-center justify-center"
						to="/alert"
					>
						<span>Alert</span>
					</Link>
				</li>
				<li className="outline-2 bg-sky-300 h-24 rounded-lg text-center">
					<Link
						className="w-full h-full flex items-center justify-center"
						to="/switch"
					>
						<span>Switch</span>
					</Link>
				</li>
				<li className="outline-2 bg-sky-300 h-24 rounded-lg text-center">
					<Link
						className="w-full h-full flex items-center justify-center"
						to="/switchgroup"
					>
						<span>Switch Group</span>
					</Link>
				</li>
				<li className="outline-2 bg-sky-300 h-24 rounded-lg text-center">
					<Link
						className="w-full h-full flex items-center justify-center"
						to="/accordion"
					>
						<span>Accordion</span>
					</Link>
				</li>
			</ul>
		</>
	)
}
