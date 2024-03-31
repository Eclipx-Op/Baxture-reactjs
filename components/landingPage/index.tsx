import React from "react";
import { Container } from "@mantine/core";
import PageLayout from "../modules/PageLayout";
import { UserData } from "../types";

export const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const repo: UserData[] = await res.json();
  return repo;
};

const LandingPage = async () => {
  const repo = await fetchData();

  return (
    <Container my="md" mx={0} fluid>
      <PageLayout repo={repo} />
    </Container>
  );
};

export default LandingPage;
