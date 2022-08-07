import React from "react";
import Image from 'next/image'

const Card = (props) => {
    return (
        <div className="bg-white w-64 rounded overflow-hidden shadow-lg mx-auto">

            <img
                className="flex items-center justify-center mx-auto mt-1"
                src="/images/os-poemas-suspensos.png"
                height={292}
                width={200}
                alt="Capa de Poemas Suspensos"
            />
            <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2 text-center ">
                {props.card_title}
            </h2>

            <p
            className="text-gray-700 text-base"
            >
                {props.card_description}</p>
            </div>

            <div className="px-6 pt-4 pb-2">
                <span
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#poesia</span>

            </div>
        </div>
    )
}

export default Card