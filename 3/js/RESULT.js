function RESULT() {
    if (TOTAL_POINTS <= 70) {
        RESULT = POINTS_FOR_CORRECT_ANSWER * POINTS_FOR_THE_CORRECT_ANSWER;
        console.log('экзамен не сдан');
        return (console.log);
    } else {
        console.log('экзамен сдан');
        return (console.log);
    }
}
