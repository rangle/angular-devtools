import { MessageBus, Events } from 'protocol';
import { subscribeToClientEvents } from './client-event-subscribers';

export const initializeMessageBus = (messageBus: MessageBus<Events>) => {
  subscribeToClientEvents(messageBus);
};
