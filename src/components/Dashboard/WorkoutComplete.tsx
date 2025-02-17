import { WorkoutInterface } from "../../util/interfaces";
import dayjs from "dayjs";
import { Trash } from "lucide-react";
import db from "local-db-storage";

interface WorkoutCompleteProps {
	workout: WorkoutInterface | undefined;
}

export default function WorkoutComplete({ workout }: WorkoutCompleteProps) {
	async function handleClick() {
		if (workout) {
			let workoutHistory: WorkoutInterface[] | undefined = await db.getItem("WorkoutHistory");

			if (workoutHistory === undefined) {
				workoutHistory = [];
			}
			workout.completionDate = dayjs().format("MMM DD YYYY");
			workoutHistory.push(workout);
			await db.setItem("WorkoutHistory", workoutHistory);
		}
	}

	return (
		<div className="h-full w-full flex justify-center items-center">
			<div className="rounded-lg p-14 gap-20 h-4/5 w-1/2 flex flex-col bg-snow-white shadow-2xl shadow-primary text-text justify-center items-center">
				<span className="text-6xl font-bold w-full text-center">
					{dayjs().format("dddd").toLowerCase()} <span className="text-primary underline">{workout?.name}</span> done
				</span>
				<div className="grid grid-cols-2 grid-rows-2 gap-8">
					<div className="flex flex-col gap-1 shadow-xl p-8 rounded-3xl">
						<span className="text-4xl font-bold text-primary">Exercises Done</span>
						{workout?.exercises.map((exercise) => {
							return (
								<div className="text-2xl" key={exercise.name}>
									{exercise.name} : {exercise.sets}x{exercise.reps}
								</div>
							);
						})}
					</div>
					<div className="flex flex-col justify-center items-center gap-1 shadow-xl p-8 rounded-3xl text-5xl font-bold">
						<span className="text-primary">Time Elapsed</span>
						15:67
					</div>
				</div>
				<div className="flex gap-4 w-full items-center justify-center">
					<button className="hover-css button-light rounded-lg w-[25%] text-2xl" onClick={handleClick}>
						Save Workout
					</button>
					<button className="bg-red-400 hover-css p-3 rounded-lg text-2xl text-snow-white h-full hover:bg-red-700">
						<Trash size={30} />
					</button>
				</div>
			</div>
		</div>
	);
}
