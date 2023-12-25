import categories from '@/data/categories';
import Search from './Search';

const Drawer = () => {
    return (
        <div className="bg-white h-screen min-w-[250px] border-r-2 border-r-stone-200 max-h-screen overflow-y-auto">
            <div className="flex flex-col space-y-4 py-5 px-5">
                <Search />
                {categories.map((cat, index) => {
                    return <span key={index} className="cursor-pointer uppercase text-sm text-stone-700">{cat}</span>
                })}
            </div>
        </div>
    )
}

export default Drawer