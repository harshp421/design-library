interface Window {
  originalConsoleLog: typeof console.log;
  emptyConsole: { log: (...args: any[]) => void };
}

if (!window.originalConsoleLog) {
  window.originalConsoleLog = console.log;
}

if (!window.emptyConsole) {
  window.emptyConsole = {
    log: () => {},
  };
}

function logStatus(enable: boolean) {
  if (enable) {
    console.log = window.originalConsoleLog;
  } else {
    console.log = window.emptyConsole.log;
  }
}

window.logStatus = logStatus;
