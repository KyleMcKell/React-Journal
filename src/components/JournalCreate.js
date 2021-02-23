import React from "react";

export const JournalCreate = ({ handleSubmit }) => {
	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col items-center w-1/2 text-gray-300"
		>
			<div className="flex flex-col justify-center w-full">
				<label htmlFor="title">Journal Title:</label>
				<input
					className="rounded text-black px-2"
					type="text"
					id="title"
					name="title"
				/>
			</div>
			<div className="flex flex-col w-full">
				<label htmlFor="entryText">Write here:</label>
				<textarea
					className="rounded text-black p-2"
					type="text"
					id="entryText"
					name="entryText"
				/>
			</div>
			<div>
				<button
					className="bg-green-700 text-gray-100 p-2 rounded m-2"
					type="submit"
				>
					Add Journal
				</button>
			</div>
		</form>
	);
};
