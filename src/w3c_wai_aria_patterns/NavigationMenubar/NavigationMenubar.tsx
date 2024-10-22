import { Menubar } from "./Menubar"

export const NavigationMenubar = () => {
	return (
		<div>
			<header className="bg-sky-500 text-white align-middle w-full text-4xl p-2">
				<div className="">W3C Patterns sample</div>
			</header>
			<Menubar />
			<div className="main">
				<section aria-labelledby="id-page-title">
					<h1 id="id-page-title" className="page_title">
						Mythical University
					</h1>
					<div className="content">
						<p></p>
					</div>
				</section>
			</div>
			<footer>W3C Patterns sample</footer>
		</div>
	)
}
