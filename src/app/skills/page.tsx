import Paragraph from "@/components/atoms/paragraph";

interface Education {
  title: string;
  institution: string;
  certificate: string;
}

export default function Page() {
  const skills = [
    "React",
    "Redux",
    "Typescript",
    "Javascript ES6",
    "Nodejs",
    "Express",
    "Nextjs",
  ];

  const education: Education[] = [
    {
      title: "Javascript, Level 3 (React.js)",
      institution: "University of Morocco",
      certificate: "Certificate",
    },
    {
      title: "Javascript, Level 3 (React.js)",
      institution: "University of Morocco",
      certificate: "https://www.google.com",
    },
    {
      title: "Javascript, Level 3 (React.js)",
      institution: "University of Morocco",
      certificate: "https://www.google.com",
    },
    {
      title: "Javascript, Level 3 (React.js)",
      institution: "University of Morocco",
      certificate: "https://www.google.com",
    },
    {
      title: "Javascript, Level 3 (React.js)",
      institution: "University of Morocco",
      certificate: "https://www.google.com",
    },
    {
      title: "Javascript, Level 3 (React.js)",
      institution: "University of Morocco",
      certificate: "https://www.google.com",
    },
    {
      title: "Javascript, Level 3 (React.js)",
      institution: "University of Morocco",
      certificate: "https://www.google.com",
    },
  ];
  return (
    <div className="w-full col-span-9 grid grid-cols-12 gap-8 h-full">
      <div className="col-span-8 grid grid-cols-12">
        <Paragraph className="mb-10 col-span-12 2xl:col-span-8">
          Skills can be taught, personality is inherent. I prefer to keep
          learning, continue challenging myself, and do interesting things that
          matter.
        </Paragraph>
        <ul className="col-span-12">
          {education.map((edu) => {
            return (
              <li key={edu.title} className="w-full pb-6 text-left">
                <div className="text-lg">{edu.title}</div>
                <div className="font-normal text-sm">
                  <span>{edu.institution}</span> /{" "}
                  <a
                    href={edu.certificate}
                    className="text-primary underline decoration-transparent underline-offset-2 hover:decoration-primary transition-all duration-150 ease-in"
                  >
                    Certificate
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="col-span-4">
        <ul>
          {skills.map((skill) => {
            return (
              <li
                key={skill}
                className="w-full py-3 text-2xl text-left text-primary cursor-default"
              >
                {skill}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
