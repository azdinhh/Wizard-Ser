let handler = m => m

handler.before = function (m) {
    let user = global.db.data.users[m.sender]
    let role = (user.level <= 3) ? 'محارب 5'
        : ((user.level >= 3) && (user.level <= 6)) ? 'محارب 4'
            : ((user.level >= 6) && (user.level <= 9)) ? 'محارب 3'
                : ((user.level >= 9) && (user.level <= 12)) ? 'محارب 2'
                    : ((user.level >= 12) && (user.level <= 15)) ? 'محارب 1'
                        : ((user.level >= 15) && (user.level <= 18)) ? 'نخبة 5'
                            : ((user.level >= 18) && (user.level <= 21)) ? 'نخبة 4'
                                : ((user.level >= 21) && (user.level <= 24)) ? 'نخبة 3'
                                    : ((user.level >= 24) && (user.level <= 27)) ? 'نخبة 2'
                                        : ((user.level >= 27) && (user.level <= 30)) ? 'نخبة 1'
                                            : ((user.level >= 30) && (user.level <= 33)) ? 'رئيس 5'
                                                : ((user.level >= 33) && (user.level <= 36)) ? 'رئيس 4'
                                                    : ((user.level >= 36) && (user.level <= 39)) ? 'رئيس 3'
                                                        : ((user.level >= 39) && (user.level <= 42)) ? 'رئيس 2'
                                                            : ((user.level >= 42) && (user.level <= 45)) ? 'رئيس 1'
                                                                : ((user.level >= 45) && (user.level <= 48)) ? ' جراند ماستر 5'
                                                                    : ((user.level >= 48) && (user.level <= 51)) ? 'جراند ماستر 4'
                                                                        : ((user.level >= 51) && (user.level <= 54)) ? 'جراند ماستر 3'
                                                                            : ((user.level >= 54) && (user.level <= 57)) ? 'جراند ماستر 2'
                                                                                : ((user.level >= 57) && (user.level <= 60)) ? 'جراند ماستر 1'
                                                                                    : ((user.level >= 60) && (user.level <= 63)) ? 'الملحم 5'
                                                                                        : ((user.level >= 63) && (user.level <= 66)) ? 'الملحم 4'
                                                                                            : ((user.level >= 66) && (user.level <= 69)) ? 'الملحم 3'
                                                                                                : ((user.level >= 69) && (user.level <= 71)) ? 'الملحم 2'
                                                                                                    : ((user.level >= 71) && (user.level <= 74)) ? 'الملحم 1'
                                                                                                        : ((user.level >= 74) && (user.level <= 77)) ? 'أسطورة 5'
                                                                                                            : ((user.level >= 77) && (user.level <= 80)) ? 'أسطورة 4'
                                                                                                                : ((user.level >= 80) && (user.level <= 83)) ? 'أسطورة 3'
                                                                                                                    : ((user.level >= 83) && (user.level <= 86)) ? 'أسطورة 2'
                                                                                                                        : ((user.level >= 86) && (user.level <= 89)) ? 'أسطورة 1'
                                                                                                                            : ((user.level >= 89) && (user.level <= 91)) ? 'أسطوري 5'
                                                                                                                                : ((user.level >= 91) && (user.level <= 94)) ? 'أسطوري 4'
                                                                                                                                    : ((user.level >= 94) && (user.level <= 97)) ? 'أسطوري 3'
                                                                                                                                        : ((user.level >= 97) && (user.level <= 100)) ? 'أسطوري 2'
                                                                                                                                            : 'أسطوري 1'
    user.role = role
    return true
}

module.exports = handler
