const ExternalLink = ({ href, children, className = "" }) => {
  if (!href) {
    return <span className={className}>{children}</span>;
  }

  return (
    <a className={className} href={href} rel="noreferrer" target="_blank">
      {children}
    </a>
  );
};

export default ExternalLink;
