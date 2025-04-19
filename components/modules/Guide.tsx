import Link from "next/link";

function Guide() {
    return (
      <div className="flex justify-between mb-24">
        <Link className="py-4 px-5 sm:px-8 md:px-12 rounded-lg cursor-pointer shadow-[rgba(92,_245,_115,_0.123)_0px_4px_16px,_rgba(17,_17,_26,_0.05)_0px_8px_32px] " href="/menu">Menu</Link>
        <Link className="py-4 px-5 sm:px-8 md:px-12 rounded-lg cursor-pointer shadow-[rgba(92,_245,_115,_0.123)_0px_4px_16px,_rgba(17,_17,_26,_0.05)_0px_8px_32px] " href="/categories">Categories</Link>
        <Link className="py-4 px-5 sm:px-8 md:px-12 rounded-lg cursor-pointer shadow-[rgba(92,_245,_115,_0.123)_0px_4px_16px,_rgba(17,_17,_26,_0.05)_0px_8px_32px] " href="/">Discount</Link>
      </div>
    );
  }
  
  export default Guide;