import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { NewuserComponent} from './newuser/newuser.component';


@Injectable()
export class PrevenUnsavedChanges  implements CanDeactivate<NewuserComponent> {

    canDeactivate(component : NewuserComponent){
        if(component.newUserForm.dirty )
               return confirm("Are you sure to dicard unsaved changed?")
       else
          return true;
    }
}