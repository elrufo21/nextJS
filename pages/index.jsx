import Head from "next/head";
import Container from "../components/Container";
import fetch from "isomorphic-fetch";
import Users from "../components/Users";

function index(props) {
  
  return (
    <Container>
      <Head>
        <title>Next.js Project - Home</title>
      </Head>
      <h1>Next</h1>
      <Users users={props.users} />
    </Container>
  );
}

index.getInitialProps = async (ctx) => {
  const res = await fetch("https://reqres.in/api/users?page=2");
  const resJSON = await res.json();
  return { users: resJSON.data };
};
export default index;
