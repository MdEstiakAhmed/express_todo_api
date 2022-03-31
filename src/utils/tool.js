// random tools

const isValidDate = (dateValue) => {
    try {
        !isNaN(dateValue) && (dateValue = Number(dateValue)) 
        if(new Date(dateValue) == 'Invalid Date'){
            return false;
        }
        return true;
    } 
    catch (error) {
        return false;    
    }
}

module.exports = isValidDate