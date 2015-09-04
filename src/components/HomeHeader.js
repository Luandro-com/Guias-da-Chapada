import React from 'react';
import {Carousel, CarouselItem} from 'react-bootstrap';

export default class extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      slides: [
        {name: "carregando...", img: "v1441115064/biblioteca-midia/auv3vxed4mtm4fhrvksl.jpg"},
        {name: "carregando...", img: "v1441115064/biblioteca-midia/auv3vxed4mtm4fhrvksl.jpg"}
      ]
    }
  }

  componentWillMount() {
    this.props.fetch('conteudo/slides', {
      context: this,
      asArray: true,
      then(data){
        this.setState({
          slides: data
        })
      }
    });
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className="home-slider">
        <Carousel>
          {this.state.slides.map((item, key) => {
            return (
              <CarouselItem key={key}>
                <img width={"100%"} height={550.4} alt="900x500" src={'http://res.cloudinary.com/guias-da-chapada/image/upload/c_fill,h_500,w_900/'+item.img}/>
                <div className="carousel-caption">
                  <h3>{item.name}</h3>
                </div>
              </CarouselItem>
            )
          })}
        </Carousel>
      </div>
    )
  }

}
