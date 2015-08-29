import React from 'react';
import {Carousel, CarouselItem} from 'react-router';

export default class extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      Ablock: [
        {
          title: "Banner title",
          img: "/dist/imgs/slide.jpg",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore incidunt nulla repudiandae consectetur autem voluptate esse officiis repellat corrupti. Deserunt aperiam iste dicta aliquid quos dolor id, maiores sit magni?"
        },
        {
          title: "Banner title",
          img: "/dist/imgs/slide.jpg",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore incidunt nulla repudiandae consectetur autem voluptate esse officiis repellat corrupti. Deserunt aperiam iste dicta aliquid quos dolor id, maiores sit magni?"
        }
      ],
      Bblock: [
        {
          title: "Banner title",
          img: "/dist/imgs/slide.jpg",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore incidunt nulla repudiandae consectetur autem voluptate esse officiis repellat corrupti. Deserunt aperiam iste dicta aliquid quos dolor id, maiores sit magni?"
        },
        {
          title: "Banner title",
          img: "/dist/imgs/slide.jpg",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore incidunt nulla repudiandae consectetur autem voluptate esse officiis repellat corrupti. Deserunt aperiam iste dicta aliquid quos dolor id, maiores sit magni?"
        }
      ]
    }
  }

  render() {
    console.log("this.state:", this.state)
    return (
      <div className="grid_100 ofertas">
        <div className="flight_hp_l">
          <Carousel>
            {this.state.map((item, key) => {
              return <Block {...item} key={key}/>
            })}
          </Carousel>
        </div>
        <div className="grid_100 double-controls">
        </div>
        <div className="clear"></div>
      </div>
    )
  }

}

class Block extends React.Component {
  render() {
    console.log("this.props:", this.props)
    return (
      <CarouselItem>
        <ul>
          <li key={key} className="dyn_hp_offer">
            <div id="left-triangle-home"></div>
            <a className="" href="">
              <div className="dyn_hp_offer_thumb">
                <img width="300" height="255" src={item.img} className="attachment-medium wp-post-image" alt={item.title}></img>
              </div>
            </a>
            <div className="dyn_hp_offer_txt">
              <a className="dyn_hp_offer_title" href="">
                <h2>{item.title}</h2>
              </a>
              <a className="dyn_hp_offer_desc" href="">{item.text}</a>
            </div>
            <a className="more" href="">Veja mais &gt;</a>
          </li>
        </ul>
      </CarouselItem>

    )
  }
}







