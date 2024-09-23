import React from 'react';
import highPriorityIcon from '../assets/high_priority.svg';
import mediumPriorityIcon from '../assets/medium_priority.svg';
import lowPriorityIcon from '../assets/low_priority.svg';
import noPriorityIcon from '../assets/no_priority.svg';
import './TicketCard.css';

// Utility to get the right priority icon
const getPriorityIcon = (priority) => {
  switch (priority) {
    case 'High':
      return highPriorityIcon;
    case 'Medium':
      return mediumPriorityIcon;
    case 'Low':
      return lowPriorityIcon;
    default:
      return noPriorityIcon;
  }
};

const TicketCard = ({ ticket }) => {
  const priorityIcon = getPriorityIcon(ticket.priority);

  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <h3>{ticket.title}</h3>
        <img src={priorityIcon} alt={ticket.priority} className="priority-icon" />
      </div>
      <p>Status: {ticket.status}</p>
      <p>User: {ticket.user}</p>
      <p>Priority: {ticket.priority}</p>
    </div>
  );
};

export default TicketCard;
