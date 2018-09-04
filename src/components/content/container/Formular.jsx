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
    render() {
        // TODO: styles in scss
        return (
            <div className="content__card" style={{ marginTop: '15px' }}>
                <h2>Du willst eine Site für deine Firma hinzufügen ?</h2>
                <p>geb hier die Daten deiner Site und deines Unternehmens an</p>
                <Input
                    value={this.state.name}
                    placeholder="Name *"
                    style={{ width: '100%' }}
                    responsive
                    onChange={(value) => {
                        this.setState({ name: value });
                    }}
                />
                <Input
                    value={this.state.url}
                    placeholder="Url *"
                    style={{ width: '100%' }}
                    responsive
                    onChange={(value) => {
                        this.setState({ url: value });
                    }}
                />
                <Input
                    value={this.state.facebook}
                    placeholder="Facebook"
                    style={{ width: '100%' }}
                    responsive
                    onChange={(value) => {
                        this.setState({ facebook: value });
                    }}
                />
                <Input
                    value={this.state.adress}
                    placeholder="Straße/Hr."
                    style={{ width: '100%' }}
                    responsive
                    onChange={(value) => {
                        this.setState({ adress: value });
                    }}
                />
                    {/* TODO: regExp={} für plz/Ort einfügen  */}
                <Input
                    value={this.state.location}
                    placeholder="PLZ/Ort"
                    style={{ width: '100%' }}
                    responsive
                    onChange={(value) => {
                        this.setState({ location: value });
                    }}
                />
                <div style={{ textAlign: 'center', marginTop: '100px' }}>
                    <Button
                        disabled={this.state.name === '' || this.state.url === ''}
                        onClick={() => {
                            chayns.intercom.sendMessageToPage({
                                // TODO: ES6-Syntax strings
                                text: `Neue Site : ${this.state.name} , ${this.state.url} , ${this.state.facebook} , ${this.state.adress} , ${this.state.location}`
                            });
                            this.setState({ name: '' });
                            this.setState({ url: '' });
                            this.setState({ facebook: '' });
                            this.setState({ adress: '' });
                            this.setState({ location: '' });
                        }}
                    >
                        Site hinzufügen
                    </Button>
                </div>
            </div>
        );
    }
}
