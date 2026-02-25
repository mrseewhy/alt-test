import { BLOG_POSTS } from '../data/Blogposts'
import BlogCard from '../components/BlogCard'

const Blog = () => {
    return (
        <div className='grid grid-cols-3 gap-8'>

            {BLOG_POSTS.map((blog, index) => {
                return (<BlogCard key={blog.slug + index} body={blog.body} title={blog.title} link={blog.slug} img={blog.img} />)
            })}

        </div>
    )
}

export default Blog