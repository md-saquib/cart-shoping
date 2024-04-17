import React, { useContext } from 'react'
import { DataContext } from '../data provider/DataProvider'



const Cart = () => {


  const ProductData = useContext(DataContext);

  const { data, setData } = ProductData;
  return (



    <div className="flex h-full w-full flex-col overflow-y-scroll bg-white shadow-xl">
      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
        <div className="flex  justify-center">
          <span className="text-lg font-medium text-gray-900">Shopping cart</span>

        </div>

        <div className="mt-8">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {data.map((el) => (
                <li key={el.id} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={el.image}
                      alt={el.title}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <a href='#'>{el.title.slice(0, 10)}...</a>
                        </h3>
                        <p className="ml-4">${el.price}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">{el.description.slice(0, 10)}...</p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <p className="text-gray-500">Qty 1 </p>

                      <div className="flex">
                        <button
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                          onClick={() => setData(data.filter(val => val.id !== el.id))}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>${data.reduce((acc, cur) => acc + cur.price, 0)}.00</p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
        <div className="mt-6">
          <a
            href="#"
            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Checkout
          </a>
        </div>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          <p>
            or{' '}
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
              onClick={() => setOpen(false)}
            >
              Continue Shopping
              <span aria-hidden="true"> &rarr;</span>
            </button>
          </p>
        </div>
      </div>
    </div>

  )
}

export default Cart;

