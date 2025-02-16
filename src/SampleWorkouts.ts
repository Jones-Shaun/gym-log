import { Muscle, WorkoutInterface } from "./util/interfaces";

export const testWorkouts: WorkoutInterface[] = [
	{
		name: "Push Day",
		exercises: [
			{ name: "Bench Press", reps: 10, sets: 4, musclesWorked: [Muscle.CHEST, Muscle.TRICEPS] },
			{ name: "Shoulder Press", reps: 8, sets: 3, musclesWorked: [Muscle.SHOULDERS, Muscle.TRICEPS] },
			{ name: "Tricep Dips", reps: 12, sets: 3, musclesWorked: [Muscle.TRICEPS] },
		],
		intensity: 8,
	},
	{
		name: "Pull Day",
		exercises: [
			{ name: "Pull-Ups", reps: 10, sets: 4, musclesWorked: [Muscle.BACK, Muscle.BICEPS] },
			{ name: "Barbell Rows", reps: 8, sets: 3, musclesWorked: [Muscle.BACK, Muscle.BICEPS] },
			{ name: "Face Pulls", reps: 12, sets: 3, musclesWorked: [Muscle.SHOULDERS, Muscle.BACK] },
		],
		intensity: 7,
	},
	{
		name: "Leg Day",
		exercises: [
			{ name: "Squats", reps: 10, sets: 4, musclesWorked: [Muscle.QUADRICEPS, Muscle.HAMSTRINGS, Muscle.CALVES] },
			{ name: "Deadlifts", reps: 8, sets: 3, musclesWorked: [Muscle.BACK, Muscle.HAMSTRINGS] },
			{ name: "Calf Raises", reps: 15, sets: 4, musclesWorked: [Muscle.CALVES] },
		],
		intensity: 9,
	},
	{
		name: "Upper Body",
		exercises: [
			{ name: "Incline Dumbbell Press", reps: 10, sets: 3, musclesWorked: [Muscle.CHEST, Muscle.TRICEPS] },
			{ name: "Lat Pulldown", reps: 10, sets: 4, musclesWorked: [Muscle.BACK, Muscle.BICEPS] },
			{ name: "Lateral Raises", reps: 12, sets: 3, musclesWorked: [Muscle.SHOULDERS] },
		],
		intensity: 6,
	},
	{
		name: "Full Body",
		exercises: [
			{ name: "Deadlifts", reps: 8, sets: 4, musclesWorked: [Muscle.BACK, Muscle.HAMSTRINGS] },
			{ name: "Overhead Press", reps: 8, sets: 3, musclesWorked: [Muscle.SHOULDERS, Muscle.TRICEPS] },
			{ name: "Plank", reps: 1, sets: 3, musclesWorked: [Muscle.ABDOMINALS] },
		],
		intensity: 8,
	},
	{
		name: "Arm Day",
		exercises: [
			{ name: "Bicep Curls", reps: 12, sets: 3, musclesWorked: [Muscle.BICEPS] },
			{ name: "Tricep Extensions", reps: 12, sets: 3, musclesWorked: [Muscle.TRICEPS] },
			{ name: "Hammer Curls", reps: 10, sets: 3, musclesWorked: [Muscle.BICEPS] },
		],
		intensity: 7,
	},
	{
		name: "Chest Focus",
		exercises: [
			{ name: "Incline Bench Press", reps: 10, sets: 3, musclesWorked: [Muscle.CHEST, Muscle.TRICEPS] },
			{ name: "Dumbbell Flys", reps: 12, sets: 3, musclesWorked: [Muscle.CHEST] },
			{ name: "Push-Ups", reps: 15, sets: 4, musclesWorked: [Muscle.CHEST, Muscle.TRICEPS] },
		],
		intensity: 7,
	},
	{
		name: "Back Strength",
		exercises: [
			{ name: "Deadlifts", reps: 8, sets: 3, musclesWorked: [Muscle.BACK, Muscle.HAMSTRINGS] },
			{ name: "Pull-Ups", reps: 10, sets: 4, musclesWorked: [Muscle.BACK, Muscle.BICEPS] },
			{ name: "Seated Rows", reps: 12, sets: 3, musclesWorked: [Muscle.BACK] },
		],
		intensity: 8,
	},
	{
		name: "Core Crusher",
		exercises: [
			{ name: "Crunches", reps: 20, sets: 3, musclesWorked: [Muscle.ABDOMINALS] },
			{ name: "Leg Raises", reps: 15, sets: 3, musclesWorked: [Muscle.ABDOMINALS] },
			{ name: "Russian Twists", reps: 20, sets: 3, musclesWorked: [Muscle.ABDOMINALS] },
		],
		intensity: 6,
	},
	{
		name: "Leg Strength",
		exercises: [
			{ name: "Front Squats", reps: 8, sets: 4, musclesWorked: [Muscle.QUADRICEPS, Muscle.HAMSTRINGS] },
			{ name: "Lunges", reps: 10, sets: 3, musclesWorked: [Muscle.QUADRICEPS, Muscle.HAMSTRINGS] },
			{ name: "Leg Press", reps: 12, sets: 3, musclesWorked: [Muscle.QUADRICEPS] },
		],
		intensity: 9,
	},
	{
		name: "Glute Focus",
		exercises: [
			{ name: "Hip Thrusts", reps: 10, sets: 4, musclesWorked: [Muscle.HAMSTRINGS, Muscle.QUADRICEPS] },
			{ name: "Bulgarian Split Squats", reps: 12, sets: 3, musclesWorked: [Muscle.QUADRICEPS, Muscle.HAMSTRINGS] },
			{ name: "Cable Kickbacks", reps: 15, sets: 3, musclesWorked: [Muscle.HAMSTRINGS] },
		],
		intensity: 7,
	},
	{
		name: "Explosive Training",
		exercises: [
			{ name: "Power Cleans", reps: 5, sets: 4, musclesWorked: [Muscle.BACK, Muscle.SHOULDERS] },
			{ name: "Box Jumps", reps: 12, sets: 3, musclesWorked: [Muscle.QUADRICEPS, Muscle.CALVES] },
			{ name: "Sprint Intervals", reps: 30, sets: 4, musclesWorked: [Muscle.CALVES, Muscle.QUADRICEPS] },
		],
		intensity: 9,
	},
	{
		name: "Mobility & Recovery",
		exercises: [
			{ name: "Yoga Stretches", reps: 1, sets: 3, musclesWorked: [Muscle.ABDOMINALS, Muscle.BACK] },
			{ name: "Foam Rolling", reps: 1, sets: 3, musclesWorked: [] },
			{ name: "Hip Openers", reps: 1, sets: 3, musclesWorked: [Muscle.QUADRICEPS] },
		],
		intensity: 5,
	},
	{
		name: "Endurance Focus",
		exercises: [
			{ name: "Jump Rope", reps: 100, sets: 3, musclesWorked: [Muscle.CALVES] },
			{ name: "Burpees", reps: 15, sets: 4, musclesWorked: [Muscle.CHEST, Muscle.ABDOMINALS] },
			{ name: "Mountain Climbers", reps: 30, sets: 3, musclesWorked: [Muscle.ABDOMINALS, Muscle.QUADRICEPS] },
		],
		intensity: 8,
	},
];
