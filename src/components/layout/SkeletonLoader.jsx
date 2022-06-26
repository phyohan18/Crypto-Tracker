
const divStyle ={
    width:"162px",
    height: "48px"
};

export default function SkeletonLoader(){
    return (
        <tr className="animate-pulse">
            <td className="hidden sm:table-cell dark:border-y-0"><div className="h-4 w-2/4 mx-auto bg-slate-200 dark:bg-slate-600 rounded"></div></td>
            <td className="dark:border-y-0"> 
                <div className="flex items-center">
                    <div className="rounded-full bg-slate-200 dark:bg-slate-600 w-8 h-8 lg:w-9 lg:h-9"></div>
                    <div className="rounded ml-4 bg-slate-200 dark:bg-slate-600 w-3/5 h-8"></div>
                </div>
            </td>
            <td className="dark:border-y-0">
                <div className="w-3/5 h-7 bg-slate-200 dark:bg-slate-600 rounded ml-auto"></div>
            </td>
            <td className="hidden md:table-cell dark:border-y-0">
                <div className="w-4/5 h-7 bg-slate-200 dark:bg-slate-600 rounded ml-auto"></div>
            </td>
            <td className="dark:border-y-0">
                <div className="w-4/5 h-7 bg-slate-200 dark:bg-slate-600 rounded ml-auto"></div>
            </td>
            <td className="hidden lg:table-cell dark:border-y-0">
                <div className="bg-slate-200 dark:bg-slate-600 rounded mx-auto" style={divStyle}>
                </div>
            </td>
        </tr>
    )
}