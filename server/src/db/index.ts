import { Physician, Calendar, Appointment } from '../../../shared';
import * as faker from 'faker';

export const physicians: Physician[] = [
  {
    id: 0,
    name: faker.name.findName(),
    email: faker.internet.email(),
    calendarId: 100
  },
  {
    id: 1,
    name: faker.name.findName(),
    email: faker.internet.email(),
    calendarId: 200
  },
  {
    id: 2,
    name: faker.name.findName(),
    email: faker.internet.email(),
    calendarId: 300
  },
];

export const calendars: Calendar[] = [
  {
    id: 0,
    appointments: [
      {
        order: 1,
        name: faker.name.findName(),
        kind: 'New Patient',
        time: '7:00AM'
      },
      {
        order: 2,
        name: faker.name.findName(),
        kind: 'Follow-up',
        time: '10:00AM'
      },
      {
        order: 3,
        name: faker.name.findName(),
        kind: 'New Patient',
        time: '2:00PM'
      },
      {
        order: 4,
        name: faker.name.findName(),
        kind: '',
        time: '11:00AM'
      },
      {
        order: 5,
        name: faker.name.findName(),
        kind: '',
        time: '12:00PM'
      }
    ]
  },
  {
    id: 1,
    appointments: [
      {
        order: 1,
        name: faker.name.findName(),
        kind: '',
        time: '8:00AM'
      },
      {
        order: 2,
        name: faker.name.findName(),
        kind: 'New Patient',
        time: '9:00AM'
      },
      {
        order: 3,
        name: faker.name.findName(),
        kind: '',
        time: '10:00AM'
      },
      {
        order: 4,
        name: faker.name.findName(),
        kind: '',
        time: '11:00AM'
      },
      {
        order: 5,
        name: faker.name.findName(),
        kind: '',
        time: '12:00PM'
      }
    ]
  },
  {
    id: 2,
    appointments: [
      {
        order: 1,
        name: faker.name.findName(),
        kind: '',
        time: '8:00AM'
      },
      {
        order: 2,
        name: faker.name.findName(),
        kind: 'New Patient',
        time: '9:00AM'
      },
      {
        order: 3,
        name: faker.name.findName(),
        kind: '',
        time: '10:00AM'
      },
      {
        order: 4,
        name: faker.name.findName(),
        kind: 'New Patient',
        time: '11:00AM'
      },
      {
        order: 5,
        name: faker.name.findName(),
        kind: 'New Patient',
        time: '12:00PM'
      }
    ]
  },
  {
    id: 3,
    appointments: [
      {
        order: 1,
        name: faker.name.findName(),
        kind: 'New Patient',
        time: '10:00AM'
      },
      {
        order: 2,
        name: faker.name.findName(),
        kind: '',
        time: '9:00AM'
      },
      {
        order: 3,
        name: faker.name.findName(),
        kind: 'New Patient',
        time: '10:00AM'
      },
      {
        order: 4,
        name: faker.name.findName(),
        kind: '',
        time: '10:00AM'
      },
      {
        order: 5,
        name: faker.name.findName(),
        kind: 'New Patient',
        time: '3:00PM'
      }
    ]
  }
];

export function getAllPhysicians(): Physician[] {
  return physicians;
}

export function getAppointmentsById(calendarId: number): Calendar {
  return calendars.find(calendar => calendar.id == calendarId);
}
