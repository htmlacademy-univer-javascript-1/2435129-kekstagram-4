const check = function(beginningWork, endingWork, beginningMeet, timeOfMeet) {
    splitTimeBegWork = beginningWork.split(':');
    splitTimeEndWork = endingWork.split(':');
    splitTimeBegMeet = beginningMeet.split(':');

    //проверка, что встреча не назначена до начала рабочего дня
    if (splitTimeBegWork[0] > splitTimeBegMeet[0]) {
        return false;
    }

    let limitTime = splitTimeEndWork[0] * 60 + splitTimeEndWork[1] - (splitTimeBegMeet[0] * 60 + splitTimeBegMeet[1]);

    if (limitTime < timeOfMeet) {
        return false;
    }

    return true;
};