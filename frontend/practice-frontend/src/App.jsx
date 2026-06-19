import { useState, useEffect } from "react";
import axios from "axios";
import Project from "./components/Project";

function App() {
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({
    name: "",
    pmName: "",
    techName: "",
    description: "",
    completionDate: "",
  });
  const [formError, setFormError] = useState(false);

  // helper function to get all projects and set data into response state
  const fetchAllProjects = async () => {

    try {
      const response = await axios.get("http://localhost:3000/projects");

      setProjects(response.data);
    } catch (error) {
      console.log(error);
      
    } finally {
      //console.log("fetchAllProjects completed.");
      
    }
      
  }

  // gets projects on load
  useEffect(() => {
    fetchAllProjects()
  }, []);

  // Helper function to post projects to the server
  const postProject = async () => {

    // putting an error message on screen if anything is missing
    if (!project.name || !project.pmName || !project.techName || !project.description || !project.completionDate) {
      setFormError(true);
      return
    }

    // axios request to send the info to the backend
    try {
      const response = await axios.post("http://localhost:3000/projects", project);
      console.log(response.data.msg);

    } catch (error) {
      console.log(error);
    } finally {
      //console.log("postProjects completed.");
      
    }
   
  }

  // handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // call postProject helper function
    await postProject();

    await fetchAllProjects();
    
    // setting project to the empty object so that you have everything reset on the frontend
    setProject({
    name: "",
    pmName: "",
    techName: "",
    description: "",
    completionDate: "",
  });

  };

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
      <section id="add-form">
        <form onSubmit={handleSubmit}>
          <h2>Create Project</h2>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={project.name}
            onChange={(e) => setProject({ ...project, name: e.target.value })}
            required
          />
          <label htmlFor="pmName">Project Manager:</label>
          <input
            type="text"
            id="pmName"
            name="pmName"
            value={project.pmName}
            onChange={(e) => setProject({ ...project, pmName: e.target.value })}
            required
          />
          <label htmlFor="techName">Technician:</label>
          <input
            type="text"
            id="techName"
            name="techName"
            value={project.techName}
            onChange={(e) =>
              setProject({ ...project, techName: e.target.value })
            }
            required
          />
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            value={project.description}
            onChange={(e) =>
              setProject({ ...project, description: e.target.value })
            }
            required
          ></textarea>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={project.completionDate}
            onChange={(e) =>
              setProject({ ...project, completionDate: e.target.value })
            }
            required
          />
          <button type="submit">Submit</button>
          
        </form>
        {/* conditionanlly rendering an error message even though there is  */}
        {formError ? <p>Something went wrong, please try again.</p> : <></>}
      </section>
    </>
  );
}

export default App;
