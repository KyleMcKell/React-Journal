import React from "react";
import { v4 as uuidv4 } from "uuid";
import { JournalEntry } from "./JournalEntry";
import { JournalCreate } from "./JournalCreate";
import { useLocalStorageState } from "../utils/useLocalStorageState";
import { dateFormatter } from "../utils/dateFormatter";

export const Journal = () => {
	const [entries, setEntries] = useLocalStorageState("journal-entries", [
		{
			title: "This is an example Journal",
			date: dateFormatter(),
			entryText: "Today I wrote a journal, yay!",
		},
	]);

	const handleSubmitCreate = (event) => {
		event.preventDefault();
		const newTitle = event.target.elements.title.value;
		const newEntryText = event.target.elements.entryText.value;
		event.target.elements.title.value = null;
		event.target.elements.entryText.value = null;
		if (newTitle && newEntryText) {
			const newEntry = {
				title: newTitle,
				date: dateFormatter(),
				entryText: newEntryText,
			};
			setEntries([newEntry, ...entries]);
		}
	};

	const handleDelete = (entry) => {
		setEntries(entries.filter((e) => e !== entry));
	};

	return (
		<div className="flex flex-col items-center justify-center h-auto w-full">
			<JournalCreate handleSubmit={handleSubmitCreate} />
			<div className="flex flex-col items-center w-full">
				{entries.map((entry) => {
					return (
						<JournalEntry
							key={uuidv4()}
							entry={entry}
							handleDelete={handleDelete}
						/>
					);
				})}
			</div>
		</div>
	);
};
