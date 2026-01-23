import * as migration_20260122_214229_initial from './20260122_214229_initial';

export const migrations = [
  {
    up: migration_20260122_214229_initial.up,
    down: migration_20260122_214229_initial.down,
    name: '20260122_214229_initial'
  },
];
