import { useState } from 'react'
import Login from './Login'
import Register from './Register'
import Home from './Home'
import ProfilAnggota from './MemberProfileForm'
import ProfileDisplay from './ProfileDisplay'
import DataKeuangan from './DataKeuangan'
import Inventaris from './Inventaris'
import Pengaturan from './Pengaturan'
import InfoAplikasi from './InfoAplikasi'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [koperasiName, setKoperasiName] = useState('')
  const [activeTab, setActiveTab] = useState('home')
  const [showRegister, setShowRegister] = useState(false)
  const [showProfileForm, setShowProfileForm] = useState(true)

  // State untuk data
  const [profilData, setProfilData] = useState([])
  const [keuanganData, setKeuanganData] = useState([])
  const [inventarisData, setInventarisData] = useState([])

  // State untuk form
  const [profilForm, setProfilForm] = useState({
    nama: '', ttl: '', jenisKelamin: '', alamat: '', noHp: ''
  })
  const [keuanganForm, setKeuanganForm] = useState({
    namaAnggota: '', besarPinjaman: '', bunga: '', tanggalAwal: '', tanggalAkhir: ''
  })
  const [inventarisForm, setInventarisForm] = useState({
    namaBarang: '', stock: '', satuan: '', keterangan: ''
  })

  const handleLogin = (nama) => {
    setKoperasiName(nama)
    setIsLoggedIn(true)
  }

  const handleRegister = (nama) => {
    setKoperasiName(nama)
    setIsLoggedIn(true)
  }

  const handleBackToLogin = () => {
    setShowRegister(false)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setKoperasiName('')
    setActiveTab('home')
  }

  const handleProfilSubmit = (e) => {
    e.preventDefault()
    if (profilForm.nama && profilForm.ttl && profilForm.jenisKelamin && profilForm.alamat && profilForm.noHp) {
      setProfilData([...profilData, { ...profilForm, id: Date.now() }])
      setProfilForm({ nama: '', ttl: '', jenisKelamin: '', alamat: '', noHp: '' })
    }
  }

  const handleKeuanganSubmit = (e) => {
    e.preventDefault()
    if (keuanganForm.namaAnggota && keuanganForm.besarPinjaman && keuanganForm.bunga && keuanganForm.tanggalAwal && keuanganForm.tanggalAkhir) {
      setKeuanganData([...keuanganData, { ...keuanganForm, id: Date.now() }])
      setKeuanganForm({ namaAnggota: '', besarPinjaman: '', bunga: '', tanggalAwal: '', tanggalAkhir: '' })
    }
  }

  const handleInventarisSubmit = (e) => {
    e.preventDefault()
    if (inventarisForm.namaBarang && inventarisForm.stock && inventarisForm.satuan && inventarisForm.keterangan) {
      setInventarisData([...inventarisData, { ...inventarisForm, id: Date.now() }])
      setInventarisForm({ namaBarang: '', stock: '', satuan: '', keterangan: '' })
    }
  }

  const handleSaveProfile = (formData) => {
    setProfilData([...profilData, { ...formData, id: Date.now() }])
  }

  const handleNavigateToDisplay = () => {
    setShowProfileForm(false)
  }

  const handleBackToForm = () => {
    setShowProfileForm(true)
  }

  if (!isLoggedIn) {
    if (showRegister) {
      return <Register onRegister={handleRegister} onBackToLogin={handleBackToLogin} />
    }
    return <Login onLogin={handleLogin} onShowRegister={() => setShowRegister(true)} />
  }

  return (
    <div className="app">
      <main>
        {activeTab === 'home' && (
          <Home onNavigate={setActiveTab} />
        )}

        {activeTab === 'profil' && (
          showProfileForm ? (
            <ProfilAnggota
              onSaveProfile={handleSaveProfile}
              onNavigateToDisplay={handleNavigateToDisplay}
              onNavigate={setActiveTab}
            />
          ) : (
            <ProfileDisplay
              profileData={profilData}
              onBackToForm={handleBackToForm}
              onDeleteProfile={() => setProfilData([])}
              onNavigate={setActiveTab}
            />
          )
        )}

        {activeTab === 'keuangan' && (
          <DataKeuangan
            onNavigate={setActiveTab}
          />
        )}

        {activeTab === 'inventaris' && (
          <Inventaris onNavigate={setActiveTab} />
        )}

        {activeTab === 'settings' && (
          <Pengaturan onNavigate={setActiveTab} />
        )}

        {activeTab === 'info' && (
          <InfoAplikasi onNavigate={setActiveTab} />
        )}
      </main>


    </div>
  )
}

export default App
