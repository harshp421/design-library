import { IsMobile } from "$lib/hooks/is-mobile.svelte.js";
import { getContext, setContext } from "svelte";
import { PROPERTYBAR_KEYBOARD_SHORTCUT } from "./constants.js";

type Getter<T> = () => T;

export type Property_bar_StateProps = {
  /**
   * A getter function that returns the current open state of the Property_bar_.
   * We use a getter function here to support `bind:open` on the `Property_bar_.Provider`
   * component.
   */
  open: Getter<boolean>;

  /**
   * A function that sets the open state of the Property_bar_. To support `bind:open`, we need
   * a source of truth for changing the open state to ensure it will be synced throughout
   * the sub-components and any `bind:` references.
   */
  setOpen: (open: boolean) => void;
};

class Property_bar_State {
  readonly props: Property_bar_StateProps;
  open = $derived.by(() => this.props.open());
  openMobile = $state(false);
  setOpen: Property_bar_StateProps["setOpen"];
  #isMobile: IsMobile;
  state = $derived.by(() => (this.open ? "expanded" : "collapsed"));

  constructor(props: Property_bar_StateProps) {
    this.setOpen = props.setOpen;
    this.#isMobile = new IsMobile();
    this.props = props;
  }

  // Convenience getter for checking if the Property_bar_ is mobile
  // without this, we would need to use `Property_bar_.isMobile.current` everywhere
  get isMobile() {
    return this.#isMobile.current;
  }

  // Event handler to apply to the `<svelte:window>`
  handleShortcutKeydown = (e: KeyboardEvent) => {
    if (e.key === PROPERTYBAR_KEYBOARD_SHORTCUT && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      this.toggle();
    }
  };

  setOpenMobile = (value: boolean) => {
    this.openMobile = value;
  };

  toggle = () => {
    return this.#isMobile.current
      ? (this.openMobile = !this.openMobile)
      : this.setOpen(!this.open);
  };
}

const SYMBOL_KEY = "scn-Property_bar";

/**
 * Instantiates a new `Property_bar_State` instance and sets it in the context.
 *
 * @param props The constructor props for the `Property_bar_State` class.
 * @returns  The `Property_bar_State` instance.
 */
export function setProperty_bar(
  props: Property_bar_StateProps,
): Property_bar_State {
  return setContext(Symbol.for(SYMBOL_KEY), new Property_bar_State(props));
}

/**
 * Retrieves the `Property_bar_State` instance from the context. This is a class instance,
 * so you cannot destructure it.
 * @returns The `Property_bar_State` instance.
 */
export function useProperty_bar(): Property_bar_State {
  return getContext(Symbol.for(SYMBOL_KEY));
}
