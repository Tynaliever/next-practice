import { useState, useEffect } from "react";
import Link from "next/link";
import MainConteiner from "../components/MainConteiner";

const users = ({users}) => {

  return (
    <MainConteiner keywords={"users next js"}>
      <h1>Список пользователей</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <a>{user.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainConteiner>
  );
};

export default users;

export async function getStaticProps(context) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const users = await response.json()
  return {
    props: {users}, // will be passed to the page component as props
  }
}
