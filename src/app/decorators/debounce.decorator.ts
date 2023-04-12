import debounce from 'lodash.debounce';

export default function (milliseconds: number = 0, options = {}) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = debounce(originalMethod, milliseconds, options);
        return descriptor;
    }
}