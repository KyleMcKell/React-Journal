import React, { useState } from "react";
import { JournalEntry } from "./JournalEntry";

export const Journal = () => {
	const [entries, setEntries] = useState([]);

	return (
		<div>
			{entries.map((entry) => {
				return <JournalEntry entry={entry} />;
			})}
		</div>
	);
};
