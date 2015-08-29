import React from 'react';
import {Carousel, CarouselItem} from 'react-bootstrap';

export default class extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      slides: [
        {title: "loading", img: "/dist/imgs/slide.jpg"},
        {title: "loading", img: "/dist/imgs/slide.jpg"}
      ]
    }
  }

  render() {
    return (
      <div className="home-slider">
        <Carousel>
          {this.state.slides.map((item, key) => {
            return <Item {...item} key={key} />
          })}
        </Carousel>
      </div>
    )
  }

}

class Item extends React.Component {

  render() {
    const {key, title, img} = this.props

    return (
      <CarouselItem key={title}>
        <img width={"100%"} height={550.4} alt="900x500" src={img}/>
        <div className="carousel-caption">
          <h3>{title}</h3>
        </div>
      </CarouselItem>
    )
  }

}
