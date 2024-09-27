on('playerConnecting', (name: string, _: any, deferrals: any) => {
    const playerId = global.source.toString();

    deferrals.handover({
        name: name,
        id: source,
        steamid: GetPlayerIdentifierByType(playerId, 'steam')
    });
});