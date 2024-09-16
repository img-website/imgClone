// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css'; // Swiper styles
// import 'swiper/css/autoplay';
// import { Autoplay } from 'swiper/modules';

// export default function LogoSlider() {
//   const logos = [
//     {
//       src: 'https://www.imgglobalinfotech.com/public/tailwind/img/logo-clouds-myfab11.webp?id=7e9e4d9f500e498df748007d3ce1e811',
//       alt: 'logo clouds myfab11',
//     },
//     {
//       src: 'https://www.imgglobalinfotech.com/public/tailwind/img/logo-clouds-parle.webp?id=5a312b5331cbfd413d804ad0724d0c78',
//       alt: 'logo clouds parle',
//     },
//     {
//       src: 'https://www.imgglobalinfotech.com/public/tailwind/img/logo-clouds-tata.webp?id=b10e45a9759a4b2c7714ffd786649da8',
//       alt: 'logo clouds tata',
//     },
//     {
//       src: 'https://www.imgglobalinfotech.com/public/tailwind/img/logo-clouds-titan.webp?id=d63ac10bce2b697ab3f4982defeb0310',
//       alt: 'logo clouds titan',
//     },
//     {
//       src: 'https://www.imgglobalinfotech.com/public/tailwind/img/logo-clouds-adani.webp?id=087b10f7ca0942619a845b38b00712c6',
//       alt: 'logo clouds adani',
//     },
//     {
//       src: 'https://www.imgglobalinfotech.com/public/tailwind/img/logo-clouds-fabindia.webp?id=c35d1aaf31d43dd204bb4195e474b248',
//       alt: 'logo clouds fabindia',
//     },
//     {
//       src: 'https://www.imgglobalinfotech.com/public/tailwind/img/logo-clouds-hero.webp?id=de2333d0234c8ef2c2cbfa582af53799',
//       alt: 'logo clouds hero',
//     },
//   ];

//   return (
//     <div className="swiper-container">
//       <Swiper
//         slidesPerView={5}
//         spaceBetween={20}
//         loop={true}
//         centeredSlides={true}
//         speed={5000}
//         autoplay={{
//           delay: 0,
//           disableOnInteraction: false,
//         }}
//         modules={[Autoplay]}
//         breakpoints={{
//           320: { slidesPerView: 5, spaceBetween: 20 },
//           480: { slidesPerView: 5, spaceBetween: 20 },
//           640: { slidesPerView: 7, spaceBetween: 30 },
//           1024: { slidesPerView: 7, spaceBetween: 30 },
//           1350: { slidesPerView: 9, spaceBetween: 30 },
//         }}
//       >
//         {logos.map((logo, index) => (
//           <SwiperSlide key={index}>
//             <img
//               width="108"
//               height="32"
//               src={logo.src}
//               alt={logo.alt}
//               className="h-full w-auto object-contain mx-auto"
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }
