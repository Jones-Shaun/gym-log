export default function CreateWorkout() {
	return (
		<div className="h-full w-full flex flex-col text-primary/60 items-center justify-center text-4xl gap-12">
			<h1>New Workout!</h1>
			<form className="flex flex-col gap-4 w-1/2">
				<label className="text-lg">
					Workout Name:
					<input type="text" className="border p-2 w-full" placeholder="Enter workout name" />
				</label>
				<div className="flex flex-col gap-4">
					<h2 className="text-2xl">Exercises</h2>
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
					<button type="button" className="bg-primary text-white p-2 mt-4">Add Another Exercise</button>
				</div>
				<button type="submit" className="bg-primary text-white p-2 mt-4">Create</button>
			</form>
		</div>
	);
}
