import ExternalLink from "@/src/components/ExternalLink";
import SiteShell from "@/src/components/SiteShell";
import site from "@/src/content/site";

const HomePage = () => {
  return (
    <SiteShell>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">{site.person.location}</p>
          <h1>{site.person.name}</h1>
          <p className="lead">{site.person.tagline}</p>
          <p>{site.person.intro}</p>
          <div className="actions">
            <ExternalLink className="button primary" href={site.person.resumeUrl}>
              Resume
            </ExternalLink>
            <a className="button" href={`mailto:${site.person.email}`}>
              Contact
            </a>
          </div>
          <div className="social-links">
            {site.person.links.map((link) => (
              <ExternalLink href={link.href} key={link.label}>
                {link.label}
              </ExternalLink>
            ))}
          </div>
        </div>
        <div className="hero-media">
          <img alt={site.person.name} src={site.person.portrait} />
        </div>
      </section>

      <section className="section-grid">
        <div>
          <p className="eyebrow">Work</p>
          <h2>Selected Projects</h2>
        </div>
        <div className="project-grid">
          {site.projects.map((project) => (
            <article className="project-card" key={project.title}>
              <img alt="" src={project.image} />
              <div>
                <p className="meta">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="tag-row">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <ExternalLink className="text-link" href={project.href}>
                  View project
                </ExternalLink>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-grid compact">
        <div>
          <p className="eyebrow">Stack</p>
          <h2>Tools I use</h2>
        </div>
        <div className="skill-cloud">
          {site.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="section-grid compact">
        <div>
          <p className="eyebrow">Activity</p>
          <h2>Code Footprint</h2>
        </div>
        <div className="stat-grid">
          {site.stats.map((stat) => (
            <article className="stat-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section-grid">
        <div>
          <p className="eyebrow">Experience</p>
          <h2>Recent Roles</h2>
        </div>
        <div className="timeline">
          {site.experience.map((role) => (
            <article key={role.title + role.company}>
              <p className="meta">{role.period}</p>
              <h3>{role.title}</h3>
              <strong>{role.company}</strong>
              <p>{role.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-grid">
        <div>
          <p className="eyebrow">Learning</p>
          <h2>Certifications</h2>
        </div>
        <div className="cert-grid">
          {site.certifications.map((cert) => (
            <ExternalLink
              className="cert-card"
              href={cert.href}
              key={cert.title}
            >
              <span>{cert.issuer}</span>
              <strong>{cert.title}</strong>
            </ExternalLink>
          ))}
        </div>
      </section>
    </SiteShell>
  );
};

export default HomePage;
