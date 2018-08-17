import { OrderItem } from './order-item';

export class Order {
    constructor(public address: string,
        public number: number,
        public optionalAddress: string,
        public paymentOption: string,
        public orderItems: OrderItem[] = []) { }
}
