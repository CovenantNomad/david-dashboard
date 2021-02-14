export const convertGrade = (value) => {
    switch(value) {
        case 'G1':
            return '중1'
        case 'G2':
            return '중2'
        case 'G3':
            return '중3'
        case 'G4':
            return '고1'
        case 'G5':
            return '고2'
        case 'G6':
            return '고3'
        default:
            return 'UNKNOWN';
    }
}

export const convertSex = (value) => {
    switch (value) {
        case 'male':
            return '남';
        case 'female':
            return '여';
        default:
            return 'INCORRECT';
    }
}
