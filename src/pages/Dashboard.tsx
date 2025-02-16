import { useEffect, useState } from "react";
import NavBar from "../components/Dashboard/NavBar";
import WorkoutDisplay from "../components/Dashboard/WorkoutDisplay";
import WorkoutGrid from "../components/Dashboard/WorkoutGrid";
import { WorkoutInterface } from "../util/interfaces";

export default function Dashboard() {
	const [chosenWorkout, setChosenWorkout] = useState<WorkoutInterface>();

	useEffect(() => {
		console.log(chosenWorkout);
	}, [chosenWorkout]);

	return (
		<div className="h-full flex flex-col gap-5">
			<NavBar />
			{chosenWorkout !== undefined ? (
				<WorkoutDisplay workout={chosenWorkout} />
			) : (
				<WorkoutGrid setChosenWorkout={setChosenWorkout} />
			)}
		</div>
	);
}
