export type TicketModel = {
  id: string;
  text: string;
};

export type ColumnModel = {
  id: string;
  title: string;
  tickets: TicketModel[];
};

export type ActionModel = {
  type: string;
  payload: any;
};
