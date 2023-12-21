import Divider from '@/components/Divider';
import Listing from '@/components/Listing';
import Search from '@/components/Search';
import Product from '@/types/Product';

export default async function Home() {

  const res = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await res.json();

  const Instruction = () => {
    return <p className="text-sm text-stone-600 text-start w-full">
      Tap on a product to purchase
    </p>
  }

  return (
    <main className="flex min-h-screen flex-col space-y-4 items-center justify-between w-full p-4">
      <div className="flex flex-wrap md:space-x-0 justify-between items-center w-full">
        <div className="text-sm md:text-md pb-3 md:pb-0"> Product Listing </div>
        <div className="w-full md:max-w-md"> <Search /> </div>
      </div>
      <div className="w-full">
        <Divider />
      </div>
      <div className="w-full">
        <Instruction />
      </div>
      <div className="w-full">
        <Listing products={products} />
      </div>
    </main>
  )
}
