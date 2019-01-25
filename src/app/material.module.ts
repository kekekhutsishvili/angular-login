import {NgModule} from "@angular/core";
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatToolbarModule} from "@angular/material";

@NgModule({
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatToolbarModule],
  exports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatToolbarModule]
})
export class MaterialModule {

}
