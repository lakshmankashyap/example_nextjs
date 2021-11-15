import { useRouter } from 'next/router'

export default () => {
    debugger;
    const router = useRouter()

    return (
        <>
            <h1>Blog post</h1>
            <p>Post id: {router.query.blogId}</p>
        </>
    )
}