import Brand from './Brand'
export default function Sidebar({ role, active, onNavigate, onLogout }) {
 const items = role === 'admin' ? ['Dashboard','Students','Reports','Performance','Settings'] : ['Dashboard','My Report','Performance','Profile']
 return <aside className="sidebar"><div className="sidebar-header"><Brand subtitle={role === 'admin' ? 'Admin Panel' : 'Student Panel'} /></div><nav className="sidebar-nav">{items.map(x=><button key={x} className={`nav-item ${active===x?'active':''}`} onClick={()=>onNavigate(x)}>{x}</button>)}</nav><div className="sidebar-footer"><button className="logout-btn" onClick={onLogout}>Logout</button></div></aside>
}
