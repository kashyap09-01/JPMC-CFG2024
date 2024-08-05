import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import GridExample from './GridExample.jsx';
import Cards from './Cards.jsx';
import NewMessage from './NewMessage.jsx'
import RespondToQuery from './RespondToQuery.jsx';
import DataCharts from './DataCharts.jsx';
import { NewFarmer } from './NewFarmer.jsx';
import NewVolunteer from './NewVolunteer.jsx';

const App = () => {
  const navigate = useNavigate();

  const cardsData = [
    { id: 1, title: 'Data visualization with tables', icon: '📊', path: "/grid-example" },
    { id: 2, title: 'Data visualization with charts', icon: '📈' , path : "/data-charts"},
    { id: 3, title: 'Respond to given queries', icon: '💬' , path : "/respond-to-query" },
    { id: 4, title: 'Send a new message', icon: '✉️' , path : "/new-message" },
    { id: 5, title: 'Add a new volunteer', icon: '👥' },
    { id: 6, title: 'Add a new farmer', icon: '👩‍🌾' , path : "/new-farmer" },
  ];

  const handleCardClick = (path) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <Routes>
      <Route exact path="/" element={
        <div className="cards-container">
            <Cards />
          {/* {cardsData.map((card) => (
            <div key={card.id} className="card" onClick={() => handleCardClick(card.path)}>
              <span className="card-icon">{card.icon}</span>
              <span className="card-title">{card.title}</span>
            </div>
          ))} */}
        </div>
      } />
    
    </Routes>
  );
};

export default App;
