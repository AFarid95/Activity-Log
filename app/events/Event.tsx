export default class Event {
    id!: string;
    actorId!: string;
    actorName!: string;
    actorEmail!: string;
    group!: string;
    actionId!: string;
    actionName!: string;
    targetId!: string;
    targetName!: string;
    location!: string;
    occurredAt!: Date;
    redirect!: string;
    description!: string;
    xRequestId!: string;
}