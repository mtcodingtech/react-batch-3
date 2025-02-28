import React from 'react'
import { data } from '../data'
import Place from './Place'

function Places() {
  return (
    <>
        {
            data.map((place, index) => {
                return (
                    <React.Fragment key={index}>
                        <Place place={place} />
                    </React.Fragment>
                )
            })
        }
    </>
  )
}

export default Places