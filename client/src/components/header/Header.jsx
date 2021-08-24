import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSmall">React & Node</span>
                <span className="headerTitleLarge">Blog</span>
                <img className="headerImage" src="https://images.pexels.com/photos/4467734/pexels-photo-4467734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="blog"/>
            </div>
        </div>
    )
}