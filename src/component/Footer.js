import React from 'react';
import { Link } from 'react-router-dom';

import facebook from '../assests/fc.ico';
import instgram from '../assests/inst.png'
import twitter from '../assests/twit.ico'
import googleplay from '../assests/gp.png';
import microsoft from '../assests/mic.png';
import apple from '../assests/apple.png';

const footer = (props) => (

    <footer className='bg-dark w-100 py-4'>

		<div id='footer' className="scale">

			<ul className="">
				<li><Link to="/">Home</Link></li>
				<li><Link to="#">Term and Condition</Link></li>
				<li><Link to="#">Privacy Policy</Link></li>
				<li><Link to="#">Collection Statement</Link></li>
				<li><Link to="#">Help</Link></li>
				<li><Link to="#">Manage Account</Link></li>
			</ul>

			<span>Copyright &copy; 2008 DEMO Streaming. All Right Reserves </span><br />

			<div className='row mt-4 px-1 w-100' style={{display: 'inline-block'}}>

				<div className='float-left'> 
					<img width='15' className='img-fluid' src={facebook} alt='' />
					<img width='15' className='img-fluid' src={twitter} alt='' />
					<img width='15' className='img-fluid' src={instgram} alt='' />
				</div>
				
				<div className='col row float-right max300' >
					<div className='col'>
						<img className='img-fluid'  src={apple} alt='' />
					</div>
					<div className='col'>
						<img className='img-fluid'  src={googleplay} alt='' />
					</div>
					<div className='col'>
						<img className='img-fluid'  src={microsoft} alt='' />
					</div>
				</div>

			</div>
		</div>					
    </footer>
)

export default footer