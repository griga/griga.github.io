/**
 * Created by griga on 6/10/16.
 */
"use strict";
exports.SELECT_MENU_ITEM = 'SELECT_MENU_ITEM';
function navigation(state, action) {
    switch (action.type) {
        case exports.SELECT_MENU_ITEM: {
            console.log('smi', action);
            return state;
        }
    }
}
exports.navigation = navigation;
//# sourceMappingURL=navigation.js.map