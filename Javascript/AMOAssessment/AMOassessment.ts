let { Component, NgModule } = ng.core;

@Component({
  selector: 'my-app',
  template: `
  	<h3>AMO TEST</h3>
  	<p>Modify this jsfiddle by adding a button to the template. Every time you click the button it prints a number inside the button starting from 1 and increments on every click up 100. For multiples of three print “American” instead of the number and for the multiples of five print “Medical”. For numbers which are multiples of both three and five print “Opportunities”.</p>
   	 <div class="center"> 
     <button (click)="buttonPress()" class="myButton">  {{title}}
    	</button>
    <p> current counter : {{counter}} </p>
    </div>
  `,
})
class HomeComponent {
		counter = 0;
    title = "Click Me!"
    
    increment() {
    	// instructions:  Every time you click the button it prints a number inside the button starting from 1 and increments on every click up 100
    	this.counter += 100;
    }
    
    editCounter(){
    	if ( this.counter % 3 === 0 && this.counter % 5 === 0) {
      	this.title = "Opportunities"
      } else if ( this.counter % 3 === 0 ){
      	this.title = "American"
      } else if (this.counter % 5 === 0 ){
      	this.title = "Medical"
      } else {
      	this.title = this.counter
      }
    }
    
    buttonPress(){
    	
      this.increment()
      this.editCounter()
    }
}

const { BrowserModule } = ng.platformBrowser;

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ HomeComponent ],
  bootstrap:    [ HomeComponent ]
})
class AppModule { }

const { platformBrowserDynamic } = ng.platformBrowserDynamic;
platformBrowserDynamic().bootstrapModule(AppModule);