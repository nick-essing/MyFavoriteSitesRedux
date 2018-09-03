import React from 'react';
import { Input } from 'chayns-components';
import { Button } from 'chayns-components';

export default class Formular extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            url: '',
            facebook: '',
            adress: '',
            location: ''
        };
    }
    render(){
        return(
            <div className= "content__card" style={{marginTop: 15 + 'px'}}>
                <h2>Du willst eine Site für deine Firma hinzufügen ?</h2>
                <p>geb hier die Daten deiner Site und deines Unternehmens an</p>
                <Input value={this.state.name} placeholder="Name *" style={{width: 100 + '%'}}responsive
                    onChange={(value)=>{
                    this.setState({name: value})
                }}/>
                <Input value={this.state.url}placeholder="Url *" style={{width: 100 + '%'}}responsive
                    onChange={(value)=>{
                    this.setState({url: value})
                }}/>
                <Input value={this.state.facebook}placeholder="Facebook" style={{width: 100 + '%'}}responsive
                onChange={(value)=>{
                    this.setState({facebook: value})
                }}/>
                <Input value={this.state.adress}placeholder="Straße/Hr." style={{width: 100 + '%'}}responsive
                onChange={(value)=>{
                    this.setState({adress: value})
                }}/>
                <Input value={this.state.location}placeholder="PLZ/Ort" style={{width: 100 + '%'}}responsive
                onChange={(value)=>{
                    this.setState({location: value})
                }}/>
                <div style={{textAlign: 'center', marginTop: 10 +'px'}}>
                    <Button id= "sendNow" onClick={()=>{
                         if (this.state.name !== '' && this.state.url !== '') {
                            chayns.intercom.sendMessageToPage({  
                                text:"Neue Site : "+ this.state.name +", "+ this.state.url +", "+ this.state.facebook +", "+ this.state.adress +", "+ this.state.location
                            });
                            this.setState({name: ''});
                            this.setState({url: ''});
                            this.setState({facebook: ''});
                            this.setState({adress: ''});
                            this.setState({location: ''});

                        } else {
                            chayns.dialog.alert('Fehler', 'Bitte fülle die Plichtfelder aus.');
                        } 
                    }}
                    >Site hinzufügen</Button>
                </div>
            </div>
        );
    }
}
