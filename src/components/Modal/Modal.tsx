type modalProps = {
	setShowModal(): void,
};

export const Modal = ({ setShowModal }: modalProps)  => {

	return (
		<div>
			<div>
				<div>
					<button onClick={setShowModal}>Close</button>
				</div>
			</div>
		</div>
	)
}