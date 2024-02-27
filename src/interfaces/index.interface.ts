interface UD {
    id: string;
    type: "patient" | "doctor";
}

type packages = "Messaging" | "Video Call" | "Voice Call" | "Questionnaire";

interface Schedule {
    initiator: UD;
    recepient: UD;
    duration: string;
    sessions: number;
    package: packages[];
    status: "accepted" | "rejected" | "pending";
    date: Date;
    time: Date;
}

type billing = "Weekly" | "Monthly" | "Yearly";

type paymentMethod = "Paypal" | "Stripe" | "Venmo" | "Card";

// external source
interface paymentInfo {
    name: string;
    cardNumber?: number;
    paymentId?: string;
    additionalKey?: string;
    cvv?: number;
    pin?: number;
    type: paymentMethod;
    description?: string;
}

interface benefits {
    available: boolean;
    description: string;
}

export interface ReSchedule {
    reason: string;
    schedule: Schedule;
}

export interface SuscriptionRequest {
    id: string;
    name: string;
    status: string;
    amount: number;
    currency: string;
    discount: number;
    billing: billing[];
    paymentMethod: paymentMethod[];
    benefits: benefits[];
    created_at: Date;
    updated_at: Date;
}

export interface UserSuscriptionRequest {
    id: string;
    suscriptionId: string;
    userId: string;
    payed: number;
    outstanding: number;
    discount: number;
    billing: billing;
    paymentMethod: paymentMethod;
    paymentInfo: paymentInfo;
    status: string;
    created_at: Date;
    updated_at: Date;
}

export interface ScheduleRequest {
    id: string;
    title: string;
    description: string;
    schedule: Schedule;
    reschedule: ReSchedule[];
    userSuscriptionId: string;
    created_at: Date;
    updated_at: Date;
}

export interface ReviewRequest {
    id: string;
    sessionId: string;
    doctorId: string;
    rating: number;
    review: string;
    created_at: Date;
    updated_at: Date;
}

// external source
export type doctorTypes = [];