// import Image from "next/image";
import Card from "@/components/Card";
import { getProducts } from "../lib/getProducts";

export default async function Home() {
  const products = await getProducts();
  return (
    <div>
      <main className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8">Nike Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product: any) => (
            // <div key={product.id} className="border rounded-lg p-4 flex flex-col items-center bg-white shadow">
            //   {product.image && (
            //     <Image
            //       src={product.image}
            //       alt={product.name}
            //       width={200}
            //       height={200}
            //       className="mb-4 object-contain"
            //     />
            //   )}
            //   <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            //   <p className="text-gray-600 mb-2">{product.description}</p>
            //   <span className="font-bold text-lg">₹{product.price / 100}</span>
            // </div>
            <Card price={product.price} title={product.name} image={product.image} description={product.description} key={product.id} />
          ))}
        </div>
      </main>
    </div>
  );
}
