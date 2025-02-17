import { useParams } from "react-router";
import { WorkoutInterface } from "../../util/interfaces";
import db from "local-db-storage";
import WorkoutComplete from "../Dashboard/WorkoutComplete";

let workoutHistory: WorkoutInterface[] | undefined = await db.getItem("WorkoutHistory");
export default function WorkoutHistoryInfo() {
	const { completionDate } = useParams();

	const workout: WorkoutInterface | undefined = workoutHistory?.find((w) => {
		return w.completionDate?.toLowerCase() === completionDate;
	});
	console.log(workout);

	return <WorkoutComplete workout={workout} archive/>;
}
