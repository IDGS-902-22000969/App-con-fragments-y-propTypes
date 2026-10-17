export default function Pagination({ page, totalPage, onPreview, onNext }) {
  return (
    <nav className="pagination">
      <button onClick={onPreview} disabled={page === 1}>
        Anterior
      </button>
      <span>
        {page} / {totalPage}
      </span>
      <button onClick={onNext} disabled={page >= totalPage}>
        Siguiente
      </button>
    </nav>
  );
}