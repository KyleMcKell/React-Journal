import { Container } from "@material-ui/core";
import React, { useState } from "react";
import { JournalEntry } from "./JournalEntry";

export const Journal = () => {
	const [entries, setEntries] = useState([
		{
			title: "hi, this is a title",
			date: "January 1 2021",
			text: "Today I wrote a journal",
		},
		{
			title: "this is a second entry",
			date: "January 3 2021",
			text: "Today I wrote another journal",
		},
	]);

	return (
		<Container>
			{entries.map((entry) => {
				return <JournalEntry entry={entry} />;
			})}
		</Container>
	);
};
