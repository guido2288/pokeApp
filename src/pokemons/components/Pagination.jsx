

export const Pagination = ({ page, totalPages, onLeftClick, onRightClick }) => {



  return (
    <div className="flex bg-slate-100 justify-center gap-2 text-xl	py-2">
      <button onClick={onLeftClick}>⬅️​</button>
      <div>{page} de {totalPages}</div>
      <button onClick={onRightClick}>➡️​</button>
    </div>
  )
}
