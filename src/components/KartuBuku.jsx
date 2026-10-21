import "./KartuBuku.css";
export default function KartuBuku({ judul, penulis, tahun, tersedia }) {
  return (
    <article className="kartu">
      <h3>{judul}</h3>
      <p>{penulis} - tahun {tahun}</p>
      {tersedia
        ? <span className="lencana">Tersedia</span>
        : <span className="lencana off">Sedang dipinjam</span>}
    </article>
  );
}
