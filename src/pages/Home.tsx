import PricingListItem from "@/components/PricingListItem";

export default function Home() {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-100 gap-4 px-4">
            { [40, 50, 10, 2].map((price) => <PricingListItem pricing={price} count={0} setCount={() => {}} />) }
        </div>
    )
}