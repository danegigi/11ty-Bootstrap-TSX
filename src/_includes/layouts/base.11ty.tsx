import type React from "react";
import { ButtonLink } from "../components/button.11ty"
export default function BaseLayout(props:any) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/assets/style.css"/>
        <title>{props.title}</title>
      </head>
      <body>
        <header>
          <nav>
            <ButtonLink href="/">Home</ButtonLink>
            &nbsp;|&nbsp;
            <ButtonLink href="/about">About Us</ButtonLink>
            &nbsp;|&nbsp;
            <ButtonLink href="/about/staff">The Staff</ButtonLink>
          </nav>
        </header>
        <main>{props.children}</main>
        <footer>
          <p>&copy; {new Date().getFullYear()} II+</p>
        </footer>
      </body>
    </html>
  );
}
