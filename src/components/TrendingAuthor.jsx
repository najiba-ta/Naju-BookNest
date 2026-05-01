import Image from "next/image";

const authors = [
  {
    id: 1,
    name: "James Clear",
    topic: "Self Improvement",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWLOLJUXDHiWAuTREnayDjYfrStMQmycjaBw&s",
  },
  {
    id: 2,
    name: "Paulo Coelho",
    topic: "Science",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDZTHkPd-qLjfyUnEHYoMORjootdnIDumA1A&s",
  },
  {
    id: 3,
    name: "Yuval Noah Harari",
    topic: "History",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQxccU07tgIRV4dzdvtkJRYouN-G74gAUMAw&s",
  },
  {
    id: 4,
    name: "Colleen Hoover",
    topic: "Romance",
    img: "https://images.squarespace-cdn.com/content/v1/5ff4d482ec44592c330b2b39/1692286371050-VQDUYDZRCDHLE0DRBE3E/20230406_KateZambreno_0574.jpg",
  },
];

const TrendingAuthor = () => {
  return (
    <div className="py-16 text-center card shadow-md mt-5 container mx-auto hover:shadow-2xl hover:-translate-y-1 transition duration-300">
      
      {/* Title */}
      <h2 className="text-6xl font-bold mb-10 text-cyan-800">
        Trending Authors
      </h2>

      {/* Authors */}
      <div className="flex flex-wrap justify-center gap-10">
        {authors.map((author) => (
          <div key={author.id} className="text-center">
            
            {/* Image */}
            <Image
              src={author.img}
              alt={author.name}
              width={100}
              height={100}
              className="rounded-full object-cover mx-auto"
            />

            {/* Name */}
            <h3 className="mt-4 font-semibold">
              {author.name}
            </h3>

            {/* Topic */}
            <p className="text-sm text-gray-500">
              {author.topic}
            </p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingAuthor;