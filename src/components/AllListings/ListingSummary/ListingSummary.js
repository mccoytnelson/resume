import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ListingSummary.css'
class Listing extends Component {
    render() {
        let { listing } = this.props
        return (
            <div className='innerListing'> 
            <div className='innerInnerListing'>
                <div className='topInfo'> 
                    <div className='topInfoInner'>{listing.position}</div>
                    <div className='topInfoInner'>{listing.location}</div>
                    <div className='topInfoInner'>{listing.company_name}</div>
                </div>
                <div className='listingDescription'>Description: {listing.description}</div>
                </div>
                <div className='listingRightSide'>
                    <div className='timeStamp'>{listing.timestamp.slice(0, 10)}</div>
                    <Link  to={`/listings/apply/${listing.listing_id}`}><button className='fillAppButton'>Apply</button></Link>
                </div>
            </div>
        )
    }
}
export default Listing;
