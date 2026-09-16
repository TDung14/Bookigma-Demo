import { useState } from 'react';
import { postsData } from '../mockData';
import { 
  ThumbsUp, MessageSquare, Share2, Image, Send, 
  Users, Flag, Bookmark, UserCheck, BookOpen, 
  Bell, Circle, X
//   , Minus 
} from 'lucide-react';

export default function FeedPage() {
  // State quản lý cửa sổ chat đang mở
  const [activeChatUser, setActiveChatUser] = useState(null);
  const [chatMessages, setChatMessages] = useState({});
  const [inputText, setInputText] = useState('');

  // State giả lập thông báo & danh sách bạn bè
  const [notifications] = useState([
    { id: 1, text: 'Nguyễn Văn A vừa thích bài viết của bạn.', time: '5 phút trước' },
    { id: 2, text: 'Trần Thị B đã bình luận vào bài đánh giá sách.', time: '20 phút trước' },
  ]);

  const [chatFriends] = useState([
    { id: 1, name: 'Hoàng Nam', status: 'online', avatar: 'https://i.pravatar.cc/150?img=33' },
    { id: 2, name: 'Lê Thảo', status: 'offline', avatar: 'https://i.pravatar.cc/150?img=47' },
    { id: 3, name: 'Minh Đức', status: 'online', avatar: 'https://i.pravatar.cc/150?img=11' },
  ]);

  const leftMenuItems = [
    { icon: Users, label: 'Nhóm', color: '#3b82f6' },
    { icon: Flag, label: 'Trang', color: '#f59e0b' },
    { icon: Bookmark, label: 'Đã lưu', color: '#8b5cf6' },
    { icon: UserCheck, label: 'Bạn bè', color: '#10b981' },
    { icon: BookOpen, label: 'Kho Sách cá nhân', color: '#ef4444' },
  ];

  // Xử lý gửi tin nhắn
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim() || !activeChatUser) return;

    const userId = activeChatUser.id;
    const currentMsgs = chatMessages[userId] || [];
    
    setChatMessages({
      ...chatMessages,
      [userId]: [...currentMsgs, { sender: 'me', text: inputText }]
    });

    setInputText('');
  };

  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: '2fr 4fr 3fr', 
      gap: '20px', 
      maxWidth: '1280px', 
      margin: '0 auto', 
      alignItems: 'start',
      position: 'relative'
    }}>
      
      {/* ================= CỘT TRÁI (2 PHẦN): NAV MENU ================= */}
      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '12px' }}>
        <h4 style={{ margin: '0 0 8px 8px', color: 'var(--text-sub)', fontSize: '13px', textTransform: 'uppercase' }}>Khám phá</h4>
        {leftMenuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button 
              key={index}
              style={{
                display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 12px',
                borderRadius: '8px', border: 'none', background: 'transparent',
                color: 'var(--text-main)', cursor: 'pointer', fontSize: '14px', fontWeight: '500',
                transition: 'background 0.2s', textAlign: 'left'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              <Icon size={20} color={item.color} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* ================= CỘT GIỮA (4 PHẦN): BẢNG TIN BÀI ĐĂNG ================= */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* Khung đăng bài */}
        <div className="card">
          <div style={{ display: 'flex', gap: '10px' }}>
            <img src="https://i.pravatar.cc/150?img=12" alt="Avatar" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
            <input 
              type="text" 
              placeholder="Bạn đang đọc gì thế? Cùng chia sẻ cảm nhận nào..." 
              style={{
                flex: 1, padding: '10px 15px', borderRadius: '20px',
                border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)',
                color: 'var(--text-main)', outline: 'none'
              }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px', paddingTop: '10px', borderTop: '1px solid var(--border-color)' }}>
            <button style={{ background: 'none', border: 'none', color: 'var(--text-sub)', display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
              <Image size={18} color="#22c55e" /> Hình ảnh / Video
            </button>
            <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Send size={16} /> Đăng bài
            </button>
          </div>
        </div>

        {/* Danh sách bài đăng */}
        {postsData.map((post) => (
          <div key={post.id} className="card">
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '12px' }}>
              <img src={post.avatar} alt={post.author} style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
              <div>
                <h4 style={{ margin: 0 }}>{post.author}</h4>
                <span style={{ fontSize: '12px', color: 'var(--text-sub)' }}>{post.time}</span>
              </div>
            </div>
            <p style={{ lineHeight: '1.5', margin: '0 0 12px 0', color: 'var(--text-main)' }}>{post.content}</p>
            {post.image && <img src={post.image} alt="Post content" style={{ width: '100%', borderRadius: '8px', maxHeight: '350px', objectFit: 'cover', marginBottom: '12px' }} />}
            
            <div style={{ display: 'flex', justifyContent: 'space-around', borderTop: '1px solid var(--border-color)', paddingTop: '10px' }}>
              <button style={{ background: 'none', border: 'none', color: 'var(--text-sub)', display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
                <ThumbsUp size={18} /> {post.likes} Thích
              </button>
              <button style={{ background: 'none', border: 'none', color: 'var(--text-sub)', display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
                <MessageSquare size={18} /> {post.comments} Bình luận
              </button>
              <button style={{ background: 'none', border: 'none', color: 'var(--text-sub)', display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
                <Share2 size={18} /> Chia sẻ
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ================= CỘT PHẢI (3 PHẦN): THÔNG BÁO & CHAT ================= */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        {/* Khung Thông báo */}
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', marginBottom: '10px' }}>
            <Bell size={18} color="var(--accent-green)" />
            <h4 style={{ margin: 0, color: 'var(--text-main)' }}>Thông báo mới</h4>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {notifications.map((notif) => (
              <div key={notif.id} style={{ fontSize: '13px', borderBottom: '1px dashed var(--border-color)', paddingBottom: '8px' }}>
                <p style={{ margin: 0, color: 'var(--text-main)' }}>{notif.text}</p>
                <span style={{ fontSize: '11px', color: 'var(--text-sub)' }}>{notif.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Khung Chat / Người liên hệ */}
        <div className="card">
          <h4 style={{ margin: '0 0 12px 0', color: 'var(--text-main)', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>Người liên hệ (Chat)</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {chatFriends.map((friend) => (
              <div 
                key={friend.id} 
                onClick={() => setActiveChatUser(friend)}
                style={{ 
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', 
                  cursor: 'pointer', padding: '6px 8px', borderRadius: '8px',
                  transition: 'background 0.2s',
                  backgroundColor: activeChatUser?.id === friend.id ? 'var(--bg-primary)' : 'transparent'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-primary)'}
                onMouseLeave={(e) => {
                  if (activeChatUser?.id !== friend.id) e.currentTarget.style.background = 'transparent';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <img src={friend.avatar} alt={friend.name} style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
                  <span style={{ fontSize: '14px', color: 'var(--text-main)', fontWeight: '500' }}>{friend.name}</span>
                </div>
                <Circle size={10} fill={friend.status === 'online' ? '#22c55e' : '#9ca3af'} color="transparent" />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ================= CỬA SỔ CHAT BẬT LÊN (POPUP BOX CHAT) ================= */}
      {activeChatUser && (
        <div style={{
          position: 'fixed', bottom: 0, right: '20px', width: '395px', height: '380px',
          backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)',
          borderTopLeftRadius: '12px', borderTopRightRadius: '12px',
          boxShadow: '0 -4px 12px rgba(0,0,0,0.15)', display: 'flex', flexDirection: 'column',
          zIndex: 1000
        }}>
          {/* Header Cửa sổ Chat */}
          <div style={{
            padding: '10px 14px', borderBottom: '1px solid var(--border-color)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            backgroundColor: 'var(--accent-green)', color: '#fff',
            borderTopLeftRadius: '11px', borderTopRightRadius: '11px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <img src={activeChatUser.avatar} alt={activeChatUser.name} style={{ width: '26px', height: '26px', borderRadius: '50%' }} />
              <span style={{ fontWeight: 'bold', fontSize: '14px' }}>{activeChatUser.name}</span>
            </div>
            <div style={{ display: 'flex', gap: '6px' }}>
              <button onClick={() => setActiveChatUser(null)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Body Tin nhắn */}
          <div style={{ flex: 1, padding: '12px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <p style={{ textAlign: 'center', fontSize: '12px', color: 'var(--text-sub)', margin: '4px 0' }}>
              Bắt đầu cuộc trò chuyện với {activeChatUser.name}
            </p>
            
            {(chatMessages[activeChatUser.id] || []).map((msg, idx) => (
              <div 
                key={idx} 
                style={{
                  alignSelf: msg.sender === 'me' ? 'flex-end' : 'flex-start',
                  backgroundColor: msg.sender === 'me' ? 'var(--accent-green)' : 'var(--bg-primary)',
                  color: msg.sender === 'me' ? '#fff' : 'var(--text-main)',
                  padding: '8px 12px', borderRadius: '15px', fontSize: '13px',
                  maxWidth: '80%', wordBreak: 'break-word'
                }}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Form gõ tin nhắn */}
          <form 
            onSubmit={handleSendMessage}
            style={{ padding: '8px 10px', borderTop: '1px solid var(--border-color)', display: 'flex', gap: '6px' }}
          >
            <input 
              type="text" 
              placeholder="Nhập tin nhắn..." 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              style={{
                flex: 1, padding: '6px 12px', borderRadius: '15px',
                border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)',
                color: 'var(--text-main)', outline: 'none', fontSize: '13px'
              }}
            />
            <button 
              type="submit" 
              style={{ background: 'none', border: 'none', color: 'var(--accent-green)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

    </div>
  );
}