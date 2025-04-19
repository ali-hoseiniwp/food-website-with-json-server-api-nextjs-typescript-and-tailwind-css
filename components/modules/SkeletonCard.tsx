const SkeletonCard = () => {
    return (
        <div className="bg-white dark:bg-slate-700 shadow-md rounded-xl p-4 animate-pulse flex flex-col justify-between">
          <div className="relative">
            <div className="w-full h-[180px] bg-gray-300 dark:bg-slate-600 rounded-md mb-4" />
          </div>    
          <div className="h-6 bg-gray-300 dark:bg-slate-600 rounded w-3/4 mb-3" />    
          <div className="h-4 bg-gray-200 dark:bg-slate-500 rounded w-full mb-4" />    
          <div className="flex justify-between items-center mb-4">
            <div>
              <div className="h-5 bg-gray-300 dark:bg-slate-600 rounded w-16 mb-2" />
              <div className="h-3 bg-gray-200 dark:bg-slate-500 rounded w-10" />
            </div>
            <div className="h-4 bg-gray-300 dark:bg-slate-600 rounded w-20" />
          </div>   
          <div className="h-9 bg-gray-300 dark:bg-slate-600 rounded w-full" />
        </div>
      );
  };
  
  export default SkeletonCard;
  