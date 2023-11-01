import React from 'react'
import HeroImg from '../assests/HeroImg.png'
import Button from './Button'
import {TbAmbulance} from 'react-icons/tb'
import {TiTick} from 'react-icons/ti'
import {BsCalendarCheck} from 'react-icons/bs'
import BookAppointment from "../assests/AppointmentImg.png";
import Card from './Card'

const url = 'https://community-healthcaregov.p.rapidapi.com/what-is-the-health-insurance-marketplace.json';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5f54cc197amsh789466b90f20c4bp1cc11djsn980ef5324751',
		'X-RapidAPI-Host': 'community-healthcaregov.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

const Hero = () => {
  return (
    <div className='container mt-4 bg-slate-100'>
        <div className='w-[80%] h-[90vh] flex flex-col justify-between items-center mx-auto gap-x-10'>
            
            {/* Hero Section */}
            <div className='flex '>
              {/* Left Section */}
              <div className='flex flex-col items-start gap-y-5 justify-center'>
                  <h2 className='font-bold text-7xl'>All you need is Here</h2>

                  <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quas sapiente labore doloribus sequi. Repellat, quaerat quisquam natus fugit quis sapiente voluptate! Dolorum, aliquam eos molestias sit eveniet culpa cumque?</p>

                  <Button text="Get Started" />
              </div>

              {/* Right Section */}

              <img src={HeroImg} alt="medical" className='w-[40%]'/>
            </div>
            

            {/* What we Do */}
            <div className='flex flex-col mt-4'>
              <div className='flex flex-col items-center w-[50%] mx-auto'>
                <h2 className='text-5xl font-bold flex flex-col gap-y-2'>
                  What We Do
                  <div className='w-[80%] h-1 bg-orange-800'></div>
                </h2>

                <p className='mt-5 text-center'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus debitis sapiente non quis aperiam alias obcaecati! Explicabo, cumque libero ut nobis illo natus pariatur, necessitatibus est earum eos consectetur placeat!
                </p>
              </div>
              
              <div className='flex w-full justify-between px-5 mt-12'>
                <Card icon={<TbAmbulance size={38} color='blue'/>} heading="Emergency Care" desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid hic, fugit odio inventore est deleniti temporibus! Temporibus, ducimus! Cumque aliquam possimus earum maxime cum repellat dicta vero, sunt commodi quasi!"  />
                <Card icon={<TbAmbulance size={38} color='blue'/>} heading="Emergency Care" desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid hic, fugit odio inventore est deleniti temporibus! Temporibus, ducimus! Cumque aliquam possimus earum maxime cum repellat dicta vero, sunt commodi quasi!"  />
                <Card icon={<TbAmbulance size={38} color='blue'/>} heading="Emergency Care" desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid hic, fugit odio inventore est deleniti temporibus! Temporibus, ducimus! Cumque aliquam possimus earum maxime cum repellat dicta vero, sunt commodi quasi!"  />
              </div>
            </div>



            {/* Book Appointment */}
            <div className='flex w-full justify-between items-center mt-10'>
              {/* Left Part */}
              <div>
                <img src={BookAppointment} alt="Appointment" className='w-[100%] mix-blend-color-burn'/>
              </div>

              {/* Right Part */}
              <div className='flex flex-col justify-between items-start gap-y-8'>
                <h2 className='text-5xl font-bold flex flex-col gap-y-4'>
                  Book Appointment
                  <div className='w-[80%] h-1 bg-orange-800'></div>
                </h2>

                <ul className='flex flex-col justify-center items-start gap-y-3 text-xl'>
                  <li className='flex justify-center items-center'>
                    <TiTick size={30} color='blue'/>
                    <p>Best Professional Doctor</p>
                  </li>
                  <li className='flex justify-center items-center'>
                    <TiTick size={30} color='blue'/>
                    <p>Emergency Care</p>
                  </li>
                  <li className='flex justify-center items-center'>
                    <TiTick size={30} color='blue'/>
                    <p>24/7 Support and Live Chat</p>
                  </li>
                  <li className='flex justify-center items-center'>
                    <TiTick size={30} color='blue'/>
                    <p>Enrollment Easy and Quick</p>
                  </li>
                </ul>

                <button className='bg-[#1570EF] hover:bg-[#444CE7] px-3 py-3 rounded-full text-center text-white pb-3 flex justify-center items-center gap-x-2 transition-all duration-300'>
                  <BsCalendarCheck size={17}/>
                  <p className='text-lg'>Book Appointment</p>
                </button> 
              </div>
            </div>


        </div>        
    </div>
  )
}

export default Hero