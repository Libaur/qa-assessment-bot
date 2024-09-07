interface Option {
  id: number;
  text: string;
  isCorrect: boolean;
}

interface Question {
  id: number;
  text: string;
  options: Option[];
}

export interface Questions {
  base: Question[];
  process: Question[];
  technical: Question[];
  expertise: Question[];
}
