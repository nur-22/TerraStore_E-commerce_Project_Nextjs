import Link from 'next/link'

export const metadata = {
    title: "TerraStore",
    description: "You can buy beautiful terrarium from this website.",
    keyword: "Terrarium"
}
export default function ProductLayout({ children }) {
    return (
        <div>
            <Link href="/products" className="inline-block text-black p-4 font-bold hover:underline">all products</Link>
            {children}
        </div>
    )
  }
  