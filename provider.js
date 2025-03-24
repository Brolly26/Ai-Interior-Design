"use client"
import { useUser } from '@clerk/nextjs'
import React, { useEffect } from 'react'

function Provider({children}) {
    const {user} =  useUser();
    useEffect(()=>{
        user&&VerifyUser();
    },[user])
  /**
   * Verficar usuário
   */
    const VerifyUser = () =>{

    }

    return (
    <div>
      {children}
    </div>
  )
}

export default Provider
