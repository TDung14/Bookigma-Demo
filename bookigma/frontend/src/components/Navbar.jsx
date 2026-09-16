import  { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { BookOpen, Search, Sun, Moon, ShoppingBag, Trophy, Repeat, Sparkles, Home } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  const navItems = [
    { id: 'feed', label: 'Bảng tin', icon: Home },
    { id: 'shop', label: 'Shop', icon: ShoppingBag },
    { id: 'exchange', label: 'Trao đổi', icon: Repeat },
    { id: 'reader', label: 'Góc đọc sách', icon: BookOpen },
    { id: 'recommend', label: 'Gợi ý', icon: Sparkles },
    { id: 'leaderboard', label: 'Bảng xếp hạng', icon: Trophy },
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, height: '60px',
      backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border-color)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 20px', zIndex: 1000
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-primary)', fontWeight: 'bold', fontSize: '22px', cursor: 'pointer' }} onClick={() => setActiveTab('feed')}>
        <BookOpen size={28} />
        <span>Bookigma</span>
      </div>

      {/* Search Bar */}
      <div style={{ position: 'relative', width: '150px' }}>
        <Search style={{ position: 'absolute', left: '10px', top: '8px', color: 'var(--text-sub)' }} size={18} />
        <input 
          type="text" 
          placeholder="Tìm sách, tác giả, bạn bè..." 
          style={{
            width: '100%', padding: '8px 10px 8px 35px', borderRadius: '20px',
            border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)',
            color: 'var(--text-main)', outline: 'none'
          }}
        />
      </div>

      {/* Nav Buttons */}
      <div style={{ display: 'flex', gap: '8px' }}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 12px',
                borderRadius: '8px', border: 'none', background: isActive ? 'var(--bg-primary)' : 'transparent',
                color: isActive ? 'var(--accent-green)' : 'var(--text-sub)', fontWeight: isActive ? 'bold' : 'normal',
                cursor: 'pointer'
              }}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Dark mode & Profile */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <button onClick={toggleTheme} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-main)' }}>
          {isDark ? <Sun size={22} color="#f59e0b" /> : <Moon size={22} color="#4b5563" />}
        </button>
        <img src="https://i.pravatar.cc/150?img=12" alt="Avatar" style={{ width: '36px', height: '36px', borderRadius: '50%', cursor: 'pointer' }} />
      </div>
    </nav>
  );
}