import React from 'react';
import ProfileCard from './components/ProfileCard';
import './App.css';
import myPhoto from './assets/myPhoto.jpg';
function App() {
  return (
    <div className="app-container">
      <ProfileCard
        name="Isha Patel"
        photo="myPhoto"
        bio="A passionate web developer."
      />
    </div>
  );
}

export default App;







