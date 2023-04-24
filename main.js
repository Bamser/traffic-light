const btnNode = document.querySelector('.button');
const trafficLightNode = document.querySelector('.js-traffic--light');

initLight(trafficLightNode);

btnNode.addEventListener('click', function () {
  switchLights(trafficLightNode);
});
