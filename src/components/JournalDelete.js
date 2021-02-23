import React from "react";

export const JournalDelete = ({ handleDelete, entryKey }) => {
	return (
		<div>
			<button onClick={() => handleDelete(entryKey)}>Delete Journal</button>
		</div>
	);
};
