import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import SlideContext from './Context/SlideContext'
import Header from './components/Header'
import Slides from './components/Slides'

import './App.css'

// This is the list used in the application. You can move them to any component needed.
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

// Replace your code here
class App extends Component {
  state = {
    activeIndex: 0,
    tabsList: initialSlidesList,
  }

  changeActiveIndex = index => {
    this.setState({activeIndex: index})
  }

  addNewTab = () => {
    const {activeIndex, tabsList} = this.state
    const newTab = {
      id: uuidv4(),
      heading: 'Heading',
      description: 'Description',
    }

    const updatedTabList = [
      ...tabsList.slice(0, activeIndex + 1),
      newTab,
      ...tabsList.slice(activeIndex + 1),
    ]

    this.setState({tabsList: updatedTabList})
    this.setState(prevState => ({activeIndex: prevState.activeIndex + 1}))
  }

  changeHeading = value => {
    const {activeIndex} = this.state
    this.setState(prevState => {
      const {tabsList} = prevState
      const updatedList = tabsList.map((tab, index) => {
        if (index === activeIndex) {
          return {...tab, heading: value}
        }
        return tab
      })
      return {tabsList: updatedList}
    })
  }

  changeDescription = value => {
    const {activeIndex} = this.state
    this.setState(prevState => {
      const {tabsList} = prevState
      const updatedList = tabsList.map((tab, index) => {
        if (index === activeIndex) {
          return {...tab, description: value}
        }
        return tab
      })
      return {tabsList: updatedList}
    })
  }

  render() {
    const {activeIndex, tabsList} = this.state
    return (
      <div className="app-container">
        <Header />
        <SlideContext.Provider
          value={{
            activeIndex,
            tabsList,
            changeActiveIndex: this.changeActiveIndex,
            changeHeading: this.changeHeading,
            changeDescription: this.changeDescription,
          }}
        >
          <>
            <button
              type="button"
              className="new-tab-btn"
              onClick={this.addNewTab}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
                alt="new plus icon"
                className="plus-icon"
              />
              {`  `}
              New
            </button>
            <Slides />
          </>
        </SlideContext.Provider>
      </div>
    )
  }
}

export default App
