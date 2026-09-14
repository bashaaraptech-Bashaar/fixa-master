function Pagination() {
  return (
    <section className="flex justify-center gap-5 py-16">

      <button type="button" aria-current="page" className="w-14 h-14 rounded-lg bg-slate-900 text-white  ">
        1
      </button>

      <button type="button" className="w-14 h-14 rounded-lg bg-white text-slate-900 hover:bg-slate-900 hover:text-white duration-300">
        2
      </button>

      <button type="button" className="w-14 h-14 rounded-lg bg-white text-slate-900 hover:bg-slate-900 hover:text-white duration-300">
        3
      </button>

      <button type="button" className="px-8 rounded-lg bg-white text-slate-900 hover:bg-slate-900 hover:text-white duration-300">
        Next
      </button>

    </section>
  );
}

export default Pagination;