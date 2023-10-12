module.exports = {
  apps : [{
    script: 'index.js',
    watch: '.'
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy : {
    production : {
      user : 'morgan',
      host : 'server.local',
      ref  : 'origin/main',
      repo : 'https://github.com/modavi/testserver.git',
      path : '/Users/morgan/Server',
      'pre-deploy-local': '',
      'post-deploy' : '/usr/local/bin/npm install && /usr/local/bin/pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
