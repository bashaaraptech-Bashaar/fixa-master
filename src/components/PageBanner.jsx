function PageBanner({ title, breadcrumb, background }) {
  return (
    <section
      style={{ backgroundImage: `url(${background})` }}
      className="relative h-48 md:h-80 bg-cover bg-center flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative text-center text-white px-4">

        <h1 className="text-3xl md:text-5xl font-bold">
          {title}
        </h1>

        <p className="mt-4">
          {breadcrumb}
        </p>

      </div>
    </section>
  );
}

export default PageBanner;