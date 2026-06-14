import { useState, useEffect } from "react";
import axios from "axios";
import Project from "./components/Project";

function App() {
  const [projects, setProjects] = useState([]);

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
          <h3>No projects to display</h3>
        )}
      </section>
    </>
  );
}

export default App;
