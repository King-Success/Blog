import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchPaginatedArticles } from '../actions/index';
import { fetchSelectedArticle } from '../actions/index';
import { Link } from 'react-router';


/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class Index extends Component {
    componentWillMount() {
		this.props.fetchPaginatedArticles();
		// this.componentDidCatch.getPayload();
	}
	

    mapArticles() {
		return (
			this.props.paginatedArticles.data.map( article => {
				return (
					
					<div key={ article.id } className="column width-10 offset-1 content-inner blog-regular list">
						<Link onClick={ () => this.props.fetchSelectedArticle(article.id) } to="/show" >
						<article className="post post-1-1">
							<div className="post-content with-background">
								<h2 className="post-title">{ article.title }</h2>
									<div className="post-info">
										<span className="post-tags"><span><a href="#" className="post-tag label small rounded bkg-charcoal color-white bkg-hover-charcoal bkg-hover-white">{ article.category.name }</a></span></span><span className="post-tag label small rounded border-pink color-pink bkg-hover-pink bkg-hover-white">{ article.created_at}</span>
									</div>
							</div>
						</article>
						</Link>
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
                <div className="column width-1 offset-6 content-inner blog-regular list">Loading...</div>
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
											{ this.props.paginatedArticles.prev_page_url ? <li><a onClick={ () => {this.props.fetchPaginatedArticles(this.props.paginatedArticles.prev_page_url)}} className="pagination-previous icon-left-open" href="#" >Prev</a></li> : <li pagination-previous icon-left-open>Page 1 of {this.props.paginated}</li> }

											
											
											<li><a onClick={ () => {this.props.fetchPaginatedArticles(this.props.paginatedArticles.next_page_url)}} className="pagination-next icon-left-open" href="#">Older</a></li>
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
	console.log(state);
    return {
        paginatedArticles: state.paginatedArticles.data
    };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		fetchPaginatedArticles: fetchPaginatedArticles,
		fetchSelectedArticle: fetchSelectedArticle,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
