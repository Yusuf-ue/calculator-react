export default function Navbar () {
    return ( 
        <nav className="nav">
            <a href="/" className="site-title"> Calculators</a>
            <ul>
                <CustomLink href="/Basic%20Calculator-link"> Basic Calculator</CustomLink>
                <CustomLink href="/BMI%20Calculator-link"> BMI Calculator</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink ({href, children, ...props}) {
    const path = window.location.pathname 
    return (
        <li className={path === href ? "active" : ""}>
          <a href={href} {...props}> {children} </a>
        </li>
    )
}

