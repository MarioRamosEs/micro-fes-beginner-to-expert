import { createEffect, createSignal, Show } from "solid-js";

import { jwt, addToCart } from "cart/cart";

export default ({ id }) => {
  const [loggedIn, setLoggedIn] = createSignal(false);

  createEffect(() => {
    return jwt.subscribe((jwt) => {
      setLoggedIn(!!jwt);
    });
  });

  return (
    <Show when={loggedIn()}>
      <button
        onClick={() => addToCart(id)}
        class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded"
      >
        Add To Cart
      </button>
    </Show>
  );
};
