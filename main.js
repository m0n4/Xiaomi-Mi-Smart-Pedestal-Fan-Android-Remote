const miio = require("miio-api");
const back = require('androidjs').back;

async function ask(command, setting) {
  let device;
  try {
    device = await miio.device({
      address: "192.168.0.33",
      token: "33a9331433c553395533c33af0a33033",
    });

    const info = await device.call(command, setting);
    const value = await info;
    return value;

  } catch (err) {
    console.error("ERROR: " + err);
  } finally {
    if (device) {
      device.destroy();
    }
  }
}

const noRefresh = ["m_roll", "s_speed", "s_t_off"];

const doSomething = async (command, setting) => {
  const res = await ask(command, setting);
  if (noRefresh.includes(command)) {
    back.send('get-data-result', "noRefresh");
  } else {
    back.send('get-data-result', res);
  }
};

back.on('get-data', function (command, setting) {
  doSomething(command, setting);
})


