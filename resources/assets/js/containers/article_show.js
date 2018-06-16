import React, {Component} from 'react';
import {connect} from 'react-redux';

class Index extends Component {

    render() {

        // if(!this.props.props.selectedArticle.body) {
        //     return (
        //         <div>Loading...</div>
        //     );
        // }
        
        return (
            <div>
            {/*  Header */}
               <header className="header header-relative header-fixed-on-mobile nav-dark" data-bkg-threshold="100" data-sticky-threshold="0">
							<div className="header-inner">
								<div className="row nav-bar">
									<div className="column width-12 nav-bar-inner">
										<div className="logo">
											<div className="logo-inner">
												<img src="images/logo-dark.png" alt="Faulkner Logo" />
												{/* <img src="images/logo.png" alt="Faulkner Logo" /> */}
											</div>
										</div>
										<nav className="navigation nav-block primary-navigation nav-right sub-menu-indicator">
											<ul>
												<li>
													<a href="">Demos</a>
												</li>
											</ul>
										</nav>
									</div>
								</div>
							</div>
						</header>
            {/* Header End */}
			
			{/* Content */}
                <div className="content clearfix">
                    <div className="section-block clearfix pt-0 pb-0 bkg-grey-ultralight">
                        <div className="row">
                            {/* <!-- Content Inner --> */}
                            <div className="column width-10 offset-1 content-inner blog-single-post">
                                <article className="post">
                                    <div className="post-content with-background">
                                        <h2 className="post-title center">{ this.props.selectedArticle.title }</h2>
                                        <div className="post-info center">
											<span className="post-tags"><span><a href="#" className="post-tag label small rounded border-pink color-pink bkg-hover-pink bkg-hover-white">{ this.props.selectedArticle.category }</a></span></span>
                                        </div>
                                        <div className="post-media thumbnail">
                                            <img src="images/blog/regular/image-regular-3.jpg" alt=""/>
                                        </div>

                                        <p>
											{ this.props.selectedArticle.body }
										</p>
                                        <div className="post-author">
                                            <div className="row">
                                                <div className="column width-12">
                                                    <div className="author-bio">
                                                        <div className="author-avatar clear-float">
                                                            <img src="images/blog/bio-avatar.jpg" alt="Avatar"/>
                                                        </div>
                                                        <div className="author-content">
                                                            <div className="row">
                                                                <div className="column width-12">
                                                                    <div className="name">by <a href="#">John Adams</a></div>
                                                                    <p className="author-title">WordPress Evangelist, JS Guru and Beer Lover</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>

                                    {/* Post Comments  */}
                                <div className="post-comments with-background">
								<h3 className="comments-title">3 Comments</h3>
								<div className="comments">
									<ul className="comment-list">
										<li>
											<article className="comment">
												<div className="user-avatar">
													<img src="images/blog/comment-avatar.jpg" alt="Avatar"/>
												</div>
												<div className="comment-content">
													<h5 className="name">John Andersson</h5>
													<div className="comment-meta">
														<span className="post-date">17 Jul 2015</span>/<a href="#" className="comment-reply-link">Reply</a>            
													</div>
													<p>Whistler Mountain is a mountain in the Fitzsimmons Range of the Pacific Ranges of the Coast Mountains, located on the northwestern.</p>
												</div>
											</article>
											<ul>
												<li>
													<article className="comment">
														<div className="user-avatar">
															<img src="images/blog/comment-avatar-3.jpg" alt="Avatar"/>
														</div>
														<div className="comment-content">
															<h5 className="name">Emma Courtier</h5>
															<div className="comment-meta">
																<span className="post-date">23 Jul 2015</span>/<a href="#" className="comment-reply-link">Reply</a>            
															</div>
															<p>Whistler Mountain is a mountain in the Fitzsimmons Range of the Pacific Ranges of the Coast Mountains, located on the northwestern.</p>
														</div>
													</article>
												</li>
											</ul>
										</li>
										<li>
											<article className="comment">
												<div className="user-avatar">
													<img src="images/blog/comment-avatar-2.jpg" alt="Avatar"/>
												</div>
												<div className="comment-content">
													<h5 className="name">Michael Cunningham</h5>
													<div className="comment-meta">
														<span className="post-date">24 Jul 2015</span>/<a href="#" className="comment-reply-link">Reply</a>            
													</div>
													<p>Whistler Mountain is a mountain in the Fitzsimmons Range of the Pacific Ranges of the Coast Mountains, located on the northwestern.</p>
												</div>
											</article>
										</li>
									</ul>
								</div>
							</div>

                                <div className="post-comment-respond with-background pad-comment">
								<h3 className="reply-title">Leave a Comment</h3>
								<form className="comment-form" action="#" method="post" novalidate>
									<div className="row">
										<div className="column width-8">
											<input type="text" name="fname" className="form-name form-element rounded" placeholder="Name*" tabindex="1" required/>
										</div>
										<div className="column width-8">
											<input type="email" name="email" className="form-email form-element rounded" placeholder="Email*" tabindex="3" required/>
										</div>
										<div className="column width-8">
											<input type="text" name="website" className="form-website form-element rounded" placeholder="Website" tabindex="4"/>
										</div>
										<div className="column width-6">
											<input type="text" name="honeypot" className="form-honeypot form-element rounded"/>
										</div>
									</div>
									<div className="row">
										<div className="column width-12">
											<textarea name="message" className="form-message form-element rounded" placeholder="Message*" tabindex="5" required></textarea>
											<input type="submit" value="Post Comment" className="form-submit button rounded medium bkg-green bkg-hover-green color-white color-hover-white no-margin-bottom"/>
										</div>
									</div>
								</form>
							</div>  
                            </div>
                            {/* Content Inner End */}

                        </div>
                    </div>
                </div>

                {/* Content End */}

                {/* Footer  */}
                 <footer className="footer footer-light with-border">
				<div className="footer-top">
					<div className="row flex">
						<div className="column width-9">
							<div className="row two-columns-on-tablet">
								<div className="column width-3">
									<div className="widget">
										<h3 className="widget-title mb-30">Product</h3>
										<ul>
											<li><a href="#">About us</a></li>
											<li><a href="#">Careers</a></li>
											<li><a href="#">Press</a></li>
										</ul>
									</div>
								</div>
								<div className="column width-3">
									<div className="widget">
										<h3 className="widget-title mb-30">Company</h3>
										<ul>
											<li><a href="#">Overview</a></li>
											<li><a href="#">Features</a></li>
											<li><a href="#">Pricing</a></li>
										</ul>
									</div>
								</div>
								<div className="column width-3">
									<div className="widget">
										<h3 className="widget-title mb-30">Resources</h3>
										<ul>
											<li><a href="#">News</a></li>
											<li><a href="#">Documentation</a></li>
											<li><a href="#">Faq</a></li>
										</ul>
									</div>
								</div>
								<div className="column width-3">
									<div className="widget">
										<h3 className="widget-title mb-30">Contact</h3>
										<ul>
											<li><a href="#">Email us</a></li>
											<li><a href="#">Tweet Faulkner</a></li>
											<li><a href="#">Visit the office</a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="column width-3">
							<div className="widget right left-on-mobile">
								<div className="footer-logo">
									<a href="index.html"><img src="images/logo-dark.png" alt="Faulkner Logo" /></a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-bottom">
					<div className="row">
						<div className="column width-12">
							<div className="footer-bottom-inner">
								<p className="copyright pull-left clear-float-on-mobile">&copy; ThemeMountain. All Rights Reserved.</p> <a href="#" className="scroll-to-top pull-right clear-on-mobile" data-no-hide>Back Top</a>
							</div>
						</div>
					</div>
				</div>
			</footer> 
                 {/* Footer End  */}
            </div>
           
        );
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
	console.log(state.selectedArticle)
    return {
        selectedArticle: state.selectedArticle
    };
}


export default connect(mapStateToProps)(Index);
