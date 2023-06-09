// Write your code here.
import './index.css'

const TechnologyCards = props => {
  const {source} = props
  const {className, description, title, imgUrl} = source
  return (
    <li className={className}>
      <div className="sub-header">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="img">
        <img src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default TechnologyCards
