export default interface Appointment {
  order: number;
  name: string;
  kind: string;
  //TODO make this into a Date object
  time: string;
}