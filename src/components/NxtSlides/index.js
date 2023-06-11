import {Component} from 'react'
import './index.css'
import SlideItem from '../SlideItem'

const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

class NxtSlides extends Component {
  state = {activeTab: initialSlidesList[0], initialList: {initialSlidesList}}

  changeHeading = event => {
    const {activeTab} = this.state
    const {id} = activeTab

    this.setState(prevState => {
      prevState.initialList.map(each => {
        if (each.id === id) {
          const newObject = {
            heading: event.target.value,
            description: each.description,
            id: each.id,
          }
          return [...prevState.initialList, newObject]
        }
        return prevState.initialList
      })
    })
  }

  render() {
    const {activeTab} = this.state
    const {heading, description} = activeTab
    return (
      <>
        <div className="header-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-logo.png"
            alt="nxt slides logo"
            className="app-logo"
          />
          <h1 className="app-name"> Nxt Slides </h1>
        </div>
        <button className="new-button" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
            alt="new plus icon"
            className="new-icon"
          />
          New
        </button>
        <div className="main-container">
          <ul className="tabs-container">
            {initialSlidesList.map(each => (
              <SlideItem slideDetails={each} key={each.id} />
            ))}
          </ul>
          <div className="display-card">
            <input
              type="text"
              className="input-element card-heading"
              value={heading}
              onChange={this.changeHeading}
            />
            <input
              type="text"
              className="input-element card-description"
              value={description}
              onChange={this.changeDescription}
            />
          </div>
        </div>
      </>
    )
  }
}

export default NxtSlides
