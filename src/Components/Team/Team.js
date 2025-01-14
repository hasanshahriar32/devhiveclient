import React, { useState } from "react";

const Team = () => {
  const people = [
    {
      firstname: "Shahriar",
      lastname: "Hasan",
      role: "Team Leader, Project Lead, Developer",
      picture:
        "https://media.licdn.com/dms/image/C4D03AQGQ5Ea1MQ1XHw/profile-displayphoto-shrink_800_800/0/1630823098356?e=2147483647&v=beta&t=wSIG5g0V1ddOzDRArQEEuJg2T5clxXXbMbqnHlivGJs",
      description:
        "A full-stack developer who focuses on writing clean, standard code that adheres to best practices, and who is also a lifelong learner who is continually investigating new technologies and solutions to different programming challenges in order to advance.",
      facebookURL: "https://facebook.com/H4549",
      twitterURL: "#link",
      linkedinURL: "https://www.linkedin.com/in/hasanshahriar32",
      youtubeURL: "#link",
    },
    {
      firstname: "Mushfik",
      lastname: "Ahmed",
      role: "Web Developer",
      picture:
        "https://lh3.googleusercontent.com/a/AGNmyxYH5S7HaTVUowPO4-Jo-i_ahzEOBRa_CMk7bAyV=s96-c",
      description:
        "I’m a professional front-end developer with more than 3 years of experience. I would like to do coding, programming, learning new things, and fixing coding problems.I’ve worked with the latest technologies HTML5, CSS3, Bootstrap5, Tailwind, Javascript, React, Express, MongoDb, NodeJs, and Responsive can assure you the best ever output with the experience.",
      facebookURL: "https://www.facebook.com/ahmed.mushfik16381",
      twitterURL: "https://twitter.com/ahmedmushfik7",
      linkedinURL: "https://www.linkedin.com/in/mushfik-ahmed-975041212/",
      youtubeURL: "#link",
    },
    {
      firstname: "pronoy",
      lastname: "Banik",
      role: "Frontend developer",
      picture:
        "https://scontent.fdac13-1.fna.fbcdn.net/v/t39.30808-6/318568829_1732891993764012_1417244172090117694_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7DqjKLCPZp8AX8E4R33&_nc_ht=scontent.fdac13-1.fna&oh=00_AfCza8qwH-YJA3R_22kwx8vjiLwkSVDeW2ahMdzycTEujw&oe=6461A12A",
      description:
        "I have completed diploma in computer science and i am react developer",
      facebookURL: "https://m.facebook.com/pronoy.banik.7",
      twitterURL: "#link",
      linkedinURL: "#link",
      youtubeURL: "#link",
    },
    {
      firstname: "Mohsin",
      lastname: "Ahmed",
      role: "Web Developer",
      picture: "https://i.ibb.co/n8Rbt7G/tusharXL.png",
      description:
        "I'm Mohsin Ahmed. A MERN Stack Developer from Bangladesh. I love to write clean, efficient codes & learn new technologies. I am looking for a challenging role in a reputable organization to utilize my development skills for the growth of the organization as well as to enhance my knowledge about new and emerging trends in the sector.",
      facebookURL: "https://www.facebook.com/tushar.phb6",
      twitterURL: "#link",
      linkedinURL: "#link",
      youtubeURL: "#link",
    },
    {
      firstname: "Emam",
      lastname: "Hossain",
      role: "Designer",
      picture:
        "https://scontent.fcgp4-1.fna.fbcdn.net/v/t39.30808-6/325469564_1218521815423634_4369816397652619085_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEg0JaB-AgeUx28SqLLh24VJ-9zYvdrIVIn73Ni92shUoLm7ns4WZZJuoxig0y3VuNy9cyNoxNEZy7RZb2-v_9Z&_nc_ohc=Oof74UDypCMAX_hgdYZ&_nc_zt=23&_nc_ht=scontent.fcgp4-1.fna&oh=00_AfCh2sEL0OSFQn0cFqGhbi5QBWItC_LvjxbIe6CIyIChag&oe=645FCDBA",
      description:
        "Harum iusto exercitationem assumenda quas nostrum perspiciatis quos iste sit reprehenderit, libero quae aperiam sapiente delectus, porro tempore minus repellendus ratione distinctio!",
      facebookURL: "https://web.facebook.com/profile.php?id=100015326133227",
      twitterURL: "#link",
      linkedinURL: "https://www.linkedin.com/in/emam-hossain-632123234",
      youtubeURL: "#link",
    },
  ];

  const [member, setMember] = useState(0);

  return (
    <div className="relative mx-auto py-10 w-full max-w-7xl bg-gray-50 text-gray-700">
      {/* :TITLE CONTAINER */}
      <div className="mb-8 flex justify-center items-center">
        <span className="h-1 w-14 rounded-3xl bg-gray-700" />
        <h2 className="px-3 text-sm font-semibold uppercase">
          Our passionate team
        </h2>
        <span className="h-1 w-14 rounded-3xl bg-gray-700" />
      </div>

      <div className="mx-auto px-4 w-full max-w-5xl grid grid-cols-2 gap-y-4 sm:gap-y-10">
        {/* :PICTURES CONTAINER */}
        <div className="col-span-full lg:col-span-1 flex flex-col sm:flex-row justify-center items-start">
          {/* ::Team members */}
          <ul className="mb-4 sm:mb-0 px-4 flex sm:flex-col justify-center items-center space-x-3 sm:space-x-0 sm:space-y-3">
            {people.map((person, index) => (
              <li
                key={person.lastname}
                className={`w-12 h-12 rounded-full overflow-hidden filter ${
                  index !== member
                    ? "saturate-0 hover:brightness-125"
                    : "saturate-100"
                }`}
              >
                <button
                  className="w-full h-full"
                  onClick={() => setMember(index)}
                >
                  <img src={person.picture} alt="" className="object-cover" />
                </button>
              </li>
            ))}
          </ul>
          {/* ::Picture selected team member */}
          <div className="rounded overflow-hidden">
            <img
              src={people[member].picture}
              alt=""
              className="w-[300px]  h-[300px]  object-cover"
            />
          </div>
        </div>

        {/* :DETAILS CONTAINER */}
        <div className="col-span-full lg:col-span-1 mx-auto lg:mx-0 max-w-lg flex flex-col justify-center space-y-4">
          {/* ::Role */}
          <span className="font-bold uppercase tracking-wider">
            {people[member].role}
          </span>
          {/* ::Name */}
          <h3 className="text-4xl sm:text-5xl font-bold space-y-2">
            <span className="block">{people[member].firstname}</span>
            <span className="block">{people[member].lastname}</span>
          </h3>
          {/* ::Description */}
          <p className="py-2 text-base">{people[member].description}</p>
          {/* ::Socials */}
          <div className="mb-4 inline-flex space-x-4">
            {/* Facebook */}
            <a
              href={people[member].facebookURL}
              className="text-gray-600 hover:text-red-600"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996C17.465,9.521,17.001,9,16.403,9z" />
              </svg>
            </a>
            {/* Twitter */}
            <a
              href={people[member].twitterURL}
              className="text-gray-600 hover:text-red-600"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            {/* Linkedin */}
            <a
              href={people[member].linkedinURL}
              className="text-gray-600 hover:text-red-600"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
              >
                <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z" />
              </svg>
            </a>
            {/* Youtube */}
            <a
              href={people[member].youtubeURL}
              className="text-gray-600 hover:text-red-600"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
              >
                <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
