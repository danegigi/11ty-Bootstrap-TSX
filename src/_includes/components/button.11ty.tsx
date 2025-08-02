export default function Button({ children }: { children: React.ReactNode }) {
  return <button>{children}</button>;
}

export function ButtonLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} className="button-link">{children}</a>;
}
