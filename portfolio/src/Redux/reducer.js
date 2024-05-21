const initialState = {isDark: 'isDark'};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "toggle" : {
            const isDark = action;
            if(isDark == Bright) {

            }
            else if(isDark == off) {
                
            }
        }

        default : {
            return state;
        }
    }
}