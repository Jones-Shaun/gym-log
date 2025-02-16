export enum Muscle {
  BICEPS = "BICEPS",
  TRICEPS = "TRICEPS",
  CHEST = "CHEST",
  SHOULDERS = "SHOULDERS",
  BACK = "BACK",
  QUADRICEPS = "QUADRICEPS",
  HAMSTRINGS = "HAMSTRINGS",
  CALVES = "CALVES",
  ABDOMINALS = "ABDOMINALS",
}

export interface Exercise {
	name: String;
	reps: Number;
	sets: Number;
	musclesWorked: Muscle[];
}

export interface WorkoutInterface {
	name: String;
	exercises: Exercise[];
	intensity: Number;
}
