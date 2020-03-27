import React from 'react';


    const Tickets = ({ tickets }) => {
      return (
        <div>
        <h2>Tickets List</h2>

          <table class="table table-striped table-bordered table-sm">
            <thead>
                <tr>
                    <th class="th-sm">Name
                    </th>
                    <th class="th-sm">Position
                    </th>
                </tr>
            </thead>
              <tbody>
                {tickets.map((ticket) => (
                    <tr>
                        <td>{ticket.title}</td>
                        <td>{ticket.email}</td>
                    </tr>
                ))}
            </tbody>
          </table>
        </div>
      )
    };

    export default Tickets