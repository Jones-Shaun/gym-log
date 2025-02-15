import { Navigate, Route, Routes } from "react-router";
import Sidebar from "../components/Sidebar";
import Workout from "./Workout";
import Profile from "./Profile";
import Database from "./Database";
import History from "./History";
const quote = require("inspirational-quotes");

function App() {
	return (
		<div className="App bg-snow-white flex">
			<Sidebar />
			{/* Main Board */}
			<div className="h-full w-full p-5 opacity-100 flex flex-col justify-center text-black">
				<Routes>
					<Route
						path="/"
						element={<Navigate replace to={"/workout"} />}
					/>
					<Route path="/profile" element={<Profile />} />
					<Route path="/workout" element={<Workout />} />
					<Route path="/history" element={<History />} />
					<Route path="/database" element={<Database />} />
				</Routes>

				<span
					className="mt-auto text-center text-primary-orange opacity-50 font-thin text-lg"
					style={{ textShadow: "1px 1px 1px black" }}
				>
					{(quote.getRandomQuote() as String).toLowerCase()}
				</span>
			</div>
		</div>
	);
}

export default App;
