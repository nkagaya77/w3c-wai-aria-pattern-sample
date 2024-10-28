import { useState } from "react"

export const Accordion = () => {
	const [isFirstPanelOpen, setIsFirstPanelOpen] = useState(true)
	const [isSecondPanelOpen, setIsSecondPanelOpen] = useState(false)
	const [isThirdPanelOpen, setIsThirdPanelOpen] = useState(false)

	return (
		<div
			id="accordionGroup"
			className="m-0 p-0 border-2 border-gray-700 rounded-lg w-80"
		>
			<h3 className="m-0 p-0">
				<button
					type="button"
					aria-expanded={isFirstPanelOpen}
					className="bg-none block m-0 py-4 px-6 relative align-left w-full border border-none rounded-t-lg"
					aria-controls="sect1"
					id="accordion1id"
					onClick={() => setIsFirstPanelOpen(!isFirstPanelOpen)}
				>
					<span className="block border-2 border-transparent rounded-md p-0.5">
						Personal Information
						<span
							className={`border-current border-r-2 border-b-2 absolute right-8 top-1/2 w-2 h-2 
								${isFirstPanelOpen ? "-rotate-135 -translate-y-1/2" : "rotate-45 -translate-y-3/4"}`}
						/>
					</span>
				</button>
			</h3>
			<section
				id="sect1"
				aria-labelledby="accordion1id"
				className={`m-0 py-4 px-6 border-t border-gray-700 ${isFirstPanelOpen ? "" : "hidden"}`}
			>
				<div>
					<fieldset className="m-0 p-0">
						<p className="py-2">
							<label htmlFor="cufc1">
								Name
								<span aria-hidden="true">*</span>:
							</label>
							<input
								type="text"
								value=""
								name="Name"
								id="cufc1"
								className="border border-gray-500 rounded-md block py-1 px-2"
								aria-required="true"
							/>
						</p>
						<p className="py-2">
							<label htmlFor="cufc2">
								Email
								<span aria-hidden="true">*</span>:
							</label>
							<input
								type="text"
								value=""
								name="Email"
								id="cufc2"
								className="border border-gray-500 rounded-md block py-1 px-2"
								aria-required="true"
							/>
						</p>
						<p className="py-2">
							<label htmlFor="cufc3">Phone:</label>
							<input
								type="text"
								value=""
								name="Phone"
								id="cufc3"
								className="border border-gray-500 rounded-md block py-1 px-2"
							/>
						</p>
						<p className="py-2">
							<label htmlFor="cufc4">Extension:</label>
							<input
								type="text"
								value=""
								name="Ext"
								id="cufc4"
								className="border border-gray-500 rounded-md block py-1 px-2"
							/>
						</p>
						<p className="py-2">
							<label htmlFor="cufc5">Country:</label>
							<input
								type="text"
								value=""
								name="Country"
								id="cufc5"
								className="border border-gray-500 rounded-md block py-1 px-2"
							/>
						</p>
						<p className="py-2">
							<label htmlFor="cufc6">City/Province:</label>
							<input
								type="text"
								value=""
								name="City_Province"
								id="cufc6"
								className="border border-gray-500 rounded-md block py-1 px-2"
							/>
						</p>
					</fieldset>
				</div>
			</section>
			<h3 className="m-0 p-0 border-t border-gray-700">
				<button
					type="button"
					aria-expanded={isSecondPanelOpen}
					className="bg-none block m-0 py-4 px-6 relative align-left w-full border border-none"
					aria-controls="sect2"
					id="accordion2id"
					onClick={() => setIsSecondPanelOpen(!isSecondPanelOpen)}
				>
					<span className="block border-2 border-transparent rounded-md p-0.5">
						Billing Address
						<span
							className={`border-current border-r-2 border-b-2 absolute right-8 top-1/2 w-2 h-2 
								${isSecondPanelOpen ? "-rotate-135 -translate-y-1/2" : "rotate-45 -translate-y-3/4"}`}
						/>
					</span>
				</button>
			</h3>
			<section
				id="sect2"
				aria-labelledby="accordion2id"
				className={`m-0 py-4 px-6 border-t border-gray-700 ${isSecondPanelOpen ? "" : "hidden"}`}
			>
				<div>
					<fieldset className="m-0 p-0">
						<p className="py-2">
							<label htmlFor="b-add1">Address 1:</label>
							<input
								type="text"
								value=""
								name="b-add1"
								id="b-add1"
								className="border border-gray-500 rounded-md block py-1 px-2"
							/>
						</p>
						<p className="py-2">
							<label htmlFor="b-add2">Address 2:</label>
							<input
								type="text"
								value=""
								name="b-add2"
								id="b-add2"
								className="border border-gray-500 rounded-md block py-1 px-2"
							/>
						</p>
						<p className="py-2">
							<label htmlFor="b-city">City:</label>
							<input
								type="text"
								value=""
								name="b-city"
								id="b-city"
								className="border border-gray-500 rounded-md block py-1 px-2"
							/>
						</p>
						<p className="py-2">
							<label htmlFor="b-state">State:</label>
							<input
								type="text"
								value=""
								name="b-state"
								id="b-state"
								className="border border-gray-500 rounded-md block py-1 px-2"
							/>
						</p>
						<p className="py-2">
							<label htmlFor="b-zip">Zip Code:</label>
							<input
								type="text"
								value=""
								name="b-zip"
								id="b-zip"
								className="border border-gray-500 rounded-md block py-1 px-2"
							/>
						</p>
					</fieldset>
				</div>
			</section>
			<h3 className="m-0 p-0 border-t border-gray-700">
				<button
					type="button"
					aria-expanded={isThirdPanelOpen}
					className="bg-none block m-0 py-4 px-6 relative align-left w-full border border-none rounded-b-lg"
					aria-controls="sect3"
					id="accordion3id"
					onClick={() => setIsThirdPanelOpen(!isThirdPanelOpen)}
				>
					<span className="block border-2 border-transparent rounded-md p-0.5">
						Shipping Address
						<span
							className={`border-current border-r-2 border-b-2 absolute right-8 top-1/2 w-2 h-2 
								${isThirdPanelOpen ? "-rotate-135 -translate-y-1/2" : "rotate-45 -translate-y-3/4"}`}
						/>
					</span>
				</button>
			</h3>
			<section
				id="sect3"
				aria-labelledby="accordion3id"
				className={`m-0 py-4 px-6 border-t border-gray-700 ${isThirdPanelOpen ? "" : "hidden"}`}
			>
				<div>
					<fieldset className="m-0 p-0">
						<p className="py-2">
							<label htmlFor="m-add1">Address 1:</label>
							<input
								type="text"
								value=""
								name="m-add1"
								id="m-add1"
								className="border border-gray-500 rounded-md block py-1 px-2"
							/>
						</p>
						<p className="py-2">
							<label htmlFor="m-add2">Address 2:</label>
							<input
								type="text"
								value=""
								name="m-add2"
								id="m-add2"
								className="border border-gray-500 rounded-md block py-1 px-2"
							/>
						</p>
						<p className="py-2">
							<label htmlFor="m-city">City:</label>
							<input
								type="text"
								value=""
								name="m-city"
								id="m-city"
								className="border border-gray-500 rounded-md block py-1 px-2"
							/>
						</p>
						<p className="py-2">
							<label htmlFor="m-state">State:</label>
							<input
								type="text"
								value=""
								name="m-state"
								id="m-state"
								className="border border-gray-500 rounded-md block py-1 px-2"
							/>
						</p>
						<p className="py-2">
							<label htmlFor="m-zip">Zip Code:</label>
							<input
								type="text"
								value=""
								name="m-zip"
								id="m-zip"
								className="border border-gray-500 rounded-md block py-1 px-2"
							/>
						</p>
					</fieldset>
				</div>
			</section>
		</div>
	)
}
