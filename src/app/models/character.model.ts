export class Character {
    url: string;
    name: string;
    gender: string;
    culture: string;
    born: string;
    died: string;
    title: Array<string>;
    aliase: Array<string>; // bí danh
    father: string;
    mother: string;
    spouse: string; // vợ/ chồng
    allegiance: Array<string>; // trung thành => chắc là trung thành với gia tộc nào ?? 
    book: Array<string>;
    povBooks: Array<string>; // sách điện tử
    tvSeries: Array<string>;
    playBy: Array<string>;
}