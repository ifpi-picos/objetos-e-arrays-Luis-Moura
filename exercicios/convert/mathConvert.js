import { convert } from 'convert'

const diasParaMinutos = (dias) => {
    return convert(dias, 'days').to('minutes')
};

const gigabytesBytes = (gigabytes) => {
    return convert(gigabytes, 'gigabytes').to('bytes')    
}

console.log(diasParaMinutos(1));

console.log(gigabytesBytes(20))