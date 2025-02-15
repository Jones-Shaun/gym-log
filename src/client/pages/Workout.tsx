import { useEffect, useState } from "react";
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
	const testWorkout: Workout = {
		name: "Push Day",
		exercises: [],
		intensity: 8,
	};
	const [workouts, setWorkouts] = useLocalStorage<Workout[]>("workouts", []);
	return (
		<>
			{workouts[0] ? workouts[0].name : "no workouts"}
			<button
				className="p-2 w-30 mt-auto bg-amber-600"
				onClick={() => setWorkouts([])}
			>
				clear workouts
			</button>
		</>
	);
}
