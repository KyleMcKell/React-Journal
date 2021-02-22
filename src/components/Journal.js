import { Container } from "@material-ui/core";
import React from "react";
import { JournalEntry } from "./JournalEntry";
import { JournalCreate } from "./JournalCreate";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorageState } from "../utils/useLocalStorageState";

export const Journal = () => {
	const [entries, setEntries] = useLocalStorageState("journal-entries", [
		{
			title: "This is an example Journal",
			date: "1/1/0001",
			entryText: "Today I wrote a journal, yay!",
		},
	]);

	const handleSubmitCreate = (event) => {
		event.preventDefault();
		const newTitle = event.target.elements.title.value;
		const newEntryText = event.target.elements.entryText.value;
		const newEntry = {
			title: newTitle,
			date: "Date Date Date", //todo add date capabilities
			entryText: newEntryText,
		};
		setEntries([...entries, newEntry]);
	};

	const handleDelete = (entry) => {
		setEntries(entries.filter((e) => e !== entry));
	};

	return (
		<div>
			<Container>
				{entries.map((entry) => {
					return (
						<JournalEntry
							key={uuidv4()}
							entry={entry}
							handleDelete={handleDelete}
						/>
					);
				})}
			</Container>
			<JournalCreate handleSubmit={handleSubmitCreate} />
		</div>
	);
};
