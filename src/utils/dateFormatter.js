export const dateFormatter = () => {
	let currentDate = new Date();
	return `
		${currentDate.getMonth()}/${currentDate.getDate()}/${currentDate.getFullYear()} at 
		${currentDate.getHours()}:${
		currentDate.getMinutes() < 10
			? `0${currentDate.getMinutes()}`
			: currentDate.getMinutes()
	}
	`;
};
