"use client";

import React, { useState } from "react";
import { Grid, GridCol } from "@mantine/core";
import Cards from "./Cards";
import { UserData } from "../types";

const PageLayout = ({ repo }: { repo: UserData[] }) => {
  const [userData, setUserData] = useState(repo);

  const handleDelete = (id: number) => {
    setUserData((prev) => prev.filter((el) => el.id !== id));
  };
  return (
    <Grid>
      {userData?.map((user) => {
        return (
          <GridCol
            span={{ base: 12, xs: 6, sm: 6, md: 4, lg: 3, xl: 0 }}
            key={user.id}
          >
            <Cards user={user} handleDelete={(id) => handleDelete(id)} />
          </GridCol>
        );
      })}
    </Grid>
  );
};

export default PageLayout;
