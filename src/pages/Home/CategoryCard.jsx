function CategoryCard({ image, title }) {
  return (
    <div className="group cursor-pointer">

      <div className="overflow-hidden rounded-xl">

        <img
          src={image}
          alt={title}
          className="w-full h-64 md:h-[420px] object-cover group-hover:scale-110 duration-500"
        />

      </div>

      <h3 className="mt-5 text-2xl font-semibold text-slate-800">
        {title}
      </h3>

    </div>
  );
}

export default CategoryCard;

