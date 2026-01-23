import * as migration_20260122_214229_initial from './20260122_214229_initial';
import * as migration_20260123_185246_add_media_prefix from './20260123_185246_add_media_prefix';

export const migrations = [
  {
    up: migration_20260122_214229_initial.up,
    down: migration_20260122_214229_initial.down,
    name: '20260122_214229_initial',
  },
  {
    up: migration_20260123_185246_add_media_prefix.up,
    down: migration_20260123_185246_add_media_prefix.down,
    name: '20260123_185246_add_media_prefix'
  },
];
