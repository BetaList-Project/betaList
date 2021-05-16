// this component contains the page that is shown when you click on REGIONS from the navigation bar

import './Regions.css';
import { REGIONS } from './regionData'; // load hard coded REGIONS data

const Regions = () => {
	return (
		<div>
			<header>
                <h1 className='headerTitle'>Regions</h1>
                <h2 className='headerSubtitle'>BROWSE STARTUPS BY COUNTRY</h2>
			</header>
			<section>
				<ul>
					{
                        // this code goes through each region in REGIONS array and creates what you see on the page for each region.
                        REGIONS.map(regionObject => {
                            return (
                                <li className='regionGroup'>
                                    <span className='regionName'>{regionObject.regionName}</span>
                                    <br/>
                                    <br/>
                                    <div className='regionDeck'>
                                        { regionObject.countries.map(countryObject =>
                                            (<a className='region__countryTag' href={`/regions/${countryObject.name}`}>
                                                <span className='region__countryFlag' role="img">{countryObject.flag}</span>
                                                {countryObject.name}
                                            </a>))
                                        }
                                    </div>
                                </li>
                            );
                        })
					}
				</ul>
			</section>
		</div>
	)
};

export default Regions;
