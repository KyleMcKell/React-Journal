import { Journal } from "./components/Journal";
import { Title } from "./components/Title";

function App() {
	return (
		<div className="flex flex-col items-center w-screen min-h-screen bg-gray-700">
			<Title />
			<Journal />
		</div>
	);
}

export default App;
