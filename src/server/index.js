import { Server } from 'http';

import app from './app';

const server = new Server(app);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log('infometer-ssr server listening on port ' +
    server.address().port + '...');
});
