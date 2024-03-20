import {ContentContainer, PageContainer} from "../../styles/genericContainers";
import {getCommentsByPostId, getPostById} from "../../../loaders/loaders";
import {Await, defer, useLoaderData} from "react-router-dom";
import {Suspense} from "react";



export const postLoader = async ({ params }:any) => {
    const postId = params.postId;
    const post = await getPostById(postId);
    const commentsPromise = getCommentsByPostId(postId);
    return defer({ post, commentsPromise });
};

const RandomCreation = () => {
    const {post, commentsPromise }: any = useLoaderData();
    
    return (
        
        <PageContainer>
    <ContentContainer>
        <section>
            <h2>{post.title}</h2>
            <p>{post.body}</p>

            <Suspense fallback={<small>Loading Comments...</small>}>
                <Await resolve={commentsPromise}>
                    {(comments) =>
                        comments.map((comment:any) => (
                            <span key={comment.id}>
                <small>{comment.body}</small>
                <br />
              </span>
                        ))
                    }
                </Await>
            </Suspense>
        </section>
    </ContentContainer>
        </PageContainer>
    )
}
export default RandomCreation