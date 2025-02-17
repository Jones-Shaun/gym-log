export default function CreateWorkout() {
	return (
		<div className="h-full w-full flex flex-col text-primary/60 items-center justify-center text-4xl gap-12">
			<h1>New Workout!</h1>
			<form className="flex flex-col gap-4 w-1/2">
				<label className="text-lg">
					Workout Name:
					<input type="text" className="border p-2 w-full" placeholder="Enter workout name" />
				</label>
				<label className="text-lg">
					Exercises:
					<input type="text" className="border p-2 w-full" placeholder="Enter exercise name" />
				</label>
				<label className="text-lg">
					Instructions:
					<input type="text" className="border p-2 w-full" placeholder="Enter instructions" />
				</label>
				<label className="text-lg">
					Muscle Groups:
					<input type="text" className="border p-2 w-full" placeholder="Enter worked muscle groups" />
				</label>
				<label className="text-lg">
					Sets:
					<input type="number" className="border p-2 w-full" placeholder="Enter number of sets" />
				</label>
				<button type="submit" className="bg-primary text-white p-2 mt-4">Create</button>
			</form>
		</div>
	);
}
