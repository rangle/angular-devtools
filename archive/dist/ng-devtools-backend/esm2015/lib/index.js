import { subscribeToClientEvents } from './client-event-subscribers';
export const initializeMessageBus = (messageBus) => {
    subscribeToClientEvents(messageBus);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1kZXZ0b29scy1iYWNrZW5kL3NyYy9saWIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFckUsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxVQUE4QixFQUFFLEVBQUU7SUFDckUsdUJBQXVCLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDdEMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVzc2FnZUJ1cywgRXZlbnRzIH0gZnJvbSAncHJvdG9jb2wnO1xuaW1wb3J0IHsgc3Vic2NyaWJlVG9DbGllbnRFdmVudHMgfSBmcm9tICcuL2NsaWVudC1ldmVudC1zdWJzY3JpYmVycyc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsaXplTWVzc2FnZUJ1cyA9IChtZXNzYWdlQnVzOiBNZXNzYWdlQnVzPEV2ZW50cz4pID0+IHtcbiAgc3Vic2NyaWJlVG9DbGllbnRFdmVudHMobWVzc2FnZUJ1cyk7XG59O1xuIl19