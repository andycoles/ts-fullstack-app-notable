import { Appointment } from './';

export default interface Calendar {
  id: number;
  appointments: Appointment[]
}