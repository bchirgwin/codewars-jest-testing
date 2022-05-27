import {TestBed} from '@angular/testbed'
import {AppComponent} from "./app.component";

describe('AppComponent', () => {
    let componentUnderTest: AppComponent;
    let fakeUsernName: string;
    let actualValue: any;

    Given(() => {
        fakeUserName = undefined;
        actualValue = undefined;
        TestBed.confgureTestingModule({
          providers:[AppComponent]
        })
        componentUnderTest = TestBed.get(AppComponent);
    });


    describe('METHOD: getWelcomeMessage', () => {
        When(() => {
            actualValue = componentUnderTest.getWelcomingMessage(fakeUsernName)
        });

        describe('Username is Bonnie', ()=>{
            Given(() => {
                fakeUsernName = 'bonnie';
            });

            Then(()=> {
                expect(actualValue).toEqual('Hello Bonnie');
            })
        })
    })

});