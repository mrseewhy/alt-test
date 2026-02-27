import { Link } from "react-router-dom"

const BlogCard = ({ img, title, body, link }: { img: string, title: string, body: string, link: string }) => {
    return (
        <div className='flex flex-col w-9/12 mx-auto mt-12 mb-12 rounded-xl bg-gray-50 shadow-2xl'>
            <img
                src={img}
                alt='blog'
                className='w-full aspect-video object-cover rounded-t-xl'
            />
            <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-lg mb-6">{body}</p>
                <Link to={link}> continue reading ⟶</Link>
            </div>


        </div>
    )
}

export default BlogCard