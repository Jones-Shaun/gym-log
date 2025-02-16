import { NavLink } from "react-router";
import useLocalStorage from "use-local-storage";
enum Muscle {
	BICEPS,
	TRICEPS,
	CHEST,
	SHOUDLERS,
	BACK,
	QUADRACEPS,
	HAMSTRINGS,
	CALVES,
	ABDOMINALS,
}

interface Exercise {
	name: String;
	reps: Number;
	sets: Number;
	musclesWorked: Muscle[];
}

interface Workout {
	name: String;
	exercises: Exercise[];
	intensity: Number;
}

export default function Workout() {
	// const testWorkout: Workout = {
	// 	name: "Push Day",
	// 	exercises: [],
	// 	intensity: 8,
	// };
	const [workouts, setWorkouts] = useLocalStorage<Workout[]>("workouts", []);
	return workouts.length > 0 ? (
		<>
			{workouts[0].name}
			<button
				className="p-2 w-50 mt-auto bg-amber-600"
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
