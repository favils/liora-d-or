import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiShoppingCart } from "react-icons/fi";

export default function Navbar(){
    return (
        <div className="flex justify-between m-3 items-center">
            <Image
                src="/favicon.png"
                width={50}
                height={50}
                alt="Picture of the author"
            />
            <Link href="/">Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Shop</Link>
            <div className="flex gap-3">
                <FiShoppingCart />
                <FiSearch />
            </div>
        </div>
        
    )
}