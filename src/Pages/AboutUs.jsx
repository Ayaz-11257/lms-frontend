import { useState } from "react";
import CarouselSlide from "../Components/CarouselSlide";
import HomeLayout from "../Layouts/HomeLayout";

function AboutUs() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const celebrities = [
    {
      title: "APJ Abdul Kalam",
      description: "Failure will never overtake me if my determination to succeed is strong enough.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLWTWMEdnUytycaHB_UXdt9teDFiKZ5DvxiVBM45gjBA&s=10",
      slideNumber: 1
    },
    {
      title: "Steve Jobs",
      description: "We don't get a chance to do that many things, and everyone should be really excellent.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbWcFB9CX3izbNnqeCMFV0tel4uVG6jFgSgp2zk8V1rA&s=10609621838510-5ad474b7d25d.webp",
      slideNumber: 2
    },
    {
      title: "Nelson Mandela",
      description: "Education is the most powerful tool you can use to change the world.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRepUFtoOVC-lqtJ0q_FiAvOzBHw7EZTOWEK2zt9uNg1A&s=10",
      slideNumber: 3
    },
    {
      title: "Albert Einstein",
      description: "A person who never made a mistake never tried anything new.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeID9bUUKtjsnoCBP3oyRokBTDKAtqXPF-9d0mXYHxBg&s=10",
      slideNumber: 4
    }
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? celebrities.length : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === celebrities.length ? 1 : prev + 1));
  };

  return (
    <HomeLayout>
      <div className="pl-20 pt-20 flex flex-col text-white">
        <div className="flex items-center gap-5 mx-10">
          <section className="w-1/2 space-y-10">
            <h1 className="text-5xl text-yellow-500 font-semibold">
              Affordable and Quality Education
            </h1>
            <p className="text-xl text-gray-200">
              Our goal is to provide affordable and quality education to the world.
              We are providing the platform for aspiring teachers and students to share
              their skills, creativity, and knowledge to empower and contribute
              in the growth and wellness of mankind.
            </p>
          </section>
          <div className="w-1/2">
            <img
              src="https://images.pexels.com/photos/17653299/pexels-photo-17653299.jpeg"
              alt="about main page"
              id="test1"
              style={{
                filter: "drop-shadow(0px 10px 10px rgb(0,0,0))",
                height: "500px",
                width: "900px"
              }}
            />
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative w-1/2 my-16 mx-auto overflow-hidden">
          {celebrities.map((celebrity) => (
            <CarouselSlide
              {...celebrity}
              key={celebrity.slideNumber}
              isActive={celebrity.slideNumber === currentSlide}
              prevSlide={prevSlide}
              nextSlide={nextSlide}
            />
          ))}
        </div>
      </div>
    </HomeLayout>
  );
}

export default AboutUs;