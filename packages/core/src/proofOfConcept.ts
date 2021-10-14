import { MachineConfig } from '.';

//
// Example: we want to model an onboarding flow where each state corresponds to
// a screen in the app. We want to enforce that each transition can only go to
// a state that actually exists, so that we can ensure that if we rename a screen,
// we don't accidentally break our onboarding flow.
//

type OnboardingEvent = { type: 'NEXT' } | { type: 'PREVIOUS' };
type OnboardingState = 'welcome' | 'enterName' | 'done';

const machine: MachineConfig<
  undefined,
  OwnStatesOnly<OnboardingState>,
  OnboardingEvent
> = {
  initial: 'welcome',
  states: {
    welcome: {
      on: { NEXT: 'enterName' }
    },
    enterName: {
      // @ts-expect-error This transition is trying to go to a state that doesn't exist!
      on: { NEXT: 'some state that definitely doesnt exist' }
    },
    done: { type: 'final' }
  }
};

// This type enforces that each transition in `on` goes to one of the states in TState.
type OwnStatesOnly<TState extends string> = {
  states: Record<TState, OwnStatesOnly<TState>>;
};
