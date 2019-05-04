import * as express from 'express';
import Controller from '../interfaces/controller.interface';
import * as bodyParser from 'body-parser';
import { getAppointmentsById } from '../db';

class AppointmentsController implements Controller {
  public path = '/api/appointments';
  public router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.use(bodyParser.json());

    this.router.get(`${this.path}/:calendarId`, (req, res) => {
      const calendarId = req.params.calendarId;
      res.json(getAppointmentsById(calendarId));
    });
  }
}

export default AppointmentsController;
