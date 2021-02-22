import React from "react";

export const JournalCreate = ({ handleSubmit }) => {
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="title">Journal Title:</label>
				<input type="text" id="title" name="title" />
				<label htmlFor="entryText">Write here:</label>
				<textarea type="text" id="entryText" name="entryText" />
				<button>Submit</button>
			</form>
		</div>
	);
};
