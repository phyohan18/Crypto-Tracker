export default function SkeletonLoader(){
    const showSkeletonTableRow = total => {
        let content = [];
        for (let i = 0; i < total; i++) {
          content.push( 
            <tr className="animate-pulse">
                <td className="hidden sm:table-cell dark:border-y-0">
                    <div className="h-4 w-7 mx-auto bg-slate-200 dark:bg-slate-600 rounded"></div>
                </td>
                <td className="dark:border-y-0"> 
                    <div className="flex items-center gap-4">
                        <div className="rounded-full bg-slate-200 dark:bg-slate-600 w-8 h-8 lg:w-9 lg:h-9"></div>
                        <div className="rounded  bg-slate-200 dark:bg-slate-600 h-6 lg:h-8 w-3/5"></div>
                    </div>
                </td>
                <td className="hidden md:table-cell dark:border-y-0">
                    <div className="h-4 lg:h-7 bg-slate-200 dark:bg-slate-600 rounded xl:w-3/5 xl:mx-auto"></div>
                </td>
                <td className="dark:border-y-0">
                    <div className="h-4 lg:h-7 bg-slate-200 dark:bg-slate-600 rounded xl:w-3/5 xl:mx-auto"></div>
                </td>
                <td className="dark:border-y-0 hidden xs:table-cell">
                    <div className="h-4 lg:h-7 bg-slate-200 dark:bg-slate-600 rounded xl:w-3/5 xl:mx-auto"></div>
                </td>
                <td className="hidden lg:table-cell dark:border-y-0">
                    <div className="bg-slate-200 dark:bg-slate-600 rounded mx-auto w-40 h-12">
                    </div>
                </td>
            </tr>);
        }
        return content;
    };
    return (
        <>{showSkeletonTableRow(10)}</>
    )
}