import { Typography } from "@mui/material";
import { GetServerSidePropsContext } from "next";
import { FC } from "react";

const SSRPage: FC = () => {
  return (
    <>
      <Typography variant="h4">Welcome to the server!</Typography>
    </>
  );
};

export const getServerSideProps = (ctx: GetServerSidePropsContext) => {
  return {
    props: {},
  };
};

export default SSRPage;
