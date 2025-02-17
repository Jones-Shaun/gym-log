import { NavLink } from "react-router";
import useLocalStorage from "use-local-storage";
import {WorkoutInterface} from "../util/interfaces"
export default function Workout() {
	const [workouts, setWorkouts] = useLocalStorage<WorkoutInterface[]>("workouts", []);
	return workouts.length > 0 ? (
		<>
			{workouts[0].name}
			<button
				className="p-2 w-50 mt-auto bg-accent"
				onClick={() => setWorkouts([])}
			>
				clear workouts
			</button>
		</>
	) : (
		<div className="h-full w-full flex flex-col text-primary/60 items-center justify-center text-4xl gap-12">
			no workouts exist yet :(
			<NavLink
				to="create"
				className="text-xl py-3 px-5 bg-primary text-snow-white hover-css rounded-xl hover:bg-accent hover:cursor-pointer animate-bounce ease-in-out"
			>
				create workout
			</NavLink>
		</div>
	);
}