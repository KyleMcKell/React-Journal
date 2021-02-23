import React from "react";

export const JournalDelete = ({ handleDelete, entryKey }) => {
	return (
		<div>
			<button
				className="bg-red-700 text-gray-100 p-2 rounded m-2"
				onClick={() => handleDelete(entryKey)}
			>
				Delete Journal
			</button>
		</div>
	);
};
