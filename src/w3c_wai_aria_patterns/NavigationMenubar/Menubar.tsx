import { useState } from "react"
import { Menuitem } from "./Menuitem"
import SubMenu from "./SubMenu"
import { SubMenuItem } from "./SubMenuItem"
import { Separator } from "./Separator"

export const Menubar = () => {
	return (
		<nav aria-label="W3C Patterns sample">
			<ul className="flex" role="menubar" aria-label="W3C Patterns sample">
				<li role="presentation" className="p-2">
					<Menuitem title="Home" />
				</li>
				<li role="presentation" className="p-2">
					<Menuitem title="About" hasSubMenu={true} />
					<SubMenu
						ariaLabel="About"
						subMenuItems={[
							<SubMenuItem key="overview" title="Overview" />,
							<SubMenuItem key="administration" title="Administration" />,
							<SubMenuItem key="facts" title="Facts" hasSubSubMenu={true} />,
							<SubMenuItem
								key="Campus Tours"
								title="Campus Tours"
								hasSubSubMenu={true}
							/>,
						]}
					/>
				</li>
				<li role="presentation" className="p-2">
					<Menuitem title="Admissions" hasSubMenu={true} />
					<SubMenu
						ariaLabel="Admissions"
						subMenuItems={[
							<SubMenuItem key="Apply" title="Apply" />,
							<SubMenuItem
								key="Undergraduate"
								title="Undergraduate"
								hasSubSubMenu={true}
							/>,
							<SubMenuItem key="Sign Up" title="Sign Up" />,
							<Separator key="separator" />,
							<SubMenuItem key="Visit" title="Visit" />,
							<SubMenuItem key="Photo Tour" title="Photo Tour" />,
							<SubMenuItem key="Connect" title="Connect" />,
						]}
					/>
					{/* <ul role="menu" aria-label="Admissions">
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
					</ul> */}
				</li>
				<li role="presentation" className="p-2">
					<Menuitem title="Academics" hasSubMenu={true} />
					<SubMenu
						ariaLabel="Academics"
						subMenuItems={[
							<SubMenuItem
								key="Colleges & Schools"
								title="Colleges & Schools"
							/>,
							<SubMenuItem key="Programs of Study" title="Programs of Study" />,
							<SubMenuItem key="Honors Programs" title="Honors Programs" />,
							<SubMenuItem key="Online Courses" title="Online Courses" />,
							<Separator key="separator" />,
							<SubMenuItem key="Course Explorer" title="Course Explorer" />,
							<SubMenuItem
								key="Register for className"
								title="Register for className"
							/>,
							<SubMenuItem key="Academic Calendar" title="Academic Calendar" />,
							<SubMenuItem key="Transcripts" title="Transcripts" />,
						]}
					/>
					{/* <ul role="menu" id="sub-menu-academics" aria-label="Academics">
					</ul> */}
				</li>
			</ul>
		</nav>
	)
}
