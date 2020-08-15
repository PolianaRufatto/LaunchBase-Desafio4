module.exports = {
    age: function(timestamp) {
        const today = new Date();
        const birthDate = new Date(timestamp);

        let age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();

        if (month < 0 || month == 0 && today.getDate() <= birthDate.getDate()) {
            age = age - 1;
        }
        return age;
    },
    date: function(timestamp) {
        const date = new Date(timestamp);

        const year  = date.getUTCFullYear();
        const month = `0${date.getUTCMonth() + 1}`.slice(-2);
        const day = `0${date.getUTCDate()}`.slice(-2);

        return {
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}`
        }
    },
    graduation: function(graduation) {
        return (graduation == 'Medio') ? 'Ensino Médio Completo'
        : (graduation == 'Superior') ? 'Ensino Superior Completo'
        : (graduation == 'Mestrado') ? 'Mestrado'
        : 'Doutorado'
    },
    school: function(school) {
        return (school == '5º') ? '5º ano do ensino fundamental'
        : (school == '6º') ? '6º ano do ensino fundamental'
        : (school == '7º') ? '7º ano do ensino fundamental'
        : (school == '8º') ? '8º ano do ensino fundamental'
        : (school == '9º') ? '9º ano do ensino fundamental'
        : (school == '1º') ? '1º ano do ensino médio'
        : (school == '2º') ? '2º ano do ensino médio'
        : '3º ano do ensino médio'
    }
}