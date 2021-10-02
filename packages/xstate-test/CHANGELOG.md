# @xstate/test

## 1.0.0-next.0

### Minor Changes

- [#2703](https://github.com/statelyai/xstate/pull/2703) [`d928cbb1f`](https://github.com/statelyai/xstate/commit/d928cbb1fe93b0d34a399ab65c8b2b1eeb3ca83d) Thanks [@Silverwolf90](https://github.com/Silverwolf90)! - Add getPlanFromEvents to generate a test plan with a single path from an explicitly defined sequence of events.

### Patch Changes

- Updated dependencies [[`7f3b84816`](https://github.com/statelyai/xstate/commit/7f3b84816564d951b6b29afdd7075256f1f59501), [`969a2f4fc`](https://github.com/statelyai/xstate/commit/969a2f4fc0bc9147b9a52da25306e5c13b97f159), [`1ff4f7976`](https://github.com/statelyai/xstate/commit/1ff4f797653bdf58eb2c3a7e27aeae24cf4dd2b8), [`c0a6dcafa`](https://github.com/statelyai/xstate/commit/c0a6dcafa1a11a5ff1660b57e0728675f155c292), [`172d6a7e1`](https://github.com/statelyai/xstate/commit/172d6a7e1e4ab0fa73485f76c52675be8a1f3362), [`31bc73e05`](https://github.com/statelyai/xstate/commit/31bc73e05692f29301f5bb5cb4b87b90773e0ef2), [`e09efc720`](https://github.com/statelyai/xstate/commit/e09efc720f05246b692d0fdf17cf5d8ac0344ee6), [`145539c4c`](https://github.com/statelyai/xstate/commit/145539c4cfe1bde5aac247792622428e44342dd6), [`3de36bb24`](https://github.com/statelyai/xstate/commit/3de36bb24e8f59f54d571bf587407b1b6a9856e0), [`9e10660ec`](https://github.com/statelyai/xstate/commit/9e10660ec2f1e89cbb09a1094edb4f6b8a273a99), [`6a0ff73bf`](https://github.com/statelyai/xstate/commit/6a0ff73bf8817dc401ef9b45c71dd7875dbc9f20), [`8fcbddd51`](https://github.com/statelyai/xstate/commit/8fcbddd51d66716ab1d326d934566a7664a4e175), [`97b05690c`](https://github.com/statelyai/xstate/commit/97b05690cd8b30824eb176c813a145d3ef0d2a78), [`6043a1c28`](https://github.com/statelyai/xstate/commit/6043a1c28d21ff8cbabc420a6817a02a1a54fcc8), [`0e24ea6d6`](https://github.com/statelyai/xstate/commit/0e24ea6d62a5c1a8b7e365f2252dc930d94997c4), [`04e89f90f`](https://github.com/statelyai/xstate/commit/04e89f90f97fe25a45b5908c45f25a513f0fd70f), [`8fcbddd51`](https://github.com/statelyai/xstate/commit/8fcbddd51d66716ab1d326d934566a7664a4e175), [`b200e0e0b`](https://github.com/statelyai/xstate/commit/b200e0e0b7123797086080b75abdfcf2fce45253), [`0038c7b1e`](https://github.com/statelyai/xstate/commit/0038c7b1e2050fe7262849aab8fdff4a7ce7cf92), [`b24e47b9e`](https://github.com/statelyai/xstate/commit/b24e47b9e7a59a5b0527d4386cea3af16c84ca7a), [`390eaaa52`](https://github.com/statelyai/xstate/commit/390eaaa523cb0dd243e39c6300e671606c1e45fc), [`0c6cfee9a`](https://github.com/statelyai/xstate/commit/0c6cfee9a6d603aa1756e3a6d0f76d4da1486caf), [`e09efc720`](https://github.com/statelyai/xstate/commit/e09efc720f05246b692d0fdf17cf5d8ac0344ee6), [`025a2d6a2`](https://github.com/statelyai/xstate/commit/025a2d6a295359a746bee6ffc2953ccc51a6aaad), [`e09efc720`](https://github.com/statelyai/xstate/commit/e09efc720f05246b692d0fdf17cf5d8ac0344ee6), [`5d16a7365`](https://github.com/statelyai/xstate/commit/5d16a73651e97dd0228c5215cb2452a4d9951118), [`8fcbddd51`](https://github.com/statelyai/xstate/commit/8fcbddd51d66716ab1d326d934566a7664a4e175), [`53a594e9a`](https://github.com/statelyai/xstate/commit/53a594e9a1b49ccb1121048a5784676f83950024), [`31a0d890f`](https://github.com/statelyai/xstate/commit/31a0d890f55d8f0b06772c9fd510b18302b76ebb), [`a72806035`](https://github.com/statelyai/xstate/commit/a728060353c9cb9bdb0cd37aacf793498a8750c8)]:
  - xstate@5.0.0-next.0
  - @xstate/graph@2.0.0-next.0

## 0.4.2

### Patch Changes

- [`4105d923`](https://github.com/davidkpiano/xstate/commit/4105d923dfddd9ac3ffad33295edea38b0215c89) [#1930](https://github.com/davidkpiano/xstate/pull/1930) Thanks [@jimwheaton](https://github.com/jimwheaton)! - Fixes issue where 'final' state node names were not shown in test plan description

## 0.4.1

### Patch Changes

- [`ca8841a5`](https://github.com/davidkpiano/xstate/commit/ca8841a5da6560f2956b0dfa08eb05252ad1eca5) [#1273](https://github.com/davidkpiano/xstate/pull/1273) Thanks [@rpradal](https://github.com/rpradal)! - `TestPath` interface got exported to be publicly available.

## 0.4.0

### Minor Changes

- [`137b0cd`](https://github.com/davidkpiano/xstate/commit/137b0cdf71054d67f0c5ba2c11021436ec3739ed) [#1033](https://github.com/davidkpiano/xstate/pull/1033) Thanks [@ZempTime](https://github.com/ZempTime)! - Added ESM build of the package which can be loaded through modern web bundlers (instead of default CommonJS files).

### Patch Changes

- Updated dependencies [[`f3ff150`](https://github.com/davidkpiano/xstate/commit/f3ff150f7c50f402704d25cdc053b76836e447e3), [`6c47b66`](https://github.com/davidkpiano/xstate/commit/6c47b66c3289ff161dc96d9b246873f55c9e18f2), [`1a129f0`](https://github.com/davidkpiano/xstate/commit/1a129f0f35995981c160d756a570df76396bfdbd), [`e88aa18`](https://github.com/davidkpiano/xstate/commit/e88aa18431629e1061b74dfd4a961b910e274e0b), [`88b17b2`](https://github.com/davidkpiano/xstate/commit/88b17b2476ff9a0fbe810df9d00db32c2241cd6e), [`137b0cd`](https://github.com/davidkpiano/xstate/commit/137b0cdf71054d67f0c5ba2c11021436ec3739ed), [`d5f622f`](https://github.com/davidkpiano/xstate/commit/d5f622f68f4065a2615b5a4a1caae6b508b4840e)]:
  - xstate@4.9.0
  - @xstate/graph@1.1.0

## 0.3.0

### Minor Changes

- 1405754: Options for `testModel.getCoverage()` and `testModel.testCoverage()` can now be provided to filter which state nodes should be covered by the tests.

### Patch Changes

- 0741d7e: Added "types" to package.json
- Updated dependencies [dae8818]
  - xstate@4.7.6

## 0.2.1

### Patch Changes

- fc2a78c: Fix description text if no meta description is given
- Updated dependencies [6b3d767]
  - xstate@4.7.5
