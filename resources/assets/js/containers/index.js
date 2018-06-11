import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchPaginatedArticles } from '../actions/index';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class Index extends Component {
    componentWillMount() {
        this.props.fetchPaginatedArticles();
    }

    mapArticles() {
		return (
			this.props.paginatedArticles.map( article => {
				return (
					<div key={ article.id } className="column width-10 offset-1 content-inner blog-regular list">
							<article className="post post-1-1">
								<div className="post-content with-background">
									<h2 className="post-title"><a href="blog-single-post-sidebar-right.html">{ article.title }</a></h2>
									<div className="post-info">
										<span className="post-date">{ article.created_at}</span>, in <span className="post-category"><a href="#">{ article.category.name }</a></span>, <span className="post-tags"><span><a href="#" className="post-tag label small rounded bkg-charcoal color-white bkg-hover-charcoal bkg-hover-white">Review</a></span></span>
									</div>
									<a href="#" className="read-more">Read More →</a>
								</div>
							</article>
					</div>
				);
			})
		);
	}

    render() {
    // While component mounts, this.props.paginatedArticles is null, so this if block catches that until there is 
    // something to show for.
        if(!this.props.paginatedArticles) {
            return (
                <div>Loading...</div>
            );
        }
        
        return (
           <div className="wrapper reveal-side-navigation">
					<div className="wrapper-inner">

						{/* <!-- Header --> */}
						<header className="header header-relative header-fixed-on-mobile nav-dark" data-bkg-threshold="100" data-sticky-threshold="0">
							<div className="header-inner">
								<div className="row nav-bar">
									<div className="column width-12 nav-bar-inner">
										<div className="logo">
											<div className="logo-inner">
												<a href="index.html"><img src="images/logo-dark.png" alt="Faulkner Logo" /></a>
												<a href="index.html"><img src="images/logo.png" alt="Faulkner Logo" /></a>
											</div>
										</div>
										<nav className="navigation nav-block primary-navigation nav-right sub-menu-indicator">
											<ul>
												<li>
													<a href="index.html">Demos</a>
												</li>
											</ul>
										</nav>
									</div>
								</div>
							</div>
						</header>
						{/* <!-- Header End --> */}

						{/* <!-- Content --> */}
						<div className="content clearfix">
							<div className="section-block clearfix pt-0 pb-0 bkg-grey-ultralight">
								<div className="row">

									{/* <!-- Content Inner --> */}
										{ this.mapArticles() } 
									{/* <!-- Content Inner End --> */}

								</div>
							</div>
							
							{/* <!-- Pagination Section 3 --> */}
							<div className="section-block pagination-3 bkg-grey-ultralight">
								<div className="row">
									<div className="column width-10 offset-1">
										<ul>
											<li><a className="pagination-previous icon-left-open" href="#">Older</a></li>
											<li><a className="current" href="#">1</a></li>
											<li><a href="#">2</a></li>
											<li><a href="#">3</a></li>
											<li><a href="#">4</a></li>
											<li><a href="#">5</a></li>
											<li><a className="pagination-next disabled" href="#">Newer</a></li>
										</ul>
									</div>
								</div>
							</div>
							{/* <!-- Pagination Section 3 End --> */}

						</div>
						{/* <!-- Content End --> */}

						{/* <!-- Footer --> */}
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
						{/* <!-- Footer End --> */}

					</div>
				</div>
        );
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        paginatedArticles: state.paginatedArticles.data
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchPaginatedArticles: fetchPaginatedArticles}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
