const servers = [
    { inviteCode: '283JBXufXm', title: 'PistonProjects Support', introText: 'Mi servidor donde publico mis proyectos:' },
    { inviteCode: 'eKeeZPq6SJ', title: 'PistonCubeBOT Support', introText: 'Soporte para mi bot de Minecraft:' },
    { inviteCode: 'qEPeKqpXzu', title: '2b2t Argentina Server', introText: 'Discord oficial de 2b2t Argentina:' },
    { inviteCode: 'FxDZQTMxPh', title: 'MineArgento Server', introText: 'Discordia oficial de MineArgento:' },
    { inviteCode: 'xqQCHk5JwU', title: 'ZuruBOT', introText: 'Únete al Discord de soporte de ZuruBOT:' },
    { inviteCode: '5sgp2TW5mp', title: 'HidenCloud Server', introText: 'Únete al Discord de soporte de HidenCloud:' },
    { inviteCode: 'MaXTXuXA6s', title: 'ResistenciaBananera', introText: 'Únete al Discord de ResistenciaBananera:' },
    { inviteCode: 'nbYFdHXjFw', title: 'CubeStone Studios', introText: 'Únete al Discord oficial de CubeStone Studios:' },
    { inviteCode: '3un38K8ZJd', title: 'GamersLatinos', introText: 'Únete al Discord oficial de GamerLatinos:' },
    { inviteCode: 'T68FzkYDAg', title: 'Astros Ads', introText: 'Únete a mi servidor de publicidad:' }
];

servers.forEach(server => {
    const container = document.createElement('div');
    container.id = `discordInviteBox-${server.inviteCode}`;
    container.classList.add('discordInviteBox');
    document.getElementById('discordInvitesContainer').appendChild(container);

    discordInvite.init({
        inviteCode: server.inviteCode,
        title: server.title,
        introText: server.introText,
        joinText: 'Unirse',
        joinedText: 'Unido',
        targetElement: `#discordInviteBox-${server.inviteCode}`
    });
});

// Single render call after all invites are initialized
discordInvite.render();