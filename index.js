// Code your solution here
function findMatching(drivers, arg) {
  return drivers.filter(function (d) {
    return d.toLowerCase() === arg.toLowerCase();
  });
}

function fuzzyMatch(drivers, arg) {
  return drivers.filter(function (d) {
    let match = false;

    for (let i = 0; arg.length - 1; i++) {
      if (d[i] === arg[i]) {
        match = true;
      } else {
        match = false;
      }

      return match;
    }
  });
}

function matchName(drivers, arg) {
  return drivers.filter(function (d) {
    return d.name === arg;
  })
}

