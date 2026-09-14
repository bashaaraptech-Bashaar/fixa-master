function RecentPost({ image, title, date }) {
  return (
    <div className="flex gap-4">
      <img
        src={image}
        alt={title}
        className="w-20 h-20 object-cover rounded-lg"
      />

      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-gray-500 text-sm">{date}</p>
      </div>
    </div>
  );
}

export default RecentPost;
