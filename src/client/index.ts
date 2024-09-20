import Config from '../common/config';
let firstSpawn = false;

function shutdownHandler(): void {
  if (firstSpawn) return;
  
  firstSpawn = true;

  SendLoadingScreenMessage(JSON.stringify({ fullyLoaded: true }));
  ShutdownLoadingScreenNui();
}

if (!(Config.DisableManualShutdown === 1)) {
  AddEventHandler('playerSpawned', shutdownHandler);
}

export function shutdown(): void {
  shutdownHandler();
}