import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';
import classes from './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

 class ContactData extends Component {
     state = {
         name: '',
         email: '',
         address: {
             street: '',
             postalCode: ''
         },
         loading: false
     }

    orderHandler = (event) => {
    event.preventDefault();
    this.setState( { loading: true } );
    const order = {
        ingredients: this.props.ingredients,
        price: this.props.price,
        customer: {
            name: 'Evyatar Haim',
            address: {
                street: 'Florentine',
                zipCode: '688502',
                country: 'Israel'
            },
            email: 'evisito@test.com'
        },
        deliveryMethod: 'fastest'
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
        <Input inputtype="input" type="email" name="email" placeholder="Your Email" />
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
