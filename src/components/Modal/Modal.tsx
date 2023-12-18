type modalProps = {
	setShowModal(): void,
};

export const Modal = ({ setShowModal }: modalProps)  => {

	return (
		<div className="inset-0 fixed bg-gray-100 opacity-80 z-10 flex justify-center items-center overflow-y-hidden">
			<div className="w-50 flex flex-col bg-neutral-50 items-center justify-center p-5 ">
				<div>
					<h1>My calendar modal</h1>
					<button onClick={setShowModal}>Close</button>
				</div>
			</div>
		</div>
	)
}