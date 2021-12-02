import "./App.css";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        console.log(person);
        const { id, name, age, image } = person;
        return (
          <div className="forFlex" key={id}>
            <div className="imgDiv">
              <img src={image} alt={name} />
            </div>
            <div className="heading">
              <h4 className="name">{name}</h4>
              <h4 className="age">{age} years</h4>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default List;
