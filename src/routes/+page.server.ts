import type { PageLoad } from './$types';
import { ARENA_TOKEN, ARENA_CHANNEL } from '$env/static/private';
import { ArenaClient, type ArenaChannelApi, type GetChannelContentsApiResponse } from 'arena-ts';

export const load: PageLoad = async () => {
  const client = new ArenaClient({ token: ARENA_TOKEN });

  const channel: ArenaChannelApi = await client.channel(ARENA_CHANNEL);

  const { contents: blocks }: GetChannelContentsApiResponse = await channel.contents({
    direction: 'desc'
  });

  const textBlocks = blocks.filter((block) => block.class == 'Text');

  return {
    blocks: textBlocks
  };
};
