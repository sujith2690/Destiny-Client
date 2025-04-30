// import React from 'react'
// import Navbar from './Navbar'
// import { useParams } from 'react-router-dom';
// import { packages } from '../data/travelDestinations';

// const PackageDetails = () => {
//     const { id } = useParams();
//     const packageDetails = packages.find((item) => item.id == id);
    
//     if (!packageDetails) {
//         return (
//             <div
//                 id='container'
//                 onClick={handleClose}
//                 className='fixed inset-0 bg-black/15 bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50 '
//             >
//                 <div className='bg-white p-6 rounded-xl shadow-md'>
//                     <p className='text-red-500'>Package not found.</p>
//                     <button
//                         className='mt-4 bg-gray-300 px-4 py-2 rounded-md'
//                         onClick={() => setModal(false)}
//                     >
//                         Close
//                     </button>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className='w-full h-full bg-white/15'>
//             <Navbar />
//             <section className="w-full h-full pt-4 px-4 sm:px-8 md:px-16 lg:px-32 sm:flex items-center justify-center gap-2 bg-black/40">
//                 <div className='w-full rounded-xl overflow-hidden shadow-md mb-6'>
//                     <img className='w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover transition-transform duration-500 hover:scale-105'
//                         src={packageDetails.image} alt="Temple in Tokyo" loading="lazy" />
//                 </div>
//                 <div className='bg-white p-2 sm:p-6 rounded-xl shadow-md'>
//                     <h2 className='text-2xl font-bold mb-2'>{packageDetails.place}</h2>
//                     <p className='text-gray-600 mb-4'>
//                         {packageDetails.description}
//                     </p>
//                     <div className='text-lg font-semibold text-yellow-600 mb-4'>{packageDetails.packageExpense}</div>
//                     <div className='grid place-items-center'>
//                         <button className='bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-md transition-colors duration-300'>
//                             Book Now
//                         </button>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     )
// }

// export default PackageDetails
