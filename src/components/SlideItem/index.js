import './index.css'

const SlideItem = props => {
  const {slideDetails} = props
  const {heading, description} = slideDetails

  return (
    <li className="each-card-container">
      <h1 className="card-heading"> {heading} </h1>
      <p className="card-description"> {description} </p>
    </li>
  )
}

export default SlideItem
