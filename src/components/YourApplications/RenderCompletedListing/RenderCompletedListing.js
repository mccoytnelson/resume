import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import { connect } from 'react-redux'
class RenderCompletedListing extends Component {
    constructor() {
        super()
        this.state = {
            listing: {},
            upload: false
        }
    }
    async componentDidMount() {
        let res = await axios.get(`/retrieve/completed/${this.props.listing.listing_id}`)
        this.setState({ listing: res.data })
    }
    render() {
        let { listing} = this.state
        return (
            <div>
                <div>Position: {listing.position}</div>
                <div>Location: {listing.location}</div>
                <div>Company Name: {listing.company_name}</div>
                <div>Company Summary: {listing.company_summary}</div>
                <div>Description: {listing.description}</div>
                <Link to={`/completed-application/${this.props.listing.completed_id}`}><button>See Completed Application</button></Link>
                <button onClick={()=>{this.props.deleteListing(this.props.listing.completed_id)}}>Delete Listing</button>
                <hr />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { ...state }
}
export default connect(mapStateToProps)(RenderCompletedListing);