import { useState, useEffect } from 'react';
import { Bookmark, Type, Volume2, Music, Timer, Languages, Sparkles, Play, Pause, RotateCcw } from 'lucide-react';

export default function ReaderPage() {
  // State quản lý font size & dịch ngôn ngữ
  const [fontSize, setFontSize] = useState(18);
  const [language, setLanguage] = useState('vi'); // 'vi' | 'en'

  // State nhạc nền
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  // State đồng hồ Pomodoro
  const [seconds, setSeconds] = useState(1500); // 25 phút
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Đếm ngược thời gian (Đã sửa lỗi setState)
  useEffect(() => {
    let interval = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds <= 1) {
            setIsTimerRunning(false);
            return 0;
          }
          return prevSeconds - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning]);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Nội dung đa ngôn ngữ
  const content = {
    vi: {
      title: "Chương 1: Tiếng Gọi Từ Vũ Trụ (Nhà Giả Kim)",
      p1: "Cậu tên là Santiago. Trời đã chập tối khi cậu cùng đàn cừu đến một nhà thờ cổ sụp đổ, mái đã sập từ lâu và một cây chăn lớn đã mọc lên ngay nơi xưa là phòng thánh.",
      p2: "Cậu quyết định ngủ lại đấy qua đêm. Cậu lùa đống cừu qua cánh cổng hỏng rồi chắn ngang bằng vài thanh gỗ để chúng khỏi đi lang thang lúc đêm tối. Tuy vùng này không có dã thú nhưng đã có lần một con cừu xổng ra khiến cậu phải mất cả ngày hôm sau đi tìm...",
      aiExplanation: "Đoạn văn tượng trưng cho sự bắt đầu của một hành trình tâm linh. Nhà thờ hoang và cây chăn mọc từ phòng thánh gợi mở sự dung hòa giữa tôn giáo truyền thống và bản chất tự nhiên của vũ trụ."
    },
    en: {
      title: "Chapter 1: The Call of the Universe (The Alchemist)",
      p1: "The boy's name was Santiago. Dusk was falling as he arrived with his herd at an abandoned church. The roof had fallen in long ago, and a huge sycamore had grown on the spot where the sacristy had once stood.",
      p2: "He decided to spend the night there. He drove all his sheep through the ruined gate and then laid a few planks across it to prevent the flock from wandering away during the night...",
      aiExplanation: "This passage symbolizes the beginning of a spiritual journey. The abandoned church and the sycamore tree growing from the sacristy suggest a harmony between traditional religion and nature."
    }
  };

  const currentContent = content[language];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px', maxWidth: '1100px', margin: '0 auto', alignItems: 'start' }}>
      
      {/* ================= CỘT TRÁI (2/3): NỘI DUNG ĐỌC SÁCH ================= */}
      <div className="card">
        {/* Header điều khiển văn bản */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '15px', borderBottom: '1px solid var(--border-color)', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
          <h2 style={{ margin: 0, fontSize: '20px', color: 'var(--text-main)' }}>{currentContent.title}</h2>
          
          <div style={{ display: 'flex', gap: '8px' }}>
            <button 
              onClick={() => setFontSize(fontSize === 22 ? 16 : fontSize + 2)}
              style={{ padding: '6px 10px', borderRadius: '6px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-main)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px' }}
            >
              <Type size={15} /> Cỡ chữ ({fontSize}px)
            </button>

            <button style={{ padding: '6px 10px', borderRadius: '6px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-main)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px' }}>
              <Volume2 size={15} /> Đọc thành tiếng
            </button>

            <button style={{ padding: '6px 10px', borderRadius: '6px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-main)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px' }}>
              <Bookmark size={15} /> Đánh dấu
            </button>
          </div>
        </div>

        {/* Nội dung sách */}
        <div style={{ lineHeight: '1.8', fontSize: `${fontSize}px`, textAlign: 'justify', color: 'var(--text-main)' }}>
          <p style={{ marginBottom: '16px' }}>{currentContent.p1}</p>
          <p style={{ marginBottom: '16px' }}>{currentContent.p2}</p>
        </div>
      </div>

      {/* ================= CỘT PHẢI (1/3): CÔNG CỤ HỖ TRỢ & AI ================= */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        {/* Box 1: Bấm giờ Pomodoro & Nhạc nền */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <h4 style={{ margin: 0, color: 'var(--text-main)', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>Góc tập trung</h4>
          
          {/* Nhạc nền */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Music size={18} color="var(--accent-green)" />
              <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Nhạc tập trung</span>
            </div>
            <button 
              onClick={() => setIsPlayingMusic(!isPlayingMusic)}
              style={{ padding: '5px 10px', borderRadius: '15px', border: '1px solid var(--border-color)', background: isPlayingMusic ? 'var(--accent-green)' : 'var(--bg-primary)', color: isPlayingMusic ? '#fff' : 'var(--text-main)', cursor: 'pointer', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              {isPlayingMusic ? <Pause size={12} /> : <Play size={12} />}
              {isPlayingMusic ? 'Đang bật' : 'Bật nhạc'}
            </button>
          </div>

          {/* Pomodoro */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'var(--bg-primary)', padding: '10px', borderRadius: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Timer size={18} color="var(--accent-green)" />
              <span style={{ fontSize: '16px', fontWeight: 'bold', fontFamily: 'monospace' }}>{formatTime(seconds)}</span>
            </div>
            <div style={{ display: 'flex', gap: '6px' }}>
              <button onClick={() => setIsTimerRunning(!isTimerRunning)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--text-main)' }}>
                {isTimerRunning ? <Pause size={16} /> : <Play size={16} />}
              </button>
              <button onClick={() => { setIsTimerRunning(false); setSeconds(1500); }} style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--text-sub)' }}>
                <RotateCcw size={16} />
              </button>
            </div>
          </div>

          {/* Ngôn ngữ */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Languages size={18} color="var(--accent-green)" />
              <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Ngôn ngữ</span>
            </div>
            <select 
              value={language} 
              onChange={(e) => setLanguage(e.target.value)}
              style={{ padding: '4px 8px', borderRadius: '6px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-main)', cursor: 'pointer', fontSize: '13px' }}
            >
              <option value="vi">Tiếng Việt</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>

        {/* Box 2: Phân tích ý nghĩa bằng AI */}
        <div className="card" style={{ borderLeft: '4px solid var(--accent-green)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
            <Sparkles size={18} color="var(--accent-green)" />
            <h4 style={{ margin: 0, color: 'var(--accent-green)' }}>AI Giải thích ý nghĩa</h4>
          </div>
          <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6', color: 'var(--text-main)' }}>
            {currentContent.aiExplanation}
          </p>
        </div>

      </div>

    </div>
  );
}