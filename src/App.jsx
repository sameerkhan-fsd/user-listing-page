import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  const filteredUsers = users.filter(user => {
    return user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
           user.email.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="app">
      <div className="background">
        <div className="gradient-bg"></div>
      </div>
      
      <div className="container">
        {/* Header Section */}
        <div className="header">
          <div className="icon-badge">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <h1>User Directory</h1>
          <p className="subtitle">Connect with amazing people</p>
        </div>

        {/* Search Section - Feature 3 */}
        <div className="search-section">
          <div className="search-container">
            <svg className="search-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button onClick={() => setSearchTerm('')} className="clear-button">
                <svg className="clear-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </button>
            )}
          </div>
          
          {/* Stats */}
          {!loading && (
            <div className="stats">
              <span className="stat-badge">
                {filteredUsers.length} of {users.length} users
              </span>
            </div>
          )}
        </div>

        {/* Loading Indicator - Feature 4 */}
        {loading && (
          <div className="loading-container">
            <div className="spinner"></div>
            <p className="loading-text">Loading amazing users...</p>
          </div>
        )}

        {/* User Grid - Feature 2 */}
        {!loading && (
          <>
            <div className="users-grid">
              {filteredUsers.map(user => (
                <div key={user.id} className="user-card">
                  <div className="card-glow"></div>
                  <div className="card-content">
                    <div className="avatar">
                      <div className="avatar-inner">
                        {user.name.charAt(0).toUpperCase()}
                      </div>
                      <div className="status-dot"></div>
                    </div>
                    
                    <div className="user-details">
                      <h3 className="user-name">{user.name}</h3>
                      <p className="user-username">@{user.username}</p>
                      <div className="user-info-item">
                        <svg className="info-icon" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <span>{user.email}</span>
                      </div>
                      <div className="user-info-item">
                        <svg className="info-icon" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <span>{user.phone}</span>
                      </div>
                      <div className="user-info-item">
                        <svg className="info-icon" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span>{user.address.city}</span>
                      </div>
                    </div>
                    
                    <div className="card-footer">
                      <div className="company-badge">
                        <svg className="company-icon" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4z" clipRule="evenodd" />
                        </svg>
                        <span>{user.company.name}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results Message */}
            {filteredUsers.length === 0 && (
              <div className="no-results">
                <svg className="no-results-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3>No users found</h3>
                <p>We couldn't find anyone matching "{searchTerm}"</p>
                <button onClick={() => setSearchTerm('')} className="clear-search-btn">
                  Clear Search
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;