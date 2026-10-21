import { useState } from "react";

export default function BookForm({ onAddBook }) {
  const [judul, setJudul] = useState("");
  const [penulis, setPenulis] = useState("");
  const [tahun, setTahun] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!judul.trim() || !penulis.trim() || !tahun) {
      return;
    }

    onAddBook({
      judul: judul.trim(),
      penulis: penulis.trim(),
      tahun: Number(tahun),
    });

    setJudul("");
    setPenulis("");
    setTahun("");
  }

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <h2>Tambah Buku</h2>

      <label htmlFor="judul">Judul Buku</label>
      <input
        id="judul"
        value={judul}
        onChange={(e) => setJudul(e.target.value)}
        placeholder="Masukkan judul buku"
        required
      />

      <label htmlFor="penulis">Nama Penulis</label>
      <input
        id="penulis"
        value={penulis}
        onChange={(e) => setPenulis(e.target.value)}
        placeholder="Masukkan nama penulis"
        required
      />

      <label htmlFor="tahun">Tahun Terbit</label>
      <input
        id="tahun"
        type="number"
        min="1"
        max={new Date().getFullYear()}
        value={tahun}
        onChange={(e) => setTahun(e.target.value)}
        placeholder="Contoh: 2025"
        required
      />

      <button className="primary-button" type="submit">
        + Tambah Buku
      </button>
    </form>
  );
}