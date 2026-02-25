import { useParams, useMatches } from "react-router-dom"
import { BLOG_POSTS } from "../data/Blogposts"
import BlogPageContext from "../components/BlogPageContext"



const BlogPage = () => {
    const { slug } = useParams()
    const blog = BLOG_POSTS.find((blog) => slug === blog.slug)
    if (!blog) return
    return (
        <BlogPageContext title={blog.title} body={blog.body} img={blog.img} />
    )
}

export default BlogPage