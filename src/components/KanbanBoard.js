import React, { useEffect, useState } from 'react';
import { fetchTickets } from '../services/api';
import TicketCard from './TicketCard';
import GroupingButtons from './GroupingButtons';
import addIcon from '../assets/add.svg';
import displayIcon from '../assets/Display.svg';
import menuIcon from '../assets/3_dot_menu.svg';
import './KanbanBoard.css';

const KanbanBoard = () => {
  const [tickets, setTickets] = useState([]);
  const [grouping, setGrouping] = useState('status');
  const [sortOrder, setSortOrder] = useState('priority');

  useEffect(() => {
    async function loadTickets() {
      const data = await fetchTickets();
      setTickets(data);
    }
    loadTickets();
  }, []);

  // Group tickets based on the selected grouping option
  const groupTickets = (tickets) => {
    return tickets.reduce((grouped, ticket) => {
      const key = ticket[grouping] || 'No Group';
      grouped[key] = grouped[key] ? [...grouped[key], ticket] : [ticket];
      return grouped;
    }, {});
  };

  const sortedTickets = groupTickets(tickets);

  return (
    <div className="kanban-container">
      {/* Header with icons */}
      <header className="kanban-header">
        <img src={menuIcon} alt="Menu" className="icon" />
        <h1>Kanban Board</h1>
        <div className="header-actions">
          <img src={displayIcon} alt="Display" className="icon" />
          <img src={addIcon} alt="Add Task" className="icon" />
        </div>
      </header>

      {/* Buttons to control grouping and sorting */}
      <GroupingButtons
        grouping={grouping}
        setGrouping={setGrouping}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

      {/* Kanban columns based on grouping */}
      <div className="kanban-board">
        {Object.keys(sortedTickets).map((group) => (
          <div className="column" key={group}>
            <h2>{group}</h2>
            {sortedTickets[group].map((ticket) => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
