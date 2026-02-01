import * as migration_20260201_000023_initial from './20260201_000023_initial';

export const migrations = [
  {
    up: migration_20260201_000023_initial.up,
    down: migration_20260201_000023_initial.down,
    name: '20260201_000023_initial'
  },
];
