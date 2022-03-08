import Head from "next/head";
import A from "../components/A";

const MainConteiner = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"asdbkb nextjs" + keywords}></meta>
        <title>Главная страница</title>
      </Head>
      <div className="navbar">
        <A href={"/"} text="Главная" />
        <A href={"/users"} text="Пользователи" />
      </div>
      <div>{children}</div>
      <style jsx>
        {`
          .navbar {
            background: orange;
            padding: 15px;
          }
        `}
      </style>
    </>
  );
};

export default MainConteiner;
