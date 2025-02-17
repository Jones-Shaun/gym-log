import { Navigate, Route, Routes } from "react-router";
import Sidebar from "../components/Sidebar";
import Workout from "./Workout.js";
import Profile from "./Profile.js";
import History from "./History.js";
import CreateWorkout from "../components/Workout/CreateWorkout.js";
import Dashboard from "./Dashboard.js";

function App() {
	return (
		<div className="App bg-snow-white-dark flex">
			<Sidebar />
			{/* Main Board */}
			<div className="h-full w-full p-5 opacity-100 flex flex-col justify-center text-black">
				<Routes>
					<Route path="/" element={<Navigate replace to="dashboard" />} />
					<Route path="dashboard/*" element={<Dashboard />} />
					<Route path="profile" element={<Profile />} />
					<Route path="workout" element={<Workout />}></Route>
					<Route path="workout/create" element={<CreateWorkout />} />
					<Route path="history" element={<History />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
