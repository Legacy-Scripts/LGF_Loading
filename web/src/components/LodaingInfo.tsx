import { useEffect, useState } from 'react';
import { useMantineTheme, Container, Flex, Avatar, Text, Badge } from '@mantine/core';
import { IconGrid3x3 } from '@tabler/icons-react';
import locale from '../locales';

function LoadingProgress() {
  const theme = useMantineTheme();
  const [playerName, setPlayerName] = useState<string>('');
  const [playerId, setPlayerID] = useState<number>();
  const [playerSteamId, setPlayerSteamId] = useState<string>('');

  useEffect(() => {
    if (window.nuiHandoverData) {
      setPlayerName(window.nuiHandoverData.name);
      setPlayerID(window.nuiHandoverData.id);
      setPlayerSteamId(window.nuiHandoverData.steamid);
    }
  }, []);

  return (
    <Container
      w={400}
      m={30}
      p={20}
      bg={theme.colors.dark[6]}
      style={{ borderRadius: 5, position: 'relative', zIndex: 1 }}
    >
      <Flex align="center" direction="row">
        <Avatar variant="light" radius="md" size="lg" color="blue" />
        <Flex justify="space-between" w="100%" ml="md" direction="column">
          <Flex justify="space-between" align="center" w="100%">
            <Text size="lg" style={{ fontWeight: 700 }}>
              {playerName || locale.palyer_name}
            </Text>
            <Badge leftSection={<IconGrid3x3 size={16} />} variant="light" color="blue" radius="sm">
              {locale.id} {playerId || locale.palyer_id}
            </Badge>
          </Flex>
          <Text truncate="end" c="dimmed" size="sm">{playerSteamId || locale.steam_id}</Text>
        </Flex>
      </Flex>
    </Container>
  );
}

export default LoadingProgress;
