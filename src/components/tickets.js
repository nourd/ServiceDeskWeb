import React from 'react';


    const Tickets = ({ tickets }) => {
      return (
        <div>
        <h2>Tickets List</h2>

          <table class="table table-striped table-bordered table-sm">
            <thead>
                <tr>
                    <th class="th-sm">Priority</th>
                    <th class="th-sm">Ticket Number</th>
                    <th class="th-sm">Title</th>
                    <th class="th-sm">Problem</th>
                    <th class="th-sm">Email</th>
                </tr>
            </thead>
              <tbody>
                {tickets.map((ticket) => (
                    <tr>
                        <td>{ticket.priorities[0].name}</td>
                        <td>{ticket.documentNumber}</td>
                        <td>{ticket.title}</td>
                        <td>{ticket.problemDescription}</td>
                        <td>{ticket.email}</td>
                    </tr>
                ))}
            </tbody>
          </table>
        </div>
      )
    };

    export default Tickets