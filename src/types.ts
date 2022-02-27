export interface Exercise {
  id: number;
  name: string;
  sets: number;
  reps: number;
  restPeriod: string;
  workoutRef: string;
}

export interface Workout {
  id: string;
  name: string;
  type: string;
  difficulty: string;
}

export enum WorkoutDifficulty {
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Advanced = 'Advanced',
}
