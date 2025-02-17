import {useNavigate } from "react-router";

export default function CreateWorkout() {
	let navigate = useNavigate();
	async function handleCreateButton() {
		navigate("/workout");
	}

	return (
		<div className="h-full w-full flex flex-col text-primary/60 items-center justify-center text-4xl gap-12">
			<form className="flex flex-col gap-4 w-3/4 p-10 overflow-y-scroll">
				<h1>New Workout!</h1>
				<label className="text-lg">
					Workout Name:
					<input type="text" className="border p-2 w-full" placeholder="Enter workout name" />
				</label>
				<div className="flex flex-col gap-4">
					<div className="flex justify-between items-center">
						<h2 className="text-2xl">Exercises</h2>
						<button type="button" className="bg-primary text-white p-2 text-xl">Add</button>
					</div>
					<div className="flex flex-col gap-4">
						<div className="flex flex-col gap-2 border p-4">
							<label className="text-lg">
								Exercise Name:
								<input type="text" className="border p-2 w-full" placeholder="Enter exercise name" />
							</label>
							<label className="text-lg">
								Sets:
								<input type="number" className="border p-2 w-full" placeholder="Enter number of sets" />
							</label>
							<label className="text-lg">
								Reps per Set:
								<input type="number" className="border p-2 w-full" placeholder="Enter number of reps per set" />
							</label>
							<label className="text-lg">
								Instructions:
								<input type="text" className="border p-2 w-full" placeholder="Enter instructions" />
							</label>
						</div>
					</div>
				</div>
				<button type="submit" className="bg-primary text-white p-2 mt-4" onClick={handleCreateButton}>
					Create
				</button>
			</form>
		</div>
	);
}
