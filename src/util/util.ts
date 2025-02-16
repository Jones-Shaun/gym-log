import { WorkoutInterface } from "./interfaces";

export function aggregateMuscles(workout: WorkoutInterface) {
	return [
		...new Set(
			workout.exercises.flatMap((exercise) => {
				return exercise.musclesWorked;
			})
		),
	];
}
