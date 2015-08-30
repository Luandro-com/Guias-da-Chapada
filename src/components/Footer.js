import React from 'react';
import {Carousel, CarouselItem} from 'react-bootstrap';
import __fetch from "isomorphic-fetch";

export default class extends React.Component {

  render() {
    return (
      <div className="footer">
        <h1 className="instagram-hash"><span className="hash">#</span>vamoprachapada</h1>
        <PictureList />
        <div className="grid_100">
          <div className="banner">
            <a href="">
              Tenha garantia de um bom passeio, <span className="tlt verde" data-in-effect="tada" data-out-effect="flash">agende um guia</span> conosco
            </a>
          </div>
        </div>
        <div className="clear"></div>
        <div className="outer_wrap">
           <div className="inner_wrap">
              <div className="content social-bottom">
              <a href=""><span className="icono-mail"></span></a>
              <a href=""><span className="icono-facebook"></span></a>
              <a href=""><span className="icono-instagram"></span></a>
                <div className="clear"></div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

class PictureList extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      pictures: [
      {src: "/dist/imgs/slide.jpg"}
      ]
    }
  }

  componentDidMount() {
    const url = '//api.instagram.com/v1/tags/chapadadosveadeiros/media/recent?access_token=185738962.5b9e1e6.63edef07cf4040e79276a375baa68456&callback=?&count=4';
    fetch(url).then((resp) => {
      if(!resp || !resp.data || !resp.data.length){
        return;
      }
      let pictures = resp.map((picture) => {
        return {
            id: picture.id,
            url: picture.link,
            src: picture.images.low_resolution.url,
            title: picture.caption ? picture.caption.text : '',
            favorite: false
        }
      })
      this.setState({ pictures: pictures });
    })
  }

  render() {
    return (
      <Carousel className="grid_100">
          <CarouselItem>
               {this.state.pictures.map((picture, key) => {
                  return (
                    <div key={key} className="grid_25 instagram">
                        <img src={picture.src} />
                    </div>
                  )
               })}
          </CarouselItem>
      </Carousel>
    );
  }
}
