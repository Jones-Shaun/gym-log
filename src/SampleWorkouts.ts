import { Muscle, WorkoutInterface } from "./util/interfaces";

export const testWorkouts: WorkoutInterface[] = [
	{
		name: "Push Day",
		exercises: [
			{
				name: "Bench Press",
				reps: 10,
				sets: 4,
				musclesWorked: [Muscle.CHEST, Muscle.TRICEPS],
				instructions: "Lie on a bench, grip the barbell slightly wider than shoulder-width, lower it to your chest, then push it back up.",
				setsCompleted: 0
			},
			{
				name: "Shoulder Press",
				reps: 8,
				sets: 3,
				musclesWorked: [Muscle.SHOULDERS, Muscle.TRICEPS],
				instructions: "Sit or stand with a dumbbell in each hand, press them overhead until your arms are fully extended, then lower back down.",
				setsCompleted: 0
			},
			{
				name: "Tricep Dips",
				reps: 12,
				sets: 3,
				musclesWorked: [Muscle.TRICEPS],
				instructions: "Grip parallel bars, lower your body by bending your elbows, then push yourself back up.",
				setsCompleted: 0
			},
		],
		intensity: 8,
		done: false
	},
	{
		name: "Pull Day",
		exercises: [
			{
				name: "Pull-Ups",
				reps: 10,
				sets: 4,
				musclesWorked: [Muscle.BACK, Muscle.BICEPS],
				instructions: "Grip the bar with palms facing away, pull yourself up until your chin clears the bar, then lower back down.",
				setsCompleted: 0
			},
			{
				name: "Barbell Rows",
				reps: 8,
				sets: 3,
				musclesWorked: [Muscle.BACK, Muscle.BICEPS],
				instructions: "Bend at the hips, keep your back straight, pull the barbell towards your waist, then lower it back.",
				setsCompleted: 0
			},
			{
				name: "Face Pulls",
				reps: 12,
				sets: 3,
				musclesWorked: [Muscle.SHOULDERS, Muscle.BACK],
				instructions: "Use a rope attachment on a cable machine, pull the handles towards your face, then slowly return.",
				setsCompleted: 0
			},
		],
		intensity: 7,
		done: false
	},
	{
		name: "Leg Day",
		exercises: [
			{
				name: "Squats",
				reps: 10,
				sets: 4,
				musclesWorked: [
					Muscle.QUADRICEPS,
					Muscle.HAMSTRINGS,
					Muscle.CALVES,
				],
				instructions: "Stand with feet shoulder-width apart, lower your hips down and back, then drive back up.",
				setsCompleted: 0
			},
			{
				name: "Deadlifts",
				reps: 8,
				sets: 3,
				musclesWorked: [Muscle.BACK, Muscle.HAMSTRINGS],
				instructions: "Grip the barbell, keep your back straight, lift by extending your hips and knees, then lower back.",
				setsCompleted: 0
			},
			{
				name: "Calf Raises",
				reps: 15,
				sets: 4,
				musclesWorked: [Muscle.CALVES],
				instructions: "Stand with feet shoulder-width apart, raise your heels off the ground, then lower back down.",
				setsCompleted: 0
			},
		],
		intensity: 9,
		done: false
	},
	{
		name: "Strength Endurance",
		exercises: [
			{
				name: "Kettlebell Swings",
				reps: 20,
				sets: 3,
				musclesWorked: [Muscle.BACK, Muscle.HAMSTRINGS],
				instructions: "Hinge at your hips, swing the kettlebell forward using your glutes, let it return naturally.",
				setsCompleted: 0
			},
			{
				name: "Goblet Squats",
				reps: 12,
				sets: 4,
				musclesWorked: [Muscle.QUADRICEPS],
				instructions: "Hold a kettlebell or dumbbell at chest level, squat down, and push back up.",
				setsCompleted: 0
			},
			{
				name: "Battle Ropes",
				reps: 30,
				sets: 3,
				musclesWorked: [Muscle.SHOULDERS, Muscle.ABDOMINALS],
				instructions: "Hold ropes with both hands, create waves by moving arms up and down quickly.",
				setsCompleted: 0
			},
		],
		intensity: 8,
		done: false
	},
	{
		name: "Calisthenics Mastery",
		exercises: [
			{
				name: "Muscle-Ups",
				reps: 5,
				sets: 4,
				musclesWorked: [Muscle.BACK, Muscle.BICEPS, Muscle.TRICEPS],
				instructions: "Explosively pull yourself up over the bar, transition into a dip, then push up.",
				setsCompleted: 0
			},
			{
				name: "Planche Push-Ups",
				reps: 8,
				sets: 3,
				musclesWorked: [Muscle.CHEST, Muscle.SHOULDERS],
				instructions: "Lean forward into a planche position, lower yourself like a push-up, and press back up.",
				setsCompleted: 0
			},
			{
				name: "Hanging Leg Raises",
				reps: 15,
				sets: 3,
				musclesWorked: [Muscle.ABDOMINALS],
				instructions: "Hang from a bar, lift your legs straight up, then lower slowly.",
				setsCompleted: 0
			},
		],
		intensity: 10,
		done: false
	},
];
