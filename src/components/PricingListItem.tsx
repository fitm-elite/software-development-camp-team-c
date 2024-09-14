interface PricingListItemProps {
  pricing: number;
  count: number;
  setCount: (count: number) => void;
}

export default function PricingListItem(props: PricingListItemProps) {
  const handleCount = (increment: boolean) => {
    if (increment) {
      props.setCount(props.count + 1);
    } else if (props.count > 0) {
      props.setCount(props.count - 1);
    }
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 1) {
      if (e.target.value[0] === '0') {
        e.target.value = e.target.value.slice(1);
      }
    }
    const value = parseInt(e.target.value);
    props.setCount(isNaN(value) ? 0 : value);
  }

  return (
    <div className="bg-white p-4 shadow-lg rounded-lg flex flex-row items-center justify-between w-full">
      <span className="text-lg font-bold w-full">{props.pricing} ฿</span>

      <div className="flex flex-row items-center space-x-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={() => handleCount(false)}
        >
          -
        </button>

        <input
          type="number"
          defaultValue={0}
          min={0}
          value={props.count}
          onChange={handleInput}
          className="max-w-16 border-none text-center h-10"
        />

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={() => handleCount(true)}
        >
          +
        </button>
      </div>
    </div>
  );
}
