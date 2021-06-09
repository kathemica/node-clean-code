export interface IAdress {
  email: string;
  name: string
}

export interface IMessage {
  email: string;
  name: string
}

export interface AddEmailAccount {
  addMail: (message: string) => Promise<void>;
}
