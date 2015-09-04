import React from 'react'
import {Carousel, CarouselItem} from 'react-router'

export default class extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      blocks: [
        {block: [
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
        ]},
        {block: [
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
        ]}
      ]
    }
  }

  render() {
    return (
      <div className="grid_100 ofertas">
        <div className="flight_hp_l">
          {this.state.blocks.map((block, key) => {
            console.log("footer block:", block)
          })}
        </div>
        <div className="grid_100 double-controls">
        </div>
        <div className="clear"></div>
      </div>
    )
  }

}

// <Carousel>
//   {this.state.blocks.map((item, key) => {
//     return (
//       <CarouselItem>
//         <ul>
//           <li key={key} className="dyn_hp_offer">
//             <div id="left-triangle-home"></div>
//             <a className="" href="">
//               <div className="dyn_hp_offer_thumb">
//                 <img width="300" height="255" src={item.img} className="attachment-medium wp-post-image" alt={item.title}></img>
//               </div>
//             </a>
//             <div className="dyn_hp_offer_txt">
//               <a className="dyn_hp_offer_title" href="">
//                 <h2>{item.title}</h2>
//               </a>
//               <a className="dyn_hp_offer_desc" href="">{item.text}</a>
//             </div>
//             <a className="more" href="">Veja mais &gt</a>
//           </li>
//         </ul>
//       </CarouselItem>
//     )
//   })}
// </Carousel>


