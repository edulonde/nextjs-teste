import React from "react";
import Link from 'next/link'

const NavBar = () => {
    return (
        <div className="border p-2">

            <ul className=" flex flex-row justify-end space-x-2">

                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/sobre">Sobre</Link>

                </li>
                <li>
                    <Link href="https://gitlab.com/studies39/al-andalus">Repo</Link>
                </li>

            </ul>

        </div>
    )
}
export default NavBar