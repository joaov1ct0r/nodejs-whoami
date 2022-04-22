import os from 'os';

let sysArch = os.arch();

let sysCpus = os.cpus();

let sysCore = sysCpus.length;

let totalSysMemory = parseInt(os.totalmem() / 1024 / 1024);

let sysCurrentUser = os.hostname();
