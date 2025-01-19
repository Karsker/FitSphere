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
    hasPremium: boolean
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

export interface WorkoutLog {
    id?: string,
    logId?: string,
    userId: string,
    exerciseName: string,
    reps: number,
    sets: number,
    calories: number,
    date?: Date
}

export interface StepsLog {
    id?: string,
    logId?: string,
    userId: string,
    steps: number,
    distance: number,
    calories: number,
    date?: Date
}

export interface PaymentOrder {
    orderId: string
}

export interface Payment {
    id?: string,
    paymentId?: string,
    razorpayPaymentId: string,
    userId: string,
    amount: number,
    paymentFor: string,
    date?: Date
}

export interface Meal {
    id?: string,
    mealId?: string,
    name: string,
    type: string,
    ingredients: string[],
    description: string,
    recipe: string[],
    videoLink: string,
    calories: number,
    carbohydrate: number,
    protein: number,
    fat: number
}