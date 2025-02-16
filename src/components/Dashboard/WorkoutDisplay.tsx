import dayjs from "dayjs";
import { Exercise, WorkoutInterface } from "../../util/interfaces";
import WorkoutOverview from "./WorkoutDisplay/WorkoutOverview";
import ExerciseList from "./WorkoutDisplay/ExerciseList";
import { useEffect, useState } from "react";
import ExerciseInformation from "./WorkoutDisplay/ExerciseInformation";
import { Route, Routes } from "react-router";

interface WorkoutDisplayProps {
	workout: WorkoutInterface;
}

export default function WorkoutDisplay({ workout }: WorkoutDisplayProps) {
	const currentDay = dayjs();

	const [exercises, setExercises] = useState<Exercise[]>(workout.exercises);
	const [chosenExercise, setChosenExercise] = useState<Exercise>(
		workout.exercises[0]
	);

	// when chosen exercise done, move on to next
	useEffect(() => {
		const exerciseIndex = exercises.findIndex(
			(e) => e.name === chosenExercise.name
		);
		if (
			exerciseIndex >= 0 &&
			exercises[exerciseIndex].setsCompleted ===
				exercises[exerciseIndex].sets
		) {
			// go to next available exercise
			for (let i = 0; i < exercises.length; i++) {
				if (exercises[i].setsCompleted < exercises[i].sets) {
					setChosenExercise(exercises[i]);
				}
			}
		}
	}, [exercises]);

	return (
		<div className="rounded-lg p-10 h-full flex bg-snow-white shadow-2xl text-text">
			<WorkoutOverview currentDay={currentDay} workout={workout} />
			<div className="h-full w-[4px] bg-accent opacity-20 rounded-xl"></div>
			<ExerciseList
				exercises={exercises}
				chosenExercise={chosenExercise}
				setChosenExercise={setChosenExercise}
			/>
			<div className="h-full w-[4px] bg-accent opacity-20 rounded-xl"></div>
			<Routes>
				<Route
					path=":exercise"
					element={
						<ExerciseInformation
							chosenExercise={chosenExercise}
							exercises={exercises}
							setExercises={setExercises}
						/>
					}
				/>
			</Routes>
		</div>
	);
}
