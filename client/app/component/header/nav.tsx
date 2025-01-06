import './nav.css';

export default function Nav() {
    return (
        <nav className="nav">
            <ul className='nav-logo'>
                <li><a href="/">Logo</a></li>
            </ul>
            <ul className='nav-content'>
                <li><a href="/rank">랭킹</a></li>
                <li><a href="/best">Best</a></li>
                <li><a href="/new">New</a></li>
                <li><a href="/discount">할인</a></li>
                <li><a href="/top">상의</a></li>
                <li><a href="/bottom">하의</a></li>
                <li><a href="/outer">아우터</a></li>
                <li><a href="/pants">팬츠</a></li>
                <li><a href="/acc">ACC</a></li>
                <li><a href="/inner">이너웨어</a></li>
            </ul>
            <ul className='nav-profile'>
                <li><a href='/profile'>내 정보</a></li>
            </ul>
        </nav>
    );
}
