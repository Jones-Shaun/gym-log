import { NavLink } from "react-router";
import { WorkoutInterface } from "../util/interfaces";
import db from "local-db-storage";

let workoutHistory: WorkoutInterface[] | undefined = await db.getItem("WorkoutHistory");
export default function History() {
	return (
		<div className="h-full w-full p-10 shadow-2xl bg-snow-white rounded-lg gap-10 flex flex-col">
			<span className="text-3xl font-bold text-primary">Workout History</span>
			<div className="h-full grid grid-rows-[repeat(auto-fill,_minmax(150px,1fr))] grid-cols-[repeat(auto-fill,_minmax(200px,1fr))] gap-8">
				{workoutHistory?.map((workout) => {
					console.log(workout.completionDate?.toLowerCase());

					return (
						<NavLink
							key={workout.name}
							className="bg-snow-white drop-shadow-lg rounded-lg flex flex-col justify-center items-center w-full h-full text-xl hover:shadow-sm hover-css hover:shadow-accent"
							to={`${workout.completionDate?.toLowerCase()}`}
						>
							<span className="font-bold text-2xl">{workout.completionDate}</span>
							<span>{workout.name}</span>
						</NavLink>
					);
				})}
			</div>
		</div>
	);
}
