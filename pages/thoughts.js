import SiteShell from "@/src/components/SiteShell";
import site from "@/src/content/site";

const ThoughtsPage = () => {
  return (
    <SiteShell
      title="Thoughts"
      description="Writing and notes by Giriraj Parihar."
    >
      <section className="page-heading">
        <p className="eyebrow">Thoughts</p>
        <h1>Notes, posts, and field reports.</h1>
        <p>
          Add new writing in <code>src/content/site.js</code>. Keep drafts here
          until you are ready to turn them into full posts.
        </p>
      </section>

      <section className="article-list">
        {site.thoughts.map((post) => (
          <article className="article-card" key={post.slug}>
            <p className="meta">
              {post.date} · {post.status}
            </p>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
          </article>
        ))}
      </section>
    </SiteShell>
  );
};

export default ThoughtsPage;
