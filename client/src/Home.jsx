import './Home.css'

function Home({ onNavigate }) {
  return (
    <div className="home-page">
      <div className="home-container">
        <div className="logo-section">
          <img src="https://i.ibb.co/zRnBscB/logo-penako.png" alt="PENAKO Logo" />
          <p className="subtitle">PENCATATAN AKUNTANSI KOPERASI</p>
        </div>

        <h2 className="page-title">Beranda</h2>

        <div className="menu-item" onClick={() => onNavigate('profil')}>
          <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="Profil Icon" />
          <span className="menu-text">Profil</span>
        </div>

        <div className="menu-item" onClick={() => onNavigate('keuangan')}>
          <img src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="Keuangan Icon" />
          <span className="menu-text">Keuangan</span>
        </div>

        <div className="menu-item" onClick={() => onNavigate('inventaris')}>
          <img src="https://cdn-icons-png.flaticon.com/512/679/679720.png" alt="Inventaris Icon" />
          <span className="menu-text">Inventaris</span>
        </div>
      </div>
    </div>
  )
}

export default Home
