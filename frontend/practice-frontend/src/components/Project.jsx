const Project = (props) => {
  const { name, pmName, techName, description, completionDate } = props;

  return (
    <>
      <div>
        <h4>Project Name: {name}</h4>
        <p>Project Manager: {pmName}</p>
        <p>Technician: {techName}</p>
        <p>Description: {description}</p>
        <p>Completion Date: {completionDate}</p>
      </div>
    </>
  );
};
export default Project;
