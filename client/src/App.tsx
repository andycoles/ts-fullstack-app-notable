import * as React from 'react';
import './App.css';
import isoFetch from 'isomorphic-fetch';
import { Physician, Calendar } from '../../shared';
import { Table, Container } from 'react-bootstrap';

export interface AppState {
  physicians: Physician[];
  calendar?: Calendar;
  selectedPhysician?: string;
}

class App extends React.Component<{}, AppState> {

  public state: AppState = {
    physicians: []
  };

  public componentDidMount() {
    this.fetchPhysicians();
  }

  private handlePhysicianClick(id: number, selectedPhysician: string) {
    this.fetchAppointments(id);
    this.setState({
      selectedPhysician
    });
  }

  private fetchAppointments(id: number): void {
    isoFetch(`http://localhost:3000/api/appointments/${id}`)
    .then(res => res.json())
    .then((calendar: Calendar) => {
      this.setState({
        calendar
      });
    })
    .catch(err => err);
  }

  private fetchPhysicians(): void {
    isoFetch('http://localhost:3000/api/physicians')
      .then(res => res.json())
      .then((physicians: Physician[]) => {
        this.setState({
          physicians
        });
      })
      .catch(err => err);
  }

  public render() {
    const { physicians, calendar, selectedPhysician } = this.state;
    return (
      <div className="App">
        <Container fluid>
          <div className="flex-xl-nowrap row">
            <div className="col-xl-2 col-md-3 col-12 p-0 App-sidePanel">
              <h3 className="p-2">PHYSICIANS</h3>
              <ul className="physList">
                {physicians && physicians.map((doc) => {
                  return (
                    <li 
                      className="physList-physician"
                      key={doc.id} 
                      onClick={(e: React.MouseEvent<HTMLElement>) => { this.handlePhysicianClick(doc.id, doc.name) }}
                    >
                      {doc.name}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="col-xl-8 col-md-9 col-12 App-main">
              <h1>{selectedPhysician}</h1>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Kind</th>
                  </tr>
                </thead>
                <tbody>
                  {calendar && calendar.appointments.map((appointment) => {
                    return (
                      <tr 
                        key={appointment.order} 
                      >
                        <td>{appointment.order}</td>
                        <td>{appointment.name}</td>
                        <td>{appointment.time}</td>
                        <td>{appointment.kind}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default App;