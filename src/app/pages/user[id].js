export async function getServerSideProps(context) {
    const { id } = context.params;
    return {
      props: { id },
    };
  }
  
  export default function UserPage({ id }) {
    return <h1>Користувач ID: {id}</h1>;
  }
  