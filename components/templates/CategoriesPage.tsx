import { FoodItemType } from "@/types/menuItemTypes";
import FoodCard from "../modules/FoodCard";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { extractQueryParams, buildQueryString } from "@/utils/filterHelpers";
import SkeletonCard from "../modules/SkeletonCard";
import Breadcrumb from "../modules/Breadcrumb";
import Image from "next/image"; // اضافه کردن Import برای Image

interface CategoriesProps {
    data: FoodItemType[];
}

const CategoriesPage: React.FC<CategoriesProps> = ({ data }) => {
    const router = useRouter();
    const [query, setQuery] = useState({ difficulty: "", time: "" });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const initialQuery = extractQueryParams(router.query);
        setQuery(initialQuery);

        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [router.query]);

    const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setQuery({ ...query, [e.target.name]: e.target.value });
    };

    const searchHandler = () => {
        setLoading(true);
        router.push(buildQueryString(query));
    };

    return (
        <div className="my-36 min-h-screen">
            <div className='w-full flex justify-between items-start'>
                <h1 className="border-b-4 border-brandColor font-bold text-2xl w-fit pb-1 mb-12">
                    CategoriesPage
                </h1>
                <Breadcrumb />
            </div>
            <div>
                <select
                    value={query.difficulty}
                    name="difficulty"
                    onChange={changeHandler}
                    className="border-none sm:w-[150px] h-[35px] rounded-[10px] mr-[10px] px-[10px] py-[6px] text-[#48ac0a] shadow-[0px_4px_16px_rgba(92,245,115,0.123),_0px_8px_32px_rgba(17,17,26,0.05)] my-4 w-1/2"
                >
                    <option value="">Select Difficulty</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>

                <select
                    value={query.time}
                    name="time"
                    onChange={changeHandler}
                    className="border-none sm:w-[150px] h-[35px] rounded-[10px] mr-[10px] px-[10px] py-[6px] text-[#48ac0a] shadow-[0px_4px_16px_rgba(92,245,115,0.123),_0px_8px_32px_rgba(17,17,26,0.05)] my-4 w-1/2">
                    <option value="">Select Time</option>
                    <option value="less">Less than 30min</option>
                    <option value="more">More than 30min</option>
                </select>
                <button
                    onClick={searchHandler}
                    className="border-none bg-brandColor text-white h-[35px] px-5 rounded-lg cursor-pointer">
                    Search
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-20">
                {loading ? (
                    [...Array(6)].map((_, i) => <SkeletonCard key={i} />)
                ) : !data.length ? (
                    <div className="text-center col-span-full">
                        <Image
                            src="/images/search.png"
                            alt="No results"
                            width={300} // عرض تصویر (می‌توانید مقدار مناسب را انتخاب کنید)
                            height={300} // ارتفاع تصویر (می‌توانید مقدار مناسب را انتخاب کنید)
                            className="mx-auto max-w-[300px] mt-14"
                        />
                        {(query.difficulty || query.time) && (
                            <p className="text-gray-500 mt-4">
                                No results found for the selected filters.
                            </p>
                        )}
                    </div>
                ) : (
                    data.map((item) => <FoodCard key={item.id} item={item} />)
                )}
            </div>
        </div>
    );
};

export default CategoriesPage;
