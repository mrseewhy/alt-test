// import { useParams } from "react-router-dom"
// import { BLOG_POSTS } from "../data/Blogposts"
// import BlogPageContext from "../components/BlogPageContext"



// const BlogPage = () => {
//     const { slug } = useParams()
//     const blog = BLOG_POSTS.find((blog) => slug === blog.slug)
//     if (!blog) return
//     return (
//         <BlogPageContext title={blog.title} body={blog.body} img={blog.img} />
//     )
// }

// export default BlogPage

import { useParams } from "react-router-dom"
import { BLOG_POSTS } from "../data/Blogposts"
import BlogPageContext from "../components/BlogPageContext"

interface BlogPost {
    slug: string;
    title: string;
    body: string;
    img: string;
}

const BlogPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>()
    const blog: BlogPost | undefined = BLOG_POSTS.find((blog) => slug === blog.slug)
    if (!blog) return null
    return (
        <BlogPageContext title={blog.title} body={blog.body} img={blog.img} />
    )
}

export default BlogPage