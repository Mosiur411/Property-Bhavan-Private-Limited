import React from 'react'
import { BsDownload, BsArrowLeftRight } from "react-icons/bs";
import Details from './Details';
import bed from '../../../assets/bed.png';
import bath from '../../../assets/bath.png';
import beddouble from '../../../assets/bed-double.png';
import expand from '../../../assets/expand.png';
import clock from '../../../assets/check-circle.png';
import Nearby1 from '../../../assets/Nearby1.png';
import Nearby2 from '../../../assets/Nearby2.png';
import Nearby3 from '../../../assets/Nearby3.png';
import Nearby4 from '../../../assets/Nearby4.png';
import Nearby5 from '../../../assets/Nearby5.png';
import samilerproject from '../../../assets/banner.png';
import Nearby from './Nearby';
import SimilarProject from './SimilarProject';
const Home = () => {
  return (
    <div className='px-16'>
      <button className='text-white bg-[#7F56D9] px-7 py-2 rounded-md font-medium my-3' >For Rent</button>
      <p className='text-xl font-medium text-black'>2BHK Apartment for Sale in Newtown, Kolkata, West Bengal</p>
      {/* ====================== Banner section ====================  */}
      <div className='grid grid-cols-2 gap-16 my-3'>
        <div>
          <img src={require("../../../assets/banner.png")} />
        </div>
        <div className='grid grid-cols-2 gap-8'>
          <img src={require("../../../assets/banner.png")} />
          <img src={require("../../../assets/banner.png")} />
          <img src={require("../../../assets/banner.png")} />
          <img src={require("../../../assets/banner.png")} />
        </div>
      </div>
      {/* ================== right  3 content ============*/}
      <div className='flex gap-8 justify-end items-center'>
        <div className='border-2 border-[#36218B] rounded-md p-2 '>
          <BsDownload className='text-[#36218B] ' />
        </div>
        <div className='border-2 border-[#36218B] rounded-md p-2'>
          <img className='w-4' src={require("../../../assets/love.png")} />
        </div>
        <div className='border-2 border-[#36218B] rounded-md p-2 '>
          <BsArrowLeftRight className='text-[#36218B]' />
        </div>



      </div>
      {/* =============== prices ================ */}
      <p className='text-[#7F56D9] font-bold text-2xl'>₹ 25,000</p>
      {/* ===================== contact area =====================*/}
      <div className="flex justify-between items-center">
        <p className='text-xl font-medium'>SP Sukhobrishti Ln, Action Area III, Newtown, Kolkata, West Bengal 700135, India</p>
        <div className='flex justify-center items-center  gap-4'>
          <img src={require("../../../assets/whatapps.png")} />
          <button className='text-white bg-[#7F56D9] px-14 py-2 rounded-md font-medium my-3' >Contact Owner</button>
        </div>
      </div>
      {/* ================ router  ============= */}
      <div className='mt-2 mb-10'>
        <ul className='flex justify-center items-center gap-8 text-xl font-medium text-[#341F87]'>
          <a className='underline' href='#'>Overview</a>
          <a href='#'>Details</a>
          <a href='#'>Features &  Amenities</a>
          <a href='#'>Nearby</a>
        </ul>
      </div>
      {/* ==============  overview ========= */}
      <div className=''>
        <p className=' text-2xl font-medium text-[#341F87]'>Overview</p>
        <p className='w-[750px] my-4'>
          Property taxes are charged by local government entities, such as KMC, and are due by
          the owner of the property. The amount of KMC property tax that must be paid may
          vary. Thus, it depends on the location and a number of other criteria. KMC approved
          the new Unit Area Assessment (UAA) mechanism for calculating property taxes in
          March 2017.
        </p>
      </div>
      {/* ============= Details ========== */}
      <div className='mb-5'>
        <p className=' text-2xl font-medium text-[#341F87] mb-5'>Details</p>
        <div className='grid grid-cols-4 gap-16  item-center'>
          <Details images={bed} title={"BHK"} text={"3BHK"} />
          <Details images={bath} title={"Bathroom"} text={"2"} />
          <Details images={beddouble} title={"Furnishing Status"} text={"Semi-Furnished"} />
          <Details images={expand} title={"Super Build Area"} text={"1418 Sq.ft"} />
        </div>
      </div>
      {/* =========== Features &  Amenities =========  */}
      <div className='mb-5'>
        <p className=' text-2xl font-medium text-[#341F87] mb-3'>Features &  Amenities</p>
        <div className='flex items-center gap-10'>
          <div className='flex items-center gap-2'>
            <img src={clock} />
            <span>CCTV</span>
          </div>
          <div className='flex items-center gap-2'>
            <img src={clock} />
            <span>Security</span>
          </div>
          <div className='flex items-center gap-2'>
            <img src={clock} />
            <span>Life</span>
          </div>
        </div>
      </div>
      {/* =========== Nearby =========  */}
      <div className='mb-16'>
        <p className=' text-2xl font-medium text-[#341F87] mb-3'>Nearby</p>
        <div className='flex  gap-16  item-center'>
          <Nearby images={Nearby1} title={"Hospital"} />
          <Nearby images={Nearby2} title={"Park"} />
          <Nearby images={Nearby3} title={"Bus"} />
          <Nearby images={Nearby4} title={"Hospital"} />
          <Nearby images={Nearby5} title={"Hospital"} />
        </div>
      </div>

      {/* =========== Similar Properties =========  */}
      <div className='mb-10'>
        <p className=' text-2xl font-medium text-[#341F87] mb-5'>Similar Properties</p>
        <div className='grid grid-cols-3 gap-8 '>
          <SimilarProject
            samilerproject={samilerproject}
            title={'2BHK Apartment for Sale'}
            location={"Behala"}
            prics={"₹ 15,000"}
            bgColor={"ffffff"}
          />
          <SimilarProject
            samilerproject={samilerproject}
            title={'Apartment for Sale'}
            location={"indai"}
            prics={"₹ 32,000"}
            bgColor={"4B2FB7"}
          />
          <SimilarProject
            samilerproject={samilerproject}
            title={'I like to home'}
            location={"Bnagladesh"}
            prics={"₹ 12,000"}
            bgColor={"9277FB"}
          />
        </div>
      </div>

    </div>
  )
}

export default Home