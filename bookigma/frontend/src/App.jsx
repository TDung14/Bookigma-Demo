import { useState } from 'react';
import './App.css';
import { ThemeProvider } from './context/ThemeProvider';
import Navbar from './components/Navbar';

import FeedPage from './pages/FeedPage';
import ShopPage from './pages/ShopPage';
import ExchangePage from './pages/ExchangePage';
import ReaderPage from './pages/ReaderPage';
import RecommendationPage from './pages/RecommendationPage';
import LeaderboardPage from './pages/LeaderboardPage';

function AppContent() {
  const [activeTab, setActiveTab] = useState('feed');

  const renderContent = () => {
    switch (activeTab) {
      case 'feed': return <FeedPage />;
      case 'shop': return <ShopPage />;
      case 'exchange': return <ExchangePage />;
      case 'reader': return <ReaderPage />;
      case 'recommend': return <RecommendationPage />;
      case 'leaderboard': return <LeaderboardPage />;
      default: return <FeedPage />;
    }
  };

  return (
    <div className="app-container">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="main-layout">
        <div className="content-area">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
      
    </ThemeProvider>
  );
}