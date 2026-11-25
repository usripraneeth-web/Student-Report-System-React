import { useState } from 'react'
import { StoreProvider, useStore } from './context/Storage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import AdminDashboard from './pages/AdminDashboard'
import StudentDashboard from './pages/StudentDashboard'
function Root(){const {session}=useStore();const [page,setPage]=useState('login');if(session?.role==='admin')return <AdminDashboard/>;if(session?.role==='student')return <StudentDashboard/>;return page==='signup'?<Signup onBack={()=>setPage('login')}/>:<Login onSignup={()=>setPage('signup')}/>}
export default function App(){return <StoreProvider><Root/></StoreProvider>}
