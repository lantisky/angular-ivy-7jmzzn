import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  public setToFocus() {
    // 1:
    document.getElementById("").focus;
  }

  // 2:
  fatherRef = {
    gender: "male",
    fatherRef: "Mr."
  };
  motherRef = {
    gender: "female",
    motherRef: "Mrs."
  };
  autoFillGuardianDet(Obj) {
    var varName;
    if (Obj.gender == "male") {
      varName = "fatherRef";
    } else if (Obj.gender == "female") {
      varName = "motherRef";
    }
    return Object[varName];
  }

  // 3: boolean(0) return false
  p = 0;

  // 4: display style block Jquery
  toggleDiv(id) {
    var el = document.getElementById(id);
    if (el.style.display == "block") el.style.display = "none";
    else el.style.display = "block";
  }

  //5: window.open
  getHelpWindow() {
    var helpWindow = window.open("", "helpWindow", "width=250, height=100");
    helpWindow.document.write("<p>Help Text</p>");
  }

  // 6: navigate to previous page
  goToPrvsPage() {
    window.history.back();
  }
  // 7: function logic testing
  
}
