let registrations = [];

function saveReg() {
    localStorage.setItem('registrations', JSON.stringify(registrations));
}

const summaryApy = {
    add(registration) {
        registrations.push(registration);
        saveReg();
    }
};

export default summaryApy;