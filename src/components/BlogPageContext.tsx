

const BlogPageContext = ({ img, title, body }: { img: string, title: string, body: string }) => {
    return (
        <div className="my-8 w-3/4 mx-auto">

            <img src={img} alt="title" className="mx-auto mb-4" />
            <h2 className="text-2xl text-center mb-8 font-bold">{title}</h2>
            <p className=" text-center">{body}</p>

        </div>
    )
}

export default BlogPageContext