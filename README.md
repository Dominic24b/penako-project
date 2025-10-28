# Aplikasi PENAKO

Aplikasi fullstack React dengan frontend dan backend.

## Struktur Proyek

```
PENAKO/
├── client/          # Frontend React (Vite)
├── server/          # Backend Express.js
├── package.json     # Scripts utama
└── README.md
```

## Instalasi

1. Install dependencies untuk semua bagian:
   ```bash
   npm run install-all
   ```

   Atau install secara terpisah:
   ```bash
   npm run install-client
   npm run install-server
   ```

## Menjalankan Aplikasi

### Development Mode
Jalankan frontend dan backend secara bersamaan:
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

### Jalankan Terpisah

Frontend (http://localhost:5173):
```bash
cd client
npm run dev
```

Backend (http://localhost:5000):
```bash
cd server
npm run dev
```

## API Endpoints

- `GET /api` - Pesan selamat datang
- `GET /api/status` - Status server

## Teknologi

- **Frontend**: React 18, Vite
- **Backend**: Node.js, Express.js
- **Proxy**: Vite proxy untuk API calls
