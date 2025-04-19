import Link from "next/link";
import Image from "next/image"; // اضافه کردن Import برای Image

function Banner() {
  return (
    <div className="flex flex-col md:flex-row mt-28 md:mt-40">
      {/* Left */}
      <div className="flex flex-col mt-[10px] w-full md:w-1/2">
        <h2 className="border-b-[3px] border-brandColor w-fit my-5 text-2xl font-bold">AliFooD</h2>
        <p className="font-medium my-4">Food Delivery and Takeout!</p>
        <span className="text-gray-500 text-justify dark:text-gray-300">
          BotoFood is an online food ordering and delivery platform launched by
          Uber in 2014. Meals are delivered by couriers using cars, scooters,
          bikes, or on foot.
        </span>
        <Link href="/menu" className="bg-brandColor text-white py-[10px] px-[30px] w-fit mt-[30px] rounded-md">
          See All
        </Link>
      </div>

      {/* Right */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
        <Image 
          src="/images/banner.png" 
          alt="Food image"
          layout="responsive" // استفاده از layout responsive برای مقیاس‌بندی خودکار تصویر
          width={700}  // عرض تصویر
          height={475} // ارتفاع تصویر
          className="w-full md:w-auto"
        />
      </div>
    </div>
  );
}

export default Banner;
