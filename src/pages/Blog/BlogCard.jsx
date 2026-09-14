import { FaUser, FaCalendarAlt, FaTag } from "react-icons/fa";

function BlogCard({
  image,
  title,
  category,
  date,
  description,
}) {
  return (
    <div>

      <img
        src={image}
        alt={title}
        className="w-full h-[450px] object-cover rounded-lg"
      />

      <div className="flex gap-8 mt-6 text-gray-500">

        <div className="flex items-center gap-2">
          <FaUser />
          <span>Admin</span>
        </div>

        <div className="flex items-center gap-2">
          <FaCalendarAlt />
          <span>{date}</span>
        </div>

        <div className="flex items-center gap-2">
          <FaTag />
          <span>{category}</span>
        </div>

      </div>

      <h2 className="text-4xl font-bold mt-6">
        {title}
      </h2>

      <p className="text-gray-500 leading-8 mt-5">
        {description}
      </p>

      <button className="mt-8 border-b-2 border-black pb-2 hover:text-[#B88E2F] hover:border-[#B88E2F] duration-300">
        Read More
      </button>

    </div>
  );
}

export default BlogCard;
