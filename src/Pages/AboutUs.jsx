import CarouselSlide from "../Components/CarouselSlide";
import HomeLayout from "../Layouts/HomeLayout";

function AboutUs(){

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
      slideNumber: 1
    },
    {
      title: "Albert Einstein",
      description: "A person who never made a mistake never tried anything new.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeID9bUUKtjsnoCBP3oyRokBTDKAtqXPF-9d0mXYHxBg&s=10",
      slideNumber: 1
    },
  ]
    return(
        <HomeLayout>
            <div className="pl-20 pt-20 flex flex-col text-white">
                <div className="flex items-center gap-5 mx-10">
                    <section className="w-1/2 space-y-10">
                      <h1 className="text-5xl text-yellow-500 font-semibold">
                        Affordable and Quality Education
                      </h1>
                      <p className="text-xl text-gray-200">
                        Our goal is to provide the affordable and quality education to the world.
                        We are providingthe platform for the aspiring teachers and students to share
                        their skills, creativity and knowledge to each other to empower and contribute
                        in the growth and wellness of mankind 
                      </p>
                    </section>
                    <div className="w-1/2">
                      <img 
                      src="https://images.pexels.com/photos/17653299/pexels-photo-17653299.jpeg" 
                      alt="about main page" 
                      id="test1"
                      // height={50} width={500}
                      style={{
                        filter: "drop-shadow(0px 10px 10px rgb(0,0,0))",
                        height: "500px",
                        width: "900px"
                      }} />
                    </div>
                </div>

                    <div className="carousel w-1/2 rounded-box mx-auto">
                    {celebrities && celebrities.map(celebrity => <CarouselSlide {...celebrity} key={celebrity.slideNumber} totalSlides={celebrities.length} />)}
                    {/* 
  <div id="slide1" className="carousel-item relative w-full">
    <div className="flex flex-col  items-center justify-center gap-4 px-[15%]">
     <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLWTWMEdnUytycaHB_UXdt9teDFiKZ5DvxiVBM45gjBA&s=10"
      alt="Tailwind CSS slide example"
      className="w-40  rounded-full border-2 border-gray-400"
      />
       <p className="text-xl text-gray-200">
      {"Failure will never overtake me if my determination to succeed is strong enough."}
    </p>
    <h3 className="text-2xl font-semibold">APJ Abdul Kalam</h3>
    </div>

    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="slide2" className="carousel-item relative w-full">
     <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbWcFB9CX3izbNnqeCMFV0tel4uVG6jFgSgp2zk8V1rA&s=10609621838510-5ad474b7d25d.webp"
      alt="Tailwind CSS slide example"
      className="w-40  rounded-full border-2 border-gray-400"
    />
     <p className="text-xl text-gray-200">
      {"We don't get a chance to do that many things, and everyone should be really excellent."}
    </p>
    <h3 className="text-2xl font-semibold">Steve Jobs</h3>
    </div>

    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="slide3" className="carousel-item relative w-full">
    <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRepUFtoOVC-lqtJ0q_FiAvOzBHw7EZTOWEK2zt9uNg1A&s=10"
      alt="Tailwind CSS slide example"
      className="w-40  rounded-full border-2 border-gray-400"
    />
    <p className="text-xl text-gray-200">
      {"Education is the most powerful tool you can use to change the world."}
    </p>
    <h3 className="text-2xl font-semibold">Nelson Mandela</h3>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  </div>

  <div id="slide4" className="carousel-item relative w-full">
    <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeID9bUUKtjsnoCBP3oyRokBTDKAtqXPF-9d0mXYHxBg&s=10"
      alt="Tailwind CSS slide example"
      className="w-40  rounded-full border-2 border-gray-400"
    />
     <p className="text-xl text-gray-200">
      {"A person who never made a mistake never tried anything new."}
    </p>
    <h3 className="text-2xl font-semibold">Albert Einstein</h3>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
    </div>
  </div> */}
</div>

            </div>
        </HomeLayout>
    );
}

export default AboutUs;