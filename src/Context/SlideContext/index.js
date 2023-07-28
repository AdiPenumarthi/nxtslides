import React from 'react'

const SlideContext = React.createContext({
  activeIndex: 0,
  tabsList: [],
  changeActiveIndex: () => {},
  changeHeading: () => {},
  changeDescription: () => {},
})

export default SlideContext
