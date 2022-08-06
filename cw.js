let history = [];
function undoRedo(object) {
    let canRedo = false;
    let lastUndoOperation = null;
    return {
        set: function (key, value) {
            history.push([key, object[key]])
            object[key] = value;
            canRedo = false;
        },
        get: function (key) {
            canRedo = false; //! may be we don't need it here
            return object[key];
        },
        del: function (key) {
            history.push([key, object[key]])
            delete object[key]
            canRedo = false;
        },
        undo: function () {
            try {
                if (!history.length) {
                    throw (new Error('no operation to undo'))
                } else {
                    let lastCall = history.pop();
                    lastUndoOperation = lastCall;
                    object[lastCall[0]] = lastCall[1];
                    canRedo = true;
                }
            } catch (err) {
                console.log(err.message)
            }

        },
        redo: function () {
            try {
                if (canRedo) {
                    if (!history.length) {
                        throw (new Error('no operation to redo'));
                    } else {
                        // this.undo();
                        object[lastUndoOperation[0]] = lastUndoOperation[1];
                    }
                }
            } catch (err) {
                console.log(err.message)
            } 

        }
    };
}


let obj = {
    x: 1,
    y: 2
};
let unRe = undoRedo(obj);


unRe.set('y', 10);
console.log(obj)
console.log(history)
unRe.undo();
console.log(obj)
console.log(history)
unRe.redo();
console.log(obj)
console.log(history)
// unRe.undo();
// console.log(obj)
 // unRe.redo();
