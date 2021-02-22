import { Container } from "@material-ui/core";
import React from "react";
import { JournalEntry } from "./JournalEntry";
import { JournalCreate } from "./JournalCreate";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorageState } from "../utils/useLocalStorageState";

export const Journal = () => {
	const [entries, setEntries] = useLocalStorageState("journal-entries", [
		{
			title: "hi, this is a title",
			date: "January 1 2021",
			entryText: "Today I wrote a journal",
		},
		{
			title: "this is a second entry",
			date: "January 3 2021",
			entryText: "Today I wrote another journal",
		},
	]);

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(event);
		const newTitle = event.target.elements.title.value;
		const newEntryText = event.target.elements.entryText.value;
		const newEntry = {
			title: newTitle,
			date: "Date Date Date", //todo add date capabilities
			entryText: newEntryText,
		};
		setEntries([...entries, newEntry]);
	};

	return (
		<div>
			<Container>
				{entries.map((entry) => {
					return <JournalEntry key={uuidv4()} entry={entry} />;
				})}
			</Container>
			<JournalCreate handleSubmit={handleSubmit} />
		</div>
	);
};
