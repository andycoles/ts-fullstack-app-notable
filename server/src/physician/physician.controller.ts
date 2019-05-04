import * as express from 'express';
import Controller from '../interfaces/controller.interface';
import * as bodyParser from 'body-parser';
import { getAllPhysicians } from '../db';

class PhysicianController implements Controller {
  public path = '/api/physicians';
  public router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.use(bodyParser.json());

    this.router.get(this.path, (req, res) => {
      res.json(getAllPhysicians());
    });
  }
}

export default PhysicianController;