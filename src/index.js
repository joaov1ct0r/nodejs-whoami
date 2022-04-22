import os from 'os';

let { arch, cpus, totalmem, hostname, networkInterfaces, type, userInfo } = os;

let sysArch = arch();

let sysCpus = cpus();

let sysCore = sysCpus.length;

let totalSysMemory = parseInt(totalmem() / 1024 / 1024);

let sysDeviceName = hostname();

let sysNetworkInterfaces = networkInterfaces();

let sysOs = type();

let sysUserInfo = userInfo();

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

console.log('========== INFO ==========');
console.log(info);
console.log('========== INFO ==========');
