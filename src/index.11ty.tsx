import Layout from "./_includes/layouts/base.11ty.tsx";
import Button, {ButtonLink} from "./_includes/components/button.11ty.tsx";

export default function IndexPage(props:{title: string}) {
  return (
    <Layout title={props.title}>
      <div>
        <h1>{props.title}</h1>
        <p><strong>this is a message</strong></p>
        <p><em>this is another message</em></p>
        <Button>Click me</Button>
      </div>
    </Layout>
  );
}

export const data = {
  title: "Home"
}
