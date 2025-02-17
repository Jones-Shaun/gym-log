import { NavLink } from "react-router";
import { WorkoutInterface } from "../util/interfaces";
import db from "local-db-storage";

let workouts: WorkoutInterface[] | undefined = await db.getItem("WorkoutsDB");
export default function Workout() {
	return workouts !== undefined ? (
		<>
			{workouts.map((workout) => {
				return <div>{workout.name}</div>;
			})}
			<div className="h-full w-full flex flex-col text-primary/60 items-center justify-center text-4xl gap-12">
			<NavLink
				to="create"
				className="text-xl py-3 px-5 bg-primary text-snow-white hover-css rounded-xl hover:bg-accent hover:cursor-pointer"
			>
				create workout
			</NavLink>
		</div>
		</>
	) : (
		<div className="h-full w-full flex flex-col text-primary/60 items-center justify-center text-4xl gap-12">
			There are no workouts yet! Bummer! :(
			<NavLink
				to="create"
				className="text-xl py-3 px-5 bg-primary text-snow-white hover-css rounded-xl hover:bg-accent hover:cursor-pointer animate-bounce ease-in-out"
			>
				create workout
			</NavLink>
		</div>
	);
}
