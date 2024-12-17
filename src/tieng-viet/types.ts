import {PhatAmDacBiet, phatHienNguyenAm} from "./constants.ts";

export class Chu {
    public nguyenAm: string[] = []
    public nguyenAmKhongDau: string[] = []
    public phuAmTruoc: string = ''
    public phuAmSau: string = ''
    public dau: string = ''

    constructor(public raw: string) {
        raw.split('').forEach((char) => {
            const [nguyenAm, dau] = phatHienNguyenAm(char);
            if (nguyenAm && this.phuAmTruoc != 'q') {
                this.nguyenAm.push(char);
                this.nguyenAmKhongDau.push(nguyenAm);
                if (dau) this.dau = dau
            } else {
                if (this.nguyenAm.length == 0) {
                    this.phuAmTruoc += char;
                } else {
                    this.phuAmSau += char;
                }
            }
        })
    }

    public danhVan = () => {
        const result = [
            ...this.nguyenAmKhongDau,
        ]
        let last = this.nguyenAmKhongDau.join('');

        if (this.phuAmSau) {
            result.push(this.phuAmSau)
            last += this.phuAmSau
        }

        if (this.nguyenAmKhongDau.length > 1 || this.phuAmSau) {
            result.push(last)
        }

        if (this.phuAmTruoc) {
            result.push(this.phuAmTruoc)
            result.push(last)
            last = this.phuAmTruoc + last
            result.push(last)
        }
        if (this.dau) {
            result.push(this.dau)
            result.push(this.raw)
        }
        return result.map(i => PhatAmDacBiet[i.toLowerCase()] || i) as string[];
    }
}

export class Tu {
    public chu: Array<Chu>

    constructor(public raw: string) {
        this.chu = Array.from(raw.split(' ').map(c => new Chu(c)))
    }
}
