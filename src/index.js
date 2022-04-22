import os from 'os';

let sysArch = os.arch();

let sysCpus = os.cpus();

let sysCore = sysCpus.length;

let totalSysMemory = parseInt(os.totalmem() / 1024 / 1024);

let sysDeviceName = os.hostname();

let sysNetworkInterfaces = os.networkInterfaces();

let sysOs = os.type();

let sysUserInfo = os.userInfo();

let info = {
    os: sysOs,
    architecture: sysArch,
    cpus: sysCpus,
    cores: sysCore,
    memory: totalSysMemory,
    user: sysUserInfo,
    device: sysDeviceName,
    network: sysNetworkInterfaces
};

console.log(info);
