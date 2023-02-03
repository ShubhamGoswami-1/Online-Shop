function getSessionData(req) {
    const sessionData = req.session.flashData;

    req.flashData = null;

    return sessionData;
}

function flashDataToSession(req, data, action) {
    req.session.flashData = data;
    req.session.save(action);
}

module.exports = {
    getSessionData: getSessionData,
    flashDataToSession: flashDataToSession
}; 