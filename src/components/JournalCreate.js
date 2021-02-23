import React from "react";

export const JournalCreate = ({ handleSubmit }) => {
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div item>
					<label htmlFor="title">Journal Title:</label>
					<input type="text" id="title" name="title" />
				</div>
				<div item>
					<label htmlFor="entryText">Write here:</label>
					<textarea type="text" id="entryText" name="entryText" />
				</div>
				<div item>
					<button variant="contained" color="primary" type="submit">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};
