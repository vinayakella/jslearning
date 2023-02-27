import { createClient } from 'redis';
const redisparams = {
    socket: {
        host: '10.1.4.52',
        port: 6379
    }
}
const client = createClient(redisparams);
client.on('error', err => console.log('Redis Client Error', err));
await client.connect();
const value = await client.hGetAll('accesstoken#vinayakella');
await client.disconnect();