// Interface Extends

export interface Developer {
  id: number;
  name: string;
  division: string;
}

export interface Manager extends Developer {
  numberOfDeveloper: number;
}
