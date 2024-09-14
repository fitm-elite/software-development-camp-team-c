interface PricingListItemProps {
  pricing: number;
  count: number;
  setCount: (count: number) => void;
}

export default function PricingListItem(props: PricingListItemProps) {
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg flex flex-row items-center justify-between w-full">
      <span className="text-lg font-bold w-full">{props.pricing} ฿</span>

      <div className="flex flex-row items-center space-x-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          -
        </button>

        <input
          type="number"
          defaultValue={0}
          min={0}
          className="max-w-16 border-none text-center h-10"
        />

        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          +
        </button>
      </div>
    </div>
  );
}
