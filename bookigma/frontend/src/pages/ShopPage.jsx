import { useState } from 'react';
import { shopBooks } from '../mockData';
import { PlusCircle, ShoppingCart, Star } from 'lucide-react';

export default function ShopPage() {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div>
      {/* Header cho Shop */}
      <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <h2 style={{ margin: 0, color: 'var(--text-primary)' }}>Bookigma Shop</h2>
          <p style={{ margin: '4px 0 0 0', color: 'var(--text-sub)' }}>Sách chính hãng từ các NXB và đối tác uy tín</p>
        </div>
        <button className="btn-primary" onClick={() => setShowAddModal(true)} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <PlusCircle size={18} /> Đăng sản phẩm (Đối tác)
        </button>
      </div>

      {/* Modal Giả lập cho Đối tác đăng bài */}
      {showAddModal && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000 }}>
          <div className="card" style={{ width: '400px' }}>
            <h3>Đăng sản phẩm mới (Kênh Đối Tác)</h3>
            <input type="text" placeholder="Tên sách" style={{ width: '100%', marginBottom: '10px', padding: '8px' }} />
            <input type="text" placeholder="Giá bán (VNĐ)" style={{ width: '100%', marginBottom: '10px', padding: '8px' }} />
            <input type="text" placeholder="Link ảnh sản phẩm" style={{ width: '100%', marginBottom: '10px', padding: '8px' }} />
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button onClick={() => setShowAddModal(false)} style={{ padding: '8px 16px' }}>Hủy</button>
              <button className="btn-primary" onClick={() => { alert('Đăng thành công!'); setShowAddModal(false); }}>Đăng bán</button>
            </div>
          </div>
        </div>
      )}

      {/* Grid danh sách sách */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
        {shopBooks.map(book => (
          <div key={book.id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <img src={book.img} alt={book.title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
              <h3 style={{ fontSize: '16px', margin: '10px 0 5px 0' }}>{book.title}</h3>
              <p style={{ fontSize: '12px', color: 'var(--text-sub)', margin: 0 }}>Đơn vị: {book.seller}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', margin: '6px 0', color: '#f59e0b' }}>
                <Star size={16} fill="#f59e0b" /> <span>{book.rating}</span>
              </div>
            </div>
            <div>
              <span style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--accent-green)', display: 'block', margin: '8px 0' }}>{book.price}</span>
              <button className="btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px' }}>
                <ShoppingCart size={16} /> Mua ngay
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}