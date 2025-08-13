import Layout from "./_includes/layouts/base.11ty.tsx";
import Button, {ButtonLink} from "./_includes/components/button.11ty.tsx";

export default function IndexPage(props:{title: string}) {
  return (
    <Layout title={props.title}>
      <div className="p-8">
        <h1 className="text-4xl font-bold text-gray-800">{props.title}</h1>
        <p className="mt-4 text-lg text-gray-600"><strong>this is a message</strong></p>
        <p className="mt-2 text-lg text-gray-600"><em>this is another message</em></p>
        <div className="mt-8">
          <Button>Click me</Button>
        </div>
      </div>
    </Layout>
  );
}

export const data = {
  title: "Home"
}
