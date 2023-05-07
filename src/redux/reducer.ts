

import { Action } from "./action";
import { ActionType } from "./action-type";
import { Appstate } from "./app-state";


export function reduce(oldAppState: Appstate = new Appstate(), action: Action): Appstate {
    const newAppState = { ...oldAppState };


    switch (action.type) {
       
        case ActionType.LogInData:
            newAppState.logInData = action.payload.logInData;
            break;
    }

    return newAppState;
}