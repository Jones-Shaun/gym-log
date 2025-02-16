import { Route, Routes } from "react-router";
import Sidebar from "../components/Sidebar";
import Workout from "./Workout.js";
import Profile from "./Profile.js";
import Database from "./Database.js";
import History from "./History.js";
import CreateWorkout from "../components/Workout/CreateWorkout.js";
import Dashboard from "./Dashboard.js";

const quote = require("inspirational-quotes");

function App() {
	return (
		<div className="App bg-snow-white flex">
			<Sidebar />
			{/* Main Board */}
			<div className="h-full w-full p-5 opacity-100 flex flex-col justify-center text-black">
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="profile" element={<Profile />} />
					<Route path="workout" element={<Workout />}></Route>
					<Route path="workout/create" element={<CreateWorkout />} />
					<Route path="history" element={<History />} />
					<Route path="database" element={<Database />} />
				</Routes>

				<span className="mt-auto text-center text-primary hover-css font-thin text-lg">
					{(quote.getRandomQuote() as string).toLowerCase()}
				</span>
			</div>
		</div>
	);
}

export default App;
