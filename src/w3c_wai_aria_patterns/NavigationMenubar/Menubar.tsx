import { useState } from "react";
import { Menuitem } from "./Menuitem";

export const Menubar = () => {
	const [isFactsMenuChildItemExpanded, setisFactsMenuChildItemExpanded] =
		useState(false);
	const [
		isCampusToursMenuChildItemExpanded,
		setIsCampusToursMenuChildItemExpanded,
	] = useState(false);

	return (
		<nav aria-label="W3C Patterns sample">
			<ul className="flex" role="menubar" aria-label="W3C Patterns sample">
				<li role="presentation" className="p-2">
					<a
						role="menuitem"
						aria-current="page"
						className="aria-current:border-b-1 border-sky-700 "
						href="#home"
					>
						Home
					</a>
				</li>
				<li role="presentation" className="p-2">
					<Menuitem title="About" />
					<ul
						role="menu"
						aria-label="About"
						className="hidden peer-aria-expanded:block absolute l-0 border border-2 border-sky-700 bg-gray-100 p-2 space-y-2 underline underline-offset-1"
					>
						<li role="presentation">
							<a role="menuitem" href="#overview">
								Overview
							</a>
						</li>
						<li role="presentation">
							<a role="menuitem" href="#administration">
								Administration
							</a>
						</li>
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
						</li>
					</ul>
				</li>
				<li role="presentation" className="p-2">
					<button
						type="button"
						role="menuitem"
						aria-haspopup="true"
						aria-expanded="false"
						onClick={() => setisAboutMenuExpanded(!isAboutMenuExpanded)}
						className="peer"
					>
						Admissions
						<svg
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
							className="down"
							width="12"
							height="9"
							viewBox="0 0 12 9"
						>
							<title>down</title>
							<polygon points="1 0, 11 0, 6 8" />
						</svg>
					</button>
					<ul role="menu" aria-label="Admissions">
						<li role="presentation">
							<a role="menuitem" href="#apply">
								Apply
							</a>
						</li>
						<li role="presentation">
							<a
								role="menuitem"
								aria-haspopup="true"
								aria-expanded="false"
								href="#tuition"
							>
								Tuition
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="right"
									width="9"
									height="12"
									viewBox="0 0 9 12"
								>
									<title>right</title>
									<polygon points="0 1, 0 11, 8 6" />
								</svg>
							</a>
							<ul role="menu" aria-label="Tuition">
								<li role="presentation">
									<a role="menuitem" href="#undergraduate">
										Undergraduate
									</a>
								</li>
								<li role="presentation">
									<a role="menuitem" href="#graduate">
										Graduate
									</a>
								</li>
								<li role="presentation">
									<a role="menuitem" href="#professional-schools">
										Professional Schools
									</a>
								</li>
							</ul>
						</li>
						<li role="presentation">
							<a role="menuitem" href="#sign-up">
								Sign Up
							</a>
						</li>
						<li role="separator"></li>
						<li role="presentation">
							<a role="menuitem" href="#visit">
								Visit
							</a>
						</li>
						<li role="presentation">
							<a role="menuitem" href="#photo-tour">
								Photo Tour
							</a>
						</li>
						<li role="presentation">
							<a role="menuitem" href="#connect">
								Connect
							</a>
						</li>
					</ul>
				</li>
				<li role="presentation" className="p-2">
					<a
						role="menuitem"
						aria-haspopup="true"
						aria-expanded="false"
						href="#academics"
					>
						Academics
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="down"
							width="12"
							height="9"
							viewBox="0 0 12 9"
						>
							<title>down</title>
							<polygon points="1 0, 11 0, 6 8" />
						</svg>
					</a>
					<ul role="menu" id="sub-menu-academics" aria-label="Academics">
						<li role="presentation">
							<a role="menuitem" href="#colleges-and-schools">
								Colleges & Schools
							</a>
						</li>
						<li role="presentation">
							<a role="menuitem" href="#programs-of-study">
								Programs of Study
							</a>
						</li>
						<li role="presentation">
							<a role="menuitem" href="#honors-programs">
								Honors Programs
							</a>
						</li>
						<li role="presentation">
							<a role="menuitem" href="#online-courses">
								Online Courses
							</a>
						</li>
						<li role="separator"></li>
						<li role="presentation">
							<a role="menuitem" href="#course-explorer">
								Course Explorer
							</a>
						</li>
						<li role="presentation">
							<a role="menuitem" href="#register-for-className">
								Register for className
							</a>
						</li>
						<li role="presentation">
							<a role="menuitem" href="#academic-calendar">
								Academic Calendar
							</a>
						</li>
						<li role="presentation">
							<a role="menuitem" href="#tanscripts">
								Transcripts
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	);
};
