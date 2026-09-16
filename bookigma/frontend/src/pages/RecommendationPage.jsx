
// import { Sparkles, ThumbsUp } from 'lucide-react';
import { Sparkles } from 'lucide-react';
export default function RecommendationPage() {
  return (
    <div>
      <div className="card" style={{ marginBottom: '20px', background: 'linear-gradient(135deg, #22c55e 0%, #15803d 100%)', color: 'white' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: 0 }}><Sparkles /> Đề Xuất Dành Riêng Cho Bạn</h2>
        <p style={{ margin: '8px 0 0 0', opacity: 0.9 }}>Dựa trên thói quen đọc và các cuốn sách bạn đã tương tác trên Bookigma</p>
      </div>

      <div className="card">
        <h3>💡 Vì bạn đã đọc "Nhà Giả Kim":</h3>
        <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
          <img src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=150" alt="Book" style={{ width: '100px', borderRadius: '8px' }} />
          <div>
            <h4>Hành trình về Phương Đông</h4>
            <p style={{ color: 'var(--text-sub)', fontSize: '14px' }}>Tác giả: Baird T. Spalding</p>
            <p style={{ fontSize: '14px' }}>Cuốn sách mở ra những góc nhìn sâu sắc về triết lý nhân sinh, tâm linh và văn hóa phương Đông.</p>
            <button className="btn-primary">Thêm vào thư viện đọc</button>
          </div>
        </div>
      </div>

      <div className="card">
        <h3>💡 Vì bạn đã đọc "Nhà Giả Kim":</h3>
        <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
          <img src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=150" alt="Book" style={{ width: '100px', borderRadius: '8px' }} />
          <div>
            <h4>Hành trình về Phương Đông</h4>
            <p style={{ color: 'var(--text-sub)', fontSize: '14px' }}>Tác giả: Baird T. Spalding</p>
            <p style={{ fontSize: '14px' }}>Cuốn sách mở ra những góc nhìn sâu sắc về triết lý nhân sinh, tâm linh và văn hóa phương Đông.</p>
            <button className="btn-primary">Thêm vào thư viện đọc</button>
          </div>
        </div>
      </div>

      <div className="card">
        <h3>💡 Vì bạn đã đọc "Nhà Giả Kim":</h3>
        <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
          <img src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=150" alt="Book" style={{ width: '100px', borderRadius: '8px' }} />
          <div>
            <h4>Hành trình về Phương Đông</h4>
            <p style={{ color: 'var(--text-sub)', fontSize: '14px' }}>Tác giả: Baird T. Spalding</p>
            <p style={{ fontSize: '14px' }}>Cuốn sách mở ra những góc nhìn sâu sắc về triết lý nhân sinh, tâm linh và văn hóa phương Đông.</p>
            <button className="btn-primary">Thêm vào thư viện đọc</button>
          </div>
        </div>
      </div>

      <div className="card">
        <h3>💡 Vì bạn đã đọc "Nhà Giả Kim":</h3>
        <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
          <img src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=150" alt="Book" style={{ width: '100px', borderRadius: '8px' }} />
          <div>
            <h4>Hành trình về Phương Đông</h4>
            <p style={{ color: 'var(--text-sub)', fontSize: '14px' }}>Tác giả: Baird T. Spalding</p>
            <p style={{ fontSize: '14px' }}>Cuốn sách mở ra những góc nhìn sâu sắc về triết lý nhân sinh, tâm linh và văn hóa phương Đông.</p>
            <button className="btn-primary">Thêm vào thư viện đọc</button>
          </div>
        </div>
      </div>
    </div>
  );
}