on('playerConnecting', (name: string, deferrals: any) => {
    const playerId = global.source.toString();

    deferrals.handover({
        name: name,
        id: source,
        steamid: GetPlayerIdentifierByType(playerId, 'steam')
    });
});