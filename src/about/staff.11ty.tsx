import Layout from "../_includes/layouts/base.11ty.tsx";

export default function AboutIndex(props:{title: string}) {
  return (
    <Layout title={props.title}>
      <div>
      <h2>Meet the team</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim totam animi magni exercitationem libero sed expedita corporis placeat pariatur minus! Tenetur dolores, hic iste pariatur debitis ipsa autem omnis optio?
      </p>
      </div>
    </Layout>
  );
}

export const data = {
  title: "About Us - Staff"
}
