import Simple from "@/components/Simple";

export default function Home() {
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-gray-100 space-x-4">
            <div className="bg-white p-4 shadow-lg rounded-lg">
                <h1 className="text-2xl font-bold text-center">Home</h1>
                <p className="text-center">This is the home page.</p>
            </div>

            <Simple />
        </div>
    )
}