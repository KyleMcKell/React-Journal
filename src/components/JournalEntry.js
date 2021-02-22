import { Container } from "@material-ui/core";
import React from "react";

export const JournalEntry = ({ entry }) => {
	const title = entry.title;
	const date = entry.date;
	const text = entry.text;

	return (
		<Container>
			<h1>{title}</h1>
			<h2>{date}</h2>
			<p>{text}</p>
		</Container>
	);
};
