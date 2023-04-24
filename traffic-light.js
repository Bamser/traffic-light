const lights = {
    red: 'red',
    yellow: 'yellow',
    green: 'green'
};

const clasessByLight = {
    [lights.red]: 'traffic-light--red',
    [lights.yellow]: 'traffic-light--yellow',
    [lights.green]:  'traffic-light--green'
};

const nextLightByLight = {
    [lights.red]: lights.green,
    [lights.green]: lights.yellow,
    [lights.yellow]: lights.red,
};

let currentLight = lights.red;

function switchLights(node) {
const currentClass = clasessByLight[currentLight];
const nextLight = nextLightByLight[currentLight];
const nextClass = clasessByLight[nextLight]

    currentLight = nextLightByLight[currentLight];

    node.classList.replace(currentClass, nextClass)
}

function initLight(node) {
    node.classList.add(clasessByLight[currentLight]);
}