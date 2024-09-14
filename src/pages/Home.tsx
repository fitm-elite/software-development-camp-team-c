import PricingListItem from "@/components/PricingListItem";

export default function Home() {
    return (
        <div className="w-screen h-screen flex flex-col justify-between items-center bg-gray-100 gap-4 p-4">
            <div className="flex flex-row items-center justify-between w-full">
                <h1 className="text-md font-bold">คำนวนราคาอาหารร้านป้าแมว</h1>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                    Settings
                </button>
            </div>
            
            <div className="flex flex-col gap-2 w-full h-full">
                { [40, 50, 10, 2].map((price) => <PricingListItem pricing={price} count={0} setCount={() => {}} />) }
            </div>

            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full">
                Checkout
            </button>
        </div>
    )
}