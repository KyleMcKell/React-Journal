import React from "react";
import { Button } from "@material-ui/core";

export const JournalDelete = ({ handleDelete, entryKey }) => {
	return (
		<div>
			<Button onClick={() => handleDelete(entryKey)}>Delete Journal</Button>
		</div>
	);
};
