export type Shoe =  {
    id: string,
    name: string,
    picture:string[],
    isNew?: boolean,
    discount?: number,
    size: string,
    color: string,
    gender: "men" | "women",
    price: number,
    description: string
  };