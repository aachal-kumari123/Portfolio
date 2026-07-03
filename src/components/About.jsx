import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm Aachal, a passionate Web developer with a keen eye for MERN
          Stack . With a background in IT, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <span>
          Bachelor of Computer Applications (BCA) – [Gopal Narayan Singh University], [2022-2025]

          Master of Computer Applications (MCA) – [Shri Ramswaroop memorial college of engineering and management], Expected [2025-2027]

          Self-Learning & Online Training

          MERN Stack Development
          React Native Development
          AI-Assisted Web Development
          Data Structures & Algorithms
          MySQL & MongoDB
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
          Programming Languages: JavaScript, HTML5, CSS3, SQL
          Frontend: React.js, Bootstrap, Responsive Web Design
          Backend: Node.js, Express.js
          Databases: MongoDB, MySQL
        
          Tools: Git, GitHub, VS Code
       
          Authentication & Authorization (JWT)
          Problem Solving & Debugging
          Team Collaboration and Communication
        </span>
        {/* <br />
        <br /> */}
        {/* <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <span>
          [Job Title], [Company/Organization], [Dates] [Brief description of
          responsibilities and achievements] [Job Title],
          [Company/Organization], [Dates] [Brief description of responsibilities
          and achievements] [Freelance/Contract Work], [Client/Organization],
          [Dates] [Brief description of projects and contributions]
        </span>
        <br />
        <br /> */}
        {/* <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <span>
          [Award/Recognition], [Organization/Institution], [Year] [Achievement],
          [Organization/Platform], [Year]
        </span> */}
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
         My mission is to build innovative, scalable, and user-friendly software solutions that solve real-world problems. I am committed to continuous learning, mastering modern technologies like MERN, React Native, and AI, and growing into a skilled Software Engineer who creates meaningful digital experiences.
        </p>
      </div>
    </div>
  );
}

export default About;
