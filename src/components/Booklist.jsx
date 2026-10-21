import { useState } from "react";
import KartuBuku from "./KartuBuku.jsx";

export default function BookList({
  books,
  onDeleteBook,
  onToggleStatus,
}) {
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) => {
    const keyword = search.toLowerCase();

    return (
      book.judul.toLowerCase().includes(keyword) ||
      book.penulis.toLowerCase().includes(keyword)
    );
  });

  return (
    <section className="book-section">
      <h2>Daftar Buku</h2>
      <p className="muted">
        Total {books.length} buku terdaftar
      </p>

      <input
        className="search-input"
        placeholder="Cari judul atau penulis..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        aria-label="Cari buku"
      />

      {filteredBooks.length === 0 ? (
        <p className="empty-state">
          {books.length === 0
            ? "Belum ada buku. Tambahkan buku pertama!"
            : "Buku tidak ditemukan."}
        </p>
      ) : (
        <div className="book-list">
          {filteredBooks.map((book) => (
            <KartuBuku
              key={book.id}
              judul={book.judul}
              penulis={book.penulis}
              tahun={book.tahun}
              tersedia={book.tersedia}
              onToggle={() => onToggleStatus(book.id)}
              onDelete={() => onDeleteBook(book.id)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
