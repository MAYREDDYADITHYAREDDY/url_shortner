import { useState, useEffect } from "react";
import { Avatar, Card, Text, Group, Stack, Loader, Center } from "@mantine/core";
import Service from "../../utils/http";

export const Profile = () => {
  const obj = new Service();
  const [user, setUser] = useState(null); // null instead of {}
  const [loading, setLoading] = useState(true);

  const getProfileData = async () => {
    try {
      const data = await obj.get("user/me");
      setUser(data);
    } catch (err) {
      console.error("Error fetching profile:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  if (loading) {
    return (
      <Center h="100vh">
        <Loader size="lg" />
      </Center>
    );
  }

  if (!user) {
    return (
      <Center h="100vh">
        <Text color="red">Failed to load profile.</Text>
      </Center>
    );
  }

  return (
    <Center mt="xl">
      <Card shadow="sm" padding="lg" radius="md" withBorder style={{ width: 350 }}>
        <Group position="center" mb="md">
          <Avatar
            src={user.avatar || undefined}
            size={100}
            radius="xl"
            alt={user.name}
          />
        </Group>

        <Stack spacing={4} align="center">
          <Text size="lg" weight={500}>
            {user.name || "No Name"}
          </Text>
          <Text size="sm" color="dimmed">
            {user.email || "No Email"}
          </Text>
          {user.bio && (
            <Text size="sm" align="center">
              {user.bio}
            </Text>
          )}
          {user.location && (
            <Text size="xs" color="dimmed">
              📍 {user.location}
            </Text>
          )}
        </Stack>
      </Card>
    </Center>
  );
};