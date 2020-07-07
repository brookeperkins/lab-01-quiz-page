function translateToAYes(input) {
    input = charAt(0).toLowerCase();
    if (input === 'y') {
        return true;
    } else { 
        return false;
    }
}

export default translateToAYes;