import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import userService from '../../utils/userService';


class MyRecipesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleChange = (field, e) => {
    this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    userService.login(this.state)
      .then(() => {
        this.props.history.push('/recipes');
      })
  }

  render() {
        return (
            <div>
            <header className="header-footer">Create Your Recipe</header>
                <div className='MyRecipesForm'>
                    <form>
                        <label>
                            Recipe Name:
                            <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <br />
                        <label>
                            Which SnoBar product did you use?
                            <select value={this.state.value} onChange={this.handleChange}>
                                <option value="chocolate">Chocolate</option>
                                <option value="mango">Mango</option>
                                <option value="vanilla">Vanilla</option>
                                <option value="rootbeer">Root Beer</option>
                                <option value="blackcherry">Black Cherry</option>
                            </select>
                        </label>
                        <br />
                        <label>
                            Tell us about your recipe:
                            <textarea value={this.state.value} onChange={this.handleChange} />
                        </label>          
                        <div className="form-group">
                            <div className="col-sm-12 text-center">
                            <button className="btn submit-btn-default">Submit</button>&nbsp;&nbsp;&nbsp;
                            <Link to='/'>Cancel</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


export default MyRecipesForm;