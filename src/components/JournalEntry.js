import { Container } from "@material-ui/core";
import React from "react";
import { JournalDelete } from "./JournalDelete";

export const JournalEntry = ({ entry, handleDelete }) => {
	const title = entry.title;
	const date = entry.date;
	const entryText = entry.entryText;

	return (
		<Container>
			<h1>{title}</h1>
			<h2>{date}</h2>
			<p>{entryText}</p>
			<JournalDelete handleDelete={() => handleDelete(entry)} />
		</Container>
	);
};
