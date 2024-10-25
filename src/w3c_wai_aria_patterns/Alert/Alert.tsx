import { useState } from "react"

export const Alert = () => {
	const [isAlertVisible, setIsAlertVisible] = useState(false)

	return (
		<div>
			<button type="button" onClick={() => setIsAlertVisible(!isAlertVisible)}>
				Show alert
			</button>
			<div role="alert" hidden={!isAlertVisible}>
				<p>This is an alert</p>
			</div>
		</div>
	)
}
