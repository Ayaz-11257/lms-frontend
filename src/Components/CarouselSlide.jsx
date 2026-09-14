function CarouselSlide({ image, title, description, isActive, prevSlide, nextSlide }) {
  if (!isActive) return null;

  return (
    <div className="relative w-full flex flex-col items-center justify-center transition-all duration-500 ease-in-out">
      <div className="flex flex-col items-center justify-center gap-4 px-[15%] text-center w-full min-h-[320px]">
        <img
          src={image}
          alt={title}
          className="w-40 h-40 object-cover rounded-full border-2 border-gray-400"
        />
        <p className="text-xl text-gray-200">
          {description}
        </p>
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>

      {/* Slide Navigation Buttons */}
      <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 transform justify-between pointer-events-none px-4">
        <button
          type="button"
          onClick={prevSlide}
          className="btn btn-circle bg-gray-800 text-white hover:bg-gray-700 border-none pointer-events-auto"
        >
          ❮
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="btn btn-circle bg-gray-800 text-white hover:bg-gray-700 border-none pointer-events-auto"
        >
          ❯
        </button>
      </div>
    </div>
  );
}

export default CarouselSlide;