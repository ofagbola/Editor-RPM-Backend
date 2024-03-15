import { ScheduleServiceHandlers } from '../protos/gen/scheduler/ScheduleService';
import {
    GetSchedule,
    GetSchedules,
    CreateSchedule,
    CreateReSchedule,
    UpdateSchedule,
    UpdateReSchedule,
    DeleteSchedule,
    DeleteReSchedule
} from '../controllers/schedule.controller';

export const ScheduleRoutes: ScheduleServiceHandlers = {
    GetSchedule,
    GetSchedules,
    CreateSchedule,
    CreateReSchedule,
    UpdateSchedule,
    UpdateReSchedule,
    DeleteSchedule,
    DeleteReSchedule
} 