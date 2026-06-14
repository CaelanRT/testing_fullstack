import { useState, useEffect } from "react";
import axios from "axios";
import Project from "./components/Project";

function App() {
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({
    name: "",
    pmNAme: "",
    techName: "",
    description: "",
    completionDate: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/projects");

      setProjects(response.data);
    };

    fetchData();
  }, []);

  // const handleSubmitGet = (e) => {
  //   e.preventDefault();

  //   axios
  //     .get("http://localhost:3000")
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  //     .finally(() => {
  //       console.log("Request completed");
  //     });
  // };

  // const handleSubmitPost = (e) => {
  //   e.preventDefault();

  //   axios
  //     .post("http://localhost:3000", {
  //       post: post,
  //     })
  //     .then((response) => {
  //       setResponse(response.data.post);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  //     .finally(() => {
  //       console.log("Request completed");
  //     });
  // const handleSubmitPost = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post("http://localhost:3000", {
  //       post: post,
  //     });

  //     console.log(response.data.post);
  //     setResponse(response.data.post);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     console.log("Request completed");
  //   }
  // };

  return (
    <>
      <h1>Projects</h1>
      <section id="projects">
        {projects.length > 0 ? (
          projects.map((project) => {
            return <Project {...project} key={project.projectID} />;
          })
        ) : (
          <h4>No projects to display</h4>
        )}
      </section>
      <section id="add form">
        <form>
          <h2>Create Project</h2>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={project.name}
            onChange={(e) => setProject({ ...project, name: e.target.value })}
          />
          <label htmlFor="pmName">Project Manager:</label>
          <input type="text" id="pmName" name="pmName" />
          <label htmlFor="techName">Technician:</label>
          <input type="text" id="techName" name="techName" />
          <label htmlFor="description">Description:</label>
          <textarea name="description" id="description"></textarea>
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" />
        </form>
      </section>
    </>
  );
}

export default App;
