import React from "react";
import { Button } from "@material-ui/core";

export const JournalDelete = ({ handleDelete }) => {
	return (
		<div>
			<Button onClick={handleDelete}>Delete Journal</Button>
		</div>
	);
};
