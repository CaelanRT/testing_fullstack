import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [post, setPost] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmitGet = (e) => {
    e.preventDefault();

    axios
      .get("http://localhost:3000")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Request completed");
      });
  };

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
  const handleSubmitPost = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000", {
        post: post,
      });

      console.log(response.data.post);
      setResponse(response.data.post);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Request completed");
    }
  };

  return (
    <>
      <h1>Hitting the Backend</h1>
      <h3>Get Request</h3>
      <form onSubmit={handleSubmitGet}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <h3>Post Request</h3>
      <form onSubmit={handleSubmitPost}>
        <label htmlFor="post">Name:</label>
        <input
          type="text"
          id="post"
          value={post}
          onChange={(e) => setPost(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {response && <p>{response}</p>}
    </>
  );
}

export default App;
