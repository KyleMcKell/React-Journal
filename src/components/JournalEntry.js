import { Container } from "@material-ui/core";
import React from "react";
import { Button } from "@material-ui/core";

export const JournalEntry = ({ entry, handleDelete }) => {
	const title = entry.title;
	const date = entry.date;
	const entryText = entry.entryText;

	return (
		<Container>
			<h1>{title}</h1>
			<h2>{date}</h2>
			<p>{entryText}</p>
			<Button onClick={() => handleDelete(entry)}>Delete</Button>
		</Container>
	);
};
