import { SetStateAction } from "react";
import { Exercise, WorkoutInterface } from "../../util/interfaces";
import { render } from "react-dom";
import dayjs from "dayjs";
interface WorkoutCompleteProps {
	workout: WorkoutInterface | undefined;
}

export default function WorkoutComplete({ workout }: WorkoutCompleteProps) {
	return (
		<div className="h-full w-full flex justify-center items-center">
			<div className="rounded-lg p-14 gap-20 h-4/5 w-1/2 flex flex-col bg-snow-white shadow-2xl shadow-primary text-text">
				<span className="text-6xl font-bold w-full text-center">
					{dayjs().format("dddd").toLowerCase()} <span className="text-primary underline">{workout?.name}</span> done
				</span>
				<div className="grid grid-cols-2 grid-rows-2 gap-8">
					<div className="flex flex-col gap-1 shadow-xl p-8 rounded-3xl">
						<span className="text-4xl font-bold text-primary">Exercises Done</span>
						{workout?.exercises.map((exercise) => {
							return (
								<div className="text-2xl">
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
				<button 
				
				className="hover-css button-dark rounded-lg w-[20%] text-2xl">Save Workout</button>
			</div>
		</div>
	);
}
