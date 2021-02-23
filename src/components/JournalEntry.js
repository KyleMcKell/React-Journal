import React from "react";
import { JournalDelete } from "./JournalDelete";

export const JournalEntry = ({ entry, handleDelete }) => {
	const title = entry.title;
	const date = entry.date;
	const entryText = entry.entryText;

	return (
		<div className="rounded-xl flex justify-between bg-gray-400 m-4 p-4 w-1/2">
			<div className="flex flex-col items-center w-1/3">
				<h2 className="font-semibold text-xl">{title}</h2>
				<h3>{date}</h3>
				<JournalDelete handleDelete={() => handleDelete(entry)} />
			</div>
			<div className="rounded-xl bg-gray-200 w-2/3 p-4">
				<p>{entryText}</p>
			</div>
			<div></div>
		</div>
	);
};
