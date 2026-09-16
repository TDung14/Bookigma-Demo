
import { exchangeBooks } from '../mockData';
import { RefreshCw, MapPin } from 'lucide-react';

export default function ExchangePage() {
  return (
    <div>
      <div className="card" style={{ marginBottom: '20px' }}>
        <h2 style={{ margin: 0, color: 'var(--text-primary)' }}>Sàn Trao Đổi Sách Độc Giả</h2>
        <p style={{ margin: '4px 0 0 0', color: 'var(--text-sub)' }}>Sẻ chia tri thức - Kết nối đam mê hoàn toàn miễn phí</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        {exchangeBooks.map(item => (
          <div key={item.id} className="card">
            <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', marginBottom: '10px' }}>
              <span style={{ background: '#dcfce7', color: '#15803d', padding: '4px 8px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold' }}>
                {item.status}
              </span>
              <h3 style={{ margin: '10px 0 5px 0' }}>{item.title}</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-sub)', margin: 0 }}>Sở hữu bởi: <b>{item.owner}</b></p>
            </div>
            
            <p style={{ fontSize: '14px', margin: '0 0 10px 0' }}>
              🔄 <b>Muốn đổi lấy:</b> {item.wanted}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-sub)', fontSize: '13px', marginBottom: '15px' }}>
              <MapPin size={14} /> <span>{item.location}</span>
            </div>

            <button className="btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px' }}>
              <RefreshCw size={16} /> Gửi đề nghị trao đổi
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}