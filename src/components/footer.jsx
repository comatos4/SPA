function Footer() {
    return <footer className="page-footer deep-orange lighten-2">
        <div className="container">
                <div className="row">
                <div className="col l6 s12">
                    <h5 className="white-text">SPA Project</h5>
                    <p className="grey-text text-lighten-4">The best site for us is here</p>
                </div>
                </div>
        </div>
        <div className="footer-copyright">
            <div className="container">
                © {new Date().getFullYear()} YanaVved
                <a className="grey-text text-lighten-4 right" href="!#">Repository</a>
            </div>
        </div>   
    </footer>
}
export { Footer };


