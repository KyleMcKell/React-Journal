import React from "react";

export const JournalDelete = ({ handleDelete, entryKey }) => {
	return (
		<div>
			<button
				variant="contained"
				color="secondary"
				onClick={() => handleDelete(entryKey)}
			>
				Delete Journal
			</button>
		</div>
	);
};
