export interface User {
    id?: string,
    userId?: string,
    name: string,
    email: string,
    age: number,
    role: string,
    gender: string,
    password: string,
    trainerId?: string,
    nutritionistId?: string,
    goal?: string,
    weight?: number,
    height?: number,
    targetWeight?: number,
    workoutPlans: string[],
}

export interface Exercise {
    id?: string,
    exerciseId?: string,
    name: string,
    equipment: string[],
    muscles: string[],
    description: string,
    instructions: string[],
    videoLink: string,
}

export interface Message {
    id?: string,
    messageId?: string,
    fromId: string,
    fromName: string,
    toId: string,
    toName: string,
    relation: string,
    content: string,
    date?: Date,
}

export interface Workout {
    exerciseId: string,
    exerciseName: string,
    reps: number,
    sets: number
}

export interface WorkoutPlan {
    id?: string,
    workoutPlanId?: string,
    trainerId: string,
    workoutPlanName: string,
    workouts?: Workout[],
    goal: string,
    days: string[]
}