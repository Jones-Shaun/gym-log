import dayjs from "dayjs";
import { WorkoutInterface } from "../../util/interfaces";
import { aggregateMuscles } from "../../util/util";

const quote = require("inspirational-quotes");

interface WorkoutDisplayProps {
	workout: WorkoutInterface;
}

export default function WorkoutDisplay({ workout }: WorkoutDisplayProps) {
	const currentDay = dayjs();
	return (
		<div className="rounded-lg p-10 h-full flex bg-snow-white shadow-xl text-text gap-10">
			<div className="flex flex-col gap-10 h-full">
				<span className=" text-6xl text-primary font-bold">{currentDay.format("ddd").toUpperCase() + currentDay.format("DD")}</span>
				<div className="flex flex-col">
					<div className="font-bold text-2xl ">Today's Workout,</div>
					<div className="font-bold text-6xl underline">{workout.name.toUpperCase()}</div>
				</div>
				<div className="flex flex-col gap-2">
					<span className="font-bold text-2xl">
						<span className="text-5xl font-black underline">{workout.exercises.length}</span> exercises to be done
					</span>
					<span className="font-bold text-2xl">
						<span className="text-5xl font-black underline">{aggregateMuscles(workout).length}</span> muscle groups worked
					</span>
				</div>
				<div className="flex flex-col gap-2">
					<span className="font-bold text-2xl">Message of the Day</span>
					<span className="text-lg w-[20rem]">{quote.getRandomQuote() as string}</span>
				</div>
			</div>
			<div className="h-full w-[2px] bg-snow-white-dark opacity-80 rounded-xl"></div>
			<div>other side</div>
		</div>
	);
}
