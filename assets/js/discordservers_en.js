const servers = [
    { inviteCode: '283JBXufXm', title: 'PistonProjects Support', introText: 'My server where I publish my projects:' },
    { inviteCode: 'eKeeZPq6SJ', title: 'PistonCubeBOT Support', introText: 'Support for my Minecraft bot:' },
    { inviteCode: 'XZD5W4Zadc', title: '2b2t Argentina Server', introText: 'Official Discord of 2b2t Argentina:' },
    { inviteCode: 'wfqSRxeStV', title: '2b2t Guild Public', introText: 'Guild of 2b2t with resources, guides, and community.' },
    { inviteCode: 'xqQCHk5JwU', title: 'ZuruBOT', introText: 'Join the ZuruBOT Support Discord:' },
    { inviteCode: 'MaXTXuXA6s', title: 'ResistenciaBananera', introText: 'Join the ResistenciaBananera Discord:' },
    { inviteCode: 'nbYFdHXjFw', title: 'CubeStone Studios', introText: 'Join the official CubeStone Studios Discord:' },
    { inviteCode: 'T68FzkYDAg', title: 'Astros Ads', introText: 'Join my advertising server:' }
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
        targetElement: `#discordInviteBox-${server.inviteCode}`
    });
});

// Single render call after all invites are initialized
discordInvite.render();
