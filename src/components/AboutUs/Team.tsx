import { useState, useEffect } from "react";

// Define the TeamMember interface to type the fetched data
interface TeamMember {
  id: number;
  image: string;
  name: string;
  position: string;
}

const Team = () => {
  // Use the TeamMember[] type to indicate that datas is an array of TeamMember objects
  const [datas, setDatas] = useState<TeamMember[]>([]);

  useEffect(() => {
    fetch("/teamData.json")
      .then((res) => res.json())
      .then((data: TeamMember[]) => setDatas(data)); // Type the fetched data as TeamMember[]
  }, []);

  return (
    <section className="py-16 md:py-20 bg-[#fff5eb] text-[#2e382c]">
      <div className="max-w-6xl mx-auto px-6 xl:px-0 font-Poppins">
        {/* Heading */}
        <h1 className="text-center font-bold text-[32px] md:text-[48px] leading-tight mb-12">
          Meet Our <span className="text-[#FF7F50]">Team</span>
        </h1>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
          {datas.map((data) => (
            <div
              key={data.id}
              className="relative p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-[#ffd2b8] hover:border-[#ff7f50] w-full max-w-sm"
            >
              {/* Image */}
              <img
                src={data.image}
                alt={data.name}
                className="w-full h-64 object-cover rounded-t-md mb-6"
              />

              {/* Name & Position */}
              <div className="text-center">
                <h3 className="text-[20px] font-semibold text-[#2e382c] mb-2">
                  {data.name}
                </h3>
                <p className="text-[#FF7F50] font-medium text-lg">
                  {data.position}
                </p>
              </div>

              {/* Separator */}
              <div className="absolute inset-x-0 bottom-0 h-[5px] bg-[#ff7f50] rounded-b-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
