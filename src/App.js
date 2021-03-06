import React, {Component} from 'react';
import Tickets from './components/Tickets';
import TicketEditForm from './components/TicketEditFrorm';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  

  state = {
    tickets: []
  }
  
  componentDidMount() {
    fetch('http://localhost:8090/tickets') 
    .then(res => res.json())
    .then((data) => {
      this.setState({ tickets: data.ticketList })
    })
    .catch(console.log)
  }

  render() {
    return (
      <>
        <TicketEditForm />
        <Tickets tickets={this.state.tickets} />
      
      
      </>

    )
  }
  
}

    export default App;