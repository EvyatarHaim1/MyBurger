import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';
import classes from './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

 class ContactData extends Component {
     state = {
         orderForm: {
                name: {
                    elementType:'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Your Name'
                    },
                    value: '',
                },
                street:  {
                    elementType:'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Street'
                    },
                    value: '',
                },
                zipCode:  {
                    elementType:'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'ZIP Code'
                    },
                    value: '',
                },
                country:  {
                    elementType:'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Country'
                    },
                    value: '',
                },
                email:  {
                    elementType:'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: 'Email'
                    },
                    value: '',
                },
                deliveryMethod:  {
                    elementType:'select',
                    elementConfig: {
                        options: [{value: 'fastest', displayValue: 'Fastest'},
                                  {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                    },
         }
        },
         loading: false
     }

    orderHandler = (event) => {
    event.preventDefault();
    this.setState( { loading: true } );
    const order = {
        ingredients: this.props.ingredients,
        price: this.props.price,
    }
    axios.post( '/orders.json', order )
        .then( response => {
            this.setState( { loading: false } );
            this.props.history.push('/');
        } )
        .catch( error => {
            this.setState( { loading: false} );
        } );
    }

    render() {
      let form = (
        <form>
        <Input elementType="" elementConfig="" value="" />
        <Input inputtype="input" type="email" name="street" placeholder="Street" />
        <Input inputtype="input" type="email" name="postal" placeholder="Postal Code" />
        <Input inputtype="input" type="text" name="name" placeholder="Your Name" />
        <Button btnType="Success" clicked={this.orderHandler}> ORDER </Button>
    </form>
      );
      if(this.state.loading){
          form = <Spinner />
      }
        return (
            <div className={classes.ContactData}>
                <h4> Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;
