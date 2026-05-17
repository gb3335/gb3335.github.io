import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import site from "@/src/content/site";

const SiteShell = ({ title, description, children }) => {
  const router = useRouter();
  const pageTitle = title ? `${title} | ${site.person.name}` : site.person.name;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description || site.person.tagline} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="site-shell">
        <header className="site-header">
          <Link className="brand" href="/">
            <span>{site.person.handle}</span>
            <small>{site.person.role}</small>
          </Link>
          <nav className="site-nav" aria-label="Primary navigation">
            {site.nav.map((item) => (
              <Link
                className={router.pathname === item.href ? "active" : ""}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </header>
        <main>{children}</main>
      </div>
    </>
  );
};

export default SiteShell;
