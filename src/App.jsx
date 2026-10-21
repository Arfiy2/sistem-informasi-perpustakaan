import KartuBuku from './components/KartuBuku.jsx';
export default function App() {
  return (
    <main>
      <h1>Sistem Informasi Perpustakaan</h1>
      <KartuBuku judul="Dasar-Dasar Ilmu Komputer" penulis="Budi Santoso" tahun={2025} tersedia={true} />
      <KartuBuku judul="Dasar Pemrograman" penulis="Siti Rahma" tahun={2024} tersedia={false} />
      <KartuBuku judul="Algoritma dan Struktur Data" penulis="Andi Pratama" tahun={2023} tersedia={true}/>
    </main>
  );
}
