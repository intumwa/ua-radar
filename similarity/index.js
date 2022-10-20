const compare = require('./build/Release/compare');

const screenshots = async (source, target, callback) => {
  try {
    const t0 = performance.now();
    const result = compare.screenshots(source, target);
    const t1 = performance.now();

    const time = t1 - t0; // time measured in milliseconds

    callback(null, {'diffResults': result, 'computationTime': time});
  } catch (e) {
    callback(e, null);
  }
};

const scripts = async (source, target, callback) => {
  try {
    const t0 = performance.now();
    const result = compare.scripts(source, target);
    const t1 = performance.now();

    const time = t1 - t0; // time measured in milliseconds

    callback(null, {'diffResults': result, 'computationTime': time});
  } catch (e) {
    callback(e, null);
  }
};

const structure = async (source, target, callback) => {
  try {
    const t0 = performance.now();
    const result = compare.structure(source, target);
    const t1 = performance.now();

    const time = t1 - t0; // time measured in milliseconds

    callback(null, {'diffResults': result, 'computationTime': time});
  } catch (e) {
    callback(e, null);
  }
};

module.exports = {
  screenshots: screenshots,
  scripts: scripts,
  structure: structure,
};
