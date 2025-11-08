function increment(node){
    let current= Number (node.textContent);
    node.textContent= isNaN (current) ? 1 : current +1;
}


const main = document.createElement("main");
  main.innerHTML = `
        <p id="counter" data-testid="counter">0</p>
        <button id="increment">Increment</button>
    `;
  body.appendChild(main);



  const counter = main.querySelector("#counter");
  main.querySelector("#increment").addEventListener("click", () => increment(counter));
  main.querySelector("#decrement").addEventListener("click", () => decrement(counter));

  return main;
