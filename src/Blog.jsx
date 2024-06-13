const Blog = ({ blogs, title}) => {
//    const blogs = props.blogs;
//    const title = props.title;

    return (
        <div className="blogComponent">
            <h1>{ title }</h1>
            {blogs.map( (blog) => (
                <div className="blogPreview" key={ blog.id }>
                    <h2>{ blog.title }</h2>
                    <p>written by the { blog.author }</p>
                </div>
            ))}   
        </div>
    )
}
export default Blog;