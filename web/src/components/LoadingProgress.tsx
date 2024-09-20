import { useEffect, useState } from 'react';
import { useMantineTheme, Container, Flex, Title, Text, Loader, Timeline, Badge } from '@mantine/core';
import { IconTools, IconMap, IconRocket, IconCheck, IconCircleCheck } from '@tabler/icons-react';
import locale from '../locales';

type HandlerFunction = (data: any) => void;

function LoadingProgress() {
  const theme = useMantineTheme();
  const [currentStage, setCurrentStage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [descriptions, setDescriptions] = useState<string[]>(['', '', '', '']);

  const updateDescription = (stageIndex: number, message: string) => {
    setDescriptions((prev) => prev.map((desc, index) => (index === stageIndex ? message : desc)));
  };

  const handlers: Record<string, HandlerFunction> = {
    startInitFunction({ type }) {
      if (currentStage === 0) updateDescription(0, `Running ${type} init functions`);
    },

    startInitFunction2: ({ type }) => {
      if (currentStage === 0) updateDescription(0, `Loading ${type}`);
    },

    startInitFunction3: ({ type }) => {
      if (currentStage === 0) updateDescription(0, type);
    },

    startInitFunctionOrder({ type, order, count }) {
      if (currentStage === 0) updateDescription(0, `[${type}] Running functions of order ${order} (${count} total)`);
    },

    initFunctionInvoking({ name, type, idx }) {
      if (currentStage === 0) updateDescription(0, `Invoking ${name} ${type} init (${idx})`);
    },

    endInitFunction({ type }) {
      if (currentStage === 0) updateDescription(0, `Done running ${type} init functions`);
    },

    loadProgress({ loadFraction }) {
      const progress = loadFraction * 100;
      setProgress(progress);

      const stageMessages = [
        [locale.init_text, locale.init_done],
        [locale.map_text, locale.map_done],
        [locale.session_text, locale.session_done, locale.done_text],
      ];

      const newStage = progress >= 95 ? 3 : progress >= 90 ? 2 : progress >= 75 ? 1 : 0;

      updateDescription(0, stageMessages[0][newStage ? 1 : 0]);
      if (newStage >= 1) updateDescription(1, stageMessages[1][newStage - 1]);
      if (newStage >= 2) updateDescription(2, stageMessages[2][newStage - 2]);
      if (newStage === 3) updateDescription(3, stageMessages[2][2]);

      setCurrentStage(newStage);
    },
  };

  useEffect(() => {
    const handleMessage = ({ data }: MessageEvent) => {
      handlers[data.eventName]?.(data);
    };

    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <Container
      h={'auto'}
      w={400}
      m={30}
      p={20}
      pos={'relative'}
      bg={theme.colors.dark[6]}
      style={{ borderRadius: 5, zIndex: 1 }}
    >
      <Flex justify="space-between" mb={25}>
        <Title order={2}>{locale.loading}</Title>
        {currentStage === 3 ? <IconCircleCheck size={36} color="green" /> : <Loader color="blue" />}
      </Flex>

      <Timeline m={10} active={currentStage} bulletSize={28} lineWidth={2}>
        <Timeline.Item bullet={<IconTools size={16} />}>
          <Flex justify={'space-between'}>
            <Text fw={500}>{locale.init_title}</Text>
            <Badge variant="light" color="teal">
              {progress >= 75
                ? '5/5'
                : progress >= 60
                  ? '4/5'
                  : progress >= 45
                    ? '3/5'
                    : progress >= 30
                      ? '2/5'
                      : progress >= 15
                        ? '1/5'
                        : '0/5'}
            </Badge>
          </Flex>
          <Text truncate="end" c="dimmed" size="sm">
            {descriptions[0] || locale.init_text}
          </Text>
        </Timeline.Item>

        <Timeline.Item bullet={<IconMap size={16} />}>
          <Text fw={500}>{locale.map_title}</Text>
          <Text truncate="end" c="dimmed" size="sm">
            {descriptions[1] || locale.map_text}
          </Text>
        </Timeline.Item>

        <Timeline.Item bullet={<IconRocket size={16} />} lineVariant="dashed">
          <Text fw={500}>{locale.session_title}</Text>
          <Text truncate="end" c="dimmed" size="sm">
            {descriptions[2] || locale.session_text}
          </Text>
        </Timeline.Item>

        <Timeline.Item bullet={<IconCheck size={16} />}>
          <Text fw={500}>{locale.done_title}</Text>
          <Text truncate="end" c="dimmed" size="sm">
            {descriptions[3] || locale.done_text}
          </Text>
        </Timeline.Item>
      </Timeline>
    </Container>
  );
}

export default LoadingProgress;
