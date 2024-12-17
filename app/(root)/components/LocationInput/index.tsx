import { RiFocus2Fill } from "react-icons/ri";

const LocationInput: React.FC = () => {
    return(
        <div className="border-2 border-dspGray bg-dspBgColor rounded-2xl w-full">
            <div className="w-full flex items-center gap-1 p-2">
                <RiFocus2Fill className="text-xl text-dspGreen" />
                <input 
                    type="text" 
                    name="origin"
                    placeholder="Your location..."
                    className="w-full p-1 bg-transparent font-semibold rounded-xl outline-none"
                />
            </div>
            <hr className="border border-dspGray" />
            <div className="w-full flex items-center gap-1 p-2">
                <RiFocus2Fill className="text-xl text-orange-600 " />
                <input 
                    type="text" 
                    name="origin"
                    placeholder="Destination..."
                    className="w-full p-1 bg-transparent font-semibold rounded-xl outline-none"
                />
            </div>
        </div>
    )
}

export default LocationInput;