import { GiKnifeFork } from "react-icons/gi";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { LuCalendarClock } from "react-icons/lu";
import { TbHandFinger } from "react-icons/tb";

function Attributes() {
    return (
        <div className="mt-24">
            <h3 className="text-[1.5rem] text-brandColor my-6 font-bold">Why us?</h3>
            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 mt-24">
                <div className="rounded-[10px] shadow-[rgba(92,_245,_115,_0.123)_0px_4px_16px,_rgba(17,_17,_26,_0.05)_0px_8px_32px] text-center p-6 flex flex-col justify-center items-center">
                    <HiOutlineRocketLaunch size={50} className="text-brandColor" />
                    <p className="font-semibold mt-5">Fast</p>
                </div>
                <div className="rounded-[10px] shadow-[rgba(92,_245,_115,_0.123)_0px_4px_16px,_rgba(17,_17,_26,_0.05)_0px_8px_32px] text-center p-6 flex flex-col justify-center items-center">
                    <GiKnifeFork size={50} className="text-brandColor" />
                    <p className="font-semibold mt-5">Best Restaurants</p>
                </div>
                <div className="rounded-[10px] shadow-[rgba(92,_245,_115,_0.123)_0px_4px_16px,_rgba(17,_17,_26,_0.05)_0px_8px_32px] text-center p-6 flex flex-col justify-center items-center">
                    <TbHandFinger size={50} className="text-brandColor" />
                    <p className="font-semibold mt-5">Your Choice</p>
                </div>
                <div className="rounded-[10px] shadow-[rgba(92,_245,_115,_0.123)_0px_4px_16px,_rgba(17,_17,_26,_0.05)_0px_8px_32px] text-center p-6 flex flex-col justify-center items-center">
                    <LuCalendarClock size={50} className="text-brandColor" />
                    <p className="font-semibold mt-5">24-7</p>
                </div>
            </div>
        </div>
    );
}

export default Attributes;