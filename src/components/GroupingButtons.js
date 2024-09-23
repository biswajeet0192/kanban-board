import React from 'react';
import downIcon from '../assets/down.svg';
import './GroupingButtons.css';

const GroupingButtons = ({ grouping, setGrouping, sortOrder, setSortOrder }) => {
  return (
    <div className="grouping-buttons">
      <div>
        <label>Group By: </label>
        <select value={grouping} onChange={(e) => setGrouping(e.target.value)}>
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>

      <div>
        <label>Sort By: </label>
        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
        <img src={downIcon} alt="Sort" className="icon" />
      </div>
    </div>
  );
};

export default GroupingButtons;
