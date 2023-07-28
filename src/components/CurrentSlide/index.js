import {Component} from 'react'
import './index.css'
import SlideContext from '../../Context/SlideContext'

class CurrentSlide extends Component {
  state = {headingChange: false, descriptionChange: false}

  onClickHeading = () => {
    this.setState({headingChange: true})
  }

  onClickDescription = () => {
    this.setState({descriptionChange: true})
  }

  render() {
    const {headingChange, descriptionChange} = this.state
    return (
      <SlideContext.Consumer>
        {value => {
          const {
            activeIndex,
            tabsList,
            changeHeading,
            changeDescription,
          } = value
          const activeSlide = tabsList[activeIndex]
          const {heading, description} = activeSlide

          const onChangeHeading = event => {
            changeHeading(event.target.value)
          }

          const onChangeDesc = event => {
            changeDescription(event.target.value)
          }

          const onBlurHeading = event => {
            if (event.target.value === '') {
              changeHeading('Heading')
            }
            this.setState({headingChange: false})
          }

          const onBlurDescription = event => {
            if (event.target.value === '') {
              changeDescription('Description')
            }
            this.setState({descriptionChange: false})
          }

          return (
            <div className="active-tab-container">
              <div className="active-tab-card">
                {headingChange ? (
                  <input
                    className="heading-styling"
                    value={heading}
                    onChange={onChangeHeading}
                    onBlur={onBlurHeading}
                  />
                ) : (
                  <h1 className="heading-input" onClick={this.onClickHeading}>
                    {heading}
                  </h1>
                )}
                {descriptionChange ? (
                  <input
                    className="description-styling"
                    value={description}
                    onChange={onChangeDesc}
                    onBlur={onBlurDescription}
                  />
                ) : (
                  <p
                    className="description-input"
                    onClick={this.onClickDescription}
                  >
                    {description}
                  </p>
                )}
              </div>
            </div>
          )
        }}
      </SlideContext.Consumer>
    )
  }
}

export default CurrentSlide
