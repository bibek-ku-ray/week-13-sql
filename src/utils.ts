import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgres://vldjlqye:Bz0o2AC3HlYBpIPs6qFdVXj2Lg-dIDaM@satao.db.elephantsql.com/vldjlqye");
    await client.connect();
    return client;
}