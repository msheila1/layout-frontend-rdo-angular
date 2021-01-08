import * as _ from 'lodash';

export class AbstractModel<ID> {
    id: ID;

    // constructor(initObj?: any) {
    //     console.log('Aki: super construct');
    //     console.log(Object.entries(this));
    //     Object.keys(this).forEach(key => {
    //         //initObj[key] .addControl(key, copyFormControl(control.controls[key]));
    //         console.log(key);
    //     });
    //     //this = _.clone(init);
    // }
}

export function copy(objFrom: any, objTo: any) {
    console.log('Aki: super construct');
    Object.keys(objFrom).forEach(key => {
        console.log(key);
        objTo[key] = objFrom[key];
    });
}