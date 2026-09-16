
import { leaderboardData } from '../mockData';
import { Trophy, Award } from 'lucide-react';

export default function LeaderboardPage() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
      {/* BXH Sách */}
      <div className="card">
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)' }}>
          <Trophy color="#f59e0b" /> Top Sách Được Đánh Giá Cao
        </h3>
        {leaderboardData.topBooks.map(book => (
          <div key={book.rank} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid var(--border-color)' }}>
            <div>
              <span style={{ fontWeight: 'bold', marginRight: '10px', color: 'var(--accent-green)' }}>#{book.rank}</span>
              <span style={{ fontWeight: '600' }}>{book.title}</span>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{ display: 'block', fontWeight: 'bold', color: '#f59e0b' }}>{book.score}</span>
              <small style={{ color: 'var(--text-sub)' }}>{book.reads}</small>
            </div>
          </div>
        ))}
      </div>

      {/* BXH Độc Giả */}
      <div className="card">
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)' }}>
          <Award color="#3b82f6" /> Top Độc Giả Tích Cực
        </h3>
        {leaderboardData.topReaders.map(user => (
          <div key={user.rank} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid var(--border-color)' }}>
            <div>
              <span style={{ fontWeight: 'bold', marginRight: '10px', color: 'var(--accent-green)' }}>#{user.rank}</span>
              <span style={{ fontWeight: '600' }}>{user.name}</span>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{ display: 'block', fontWeight: 'bold' }}>{user.booksRead}</span>
              <small style={{ color: 'var(--text-sub)' }}>{user.badge}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}