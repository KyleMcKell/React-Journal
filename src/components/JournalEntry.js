import React, { useState } from "react";

export const JournalEntry = ({ entry }) => {
	const title = entry.title;
	const date = entry.date;
	const text = entry.text;

	return (
		<div>
			<h1>{title}</h1>
			<h2>{date}</h2>
			<p>{text}</p>
		</div>
	);
};
