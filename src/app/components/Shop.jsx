import ShopItem from "./Item";

export default function Shop(){
    return (
        <div className="flex-col text-amber-400 ml-10 mb-10">
            
            <div className="text-7xl font-extralight mt-10 font-serif">
                Most Loved Scents
            </div>
            <div className="text-xl font-light font-serif">
                Uncover the luxury of rare, must-have fragrances—exclusively for those who know. Limited, coveted, and always unforgettable.
            </div>
            <div className="mt-10 flex flex-wrap gap-6 justify-center overflow-x-auto">
                <ShopItem/>
                <ShopItem/>
                <ShopItem/>
                <ShopItem/>
            </div>
        </div>
    )
}