import { useRouter } from "next/router";
import MainConteiner from "../../components/MainConteiner";
import styles from "../../styles/user.module.scss";

export default function User({ user }) {
  const { query } = useRouter();

  return (
    <MainConteiner keywords={user.name}>
      <div className={styles.user}>
        <h1>Пользователь c id {query.id}</h1>
        <div>Имя пользователя - {user.name}</div>
      </div>
    </MainConteiner>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await response.json();
  return {
    props: { user }, // will be passed to the page component as props
  };
}
