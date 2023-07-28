import './index.css'
import SlideContext from '../../Context/SlideContext'
import TabItem from '../TabItem'
import CurrentSlide from '../CurrentSlide'

const Slides = () => (
  <SlideContext.Consumer>
    {value => {
      const {tabsList} = value
      return (
        <div className="tabs-app-container">
          <ol className="tabs-list-container">
            {tabsList.map((item, index) => (
              <TabItem
                tabDetails={item}
                key={item.id}
                slideNumber={index + 1}
              />
            ))}
          </ol>
          <CurrentSlide />
        </div>
      )
    }}
  </SlideContext.Consumer>
)

export default Slides
