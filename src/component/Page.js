// import "./Page.css"
// import React from 'react';
// import TrendingCard from './TrendingCard';
// import "./TrendingCard.css";
// import { useFirestore } from "../firebase/useFirestore";




// const TrendingCardData = [

//   {
//     id: 1,
//     title: 'First Trending Title',
//     owner: 'pla.',
//     views:'1223k',
//     videoUrl: 'https://www.youtube.com/embed/CgEZNJSeofs'
//   },
//   {
//     id: 2,
//     title: 'Second Trending Title',
//    owner: 'pla',
//    views:'1223k',
//     videoUrl: 
//   },

// ];

// const TrendingCards= () => {
//   const { data } = useFirestore("Trending"); 

//   return (
// <div>
//     <div class="trending">
//     <h3 class="t" >  Trending </h3>
// <div class="btn-text-right">
// <button   type="button"   class="btn btn-primary">view more video</button>
// </div>
// </div>

//     <div>
//       {TrendingCardData.map((video) => (
//         <TrendingCard
//           key={video.id}
//           link={video.link}
//          owner={video.owner}
//             photo={video.photo}
//              title={video.title}
//               views={video.views}
    
//         />
//       ))}
//     </div>
//     </div>
//   );

// };

// export default TrendingCards;

