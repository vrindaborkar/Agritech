import React from "react";
import { Link } from "react-router-dom";
import '../styles/Footer.css'
import { BsFacebook } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"
import { FaLinkedin } from "react-icons/fa"

const Footer = () => {
	return (
		// <div className="Box">
		// 	`<div className="Container">
		// 		<div className="row">
		// 			<div className="Column">
		// 				<p className="Heading" style={{marginLeft: '1rem'}}>Wingrow Agritech</p>
		// 				<Link className="FooterLink" to="#" style={{ marginLeft: '1rem' }}>Wingrow Agritech Producer Company Ltd., Sn 637,b/2, Omkarnagar, Pmt colony, Pokale Wasti, Bibwewadi, Pune-411037
		// 				</Link>
		// 				<Link className="FooterLink" to="mailto:connect@wingrowagritech.com" style={{ marginLeft: '1rem' }}>connect@wingrowagritech.com</Link>
		// 				<Link className="FooterLink" to="#" style={{ marginLeft: '1rem' }}>+91 777 600 3700</Link>


		// 			</div>
		// 			<div className="Column">
		// 				<p className="Heading">Services</p>
		// 				<Link className="FooterLink" to="/home">Home</Link>
		// 				{/* <Link className="FooterLink" to="/customers">Customers</Link> */}
		// 				<Link className="FooterLink" to="/home/farmers">Farmers</Link>
		// 				{/* <Link className="FooterLink" to="/register">Register</Link> */}
		// 				{/* <Link className="FooterLink" to="/cart">Cart</Link> */}
		// 				<Link className="FooterLink" to="/home/farmers/">Stall Bookings</Link>



		// 			</div>
		// 			<div className="Column">
		// 				<div className="condiv">
		// 				<p className="Heading">Contact Us</p>
		// 				</div>
		// 				<a className="FooterLink" href="mailto:connect@wingrowagritech.com">Contact </a>
		// 				<Link className="FooterLink" to="/home/customers">Customers</Link>

		// 			</div>

		// 			<div className="Column">
		// 				<p className="Heading">Legal</p>
		// 				<Link className="FooterLink" to="/home/terms">Terms and Conditions </Link>
		// 			</div>

		// 			<div className="Column">
		// 				<p className="Heading" >Social Media</p>
		// 				<a className="FooterLink" href="https://www.facebook.com/Wingrow-Agritech-Producer-Company-Limited-4">
		// 					<BsFacebook />
		// 					<span style={{ marginLeft: "10px" }}>
		// 						Facebook
		// 					</span>
		// 				</a>
		// 				<a className="FooterLink" href="https://instagram.com/wingrowagritech?utm_medium=copy_link">
		// 					<RiInstagramFill />
		// 					<span style={{ marginLeft: "10px" }}>
		// 						Instagram
		// 					</span>
		// 				</a>
		// 				<a className="FooterLink" href="https://www.linkedin.com/company/31488381">
		// 					<FaLinkedin />
		// 					<span style={{ marginLeft: "10px" }}>
		// 						Linkedin
		// 					</span>
		// 				</a>
		// 			</div>
		// 		</div>
		// 	</div>

		// 	<div style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', marginBottom: '0.5rem', textAlign: 'center', padding: "4px", color: 'white', fontWeight: 'bolder' }}>
		// 		&copy; 2023 Copyright:
		// 		<a style={{ fontWeight: "bolder", color: 'white' }} href='https://www.wingrowagritech.com/'>
		// 			Wingrow Agritech.  All rights reserved.
		// 		</a>
		// 	</div>
		
		//new footer
		<div>
		<footer class="footer-distributed">
		
					<div class="footer-left">
		
						<h3>Wingrow<span>Market</span></h3>
		
						<p class="footer-links">
							<a href="/home" class="link-1">Home</a>
							
							<a href="/customers">Customers</a>
						
							<a href="/home/farmers">Farmers</a>
						
							<a href="/register">Register</a>
							
							<a href="/cart">Cart</a>
							
							<a href="/home/farmers/">Stall Bookings</a>
						</p>
		
						<p class="footer-company-name">Wingrow Agritech.  All rights reserved.</p>
					</div>
		
					<div class="footer-center">
		
						<div>
							<i class="fa fa-map-marker"></i>
							<p><span>Wingrow Agritech Producer Company Ltd., </span> Sn 637,b/2, Omkarnagar, Pmt colony, Pokale Wasti, Bibwewadi, Pune-411037</p>
						</div>
		
						<div>
							<i class="fa fa-phone"></i>
							<p>+91 777 600 3700</p>
						</div>
		
						<div>
							<i class="fa fa-envelope"></i>
							<p><a href="mailto:support@company.com">connect@wingrowagritech.com</a></p>
						</div>
		
					</div>
		
					<div class="footer-right">
		
						<p class="footer-company-about">
							<span>About the company</span>
							We at Wingrow Agritech facilitate direct interaction between consumers and farmers. Consumers get access to produce direct from farms which is much fresher and lasts longer, at reasonable prices.
						</p>
		
						<div class="footer-icons">
		
							<a href="https://www.facebook.com/Wingrow-Agritech-Producer-Company-Limited-4"><i class="fa fa-facebook"></i></a>
							<a href="https://instagram.com/wingrowagritech?utm_medium=copy_link"><i class="fa fa-instagram"></i></a>
							<a href="https://www.linkedin.com/company/31488381"><i class="fa fa-linkedin"></i></a>
							<a href="#"><i class="fa fa-github"></i></a>
		
						</div>
		
					</div>
		
				</footer>
				</div>
	);
};
export default Footer;
