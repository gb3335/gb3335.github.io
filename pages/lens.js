import ExternalLink from "@/src/components/ExternalLink";
import SiteShell from "@/src/components/SiteShell";
import site from "@/src/content/site";

const LensPage = () => {
  return (
    <SiteShell
      title="Lens"
      description="Photography and visual notes by Giriraj Parihar."
    >
      <section className="page-heading">
        <p className="eyebrow">Lens</p>
        <h1>Photography, travel, and quiet observations.</h1>
        <p>
          Use this page for curated images or Google Photos album links. Update
          the <code>lens</code> array in <code>src/content/site.js</code> when
          you want to add or replace a set.
        </p>
      </section>

      <section className="lens-grid">
        {site.lens.map((item) => (
          <article className="lens-card" key={item.title}>
            <img alt={item.title} src={item.image} />
            <div>
              <p className="meta">{item.location}</p>
              <h2>{item.title}</h2>
              <p>{item.note}</p>
              {item.href ? (
                <ExternalLink className="text-link" href={item.href}>
                  Open album
                </ExternalLink>
              ) : null}
            </div>
          </article>
        ))}
      </section>
    </SiteShell>
  );
};

export default LensPage;
