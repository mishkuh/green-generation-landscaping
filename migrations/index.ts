import * as migration_20260128_222229_initial from './20260128_222229_initial';

export const migrations = [
  {
    up: migration_20260128_222229_initial.up,
    down: migration_20260128_222229_initial.down,
    name: '20260128_222229_initial'
  },
];
