import React from "react";
import { JournalDelete } from "./JournalDelete";

export const JournalEntry = ({ entry, handleDelete }) => {
	const title = entry.title;
	const date = entry.date;
	const entryText = entry.entryText;

	return (
		<div>
			<h2>{title}</h2>
			<h3>{date}</h3>
			<p>{entryText}</p>
			<JournalDelete handleDelete={() => handleDelete(entry)} />
		</div>
	);
};
