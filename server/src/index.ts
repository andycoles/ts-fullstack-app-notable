import App from './app';
import PhysicianController from './physician/physician.controller';
import AppointmentsController from './appointment/appointment.controller';

const app = new App(
  [
    new PhysicianController(),
    new AppointmentsController()
  ],
);

app.listen();
