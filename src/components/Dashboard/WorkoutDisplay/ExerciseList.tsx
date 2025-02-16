import { NavLink } from "react-router";
import { Exercise } from "../../../util/interfaces";
import { useMemo, useState } from "react";

interface ExerciseListProps {
	exercises: Exercise[];
	chosenExercise: Exercise;
	setChosenExercise: React.Dispatch<React.SetStateAction<Exercise>>;
}

export default function ExerciseList({
	exercises,
	chosenExercise,
	setChosenExercise,
}: ExerciseListProps) {
	const completed = useMemo(() => {
		return (
			exercises.find((e) => e.name === chosenExercise.name)
				?.setsCompleted === chosenExercise.sets
		);
	}, exercises);
	console.log("completed:", completed);

	const renderExercises = (
		exercises: Exercise[],
		chosenExercise: Exercise
	) => {
		const exerciseElements = exercises.map((exercise, index) => {
			return (
				<NavLink
					to={`/dashboard/${exercise.name
						.replace(" ", "")
						.toLowerCase()}`}
					key={index}
					className={`text-xl font-bold ${
						chosenExercise.name === exercise.name && completed
							? "opacity-20 cursor-default"
							: ""
					}  ${
						chosenExercise.name === exercise.name
							? "bg-primary text-snow-white"
							: "hover:bg-accent hover:text-snow-white"
					} py-4 px-3 rounded-lg hover-css shadow-md`}
					onClick={() => setChosenExercise(exercise)}
				>
					{exercise.name.toUpperCase()}
				</NavLink>
			);
		});
		return exerciseElements;
	};
	return (
		<div className="h-full w-1/4 px-3 flex flex-col gap-3 shrink-0">
			{renderExercises(exercises, chosenExercise)}
		</div>
	);
}
