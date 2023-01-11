import { Nav } from './components/Nav.jsx';

const images = [
    "src/assets/gallery/g1.jpeg",
    "src/assets/gallery/g2.jpeg",
    "src/assets/gallery/g3.png",
    "src/assets/gallery/g4.jpg",
    "src/assets/gallery/g5.JPG",
    "src/assets/gallery/g6.jpg",
    "src/assets/gallery/g7.jpg",
    "src/assets/gallery/g8.jpg",
    "src/assets/gallery/g9.jpg",
    "src/assets/gallery/g10.jpg",
    "src/assets/gallery/g11.jpg",
    "src/assets/gallery/g12.jpg",
    "src/assets/gallery/g13.jpg",
    "src/assets/gallery/g14.jpg",
    "src/assets/gallery/g15.jpg"
];


export const Gallery = () => {
    return (
        <>
        <Nav active="gallery"/>
        <div className='grid place-items-center py-24'>
        <Grid imgs={images.slice(0,6)}/>
        <Grid imgs={images.slice(6,12)}/>
        <Grid imgs={images.slice(12,18)}/>
        </div>
        </>
    )
};

const Grid = (args) => {
    const imgStyle = "block object-cover object-center w-full h-full rounded-lg"
    return (
        <section class="overflow-hidden text-gray-700">
  <div class="container px-5 py-2 mx-auto lg:px-32">
    <div class="flex flex-wrap -m-1 md:-m-2">
      <div class="flex flex-wrap w-1/2">
        <div class="w-1/2 p-1 md:p-2">
          <img alt="" class={args.imgs[0] ? imgStyle : ""}
            src={args.imgs[0]}/>
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img alt="" class={args.imgs[1] ? imgStyle : ""}
            src={args.imgs[1]}/>
        </div>
        <div class="w-full p-1 md:p-2">
          <img alt="" class={args.imgs[3] ? imgStyle : ""}
            src={args.imgs[3]}/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="w-full p-1 md:p-2">
          <img alt="" class={args.imgs[2] ? imgStyle : ""}
            src={args.imgs[2]}/>
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img alt="" class={args.imgs[4] ? imgStyle : ""}
            src={args.imgs[4]}/>
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img alt="" class={args.imgs[5] ? imgStyle : ""}
            src={args.imgs[5]}/>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}