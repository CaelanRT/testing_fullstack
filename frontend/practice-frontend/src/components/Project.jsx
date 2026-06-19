const Project = (props) => {
  const { name, pmName, techName, description, completionDate } = props;
  const handleDelete = props.deleteFunction;

  return (
    <>
      <div>
        <h4>Project Name: {name}</h4>
        <p>Project Manager: {pmName}</p>
        <p>Technician: {techName}</p>
        <p>Description: {description}</p>
        <p>Completion Date: {completionDate}</p>
        <button onClick={handleDelete}>Delete me</button>
      </div>
    </>
  );
};
export default Project;
