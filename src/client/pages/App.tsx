import Sidebar from "../components/Sidebar";

const quote = require("inspirational-quotes");

function App() {
	console.log(quote.getRandomQuote());

	return (
		<div className="App bg-snow-white flex">
			<Sidebar />
			<div className="h-full w-full p-5 opacity-100 flex flex-col justify-center">
				<span className="mt-auto text-center text-primary-orange opacity-50 font-thin text-lg">{(quote.getRandomQuote() as String).toLowerCase()}</span>
			</div>
		</div>
	);
}

export default App;
