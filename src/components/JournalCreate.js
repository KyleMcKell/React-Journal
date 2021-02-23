import { Button, Grid } from "@material-ui/core";
import React from "react";

export const JournalCreate = ({ handleSubmit }) => {
	return (
		<Grid container>
			<form onSubmit={handleSubmit}>
				<Grid item>
					<label htmlFor="title">Journal Title:</label>
					<input type="text" id="title" name="title" />
				</Grid>
				<Grid item>
					<label htmlFor="entryText">Write here:</label>
					<textarea type="text" id="entryText" name="entryText" />
				</Grid>
				<Grid item>
					<Button variant="contained" color="primary" type="submit">
						Submit
					</Button>
				</Grid>
			</form>
		</Grid>
	);
};
