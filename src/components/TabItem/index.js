import SlideContext from '../../Context/SlideContext'
import './index.css'

const TabItem = props => {
  const {tabDetails, slideNumber} = props
  const {heading, description} = tabDetails

  return (
    <SlideContext.Consumer>
      {value => {
        const {activeIndex, changeActiveIndex} = value

        const onClickTab = () => {
          changeActiveIndex(slideNumber - 1)
        }

        const bgColor =
          slideNumber - 1 === activeIndex ? 'active-tab' : 'tab-item'

        return (
          <li
            className={`${bgColor}`}
            onClick={onClickTab}
            testid={`slideTab${slideNumber}`}
          >
            <p className="slide-num">{slideNumber}</p>
            <div className="slide-card">
              <h1 className="heading">{heading}</h1>
              <p className="description">{description}</p>
            </div>
          </li>
        )
      }}
    </SlideContext.Consumer>
  )
}

export default TabItem
