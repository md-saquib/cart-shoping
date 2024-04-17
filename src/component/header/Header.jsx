import { Disclosure } from '@headlessui/react'
import { useContext } from 'react';
import { DataContext } from '../data provider/DataProvider';
import { CiShoppingCart } from "react-icons/ci";
import Nav from './Nav/Nav'
import { BiLogIn } from "react-icons/bi";
import { LuLogOut } from "react-icons/lu";
import { Link } from 'react-router-dom';





export default function Header() {
    const ProductData = useContext(DataContext);
    console.log(ProductData)
    const { data, login , userDetails:{username}} = ProductData;
    return (
        <Disclosure as="nav" className="bg-gray-800 flex justify-between relative">

            {({ open }) => (
                <>
                    <Nav open={open} />
                    <div className="flex px-2 sm:px-6 lg:px-8 items-center w-48 justify-between">
                        <Link to='/cart'>
                            <span className='relative cursor-pointer'>
                                <CiShoppingCart className='text-white text-4xl ' />
                                {data.length > 0 && (
                                    <span className="absolute z-10 top-0 right-0 -mt-2 -mr-2 bg-green-500 text-white text-sm font-bold px-2 pb-1 rounded-full">
                                        <sub>{data.length}</sub>
                                    </span>
                                )}
                            </span>
                        </Link>

                        {login ?
                             <span className='text-white text-xl  cursor-pointer' >{username.slice(0,7)}</span>:
                            <Link to='/login'>
                                <BiLogIn className='text-white text-3xl cursor-pointer' />
                            </Link>
                        }
                    </div>

                </>
            )}
        </Disclosure>
    )
}
