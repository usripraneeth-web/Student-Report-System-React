import { createContext, useContext, useEffect, useState } from 'react'
const StoreContext = createContext(null)
const read = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) ?? fallback } catch { return fallback } }
export function StoreProvider({ children }) {
  const [users, setUsers] = useState(() => read('registeredUsers', []))
  const [students, setStudents] = useState(() => read('studentReports', []))
  const [session, setSession] = useState(() => read('currentSession', null))
  useEffect(() => localStorage.setItem('registeredUsers', JSON.stringify(users)), [users])
  useEffect(() => localStorage.setItem('studentReports', JSON.stringify(students)), [students])
  useEffect(() => { if (session) localStorage.setItem('currentSession', JSON.stringify(session)); else localStorage.removeItem('currentSession') }, [session])
  return <StoreContext.Provider value={{ users, setUsers, students, setStudents, session, setSession }}>{children}</StoreContext.Provider>
}
export const useStore = () => useContext(StoreContext)
export const gradeFor = n => n >= 90 ? 'A+' : n >= 80 ? 'A' : n >= 70 ? 'B' : n >= 60 ? 'C' : n >= 50 ? 'D' : 'F'
