import {getAllPosts} from '../scripts/getAllPosts'


export default function Home({posts}){
	return(
			<section className="postsContainer">
		        <h1>Posts</h1>
		        {posts.map((post) => (
		          <article key={post.metadata.title} className="postsContainer__post">
		            <h2>
		              <a href="#">
		                  {post.metadata.title}
		              </a>
		            </h2>
		            <p>
		              {post.metadata.excerpt}
		            </p>
		          </article>
		        ))}
		      </section>
		)
}

export async function getStaticProps()  {
  const posts = getAllPosts();

  return {
    props: {
      posts
    }
  }
} 