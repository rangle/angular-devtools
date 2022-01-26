import { subscribeToClientEvents } from './client-event-subscribers';
export const initializeMessageBus = (messageBus) => {
    subscribeToClientEvents(messageBus);
};
//# sourceMappingURL=index.js.map