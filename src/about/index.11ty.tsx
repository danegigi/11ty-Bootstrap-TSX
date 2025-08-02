import Layout from "../_includes/layouts/base.11ty.tsx";

export default function AboutIndex(props:any) {
  return (
    <Layout title={props.title}>
      <div>
      <h2>{props.title}</h2>
      <p>PROPS{JSON.stringify(props.page)}</p>
      <p>{props.page.url}</p>
      <p>{new Date(props.page.date).toLocaleDateString()}</p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim totam animi magni exercitationem libero sed expedita corporis placeat pariatur minus! Tenetur dolores, hic iste pariatur debitis ipsa autem omnis optio?
      </p>
      </div>
    </Layout>
  );
}

export const data = {
  title: "About Us"
}
