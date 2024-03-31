"use client";

import React, { useState } from "react";
import {
  Anchor,
  Avatar,
  Button,
  Group,
  Paper,
  Text,
  Tooltip,
} from "@mantine/core";
import {
  IconAt,
  IconPhoneCall,
  IconStar,
  IconTrash,
  IconUserMinus,
  IconUserPlus,
  IconWorld,
} from "@tabler/icons-react";
import { UserData } from "../types";

interface CardsProps {
  user: UserData;
  handleDelete: (id: number) => void;
}

const Cards = ({ user, handleDelete }: CardsProps) => {
  const [follow, setFollow] = useState(false);

  const handleFollow = () => {
    setFollow(!follow);
  };

  return (
    <Paper p="lg" shadow="md" radius="md" withBorder>
      <Tooltip label={user.name} withArrow position="top">
        <Avatar
          component="a"
          href={user.website}
          target="_blank"
          size={120}
          radius={120}
          mx="auto"
          src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`}
          alt={user.name}
        />
      </Tooltip>

      <Text
        mt="md"
        styles={{ root: { textAlign: "center", fontWeight: "500" } }}
      >
        {user.name} {follow && <IconStar size={16} stroke={1.5} />}
      </Text>

      <Group align="center" mt={5} gap={5}>
        <IconAt size={16} stroke={1.5} color="gray" />
        <Anchor
          href={`mailto:${user.email}`}
          target="_blank"
          size="md"
          underline="hover"
          c="gray"
        >
          {user.email}
        </Anchor>
      </Group>
      <Group align="center" mt={5} gap={5}>
        <IconPhoneCall size={16} stroke={1.5} color="gray" />
        <Anchor
          href={`tel:${user.phone}`}
          target="_blank"
          size="md"
          underline="hover"
          c="gray"
        >
          {user.phone}
        </Anchor>
      </Group>
      <Group align="center" mt={5} gap={5}>
        <IconWorld size={16} stroke={1.5} color="gray" />
        <Anchor
          href={
            user.website.startsWith("http://www.") ||
            user.website.startsWith("https://www.")
              ? user.website
              : `https://www.${user.website}`
          }
          target="_blank"
          size="sm"
          underline="hover"
          c="gray"
          rel="noopener noreferrer"
        >
          {user.website}
        </Anchor>
      </Group>
      <Group mt="md" gap={5} align="center" wrap="nowrap">
        <Button
          leftSection={
            follow ? <IconUserMinus size={16} /> : <IconUserPlus size={16} />
          }
          variant={follow ? "default" : "filled"}
          fullWidth
          onClick={handleFollow}
        >
          {follow ? "Unfollow" : "Follow"}
        </Button>
        <Button
          leftSection={<IconTrash size={16} />}
          variant="outline"
          color="blue"
          fullWidth
          onClick={async () => handleDelete(user.id)}
        >
          Delete
        </Button>
      </Group>
    </Paper>
  );
};

export default Cards;
