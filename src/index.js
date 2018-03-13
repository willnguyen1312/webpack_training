async function getComponent() {
  var element = document.createElement("div");
  const _ = await import(/* webpackChunkName: "loda" */ "lodash");

  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

getComponent().then(component => {
  document.body.appendChild(component);
});
