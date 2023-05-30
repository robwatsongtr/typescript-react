import { IState as IProps } from '../App'

// tells TS that this compoent is of type React Func Component, and 
// it contains props of type IProps. Very specific now. 
export const List: React.FC<IProps> = ({ people }) => {

  const renderList = (): JSX.Element[] => {
    return people.map( (person) => {
      return (
        <li className="List">
          <div className="List-header" >
            <img className="List-img" src={person.url} alt="Lebron" />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old</p>
          <p className="List-note">{person.note}</p>
        </li>
      )
    })
  }

  return (
    <ul>  
      {renderList()}
    </ul>
  )
}

