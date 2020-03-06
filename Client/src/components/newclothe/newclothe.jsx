import React from 'react';

export default class FormClothe extends React.Component {

    updateForm(e, field) {
        this.setState({
            ...this.state,
            [field]: e.target.value
        });
    }

    sendForm(e) {
        e.preventDefault();
        // console.log(this.state)
        this.props.addChlotes(this.state)
        this.setState({
            category: "",
            storm: false,
            wind: false,
            type: "",
            image: "",
        })
    }

    render() {
        return (
            <div>
                <form>
                    <label for="category">Choose a category:</label>
                    <select id="category">
                        <option value="soleado">Soleado</option>
                        <option value="medio">Medio</option>
                        <option value="frio">Frio</option>

                    </select>
                    <label for="storm">Impermeable:</label>
                    <select id="storm">
                        <option value="true">Si</option>
                        <option value="false">no</option>

                    </select>
                    <label for="wind">Cortavientos:</label>
                    <select id="wind">
                        <option value="true">Si</option>
                        <option value="false">no</option>

                    </select>

                    <label for="type">Outfit:</label>
                    <select id="type">
                        <option value="sportwear">Deportiva</option>
                        <option value="casual">Casual</option>
                        <option value="formal">Formal</option>
                        <option value="workwear">Ropa de trabajo</option>

                    </select>

                    <input
                        type="text"
                        placeholder="image"
                        value={this.props.image}
                        onChange={e => this.updateForm(e, "image")}
                    />
                    <input type="submit" value={"Send form"} onClick={e => this.sendForm(e)} />


                </form>
            </div>
        )
    }
}