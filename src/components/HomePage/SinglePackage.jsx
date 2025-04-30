import React, { useState } from 'react'
import { GrNext } from "react-icons/gr";
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import PackageDetailModal from '../PackageDetailModal';
import BookingSlot from './BookingSlot';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const SinglePackage = ({ item }) => {
    const userId = useSelector((state) => state.user.userDetails._id)
    console.log(userId, '-------------userId')
    const [modal, setModal] = useState(false)
    const [productId, setProductId] = useState()
    const [booking, setBooking] = useState()
    const navigate = useNavigate();
    const handleModal = (id) => {
        setModal(!modal)
        setProductId(id)
    }
    const closeModal = () => {
        setModal(false)
    }
    const handleBookNow = ({ id, userId }) => {
        if (!userId) {
            toast.warning("Please do Login")
        } else {
            console.log(id, '---------id, place')
            setProductId(id)
            setModal(false)
            setBooking(!booking)
        }
    }
    const closeBooking = () => {
        setBooking(false)
    }
    return (
        <div className="relative flex flex-col justify-end w-72 sm:w-80 h-96 bg-white text-gray-800 overflow-hidden rounded shadow hover:shadow-2xl transition duration-300 group">

            {/* Background Image Layer */}
            <div
                className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
                style={{
                    backgroundImage: `url(${item?.image})`,
                }}
            ></div>

            {/* Content Layer */}
            <div className='relative z-10 flex justify-end p-2'>
                <button
                    onClick={() => handleBookNow({
                        id: item?._id,
                        userId: userId,
                    })}
                    className='bg-white flex rounded-2xl p-2 text-sm cursor-pointer hover:bg-yellow-300 transition-colors duration-300'>
                    Book Now
                </button>
            </div>
            <div className="relative z-10 bg-white bg-opacity-95 p-4 flex flex-col w-full hover:bg-yellow-300 transition-colors duration-300">
                <div className='flex items-center justify-between'>
                    <div>
                        <h3 className="text-xl">{item?.place}</h3>
                        <h3 className="text-xl text-gray-400">{item.packageExpense}</h3>
                    </div>
                    <div onClick={() => handleModal(item._id)}
                        className='w-12 h-12 bg-yellow-300 hover:bg-white flex items-center justify-center text-center rounded-full cursor-pointer transition-colors duration-300'>
                        <p className='text-2xl'>
                            <GrNext />
                        </p>
                    </div>
                </div>
            </div>
            {
                modal && (
                    <PackageDetailModal setModal={setModal} id={productId} closeModal={closeModal} handleBookNow={handleBookNow} />
                )
            }
            {
                booking && (
                    <BookingSlot setBooking={setBooking} packageId={productId} closeBooking={closeBooking} />
                )
            }
        </div>
    )
}

export default SinglePackage;
