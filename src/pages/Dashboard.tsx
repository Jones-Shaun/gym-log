import NavBar from "../components/Dashboard/NavBar";
import WorkoutDisplay from "../components/Dashboard/WorkoutDisplay";

export default function Dashboard() {
	return (
		<div className="h-full rounded-lg">
			<NavBar />
            <WorkoutDisplay/>
		</div>
	);
}
