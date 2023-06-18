import "./Jobs.css";

const JobSection = () => {
  const jobs = [
    {
      id: 1,
      title: "JavaScript Development",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia diam ac est sagittis tempor. Donec dictum bibendum magna, nonefficitur orci varius vel.",
      location: "WORK FROM HOME",
    },
    {
      id: 2,
      title: "Web Development",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia diam ac est sagittis tempor. Donec dictum bibendum magna, nonefficitur orci varius vel.",

      location: "WORK FROM HOME",
    },
    {
      id: 2,
      title: "Full Stack Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia diam ac est sagittis tempor. Donec dictum bibendum magna, nonefficitur orci varius vel.",
      location: "WORK FROM HOME",
    },
    {
      id: 2,
      title: "ReactJS Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia diam ac est sagittis tempor. Donec dictum bibendum magna, nonefficitur orci varius vel.",
      location: "WORK FROM HOME",
    },
    {
      id: 2,
      title: "Front End Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia diam ac est sagittis tempor. Donec dictum bibendum magna, nonefficitur orci varius vel.",
      location: "WORK FROM HOME",
    },
    {
      id: 2,
      title: "MATLAB Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia diam ac est sagittis tempor. Donec dictum bibendum magna, nonefficitur orci varius vel.",
      location: "WORK FROM HOME",
    },
    {
      id: 2,
      title: "Flutter Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia diam ac est sagittis tempor. Donec dictum bibendum magna, nonefficitur orci varius vel.",
      location: "WORK FROM HOME",
    },
    {
      id: 2,
      title: "Frontend Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia diam ac est sagittis tempor. Donec dictum bibendum magna, nonefficitur orci varius vel.",
      location: "WORK FROM HOME",
    },
    {
      id: 2,
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia diam ac est sagittis tempor. Donec dictum bibendum magna, nonefficitur orci varius vel.",
      location: "WORK FROM HOME",
    },
  ];

  return (
    <>
      <h2 className="heading">Job Section</h2>
      <div className="job-main-box">
        {jobs.map((job) => (
          <div>
            <div key={job.id} className="jobs-data">
              <h3 className="heading">{job.title}</h3>
              <p>{job.description}</p>
              <p className="heading">{job.location}</p>
              <button>Apply</button>
              <button>View Details</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default JobSection;
