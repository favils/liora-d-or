import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiShoppingCart } from "react-icons/fi";

export default function Navbar(){
    return (
        <div className="pl-10 pr-10 fixed top-0 left-0 w-full z-20 flex justify-between text-white font-light p-3 items-center">
            <Image
                src="/favicon.png"
                width={30}
                height={30}
                className="floatin"
                alt="Picture of the author"
            />
            <Link href="/" className="floatin">Home</Link>
            <Link href="/" className="floatin">About</Link>
            <Link href="/" className="floatin"> Shop</Link>
            <div className="flex gap-3">
                <FiShoppingCart className="floatin"/>
                <FiSearch className="floatin"/>
            </div>
        </div>
        
    )
}