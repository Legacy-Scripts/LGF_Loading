import { useEffect, useState } from 'react';
import { Container, Flex, Avatar, Text, Badge } from '@mantine/core';
import { createStyles } from '@mantine/emotion';
import { IconGrid3x3 } from '@tabler/icons-react';
import locale from '../locales';

const useStyles = createStyles((theme) => ({
  container: {
    borderRadius: 5, 
    position: 'relative', 
    zIndex: 1,
    backgroundColor: theme.colors.dark[6],
    padding: 20,
    margin: 30,
    width: 400,
  },
}));

function LoadingProgress() {
  const { classes } = useStyles();
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
    <Container className={classes.container}>
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
