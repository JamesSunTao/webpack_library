import lodash from 'lodash';
export function join(a,b) {
    return lodash.join([a,b],"*");
}