import { useEffect, useState } from "react";
import PostModel from "../../models/PostModel";
import { getListPost } from "../../api/PostAPI";
import { Pagination } from "../../utils/pagination/Pagination";
import PostDetail from "./PostDetail";
import ScrollToTopButton from "../../utils/scroll/ScrollToTopButton";
import PostItem from "./PostItem";

function Post() {
    const [posts, setPosts] = useState<PostModel[] | null>([]);
    const [loadingData, setLoadingData] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [currPage, setCurrPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        getListPost(currPage - 1)
            .then(
                res => {
                    setPosts(res.result);
                    setTotalPages(res.totalPages);
                    setLoadingData(false);
                }
            )
            .catch((error) => {
                setLoadingData(true);
                setError(error.message);
            })
    }, [currPage])

    const paginate = (currPage: number) => {
        setCurrPage(currPage);
    }

    if (loadingData) {
        return (
            <div id="layoutSidenav" className="container-fluid mt-4" style={{ minHeight: '700px', textAlign: 'center' }}>
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div>{error}</div>
        )
    }


    return (
        <div className="text-start">
            <ScrollToTopButton />
            <section className="py-5">
                <div className="container px-5">
                    <h2 className="fw-bolder fs-5 mb-4">Featured Posts</h2>
                    <div className="row gx-5">
                        {
                            posts?.map((post) => (
                                <PostItem key={post.postId} post={post} />
                            ))
                        }
                    </div>
                    <div className="text-end mb-5 mb-xl-0">
                        <nav aria-label="Page navigation example">
                            <Pagination currentPage={currPage} totalPages={totalPages} paginate={paginate} />
                        </nav>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Post;