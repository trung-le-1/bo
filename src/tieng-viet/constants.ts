export const NguyenAmVaDau = Object.create({
    "a": ["a", "à", "á", "ả", "ã", "ạ"],
    "ă": ["ă", "ằ", "ắ", "ẳ", "ẵ", "ặ"],
    "â": ["â", "ầ", "ấ", "ẩ", "ẫ", "ậ"],
    "e": ["e", "è", "é", "ẻ", "ẽ", "ẹ"],
    "ê": ["ê", "ề", "ế", "ể", "ễ", "ệ"],
    "i": ["i", "ì", "í", "ỉ", "ĩ", "ị"],
    "o": ["o", "ò", "ó", "ỏ", "õ", "ọ"],
    "ô": ["ô", "ồ", "ố", "ổ", "ỗ", "ộ"],
    "ơ": ["ơ", "ờ", "ớ", "ở", "ỡ", "ợ"],
    "u": ["u", "ù", "ú", "ủ", "ũ", "ụ"],
    "ư": ["ư", "ừ", "ứ", "ử", "ữ", "ự"],
    "y": ["y", "ỳ", "ý", "ỷ", "ỹ", "ỵ"]
})

export const DauIndex = ['', 'huyền', 'sắc', 'hỏi', 'ngã', 'nặng']

export const phatHienNguyenAm = (char: string) => {
    for (const am in NguyenAmVaDau) {
        const index = NguyenAmVaDau[am].indexOf(char)
        if (index >= 0) {
            return [am, DauIndex[index]]
        }
    }
    return ['', '']
}

export const PhatAmDacBiet = Object.create({
    "h": "hờ",
    "tr": "trờ",
    "ch": "chờ",
    "ph": "phờ",
    "ng": "ngờ",
    "qu": "quờ",
    "im": "ym",
})